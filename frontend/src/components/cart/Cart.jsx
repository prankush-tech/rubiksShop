import React from 'react'
import cubeImage from '../../assets/cube.jpg'
import {Link} from 'react-router-dom'

const CartItem =({value,title, img,increment,decrement})=>(

        <div className="cartItem">
            <div className="">
                <h4>{title}</h4>
                <img src={img} alt=""></img>
            </div>

            <div className="div">
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
                title={"Cube 1"} 
                img={cubeImage} 
                value={0}
                increment={()=> increment(1)}
                decrement={()=> decrement(1)}
             />
            <CartItem 
                title={"Cube 2"} 
                img={cubeImage} 
                value={1}
                increment={()=> increment(1)}
                decrement={()=> decrement(1)}
             />
            <CartItem 
                title={"Cube 3"} 
                img={cubeImage} 
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