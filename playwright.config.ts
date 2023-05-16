import type {PlaywrightTestConfig} from '@playwright/test';
import * as dotenv from 'dotenv'

dotenv.config();

const config: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests/e2e'
};


export default config;
