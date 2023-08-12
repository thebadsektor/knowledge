import { styled } from '@mui/material/styles';
import clsx from 'clsx';
import { memo } from 'react';
import { FuseNavBadgeType } from '@fuse/core/FuseNavigation/index';

const Root = styled('div')(({ theme }) => ({
	padding: '0 7px',
	fontSize: 11,
	fontWeight: 600,
	height: 20,
	minWidth: 20,
	borderRadius: 20,
	display: 'flex',
	alignItems: 'center',
	backgroundColor: theme.palette.secondary.main,
	color: theme.palette.secondary.contrastText
}));

type FuseNavBadgeProps = {
	className?: string;
	classes?: string;
	badge: FuseNavBadgeType;
};

function FuseNavBadge(props: FuseNavBadgeProps) {
	const { className = '', classes = '', badge } = props;

	return (
		<Root
			className={clsx('item-badge', className, classes)}
			style={{
				backgroundColor: badge.bg,
				color: badge.fg
			}}
		>
			{badge.title}
		</Root>
	);
}

export default memo(FuseNavBadge);
