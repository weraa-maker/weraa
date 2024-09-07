import { execSync } from 'child_process';
import { resolve } from 'path';

// Path to your TypeScript configuration file
const configPath = resolve(__dirname, 'next-sitemap.config.ts');

// Execute the `next-sitemap` command with `ts-node`
execSync(`npx ts-node node_modules/.bin/next-sitemap --config ${configPath}`, { stdio: 'inherit' });
