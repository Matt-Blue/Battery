import type { AdapterT } from './types';
import Box from '@mui/material/Box';

export default function Adapter(props: AdapterT) {
	const { id, name, description, errorMessage } = props;
	const hasError = errorMessage !== null;
	return (
		<Box sx={{ border: '1px solid white', padding: '1rem', margin: '1rem' }}>
			<div>{name}</div>
			<div>{id}</div>
			<div>{description}</div>
			{hasError && <div>errorMessage</div>}
		</Box>
	);
}
