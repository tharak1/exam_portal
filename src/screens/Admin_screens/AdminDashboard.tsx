import React from 'react'
import StatsCard from '../../components/StatsCard'
import MyResponsiveBar from './AdminComponents/BarGraph';
import MyResponsivePie from './AdminComponents/PieChart';
import Navbar from './AdminComponents/Navbar';




const AdminDashboard:React.FC = () => {





  return (
    <div>
        <div className="grid grid-cols-12 grid-rows-12 gap-5 h-screen w-full p-6 bg-slate-100 dark:bg-gray-900">
        {/* col-span-12 */}
        <div className='col-span-12 row-span-1'>
            <Navbar name='Dashboard'/>
        </div>

            <StatsCard name= {"Total students"} count = {20} />
            <StatsCard name= {"courses sold"} count = {20}/>
            <StatsCard name= {"Pending payments"} count = {20}/>
            <StatsCard name= {"Total courses"} count = {20}/>


            <div className="bg-white shadow sm:rounded-lg dark:bg-gray-800 col-span-8 row-start-4 row-span-6 overflow-auto scrollbar-rounded">
                <h1 className="mt-4 ml-4">Sales Last 6 months</h1>
                <MyResponsiveBar/>
            </div>


            <div className="bg-white overflow-hidden shadow sm:rounded-lg dark:bg-gray-800 col-start-9 col-span-4 row-start-2 row-span-8">
                <h1 className="mt-4 ml-4">Students-Courses Contribution :</h1>
                <MyResponsivePie/>
            </div>


        



        </div>


    </div>
  )
}

export default AdminDashboard
