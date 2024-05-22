import React from 'react'
import Navbar from './AdminComponents/Navbar'
import AddIcon from '@mui/icons-material/Add';
import CourseCard from '../../components/CourseCard';
import { useNavigate } from 'react-router-dom';


const AdminManageCourse:React.FC = () => {
  const navigate = useNavigate();

  const handleAddButtonClick = () => {
    navigate("/admin/add_courses");
  }
  return (
    <div className='gird grid-cols-1 grid-rows-auto gap-y-4 bg-slate-100 dark:bg-slate-900 p-6 h-full overflow-auto'>
        <div className="col-span-1 mb-5">
            <Navbar name='Manage Courses'/>
        </div>

        <div className='col-span-1 mb-5'>
            <button className="px-5 py-2 rounded-md border-2 bg-cyan-500 hover:bg-cyan-400 text-white border-cyan-600" onClick={handleAddButtonClick}><AddIcon/> Add Course</button>
        </div>
        
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        <CourseCard/>
        
    </div>
  )
}

export default AdminManageCourse
