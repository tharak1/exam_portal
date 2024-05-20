import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import create_question_paper from './screens/Admin_screens/create_question_paper';
import CreateQuestionPaper from './screens/Admin_screens/CreateQuestionPaper';
import WriteExamScreen from './screens/Client_screens/WriteExamScreen';
import ResultsScreen from './screens/Client_screens/ResultsScreen';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path="/admin" element={<CreateQuestionPaper/>}/>
          <Route path="/write-exam" element={<WriteExamScreen/>}/>
          <Route path="/results" element={<ResultsScreen/>}/>

        </Routes>
      </Router>
    </>
  )
}

export default App
