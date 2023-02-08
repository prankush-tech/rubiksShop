import React from 'react'

const OrderDetails = () => {
  return (
    <section className='orderDetails'>
        <main>
            <h1>Order details</h1>
            <div>
                <h1>Shipping</h1>
                <p>
                    <b>Address</b>
                    {"dahfj-adsfj-fss"}
                </p>              
            </div>




            <div>
            <h1>Contact</h1>
                <p>
                    <b>Name</b>
                    {"Prankush Giri"}
                </p>                
                <p>
                    <b>Phone</b>
                    {"12345983212"}
                </p>  
            </div>




            <div>
            <h1>Status</h1>
                <p>
                    <b>Order Status</b>
                    {"Prossing"}
                </p>                
                <p>
                    <b>Placed On</b>
                    {"23-45-6666"}
                </p>  
                <p>
                    <b>Delivered On</b>
                    {"23-45-6667"}
                </p>  
            </div>


            <div>
            <h1>Payment</h1>
                <p>
                    <b>Method</b>
                    {"Online"}
                </p>                
                <p>
                    <b>Payment Reference</b>
                    #{"jsagfkajhfsakj"}
                </p>  
                <p>
                    <b>Paid At</b>
                    {"23-45-6667"}
                </p>  
            </div>


            <div>
            <h1>Amount</h1>
                <p>
                    <b>Items Total</b>
                    Rs.{123}.
                </p>     
                <p>
                    <b>Shipping Charges</b>
                    Rs.{13}.
                </p>  
                <p>
                    <b>Tax Charges</b>
                    Rs.{123}.
                </p>             
                <p>
                    <b>Total</b>
                    Rs.{123}.
                </p>             
            </div>



            <article>
                <h1>Order Items</h1>

                <div>
                    <h4>Rubiks Cube 1</h4>
                    <div>
                        <span>{12}</span>X
                        <span>{12}</span>
                    </div>
                </div>

                <div>
                    <h4>Rubiks Cube 2</h4>
                    <div>
                        <span>{12}</span>X
                        <span>{12}</span>
                    </div>
                </div>

                <div>
                    <h4>Rubiks Cube 3</h4>
                    <div>
                        <span>{12}</span>X
                        <span>{12}</span>
                    </div>
                </div>


                <div>
                    <h4> SUB TOTAL</h4>
                    <div>
                        Rs.{21312}/-                         
                    </div>
                </div>


            </article>
        </main>
    </section>
  )
}

export default OrderDetails