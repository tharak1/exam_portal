import React from 'react';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import EditIcon from '@mui/icons-material/Edit';

const CourseCard:React.FC = () => {
  return (
    <div className="flex flex-row">
    <div className="bg-white rounded-lg shadow-md p-4 mb-6 flex">
        <img src="https://via.placeholder.com/150" alt="Kuchipudi" className="w-48 h-48 object-cover rounded-lg"/>
        <div className="ml-6 flex flex-col justify-between">
            <div>
                <h2 className="text-2xl font-bold">Kuchipudi</h2>
                <p className="text-gray-700 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehe</p>
                <p className="mt-4"><strong>classNamees availability :</strong> Online & Offline</p>
                <p className="mt-1"><strong>className Timings :</strong> session 1 : 6am to 8 am &nbsp;&nbsp; session 2 : 6pm to 8 pm</p>
            </div>
            <div className="flex justify-between items-center mt-4">
                <div>
                    <p className="text-xl font-bold">Price : <span className="text-green-500">₹ 6000 / month</span></p>
                </div>
                <button className="bg-violet-600 text-white font-bold py-2 px-4 rounded-lg flex items-center">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-5 h-5 mr-2">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4m.6 8l1.68 8.32A1 1 0 0010 21h4a1 1 0 00.96-.68l1.68-8.32M7 13H5.4M7 13h10m-10 0l1.68 8.32M17 13l1.68 8.32M7 13H5.4m-.6-8l1.68 8.32M7 13H5.4" />
                    </svg>
                    Add to cart
                </button>
            </div>
        </div>
    </div>
    <div className="flex flex-col items-start">
        <div className="flex flex-col">
            <button className="m-4 ml-6 mt-0 p-3 hover:bg-slate-200 rounded-full"><DeleteForeverIcon color='warning' fontSize='large'/></button>
            <button className="m-4 ml-6 p-3 hover:bg-slate-200 rounded-full"><EditIcon color='action' fontSize='large' /></button>
        </div>
    </div>
</div>
  )
}

export default CourseCard
