import {
	NEON_GREEN_COLOR,
	NEON_RED_COLOR,
	NEON_YELLOW_COLOR,
} from '../style/colors';

export function getObjectStatusColor(colorOptions: {
	red: boolean | null;
	yellow: boolean | null;
	green: boolean | null;
}) {
	if (colorOptions.red) {
		return NEON_RED_COLOR;
	}
	if (colorOptions.yellow) {
		return NEON_YELLOW_COLOR;
	}
	if (colorOptions.green) {
		return NEON_GREEN_COLOR;
	}
}
