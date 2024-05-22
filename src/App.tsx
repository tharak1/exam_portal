import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import create_question_paper from './screens/Admin_screens/create_question_paper';
import CreateQuestionPaper from './screens/Admin_screens/AdminCreateQuestionPaper';
import WriteExamScreen from './screens/Client_screens/WriteExamScreen';
import ResultsScreen from './screens/Client_screens/ResultsScreen';
import AdminSidebar from './screens/Admin_screens/AdminSidebar';
import AdminDashboard from './screens/Admin_screens/AdminDashboard';
import AdminManageCategory from './screens/Admin_screens/AdminManageCategory';
import AdminManageCourse from './screens/Admin_screens/AdminManageCourse';
import AdminAddCourseScreen from './screens/Admin_screens/AdminAddCourseScreen';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin-exam" element={<CreateQuestionPaper/>}/>
          <Route path="/write-exam" element={<WriteExamScreen/>}/>
          <Route path="/results" element={<ResultsScreen/>}/>

          <Route path='/admin' element = {<AdminSidebar/>} >
            <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
            <Route path="/admin/manage_categories" element={<AdminManageCategory/>}/>
            <Route path="/admin/manage_courses" element={<AdminManageCourse/>}/>
            <Route path="/admin/add_courses" element={<AdminAddCourseScreen/>}/>


          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
