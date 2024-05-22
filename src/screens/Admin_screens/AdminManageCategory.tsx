import React from 'react'
import Navbar from './AdminComponents/Navbar'
import BasicCard from './AdminComponents/CategoryCard'
import DummyAddCard from './AdminComponents/dummyAddCard';

const AdminManageCategory:React.FC = () => {
  return (
    <div className="p-6 bg-slate-100 h-full grid grid-cols-3 gap-3 dark:bg-gray-900">
        <div className='col-span-3 row-span-1'>
            <Navbar name='Manage Categories'/>
        </div>

        <BasicCard name='Tutions' date='21st May 2024' image='https://www.careeraddict.com/uploads/article/60945/student-life-college-tuition.png' />
        <BasicCard name='Cultural Activities' date='19th May 2024' image='https://www.oakridge.in/wp-content/uploads/2020/09/1_Cultural-Activities-1.jpg'/>
        <DummyAddCard/>
    </div>
  )
}

export default AdminManageCategory
