import Box from '@mui/material/Box';
import { TEXT_COLOR } from '../style/colors';

export default function HelpScreen() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				flexGrow: 1,
				color: TEXT_COLOR,
			}}>
			Help
		</Box>
	);
}
