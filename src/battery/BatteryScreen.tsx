import Box from '@mui/material/Box';
import { EXAMPLE_BATTERIES } from '../battery/constants';
import Object from '../object/Object';

export default function BatteryScreen() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				flexGrow: 1,
			}}>
			{EXAMPLE_BATTERIES.map((battery) => (
				<Object {...battery} />
			))}
		</Box>
	);
}
