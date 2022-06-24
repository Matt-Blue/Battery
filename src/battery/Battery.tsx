import {
	DARK_GREEN,
	DARK_RED,
	DARK_YELLOW,
	WHITE_GREEN,
	WHITE_RED,
	WHITE_YELLOW,
} from '../common/constants';
import { FULL_BATTERY_PERCENTAGE, LOW_BATTERY_PERCENTAGE } from './constants';

import BatteryChargingFullIcon from '@mui/icons-material/BatteryChargingFull';
import type { BatteryT } from './types';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CircularProgress from '@mui/material/CircularProgress';
import ErrorIcon from '@mui/icons-material/Error';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import { useState } from 'react';

export default function Battery(props: BatteryT) {
	const { id, name, description, batteryPercentage, errorMessage, isCharging } =
		props;
	const [modalOpen, setModalOpen] = useState(false);
	// Battery status
	const hasLowBattery = batteryPercentage < LOW_BATTERY_PERCENTAGE;
	const hasFullBattery = batteryPercentage < FULL_BATTERY_PERCENTAGE;
	const batteryColor = hasLowBattery
		? 'error'
		: hasFullBattery
		? 'success'
		: 'primary';
	// Charging status and errors
	const hasError = errorMessage !== null;
	const borderColor = hasError
		? DARK_RED
		: isCharging
		? DARK_YELLOW
		: DARK_GREEN;
	const backgroundColor = hasError
		? WHITE_RED
		: isCharging
		? WHITE_YELLOW
		: WHITE_GREEN;
	return (
		<>
			<CardActionArea
				sx={{
					width: '90%',
					background: backgroundColor,
					border: `1px solid ${borderColor}`,
					borderRadius: '1.5rem',
					margin: '0.5rem',
					padding: '0.5rem',
				}}>
				<Card
					sx={{
						background: backgroundColor,
						display: 'flex',
						flexDirection: 'row',
						alignItems: 'center',
						boxShadow: 'none',
					}}
					onClick={() => setModalOpen(true)}>
					<Box>
						<Box sx={{ position: 'relative', display: 'inline-flex' }}>
							<CircularProgress
								variant='determinate'
								value={batteryPercentage}
								color={batteryColor}
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
									color='text.secondary'>
									{batteryPercentage}
								</Typography>
							</Box>
						</Box>
					</Box>
					<Box
						sx={{
							width: '100%',
							display: 'flex',
							flexDirection: 'row',
							justifyContent: 'space-between',
						}}>
						<Box
							sx={{
								marginLeft: '1rem',
								padding: '0.25rem',
								textAlign: 'left',
							}}>
							<Typography variant='body1'>{name}</Typography>
							<Typography variant='body2'>{id}</Typography>
						</Box>
						<Box
							sx={{
								padding: '0.25rem',
							}}>
							{!errorMessage && isCharging && <BatteryChargingFullIcon />}
							{errorMessage !== null && <ErrorIcon />}
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
						bgcolor: 'background.paper',
						border: '2px solid #000',
						boxShadow: 24,
						p: 4,
					}}>
					<Typography variant='h6'>{name}</Typography>
					<Typography variant='body1'>{id}</Typography>
					<Typography variant='body1'>{description}</Typography>
					{errorMessage !== null && (
						<Typography id='modal-modal-description' sx={{ mt: 2 }}>
							Error: {errorMessage}
						</Typography>
					)}
				</Box>
			</Modal>
		</>
	);
}
