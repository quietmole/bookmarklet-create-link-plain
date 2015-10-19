#!/usr/bin/env node
/*eslint no-console:0*/
'use strict';
var meow = require('meow');
var createLinkPlain = require('./');

var cli = meow({
  help: [
    'Usage',
    '  $ create-link-plain [input]',
    '',
    'Examples',
    '  $ create-link-plain',
    '  unicorns & rainbows',
    '',
    '  $ create-link-plain ponies',
    '  ponies & rainbows',
    '',
    'Options',
    '  --foo  Lorem ipsum. Default: false'
  ]
});

console.log(createLinkPlain(cli.input[0] || 'unicorns'));
