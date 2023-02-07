import React from 'react'
import {Country,State} from 'country-state-city'

const Shipping = () => {
  return (
    <section className="shipping">
        <main>
            <h1>Shipping</h1>
            <form>
                <div>
                    <label>H.No.</label>
                    <input type="text" placeholder="Enter House No."/>
                </div>
                <div>
                    <label>City</label>
                    <input type="text" placeholder="Enter Your City"/>
                </div>
                <div>
                    <label>Country</label>
                    
                    <select>
                        <option value="">Choose</option>

                        {
                            Country && Country.getAllCountries().map((country,index)=>{
                                return(
                                    <option key={index} value={country.name}>{country.name}</option>
                                )
                            })
                        }
                    </select>


                </div>
                <div>
                    <label>State</label>
                    
                    <select>
                        <option value="">State</option>
                        {
                            State && State.getStatesOfCountry('IN').map((state,index)=>{
                                return(
                                    <option key={index} value={state.name}>{state.name}</option>
                                )
                            })
                        }
                    </select>


                </div>

                <div>
                    <label>Pin Code</label>
                    <input type="number" placeholder="Enter Pincode"/>
                </div>
                <div>
                    <label>Phone No</label>
                    <input type="number" placeholder="Enter Phone number"/>
                </div>

                <button type="submit" >Confirm Order</button>
            </form>
        </main>
    </section>
  )
}

export default Shipping