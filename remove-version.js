/* eslint-disable no-console */
const path = require('path');
const fs = require('fs');
const { program } = require('commander');

// eslint-disable-next-line no-promise-executor-return
const delay = (time) => new Promise((resolve) => setTimeout(resolve, time));

program
  .name('')
  .requiredOption('-t, --target <version to remove>', 'a version to remove is required');

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

const removeLine = (filePath, lineToRemove) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    const newData = data.split('\n');
    if (err) return console.log(err);
    if (newData.indexOf(lineToRemove) !== -1) {
      newData.splice(newData.indexOf(lineToRemove), 1);
    }
    fs.writeFile(filePath, newData.join('\n'), 'utf8', (writeErr) => {
      if (writeErr) return console.log(writeErr);
      return 0;
    });
    return 0;
  });
};

const removeLines = (filePath, startLine, endLine) => {
  fs.readFile(filePath, 'utf8', (err, data) => {
    const newData = data.split('\n');
    if (err) return console.log(err);
    const startIndex = newData.indexOf(startLine);
    const endIndex = newData.indexOf(endLine);
    if ((startIndex !== -1) && (endIndex !== -1)) {
      newData.splice(
        startIndex,
        endIndex - startIndex + 2,
      );
    }
    fs.writeFile(filePath, newData.join('\n'), 'utf8', (writeErr) => {
      if (writeErr) return console.log(writeErr);
      return 0;
    });
    return 0;
  });
};

const run = async () => {
  await friendlyLog(`Removing prototype version ${options.target}`);

  await friendlyLog('Beginning pre-requisite checks');

  verifyFolders(options.target, true);
  verifyFiles(options.target, true);

  await friendlyLog(`Pre-requisite checks complete .... ${options.target} -> X`);

  await friendlyLog('Removing folders');
  fs.rmSync(path.join(__dirname, 'controllers', options.target), { recursive: true });
  fs.rmSync(path.join(__dirname, 'views', options.target), { recursive: true });

  await friendlyLog('Removing files');
  fs.rmSync(path.join(__dirname, 'routes', `${options.target}.js`));

  await friendlyLog('Removing route from app.js');
  removeLine(
    path.join(__dirname, 'app.js'),
    `app.use('/${options.target}/', setVersionMiddleware('/${options.target}/'), require('./routes/${options.target}'));`,
  );

  await friendlyLog('Removing start button from homepage');
  removeLines(
    path.join(__dirname, 'views', 'index.njk'),
    `      {# [${options.target}-start] (do not delete this comment it is used in automation) #}`,
    `      {# [${options.target}-end] (do not delete this comment it is used in automation) #}`,
  );
};

run();
