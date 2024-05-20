import * as React from 'react';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
import { useNavigate } from 'react-router-dom';

interface SideBarForAdminProps{
    points:number;
    questions:any[];
}

const SideBarForAdmin: React.FC<SideBarForAdminProps> = ({points,questions}) => {
    const [course,setCourse] = React.useState<string>("Abacus");
    const [publish,setPublish] = React.useState<string>("All Students");
    const [minutes, setMinutes] = React.useState<string>("");
    const [selectedDate, setSelectedDate] = React.useState<any>();
    const navigate = useNavigate();



    const handleCourseChange = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        setCourse(event.target.value)
    }
    const handlePublishChange = (event: React.ChangeEvent<HTMLSelectElement>)=>{
        setPublish(event.target.value)
    }
    const handleMinutesChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMinutes(event.target.value);
    }
    const handleDateChange = (newDate:Date) => {
        setSelectedDate(newDate);
    };
    const formatDate = (date:any) => {
        return date ? date.format('YYYY-MM-DD HH:mm:ss') : 'No date selected';
    };
    const handleCreatePaper = ()=>{
        const obj = {
            course:course,
            for:publish,
            date:formatDate(selectedDate),
            duration:minutes,
            totalMarks:points,
            questions : questions
        }
        navigate('/write-exam', { state: { finalObj: obj } });

        
    }
  return (
    <div className="w-full h-screen overflow-auto p-5">
        <div className="flex flex-col ">
            <label htmlFor="courseType" className="max-w-xs block mb-2 text-sm font-medium text-gray-900 ">Select a course</label>
            <select id="courseType" value={course} onChange={handleCourseChange} className="max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="Abacus">Abacus</option>
                <option value="Vedhic maths">Vedhic maths</option>
                <option value="Maths(6th - 10th)">Maths(6th - 10th)</option>
                <option value="Science(6th - 10th)">Science(6th - 10th)</option>
            </select>

            <label htmlFor="publishType" className="max-w-xs block mb-2 text-sm font-medium text-gray-900 ">Select publish for</label>
            <select id="publishType" value={publish} onChange={handlePublishChange} className="max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                <option value="All Students">All Students</option>
                <option value="Online Students">Online Students</option>
                <option value="Offline Students">Offline Students</option>
            </select>

            <label htmlFor="Date" className="max-w-xs block mb-2 text-sm font-medium text-gray-900 ">Select date</label>
            {/* <DateTimePicker label="Basic date time picker" /> */}

            {/* <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DemoContainer components={['DateTimePicker']}>
                    <DateTimePicker label="Basic date time picker" />
                </DemoContainer>
            </LocalizationProvider> */}

        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DemoContainer components={['DateTimePicker']}>
                <DateTimePicker
                    label="Basic date time picker"
                    value={selectedDate}
                    onChange={handleDateChange}
                />
            </DemoContainer>
            <div>
                Selected Date: {formatDate(selectedDate)}
            </div>
        </LocalizationProvider>

            <label htmlFor="minutes" className="max-w-xs block mb-2 text-sm font-medium text-gray-900">Enter number of minutes</label>
                <input
                    id="minutes"
                    type="number"
                    value={minutes}
                    onChange={handleMinutesChange}
                    className="max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                />

            <h2>{`Total Marks : ${points}`}</h2>


        <button  className="bg-slate-500 px-4 py-1 rounded-md ml-4 mt-2" onClick={handleCreatePaper}>
          Create Paper
        </button>

        </div>
    </div>
  )
}

export default SideBarForAdmin
