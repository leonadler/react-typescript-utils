const { execSync } = require('node:child_process');
const { resolve } = require('node:path');

console.log('Env: ', process.env);

try {
  // Configure git to look for git hooks in the ".git-hooks" folder, so they can be checked into version control
  execSync('git config --local --path core.hooksPath ./.git-hooks', { cwd: resolve(__dirname, '..') });
} catch (error) {
  console.error('Failed to set git hooks directory: ', error);
  process.exitCode = 1;
}
