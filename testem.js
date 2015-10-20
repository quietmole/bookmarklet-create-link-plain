module.exports = {
  'framework': 'mocha',
  'before_tests': 'npm run clear:test-bundled && npm run build:test-bundled',
  'src_files': [
    'index.js',
    'test/general-test.js'
  ],
  test_page: './test/general.mustache',
  'on_exit': 'npm run clear:test-bundled',
  'launch_in_dev': ['Firefox', 'Chrome', 'IE', 'Safari']
};
