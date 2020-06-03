#!/usr/bin/env node

var shell = require('shelljs')

globalThis.data = {
  template: 'https://spux.org/index.html',
  to: './hello.html'
}

data.to = process.argv[2] || data.to
data.template = process.argv[3] || data.template

shell.exec('curl ' + data.template).to(data.to)

shell.echo(`created spux app with template ${data.template} at ${data.to}`)
