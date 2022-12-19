/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const { program } = require('commander');

// eslint-disable-next-line no-promise-executor-return
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

program
  .name('')
  .requiredOption('-s, --source <existing version>', 'a source version to clone from is required')
  .requiredOption('-t, --target <new version>', 'a new version is required');

program.parse();
const options = program.opts();

const friendlyLog = async (logMessage) => {
  console.log(' ');
  console.log(logMessage);
  await delay(200);
};

const assertFolder = (fullPath, exists) => {
  if (fs.existsSync(fullPath)) {
    if (exists) {
      console.log('directory exists!');
    } else {
      console.log('directory existence unexpected');
      console.log('\x1b[41m', `error: ${fullPath} exists but should not ... exiting`);
      process.exit(1);
    }
  } else if (exists) {
    console.log('directory not found.');
    console.log('\x1b[41m', `error: ${fullPath} not found ... exiting`);
    process.exit(1);
  } else {
    console.log('directory not found!');
  }
};

const assertFile = (fullPath, exists) => {
  if (fs.existsSync(fullPath)) {
    if (exists) {
      console.log('file exists!');
    } else {
      console.log('file existence unexpected');
      console.log('\x1b[41m', `error: ${fullPath} exists but should not ... exiting`);
      process.exit(1);
    }
  } else if (exists) {
    console.log('file not found.');
    console.log('\x1b[41m', `error: ${fullPath} not found ... exiting`);
    process.exit(1);
  } else {
    console.log('file not found!');
  }
};

const verifyFolders = (newVersion, exists) => {
  // controller folder
  console.log(`searching for controller folder controllers/${newVersion}`);
  const targetControllerFolder = path.join(__dirname, 'controllers', newVersion);
  assertFolder(targetControllerFolder, exists);

  // views folder
  console.log(`searching for view folder views/${newVersion}`);
  const targetViewsFolder = path.join(__dirname, 'views', newVersion);
  assertFolder(targetViewsFolder, exists);
};

const verifyFiles = (newVersion, exists) => {
  // routes file
  console.log(`searching for routes file routes/${newVersion}.js`);
  const routesFileFullPath = path.join(__dirname, 'routes', `${newVersion}.js`);
  console.log(routesFileFullPath);
  assertFile(routesFileFullPath, exists);

  // app.js file
  console.log('searching for file app.js');
  const appjsFullPath = path.join(__dirname, 'app.js');
  console.log(appjsFullPath);
  assertFile(appjsFullPath, exists);
};

const searchForFileMarker = (marker, file) => {
  fs.readFile(file, { encoding: 'utf-8' }, (err, data) => {
    if (!err) {
      if (data.indexOf(marker) !== -1) {
        console.log(`file marker found in ${file}`);
      } else {
        console.log('\x1b[41m', `error: unable to find file marker in ${file} ... exiting`);
        process.exit(1);
      }
    } else {
      console.log('\x1b[41m', `error: unable to open ${file} for read ... exiting`);
      process.exit(1);
    }
  });
};

const spliceLine = (filePath, newLine, afterLine) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    const newData = data.split('\n');
    if (err) return console.log(err);
    if (newData.indexOf(newLine) !== -1) {
      console.log(`warning: ${filePath} already contains line, skipping`);
      return 1;
    }
    if (newData.indexOf(afterLine) !== -1) {
      newData.splice(newData.indexOf(afterLine) + 1, 0, newLine);
    }
    fs.writeFile(filePath, newData.join('\n'), 'utf8', (writeErr) => {
      if (writeErr) return console.log(writeErr);
      return 0;
    });
    return 0;
  });
};

const spliceLines = (filePath, newLines, afterLine) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    const newData = data.split('\n');
    if (err) return console.log(err);
    if (newData.indexOf(afterLine) !== -1) {
      newLines.reverse().forEach((newLine) => {
        newData.splice(newData.indexOf(afterLine) + 1, 0, newLine);
      });
    }
    fs.writeFile(filePath, newData.join('\n'), 'utf8', (writeErr) => {
      if (writeErr) return console.log(writeErr);
      return 0;
    });
    return 0;
  });
};

const replaceLine = (filePath, lineToReplace, newLine) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) return console.log(err);
    const result = data.replace(lineToReplace, newLine);
    fs.writeFile(filePath, result, 'utf8', (writeErr) => {
      if (writeErr) return console.log(writeErr);
      return 0;
    });
    return 0;
  });
};

const run = async () => {
  await friendlyLog(`Cloning prototype version ${options.source} to ${options.target}`);

  await friendlyLog('Beginning pre-requisite checks');

  verifyFolders(options.source, true);
  verifyFolders(options.target, false);
  verifyFiles(options.source, true);
  searchForFileMarker('// [Journey routes] (do not edit this comment, it is used in automation)', path.join(__dirname, 'app.js'));
  searchForFileMarker('{# [Version listings] (do not delete this comment it is used in automation) #}', path.join(__dirname, 'views', 'index.njk'));

  await friendlyLog(`Pre-requisite checks complete .... ${options.source} -> ${options.target}`);

  await friendlyLog('Cloning folders');
  fs.cpSync(path.join(__dirname, 'controllers', options.source), path.join(__dirname, 'controllers', options.target), { recursive: true });
  fs.cpSync(path.join(__dirname, 'views', options.source), path.join(__dirname, 'views', options.target), { recursive: true });

  await friendlyLog('Cloning files');
  fs.copyFileSync(path.join(__dirname, 'routes', `${options.source}.js`), path.join(__dirname, 'routes', `${options.target}.js`));

  await friendlyLog('Updating routing file');
  replaceLine(
    path.join(__dirname, 'routes', `${options.target}.js`),
    `const controllers = require('../controllers/${options.source}');`,
    `const controllers = require('../controllers/${options.target}');`,
  );

  await friendlyLog('Splicing files');
  spliceLine(
    path.join(__dirname, 'app.js'),
    `app.use('/${options.target}/', setVersionMiddleware('/${options.target}/'), require('./routes/${options.target}'));`,
    '// [Journey routes] (do not edit this comment, it is used in automation)',
  );
  spliceLines(
    path.join(__dirname, 'views', 'index.njk'),
    [
      '',
      `      {# [${options.target}-start] (do not delete this comment it is used in automation) #}`,
      '      <div class="app-most-recent govuk-!-padding-bottom-7">',
      '        <div>',
      `          <span class="govuk-tag govuk-tag--turquoise">${options.target}</span>`,
      '        </div>',
      '        <br/>',
      `        <h2 class="govuk-heading-m">Sprint ${options.target} iteration</h2>`,
      '        <ul class="govuk-list govuk-list--bullet">',
      '        </ul>',
      `        <a href="${options.target}/" class="govuk-button govuk-button--start">Start</a>`,
      `        <p class="govuk-body govuk-!-font-size-16">Date created - ${new Date().toDateString()}</p>`,
      '      </div>',
      `      {# [${options.target}-end] (do not delete this comment it is used in automation) #}`,
    ],
    '      {# [Version listings] (do not delete this comment it is used in automation) #}',
  );
};

run();
