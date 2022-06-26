export type NavbarOptionT = 'batteries' | 'adapters' | 'help';

export type ObjectT = {
	id: string;
	name: string;
	description: string;
	batteryPercentage?: number | null;
	errorMessage?: string | null;
	isCharging?: boolean | null;
};

export type BatteryT = {
	id: string;
	name: string;
	description: string;
	batteryPercentage: number;
	errorMessage: string | null;
	isCharging: boolean;
};

export type AdapterT = {
	id: string;
	name: string;
	description: string;
	errorMessage: string | null;
};
