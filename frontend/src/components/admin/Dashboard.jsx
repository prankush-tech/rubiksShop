import React from 'react'
import {Link} from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS,Tooltip,ArcElement,Legend} from 'chart.js'
import Loader from '../layout/Loader';

ChartJS.register(Tooltip,ArcElement,Legend)
const loading = true;
const Box = ({title,value}) => (
    <div>
        <h3>
            {title === "Income" && "Rs."}
            {value}
        </h3>

        <p>{title}</p>
    </div>
);

const Dashboard = () => {

    const data ={
        labels:['Preparing','Shipped','Delivered'],
        datasets:[
           { labels:' # no of orders',
            data:[2,3,4],
            backgroundColor:['#ff6384','#36a2eb','#ffce56'],
            borderColor:['rgb(255, 255, 255)'],
            borderWidth:1}
        ]

    }
  return (
    <section className="dashboard">
        {
            loading === false ?<main>
            <article>
                <Box title="Users" value={213} />
                <Box title="Orders" value={213} />
                <Box title="Income" value={213} />
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