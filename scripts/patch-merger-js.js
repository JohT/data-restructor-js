#!/usr/bin/env node
/**
 * Patches merger-js to use standard module resolution for node-notifier.
 * Can be removed when merger-js is updated to use require('node-notifier') 
 * instead of require('../node_modules/node-notifier').
 */
const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../node_modules/merger-js/modules/notifications.js');

try {
  const content = fs.readFileSync(filePath, 'utf8');
  const patched = content.replace(
    "require('../node_modules/node-notifier')",
    "require('node-notifier')"
  );
  
  if (content !== patched) {
    fs.writeFileSync(filePath, patched, 'utf8');
    console.log('✓ Patched merger-js notifications.js');
  }
} catch (error) {
  console.error('Failed to patch merger-js:', error.message);
  process.exit(1);
}
