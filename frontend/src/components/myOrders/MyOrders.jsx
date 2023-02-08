import React from 'react'
import { Link } from 'react-router-dom'
import {AiOutlineEye} from 'react-icons/ai'


const MyOrders = () => {

    const array=[1,2,3,4];

  return (
    <section className="tableClass">

        <main>
            <table>
                <thead>
                    <tr>
                        <th>Order</th>
                        <th>Status</th>
                        <th>Item Quantity</th>
                        <th>Amount</th>
                        <th>Payment Method</th>
                        <th>View Detail</th>
                    </tr>
                </thead>

                <tbody>

                    {
                        array.map((item,index)=>{
                            return(
                                <tr key={index}>
                                    <td>iwuhashkja</td>
                                    <td>Processing</td>
                                    <td>23</td>
                                    <td>Rs.{ 123123}/-</td>
                                    <td>COD</td>
                                    <td><Link to={`/order/${"asdad"}`}>
                                        <AiOutlineEye />
                                        </Link></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </main>
    </section>
  )
}

export default MyOrders