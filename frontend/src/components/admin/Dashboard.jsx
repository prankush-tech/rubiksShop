import React from 'react'
import {Link} from 'react-router-dom'
import {Doughnut} from 'react-chartjs-2';
import {Chart as ChartJS} from 'chart.js'


const Box = ({title,value}) => (
    <div>
        <h3>
            {title === "Income" && "RS."}
            {value}
        </h3>

        <p>{title}</p>
    </div>
);

const Dashboard = () => {
  return (
    <section className="dashboard">
        <main>
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

                </aside>
            </section>
        </main>
    </section>
  )
}

export default Dashboard