import type { AdapterT } from './types';

export const BACKGROUND_COLOR = 'black';
export const TEXT_COLOR = 'white';
export const NEON_GREEN_COLOR = '#5afc04';
export const NEON_YELLOW_COLOR = '#E0E722';
export const NEON_RED_COLOR = '#FF3131';

export const LOW_BATTERY_PERCENTAGE = 25;
export const FULL_BATTERY_PERCENTAGE = 80;

export const BATTERY_PERCENTAGES = [100, 95, 80, 60, 40, 20, 5, 0];
export const BATTERY_IS_CHARGINGS = [true, false];
export const BATTERY_ERROR_MESSAGES = [
	null,
	'There is an error with this battery',
];

export const EXAMPLE_ADAPTERS: AdapterT[] = [
	{
		id: '1',
		name: 'Adapter 1',
		description: 'First adapter',
		errorMessage: null,
	},
	{
		id: '2',
		name: 'Adapter 2',
		description: 'second one',
		errorMessage: 'Adapter is not connected',
	},
];
