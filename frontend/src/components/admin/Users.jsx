import React from 'react'
import { AiOutlineEye } from 'react-icons/ai'
import { Link } from 'react-router-dom'
import me from '../../assets/admin.jpg'

const Users = () => {
    const array= [1,2,3,4]
  return (
    <section className="tableClass">

    <main>
        <table>
            <thead>
                <tr>
                    <th>User ID</th>
                    <th>NAME</th>
                    <th>Photos</th>
                    <th>Role</th>
                    <th>Since</th>
                </tr>
            </thead>

            <tbody>

                {
                    array.map((item,index)=>{
                        return(
                            <tr key={index}>
                                <td>iwuhashkja</td>
                                <td>Prankush</td>
                                <td>
                                    <img src={me}/>
                                </td>
                                <td>Admin</td>
                                <td>{"23-5-2022"}</td>
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

export default Users