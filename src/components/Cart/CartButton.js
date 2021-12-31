import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { toggleActions } from '../../reducers/toggle';

const CartButton = props => {
	const badgeCart = useSelector(state => state.cart.totalQuantity);
	const dispatch = useDispatch();

	const showCartHandler = () => {
		dispatch(toggleActions.toggleCart());
	};

	return (
		<button className={classes.button} onClick={showCartHandler}>
			<span>My Cart</span>
			<span className={classes.badge}>{badgeCart}</span>
		</button>
	);
};

export default CartButton;
