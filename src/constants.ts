import type { AdapterT } from './types';
import type { BatteryT } from './types';

export const BACKGROUND_COLOR = 'black';
export const TEXT_COLOR = 'white';
export const NEON_GREEN_COLOR = '#5afc04';
export const NEON_YELLOW_COLOR = '#E0E722';
export const NEON_RED_COLOR = '#FF3131';

export const LOW_BATTERY_PERCENTAGE = 25;
export const FULL_BATTERY_PERCENTAGE = 80;

export const EXAMPLE_ADAPTERS: AdapterT[] = [
	{
		id: '1',
		name: 'Adapter 1',
		description: 'asdasdasd',
		errorMessage: null,
	},
	{
		id: '2',
		name: 'Adapter 2',
		description: 'asdasdas2',
		errorMessage: 'Adapter is not connected',
	},
];

export const EXAMPLE_BATTERIES: BatteryT[] = [
	{
		id: '1',
		name: 'Battery charged no error',
		description: '1 battery',
		batteryPercentage: 100,
		errorMessage: null,
		isCharging: false,
	},
	{
		id: '2',
		name: 'Battery charged error',
		description: '2 battery',
		batteryPercentage: 85,
		errorMessage: 'The battery is too full',
		isCharging: true,
	},
	{
		id: '3',
		name: 'Battery charging no error',
		description: '3 battery',
		batteryPercentage: 55,
		errorMessage: null,
		isCharging: true,
	},
	{
		id: '4',
		name: 'Battery charging error',
		description: '4 battery',
		batteryPercentage: 55,
		errorMessage: 'This battery is no longer charging',
		isCharging: true,
	},
	{
		id: '5',
		name: 'Battery low no error',
		description: '5 battery',
		batteryPercentage: 17,
		errorMessage: null,
		isCharging: true,
	},
	{
		id: '6',
		name: 'Battery low error',
		description: '6 battery',
		batteryPercentage: 17,
		errorMessage: 'Battery not connected',
		isCharging: true,
	},
	{
		id: '6',
		name: 'Battery low error',
		description: '6 battery',
		batteryPercentage: 17,
		errorMessage: 'Battery not connected',
		isCharging: true,
	},
	{
		id: '6',
		name: 'Battery low error',
		description: '6 battery',
		batteryPercentage: 17,
		errorMessage: 'Battery not connected',
		isCharging: true,
	},
	{
		id: '6',
		name: 'Battery low error',
		description: '6 battery',
		batteryPercentage: 17,
		errorMessage: 'Battery not connected',
		isCharging: true,
	},
	{
		id: '6',
		name: 'Battery low error',
		description: '6 battery',
		batteryPercentage: 17,
		errorMessage: 'Battery not connected',
		isCharging: true,
	},
];
