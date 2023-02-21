import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { createOrder } from '../../redux/actions/order';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { server } from '../../redux/store';

const ConfirmOrder = () => {


	const [ paymentMethod, setPaymentMethod ] = useState("");
	// const [ disableBtn, setDisableBtn ] = useState(false);

	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { cartItems, subTotal, tax, shippingCharges, total, shippingInfo } = useSelector((state) => state.cart);


    const {message,error} = useSelector((state) => state.order)
    const {messageO,errorO} = useSelector((state) => state.orderOnline)



	const submitHandler = async  (e) => {
		e.preventDefault();
		// setDisableBtn(true);

		if (paymentMethod === 'COD') 
		{
			dispatch(createOrder(shippingInfo, cartItems, paymentMethod, subTotal, tax, shippingCharges, total));
			
		}
		if(paymentMethod === 'Online')
		{
			const { data} = await axios.post(
				`${server}/createorderOnline`,
				{
				  shippingInfo,
				  orderItems:cartItems,
				  paymentMethod,
				  itemsPrice:subTotal,
				  taxPrice:tax,
				  shippingCharges,
				  totalAmount:total,
				},
				{
				  headers: {
					"Content-Type": "application/json",
				  },
				  withCredentials: true,
				}
			  );
			 
			  window.location.href = data.sessionUrl;
		}
	};


    useEffect(() => {
        if (message) {
          toast.success(message);
          dispatch({ type: "clearMessage" });
          dispatch({ type: "emptyState" });
          navigate("/paymentsuccess");
        }
        if (error) {
          toast.error(error);
          dispatch({ type: "clearError" });
        //   setDisableBtn(false);
        }
      }, [dispatch, message, error, navigate]);



	return (
		<section className="confirmOrder">
			<main>
				<h1>Confirm Order</h1>

				<form onSubmit={submitHandler}>
					<div>
						<label>Cash On Delivery</label>
						<input type="radio"
                         required
                         name="payment"
						 value="cod" 
                         onChange={() => setPaymentMethod('COD')} 
                         />
					</div>
					<div>
						<label>Online</label>
						<input type="radio"  name="payment" value="Online" onChange={() => setPaymentMethod('Online')} />
					</div>

					<button  type="submit">
						Place Order
					</button>
				</form>
			</main>
		</section>
	);
};

export default ConfirmOrder;
