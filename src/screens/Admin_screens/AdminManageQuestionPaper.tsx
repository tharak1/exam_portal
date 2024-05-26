import React from 'react'
import Navbar from './AdminComponents/Navbar'
import AddIcon from '@mui/icons-material/Add';
import ExamDraftCard from './AdminComponents/ExamDraftCard';
import { useNavigate } from 'react-router-dom';

const AdminManageQuestionPaper:React.FC = () => {

    const navigate = useNavigate();
    const handleNewPaper = () => {
        navigate('/admin/create_question_paper');
    }
  return (
    <div className='bg-slate-100 h-full overflow-auto dark:bg-slate-900 p-6'>
        <Navbar name='Manage Question Paper'/>

        <div className='col-span-1 mt-4 mb-5 flex flex-row'>
            <button className="px-5 py-0.5 rounded-md border-2 bg-cyan-500 hover:bg-cyan-400 text-white border-cyan-600 mr-4" onClick={handleNewPaper} ><AddIcon/> New Paper</button>
            
        </div>

        <div className='w-full grid grid-cols-4 items-start gap-3'>
            <ExamDraftCard/>
            <ExamDraftCard/>



        </div>

        

    

    </div>
  )
}

export default AdminManageQuestionPaper
