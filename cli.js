#!/usr/bin/env node

const ora = require('ora')
const meow = require('meow')
const reepo = require('./index')

const cli = meow(`
  Usage
    $ reepo <input>

  Options
    -a/--all        Run full steps
    -c/--clean      Clean git for repository
    -i/--install    Npm install
    -I/--init       Init git && commit
    -h/--help       Help
`, {
  alias: {
    a: 'all',
    c: 'clean',
    i: 'install',
    I: 'init',
    h: 'help'
  }
})

const spinner = ora()
spinner.start()

reepo(cli.flags)
  .then(() => {
    spinner.stop()
    console.log('Reepoed!')
  })
  .catch(e => {
    spinner.stop()
    console.log(e.stack)
    process.exit(1)
  })
