/* eslint-disable no-unused-vars */
'use strict';
const path = require('path');
const fs = require('fs');
const helpers = require('yeoman-test');

describe('exercise generator', () => {
  it('renders named source, exercise test and README', () => {
    return helpers.run(path.join(__dirname, '../generators/app'))
      .withPrompts({title: 'example'})
      .then(dir => {
        const source = fs.readFileSync(path.join(dir, 'example.js'), 'utf8');
        const test = fs.readFileSync(path.join(dir, 'example.spec.js'), 'utf8');
        const readme = fs.readFileSync(path.join(dir, 'README.md'), 'utf8');
        expect(source).toContain('module.exports = example');
        expect(test).toContain('describe(\'example\'');
        expect(readme).toContain('Exercise XX - example');
        expect(source + test + readme).not.toContain('<%=');
        expect(typeof require(path.join(dir, 'example.js'))).toBe('function');
      });
  });
});
