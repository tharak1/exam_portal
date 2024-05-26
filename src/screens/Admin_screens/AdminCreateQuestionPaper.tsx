import React, { useEffect, useState } from 'react';
import QuestionForm from '../../components/QuestionForm';
import SideBarForAdmin from '../../components/SideBarForAdminExams';

const CreateQuestionPaper: React.FC = () => {
  const[points,setPoints] = useState<number>(0);
  const [questions, setQuestions] = useState<any[]>([
    {
      questionType: "",
      question: "",
      options: [""],
      correctAnswer: [],
      points: 0
    }
  ]);

  const addQuestionForm = () => {
    setQuestions(prevQuestions => [
      ...prevQuestions,
      {
        questionType: "",
        question: "",
        options: [""],
        correctAnswer: [],
        points: 0
      }
    ]);

    console.log(questions);
    
  };

  const printQuestions = () => {
    console.log(questions);
    
  }

  useEffect(() => {
    const points = questions.reduce((sum, question) => sum + question.points, 0);
    setPoints(points);
  }, [questions]);

  return (
    <div className="grid grid-cols-4 grid-rows-4 h-screen bg-slate-100 ">
      <div className="col-span-3 w-full pl-9 pr-9 pt-4 row-span-4  overflow-auto">
        {questions.map((_question, index) => (

          <div key={index+7897152} className="mb-4">
            
            <QuestionForm index={index}             
             updateQuestion={(index,updatedQuestion) => {
                const newQuestions = [...questions];
                newQuestions[index] = updatedQuestion;
                setQuestions(newQuestions);

              }}
              deleteQuestion={(index)=>{
                const newQuestions = [...questions];
                newQuestions.splice(index, 1);
                setQuestions(newQuestions);
              }}
              
              />
          </div>
        ))}
        <button onClick={addQuestionForm} className="bg-sky-600 px-4 py-1 rounded-md ml-4 mt-2">
          Add question
        </button>

        <button onClick={printQuestions} className="bg-slate-500 px-4 py-1 rounded-md ml-4 mt-2">
          print questions
        </button>
      </div>
      <div className="col-span-1 overflow-auto row-span-4">
        <SideBarForAdmin points={points} questions={questions}/>
      </div>
    </div>
  );
};

export default CreateQuestionPaper;
