import Button from '@mui/material/Button';
import Input from '@mui/material/Input';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import { motion } from 'framer-motion';
import { useAppDispatch, useAppSelector } from 'app/store';
import FuseSvgIcon from '@fuse/core/FuseSvgIcon';
import { ChangeEvent, useEffect } from 'react';
import NavLinkAdapter from '@fuse/core/NavLinkAdapter';
import { resetSearchText, selectSearchText, setSearchText } from '../store/searchTextSlice';

/**
 * The products header.
 */
function ProductsHeader() {
	const dispatch = useAppDispatch();
	const searchText = useAppSelector(selectSearchText);

	useEffect(() => {
		return () => {
			dispatch(resetSearchText());
		};
	}, []);

	return (
		<div className="flex flex-col sm:flex-row space-y-12 sm:space-y-0 flex-1 w-full justify-between py-32 px-24 md:px-32">
			<motion.span
				initial={{ x: -20 }}
				animate={{ x: 0, transition: { delay: 0.2 } }}
			>
				<Typography className="text-24 md:text-32 font-extrabold tracking-tight">Products</Typography>
			</motion.span>

			<div className="flex w-full sm:w-auto flex-1 items-center justify-end space-x-8">
				<Paper
					component={motion.div}
					initial={{ y: -20, opacity: 0 }}
					animate={{ y: 0, opacity: 1, transition: { delay: 0.2 } }}
					className="flex items-center w-full sm:max-w-256 space-x-8 px-16 rounded-full border-1 shadow-0"
				>
					<FuseSvgIcon color="disabled">heroicons-solid:search</FuseSvgIcon>

					<Input
						placeholder="Search products"
						className="flex flex-1"
						disableUnderline
						fullWidth
						value={searchText}
						inputProps={{
							'aria-label': 'Search'
						}}
						onChange={(ev: ChangeEvent<HTMLInputElement>) => dispatch(setSearchText(ev))}
					/>
				</Paper>
				<motion.div
					className="flex flex-grow-0"
					initial={{ opacity: 0, x: 20 }}
					animate={{ opacity: 1, x: 0, transition: { delay: 0.2 } }}
				>
					<Button
						className="mx-8"
						variant="contained"
						color="secondary"
						component={NavLinkAdapter}
						to="/apps/e-commerce/products/new"
					>
						<FuseSvgIcon size={20}>heroicons-outline:plus</FuseSvgIcon>
						<span className="hidden sm:flex mx-8">Add</span>
					</Button>
				</motion.div>
			</div>
		</div>
	);
}

export default ProductsHeader;
