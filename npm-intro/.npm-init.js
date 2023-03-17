module.exports = {
  name: prompt('package name', basename || package.name),
  version: prompt('version', '1.0.0'),
  type: prompt('module type', 'module'),
  main: prompt('entry point', 'server.js'),
  keywords: prompt(function (s) { return s.split(/\s+/) }),
  author: prompt('author', ''),
  license: prompt('license', 'ISC'),
}
