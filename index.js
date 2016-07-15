const execa = require('execa')

function cleanRepo () {
  return execa.shell('rm -rf .git/')
}

function installDeps () {
  return execa.shell('npm install')
}

function initGit () {
  return execa.shell(`
    git init && git add . && git commit -m "Initial commit"
  `)
}

function reepo (flags) {
  const m = {
    c: cleanRepo,
    i: installDeps,
    I: initGit
  }
  let tasks = []
  if (flags.all || Object.keys(flags).length === 0) {
    tasks = [cleanRepo, installDeps, initGit]
  } else {
    for (let k in m) {
      if (flags[k]) {
        tasks.push(m[k])
      }
    }
  }
  return tasks.reduce((pre, task) => {
    return pre.then(task)
  }, Promise.resolve())
}

module.exports = reepo
