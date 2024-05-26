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
import AdminShowStudents from './screens/Admin_screens/AdminShowStudents';
import AdminShowPayments from './screens/Admin_screens/AdminShowPayments';
import AdminManageQuestionPaper from './screens/Admin_screens/AdminManageQuestionPaper';
import AdminEployeeManagement from './screens/Admin_screens/AdminEployeeManagement';
import AdminExamReports from './screens/Admin_screens/AdminExamReports';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/write-exam" element={<WriteExamScreen/>}/>
          <Route path="/results" element={<ResultsScreen/>}/>

          <Route path='/admin' element = {<AdminSidebar/>} >
            <Route path="/admin/dashboard" element={<AdminDashboard/>}/>
            <Route path="/admin/manage_categories" element={<AdminManageCategory/>}/>
            <Route path="/admin/manage_courses" element={<AdminManageCourse/>}/>
            <Route path="/admin/add_courses" element={<AdminAddCourseScreen/>}/>
            <Route path="/admin/students" element={<AdminShowStudents/>}/>
            <Route path="/admin/payments" element={<AdminShowPayments/>}/>
            <Route path="/admin/manage_questionPaper" element={<AdminManageQuestionPaper/>}/>
            <Route path="/admin/create_question_paper" element={<CreateQuestionPaper/>}/>
            <Route path="/admin/employee_management" element={<AdminEployeeManagement/>}/>
            <Route path="/admin/exam_reports" element={<AdminExamReports/>}/>

          </Route>

        </Routes>
      </Router>
    </>
  )
}

export default App
