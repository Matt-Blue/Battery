import {
	BATTERY_ERROR_MESSAGES,
	BATTERY_IS_CHARGINGS,
	BATTERY_PERCENTAGES,
} from './constants';

import type { BatteryT } from './types';

export const getExampleBatteries = () => {
	let index = 0;
	const batteries: BatteryT[] = [];
	BATTERY_ERROR_MESSAGES.forEach((errorMessage) => {
		BATTERY_IS_CHARGINGS.forEach((isCharging) => {
			BATTERY_PERCENTAGES.forEach((batteryPercentage) => {
				batteries.push({
					id: String(index),
					name:
						batteryPercentage +
						(isCharging ? '% is ' : '% is not ') +
						'charging - ' +
						(errorMessage == null ? 'has no error' : 'has error'),
					description: 'Battery ' + String(index) + ' description',
					batteryPercentage,
					errorMessage,
					isCharging,
				});
				index = index + 1;
			});
		});
	});
	return batteries;
};
