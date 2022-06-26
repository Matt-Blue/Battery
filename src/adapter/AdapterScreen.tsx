import Box from '@mui/material/Box';
import { EXAMPLE_ADAPTERS } from './constants';
import Object from '../object/Object';
import { TEXT_COLOR } from '../style/colors';

export default function AdapterScreen() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				flexGrow: 1,
				color: TEXT_COLOR,
			}}>
			{EXAMPLE_ADAPTERS.map((adapter) => (
				<Object {...adapter} />
			))}
		</Box>
	);
}
