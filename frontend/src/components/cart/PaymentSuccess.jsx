import React from 'react'
import {Link} from 'react-router-dom'

const PaymentSuccess = () => {
  return (
    <section className="paymentSuccess">
        <main>

            <h1>Order Confiremd</h1>
            <p>Thank you for your order. We will send you a confirmation email shortly.</p>

            <Link to="/myorders" >Check Status</Link>
        </main>
    </section>
  )
}

export default PaymentSuccess