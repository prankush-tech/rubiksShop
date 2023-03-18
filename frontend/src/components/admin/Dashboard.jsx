import React, { useEffect } from 'react'
import {Link} from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS,Tooltip,ArcElement,Legend} from 'chart.js'
import Loader from '../layout/Loader';
import { useDispatch, useSelector } from 'react-redux';
import { getAdminStats } from "../../redux/actions/admin";

ChartJS.register(Tooltip,ArcElement,Legend)



const Box = ({title,value}) => (
    <div>
        <h4>
            {title === "Income" && "Rs. "}
            {value}
        </h4>

        <p>{title}</p>
    </div>
);

const Dashboard = () => {

    const dispatch = useDispatch()
    const { loading, usersCount, ordersCount, totalIncome } = useSelector(
        (state) => state.admin
      );

      useEffect(() => {
        dispatch(getAdminStats());
      }, [dispatch]);

    const data ={
        labels:['Processing','Shipped','Delivered'],
        datasets:[
           { 
            
            labels:' # no of orders',
            data:ordersCount
            ? [ordersCount.processing, ordersCount.shipped, ordersCount.delivered]
            : [0, 0, 0],
            backgroundColor:['#ff6384','#36a2eb','#ffce56'],
            borderColor:['rgb(255, 255, 255)'],
            borderWidth:1
        
            }
        ]

    }
  return (
    <section className="dashboard">
        {
            loading === false ?<main>
            <article>
                <Box title="Users" value={usersCount} />
                <Box title="Orders" value={ordersCount.total} />
                <Box title="Income" value={totalIncome} />
            </article>

            <section>
                <div>
                    <Link to='/admin/orders'>View Orders</Link>
                    <Link to='/admin/users'>View Users</Link>
                </div>

                <aside>
                    <Doughnut data={data} />
                </aside>
            </section>
        </main> : <Loader />
        }
    </section>
  )
}

export default Dashboard