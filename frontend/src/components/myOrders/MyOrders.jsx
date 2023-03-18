import React from 'react'
import {useEffect} from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'
import { useDispatch,useSelector  } from 'react-redux'
import { getMyOrders } from '../../redux/actions/order'
import Loader from "../layout/Loader";
import toast from "react-hot-toast";


const MyOrders = () => {

    const { orders, loading, error } = useSelector((state) => state.orders);
    const dispatch = useDispatch();

    useEffect(() => {
        if (error) {
            toast.error(error);
            dispatch({ type: "clearError" });
          }
        dispatch(getMyOrders());
    }, [dispatch,error])

  return (
    <section className="tableClass">
        {
            loading === false ?
            (<main>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Status</th>
                        <th>Item Quantity</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>View Detail</th>
                    </tr>
                </thead>

                <tbody>
              {orders &&
                orders.map((i) => (
                  <tr key={i._id}>
                    <td>#{i._id}</td>
                    <td>{i.orderStatus}</td>
                    <td>
                      {i.orderItems.MKOTO.quantity +
                        i.orderItems.NKOTO.quantity +
                        i.orderItems.BKOTO.quantity}
                    </td>
                    <td>RS. {i.totalAmount}</td>
                    <td>{i.paymentMethod}</td>
                    <td>
                      <Link to={`/order/${i._id}`}>
                        <AiOutlineEye />
                      </Link>
                    </td>
                  </tr>
                ))}
            </tbody>
            </table>
        </main>): (<Loader />)
        }

       
    </section>
  )
}

export default MyOrders