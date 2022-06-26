import {
	BACKGROUND_COLOR,
	NEON_RED_COLOR,
	NEON_YELLOW_COLOR,
	TEXT_COLOR,
} from '../style/colors';
import { FULL_BATTERY_PERCENTAGE, LOW_BATTERY_PERCENTAGE } from '../constants';

import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';
import Modal from '@mui/material/Modal';
import type { ObjectT } from '../types';
import Typography from '@mui/material/Typography';
import { getObjectStatusColor } from './utils';
import { useState } from 'react';

export default function Object(props: ObjectT) {
	const { id, name, description, batteryPercentage, errorMessage, isCharging } =
		props;
	const [modalOpen, setModalOpen] = useState(false);
	const hasError = errorMessage !== null;
	const hasBatteryPercentage = batteryPercentage !== null;
	const batteryPercentageNonNull = batteryPercentage ?? 0;
	const hasLowBattery = batteryPercentageNonNull < LOW_BATTERY_PERCENTAGE;
	const hasFullBattery = batteryPercentageNonNull > FULL_BATTERY_PERCENTAGE;
	const batteryPercentageColor = getObjectStatusColor({
		red: hasLowBattery,
		yellow: false,
		green: hasFullBattery,
	});
	const borderColor = getObjectStatusColor({
		red: hasError,
		yellow: isCharging ?? false,
		green: true,
	});
	return (
		<>
			<CardActionArea
				sx={{
					width: '90%',
					border: `1px solid ${borderColor}`,
					borderRadius: '1.5rem',
					margin: '0.5rem',
					padding: '0.5rem',
				}}>
				<Card
					sx={{
						background: BACKGROUND_COLOR,
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						boxShadow: 'none',
					}}
					onClick={() => setModalOpen(true)}>
					{hasBatteryPercentage && (
						<Box>
							<Box sx={{ position: 'relative', display: 'inline-flex' }}>
								<CircularProgress
									variant='determinate'
									value={batteryPercentage}
									sx={{
										color: batteryPercentageColor,
									}}
								/>
								<Box
									sx={{
										top: 0,
										left: 0,
										bottom: 0,
										right: 0,
										position: 'absolute',
										display: 'flex',
										alignItems: 'center',
										justifyContent: 'center',
									}}>
									<Typography
										variant='caption'
										component='div'
										color='text.secondary'
										sx={{
											color: TEXT_COLOR,
										}}>
										{batteryPercentage}
									</Typography>
								</Box>
							</Box>
						</Box>
					)}
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
							alignItems: 'center',
						}}>
						<Box
							sx={{
								marginLeft: '1rem',
								padding: '0.25rem',
								textAlign: 'left',
							}}>
							<Typography variant='body1' sx={{ color: TEXT_COLOR }}>
								{name}
							</Typography>
							<Typography variant='body2' sx={{ color: TEXT_COLOR }}>
								{id}
							</Typography>
						</Box>
						<Box
							sx={{
								padding: '0.5rem',
							}}>
							{!hasError && isCharging && (
								<BatteryChargingFullIcon sx={{ color: NEON_YELLOW_COLOR }} />
							)}
							{hasError && <ErrorIcon sx={{ color: NEON_RED_COLOR }} />}
						</Box>
					</Box>
				</Card>
			</CardActionArea>
			<Modal open={modalOpen} onClose={() => setModalOpen(false)}>
				<Box
					sx={{
						position: 'absolute' as 'absolute',
						top: '50%',
						left: '50%',
						transform: 'translate(-50%, -50%)',
						width: 400,
						bgcolor: 'black',
						color: TEXT_COLOR,
						border: `2px solid ${borderColor}`,
						boxShadow: 24,
						p: 4,
					}}>
					<Typography variant='h6'>{name}</Typography>
					<Typography variant='body1'>ID: {id}</Typography>
					<Typography variant='body1'>{description}</Typography>
					{hasError && (
						<Box
							sx={{
								background: NEON_RED_COLOR,
								color: 'black',
								padding: '1rem',
							}}>
							<Typography sx={{ mt: 2 }}>Error: {errorMessage}</Typography>
						</Box>
					)}
				</Box>
			</Modal>
		</>
	);
}
