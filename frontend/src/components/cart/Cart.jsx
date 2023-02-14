import React from 'react'
import cube1 from '../../assets/cube1.png'
import cube2 from '../../assets/cube2.png'
import cube3 from '../../assets/cube3.png'
import {Link} from 'react-router-dom'

const CartItem =({value,title, img,increment,decrement})=>(

        <div className="cartItem">
            <div className="">
                <h4>{title}</h4>
                <img src={img} alt=""></img>
            </div>

            <div className="">
                <button onClick={decrement} className="">-</button>
                <input type="number" readOnly value={value} />
                <button onClick={increment} className="">+</button>
            </div>
        </div>

)


const Cart = () => {

     const increment = (item) => {

     }
     
     
     const decrement = (item) => {

     }




  return (
    <section className="cart">
        <main>

            <CartItem 
                title={"MKoto"} 
                img={cube2} 
                value={0}
                increment={()=> increment(1)}
                decrement={()=> decrement(1)}
             />
            <CartItem 
                title={"NKoto"} 
                img={cube3} 
                value={1}
                increment={()=> increment(1)}
                decrement={()=> decrement(1)}
             />
            <CartItem 
                title={"BKoto"} 
                img={cube1} 
                value={2}
                increment={()=> increment(1)}
                decrement={()=> decrement(1)}
             />

             <article>
                <div>
                    <h4>
                        Sub Total
                    </h4>
                    <p>Rs {2000}/-</p>
                </div>

                <div>
                    <h4>
                        TAX
                    </h4>
                    <p>Rs {2000 *0.18}/-</p>
                </div>

                <div>
                    <h4>
                        Shipping charges
                    </h4>
                    <p>Rs {20}/-</p>
                </div>
                <div>
                    <h4>
                        TOTAL AMOUNT
                    </h4>
                    <p>Rs {2000 + 2000 *0.18 +20}/-</p>
                </div>
                <br></br>
                <br></br>
                <Link to="/shipping" >Checkout</Link>
             </article>

        </main>
    </section>
  )
}

export default Cart