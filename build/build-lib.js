/**
 * build hui npm es lib module
 */

const shell = require('shelljs');
const signale = require('signale');
const { Signale } = signale;

const tasks = [
  'bootstrap',
  'lint',
  'build:entry',
  'build:components',
  'build:style',
  'build:style-entry'
]

tasks.forEach((task) => {
  signale.start(task);
  const interactive = new Signale({ interactive: true });
  interactive.pending(task);
  shell.exec(`npm run ${task} --silent`);
  interactive.success(task);
})

