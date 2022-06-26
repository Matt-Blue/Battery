import Box from '@mui/material/Box';
import Object from './Object';
import type { ObjectT } from '../types';
import { TEXT_COLOR } from '../style/colors';

export default function Objects(props: { objects: ObjectT[] }) {
	return (
		<Box
			sx={{
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				flexGrow: 1,
				color: TEXT_COLOR,
			}}>
			{props.objects.map((object) => (
				<Object {...object} />
			))}
		</Box>
	);
}
