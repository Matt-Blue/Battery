import type { BatteryT } from './types';

export const LOW_BATTERY_PERCENTAGE = 25;
export const FULL_BATTERY_PERCENTAGE = 75;

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
];
