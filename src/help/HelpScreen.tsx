import { NEON_GREEN_COLOR, TEXT_COLOR } from '../style/colors';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

export default function HelpScreen() {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				flexGrow: 1,
				color: TEXT_COLOR,
				padding: '1rem',
				margin: '1rem',
			}}>
			<Box
				sx={{
					padding: '1rem',
					margin: '1rem',
					border: `1px solid ${NEON_GREEN_COLOR}`,
					width: '100%',
				}}>
				<Typography variant='h4' sx={{ color: NEON_GREEN_COLOR }}>
					Troubleshooting
				</Typography>
				<Typography variant='body1' sx={{ color: TEXT_COLOR }}>
					TODO
				</Typography>
			</Box>
			<Box
				sx={{
					padding: '1rem',
					margin: '1rem',
					border: `1px solid ${NEON_GREEN_COLOR}`,
					width: '100%',
				}}>
				<Typography variant='h4' sx={{ color: NEON_GREEN_COLOR }}>
					Points of Contact
				</Typography>
				<Typography variant='body1'>
					Reach out if you need help troubleshooting
				</Typography>
				<ul>
					<li>
						<Typography variant='body1'>Hotel California</Typography>
					</li>
					<li>
						<Typography variant='body1'>Matthew</Typography>
					</li>
					<li>
						<Typography variant='body1'>Chris</Typography>
					</li>
				</ul>
			</Box>
		</Box>
	);
}
