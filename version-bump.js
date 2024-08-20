const fs = require('fs');
const semver = require('semver');

const packageJson = JSON.parse(fs.readFileSync('./package.json', 'utf8'));
const currentVersion = packageJson.version;
const nextVersion = semver.inc(currentVersion, 'patch');

packageJson.version = nextVersion;

fs.writeFileSync('./package.json', JSON.stringify(packageJson, null, 2));

console.log(`Version bumped from ${currentVersion} to ${nextVersion}`);

// Añade el package.json modificado al commit
require('child_process').execSync('git add package.json');