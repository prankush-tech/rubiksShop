import React from 'react';
import cube1 from '../../assets/cube1.png';
import cube2 from '../../assets/cube2.png';
import cube3 from '../../assets/cube3.png';
import { useEffect } from "react";
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

const CartItem = ({ value, title, img, increment, decrement }) => (
	<div className="cartItem">
		<div className="">
			<h4>{title}</h4>
			<img src={img} alt="" />
		</div>

		<div className="">
			<button onClick={decrement} className="">
				-
			</button>
			<input type="number" readOnly value={value} />
			<button onClick={increment} className="">
				+
			</button>
		</div>
	</div>
);

const Cart = () => {
	const {
		cartItems: { 
			MKOTO: { quantity: MKOTO },
			NKOTO: { quantity: NKOTO }, 
			BKOTO: { quantity: BKOTO } 
		},
		subTotal,
		tax,
		shippingCharges,
		total,
	} = useSelector((state) => state.cart);

	const { cartItems: orderItems } = useSelector((state) => state.cart);
	const dispatch = useDispatch();

	const increment = (item) => {
		switch (item) {
			case 1:
				dispatch({ type: 'MKOTOIncrement' });
				dispatch({ type: 'calculatePrice' });
				break;
			case 2:
				dispatch({ type: 'NKOTOIncrement' });
				dispatch({ type: 'calculatePrice' });
				break;
			case 3:
				dispatch({ type: 'BKOTOIncrement' });
				dispatch({ type: 'calculatePrice' });
				break;

			default:
				dispatch({ type: 'BKOTOIncrement' });
				dispatch({ type: 'calculatePrice' });
				break;
		}
	};

	const decrement = (item) => {
        switch (item) {
			case 1:
                if(MKOTO === 0) break;
				dispatch({ type: 'MKOTODecrement' });
				dispatch({ type: 'calculatePrice' });
				break;
			case 2:
                if(NKOTO === 0) break;
				dispatch({ type: 'NKOTODecrement' });
				dispatch({ type: 'calculatePrice' });
				break;
			case 3:
                if(BKOTO === 0) break;
				dispatch({ type: 'BKOTODecrement' });
				dispatch({ type: 'calculatePrice' });
				break;

			default:
                if(MKOTO === 0) break;
				dispatch({ type: 'BKOTODecrement' });
				dispatch({ type: 'calculatePrice' });
				break;
		}
    };

	useEffect(() => {
		localStorage.setItem("cartItems", JSON.stringify(orderItems));
		localStorage.setItem(
		  "cartPrices",
		  JSON.stringify({
			subTotal,
			tax,
			shippingCharges,
			total,
		  })
		);
	  }, [orderItems, subTotal, tax, shippingCharges, total]);

	return (
		<section className="cart">
			<main>
				<CartItem
					title={'MKoto'}
					img={cube2}
					value={MKOTO}
					increment={() => increment(1)}
					decrement={() => decrement(1)}
				/>
				<CartItem
					title={'NKoto'}
					img={cube3}
					value={NKOTO}
					increment={() => increment(2)}
					decrement={() => decrement(2)}
				/>
				<CartItem
					title={'BKoto'}
					img={cube1}
					value={BKOTO}
					increment={() => increment(3)}
					decrement={() => decrement(3)}
				/>

				<article>
					<div>
						<h4>Sub Total</h4>
						<p>Rs {subTotal}/-</p>
					</div>

					<div>
						<h4>TAX</h4>
						<p>Rs {tax}/-</p>
					</div>

					<div>
						<h4>Shipping charges</h4>
						<p>Rs {shippingCharges}/-</p>
					</div>
					<div>
						<h4>TOTAL AMOUNT</h4>
						<p>Rs {total}/-</p>
					</div>
					<br />
					<br />
					<Link to="/shipping">Checkout</Link>
				</article>
			</main>
		</section>
	);
};

export default Cart;
