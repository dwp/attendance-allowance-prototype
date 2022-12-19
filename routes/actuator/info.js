module.exports = (packageJson) => {
  if (Object.prototype.toString.call(packageJson) !== '[object Object]') {
    throw new TypeError('Package details must be an object');
  }

  if (packageJson.name === '' || typeof (packageJson.name) !== 'string') {
    throw new TypeError('Package name must be a string');
  }

  if (typeof packageJson.description !== 'undefined' && typeof (packageJson.description) !== 'string') {
    throw new TypeError('Package description must be a string');
  }

  if (packageJson.version === '' || typeof (packageJson.version) !== 'string') {
    throw new TypeError('Package version must be a string');
  }

  return (req, res) => {
    res.status(200).json({
      app: {
        name: packageJson.name,
        description: packageJson.description,
        version: packageJson.version,
      },
      node: {
        version: process.versions.node,
      },
    });
  };
};
