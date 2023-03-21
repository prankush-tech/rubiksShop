import React from 'react'
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/order";
import Loader from "../layout/Loader";

const OrderDetails = () => {


    const params = useParams();

    const { order, loading } = useSelector((state) => state.orders);
  
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getOrderDetails(params.id));
      }, [params.id, dispatch]);

console.log(order)
  return (
    <section className="orderDetails">
      {loading === false && order !== undefined ? (
        <main>
          <h1>Order Details</h1>
          <div>
            <h1>Shipping</h1>
            <p>
              <b>Address</b>
              {`${order.shippingInfo.hNo} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pinCode}`}
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>
              <b>Name</b>
              {order.user.name}
            </p>
            <p>
              <b>Phone</b>
              {order.shippingInfo.phoneNo}
            </p>
          </div>

          <div>
            <h1>Status</h1>
            <p>
              <b>Order Status</b>
              {order.orderStatus}
            </p>
            <p>
              <b>Placed At</b>
              {order.createdAt.split('T')[0] }
            </p>
            <p>
              <b>Delivered At</b>
              {order.deliveredAt ? order.deliveredAt.split('T')[0]  : "NA"}
            </p>
          </div>

          <div>
            <h1>Payment</h1>
            <p>
              <b>Payment Method</b>
              {order.paymentMethod}
            </p>
            <p>
              <b>Payment Reference</b>
              {order.paymentMethod === "Online"
                ? `#${order.paymentInfo}`
                : "NA"}
            </p>
            <p>
              <b>Paid At</b>
              {order.paidAT}
            </p>
          </div>

          <div>
            <h1>Amount</h1>
            <p>
              <b>Items Total</b>Rs. {order.itemsPrice}/-
            </p>
            <p>
              <b>Shipping Charges</b> Rs. {order.shippingCharges}/-
            </p>
            <p>
              <b>Tax</b>Rs. {order.taxPrice}/-
            </p>
            <p>
              <b>Total Amount</b>Rs. {order.totalAmount}/-
            </p>
          </div>

          <article>
            <h1>Ordered Items</h1>
            <div>
              <h4>MKOTO</h4>
              <div>
                <span>{order.orderItems.MKOTO.quantity}</span> x{" "}
                <span>{order.orderItems.MKOTO.price}</span>
              </div>
            </div>
            <div>
              <h4>NKOTO</h4>
              <div>
                <span>{order.orderItems.NKOTO.quantity}</span> x{" "}
                <span>{order.orderItems.NKOTO.price}</span>
              </div>
            </div>
            <div>
              <h4>BKOTO</h4>
              <div>
                <span>{order.orderItems.BKOTO.quantity}</span> x{" "}
                <span>{order.orderItems.BKOTO.price}</span>
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontWeight: 800,
                }}
              >
                Sub Total
              </h4>
              <div
                style={{
                  fontWeight: 800,
                }}
              >
                Rs. {order.itemsPrice}/-
              </div>
            </div>
          </article>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default OrderDetails