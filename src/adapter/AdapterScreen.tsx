import Adapter from './Adapter';
import Box from '@mui/material/Box';
import { EXAMPLE_ADAPTERS } from './constants';
import { TEXT_COLOR } from '../common/colors';

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
				<Adapter {...adapter} />
			))}
		</Box>
	);
}
