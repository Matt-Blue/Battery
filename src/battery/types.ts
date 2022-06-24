export type BatteryT = {
    id: string,
    name: string,
    description: string,
    batteryPercentage: number,
    errorMessage: string | null,
    isCharging: boolean,
}