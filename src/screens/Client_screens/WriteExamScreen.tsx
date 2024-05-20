import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import Timer from '../../components/Timer';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import QuestionDisplay from '../../components/QuestionDisplay';
import LoadingScreen from '../../components/LoadingScreen';
import Modal from '../../components/Modal';

interface Question {
  questionType: string;
  question: string;
  options: string[];
  correctAnswer: number[];
  points: number;
  visited?: boolean;
  answered?: boolean;
  optionsSelected?: number[];
}

interface WriteExamScreenProps {
  finalObj: {
    course: string;
    for: string;
    date: string;
    duration: string;
    totalMarks: string;
    questions: Question[];
  };
}

const WriteExamScreen: React.FC = () => {
  const location = useLocation();
  const { finalObj } = location.state as WriteExamScreenProps;

  const [notVisited, setNotVisited] = useState<number>(finalObj.questions.length - 1);
  const [notAnswered, setNotAnswered] = useState<number>(finalObj.questions.length);
  const [processedQuestions, setProcessedQuestions] = useState<Question[]>([]);
  const [questionIndex, setQuestionIndex] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(true);
  const [answered, setAnswered] = useState<number>(0);
  const [modal,setModal] = useState<boolean>(false);

  const openModal = () => setModal(true);
  const closeModal = () => setModal(false);

  useEffect(() => {
    preProcessing();
  }, []);

  const preProcessing = () => {
    const newQuestions: Question[] = finalObj.questions.map((question) => ({
      ...question,
      visited: false,
      answered: false,
      optionsSelected: [],
    }));
    
    if (newQuestions.length > 0) {
      newQuestions[0].visited = true;
    }
    
    setProcessedQuestions(newQuestions);
    setLoading(false);
    
    // console.log('Processed Questions:', newQuestions);
  };

  const handleNextQuestion = () => {
    if (questionIndex < processedQuestions.length - 1) {
      updateVisitStatus(questionIndex + 1);
      setQuestionIndex(questionIndex + 1);
    }
  };

  const handlePrevQuestion = () => {
    if (questionIndex > 0) {
      updateVisitStatus(questionIndex - 1);
      setQuestionIndex(questionIndex - 1);
    }
  };

  const handleOntapSideBar = (index: number) => {
    updateVisitStatus(index);
    setQuestionIndex(index);
  };

  const handleSaveAndNextQuestion = () => {
    const selectedOptionIndex = processedQuestions[questionIndex].options.findIndex((_option, index) => {
      const optionElement = document.getElementById(`option${questionIndex}${index}`) as HTMLInputElement;
      return optionElement.checked;
    });

    const isAnswered = selectedOptionIndex !== -1;

    const updatedQuestions = [...processedQuestions];
    updatedQuestions[questionIndex] = {
      ...updatedQuestions[questionIndex],
      visited: true,
      answered: isAnswered,
      optionsSelected: isAnswered ? [selectedOptionIndex] : [],
    };

    if(answered < processedQuestions.length){
      setAnswered(answered + 1);
      setNotAnswered(notAnswered - 1);
    }


    

    setProcessedQuestions(updatedQuestions);
    handleNextQuestion();
  };

  const updateVisitStatus = (index: number) => {
    if (!processedQuestions[index].visited) {
      const updatedQuestions = [...processedQuestions];
      updatedQuestions[index].visited = true;
      setProcessedQuestions(updatedQuestions);
      setNotVisited(notVisited - 1);
    }
  };

  if (loading) {
    return <LoadingScreen />;
  }

  return (
    <div className="grid grid-cols-4 grid-rows-8 h-screen">
      {/* Navbar */}
      <div className="col-span-4 row-span-1 bg-slate-50 shadow-md shadow-slate-200 z-10 flex items-center justify-between p-4 x-10">
        <h1>{finalObj.course}</h1>
        <div className="flex justify-around items-center">
          <h1 className="m-5">Duration: {finalObj.duration} min</h1>
          <div className="mr-5">
            <Timer duration={parseInt(finalObj.duration) * 60} />
          </div>
          <div className="flex flex-col">
            <h1>Sai Tharak Reddy</h1>
            <p>id: 5200859</p>
          </div>
        </div>
      </div>
      {/* Navbar */}

      {/* Question Display */}
      <div className="p-8 w-full col-span-3 row-start-2 row-span-6 overflow-auto">
        {processedQuestions.length > 0 && (
          <QuestionDisplay question={processedQuestions[questionIndex]} questionIndex={questionIndex} key={questionIndex} />
        )}
      </div>
      {/* Question Display */}

      {/* Bottom Navigation */}
      <div className="col-span-3 row-span-1 row-start-8 bg-slate-100 flex justify-between p-6 items-center">
        <div>
          <button
            onClick={handlePrevQuestion}
            className="bg-slate-50 hover:bg-indigo-500 text-black font-bold py-2 px-4 rounded-l-lg border-t-2 border-b-2 border-l-2 border-indigo-500"
          >
            <ArrowBackIcon /> Prev
          </button>
          <button
            onClick={handleNextQuestion}
            className="bg-slate-50 hover:bg-indigo-500 text-black font-bold py-2 px-4 rounded-r-lg border-t-2 border-b-2 border-r-2 border-indigo-500"
          >
            Next <ArrowForwardIcon />
          </button>
        </div>
        <div className="flex justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            onClick={handleSaveAndNextQuestion}
          >
            Save & Next
          </button>
        </div>
      </div>
      {/* Bottom Navigation */}

      {/* Side Navigation */}
      <div className="col-span-1 row-span-6 bg-slate-50 row-start-2 row-end-8 overflow-auto p-6">
        <label className="block mb-4 text-sm font-medium text-gray-900">Questions Status</label>
        <div className="grid grid-cols-2 grid-rows-2 gap-y-4">
          <div>
            <div className="flex justify-center items-center h-7 w-7 bg-gray-200 rounded-md">{notVisited}</div>
            <p>Not visited</p>
          </div>
          <div>
            <div className="flex justify-center items-center h-7 w-7 rounded-md bg-red-400">{notAnswered}</div>
            <p>Not Answered</p>
          </div>
          <div>
            <div className="flex justify-center items-center h-7 w-7 rounded-md bg-green-400">{answered}</div>
            <p>Answered</p>
          </div>
        </div>
        <label className="block mt-6 mb-4 text-sm font-medium text-gray-900">Choose A Question</label>
        <div className="grid grid-cols-7 grid-rows-auto">
          {processedQuestions.map((_question, index) => (
            <div
              key={index}
              className={`flex justify-center items-center h-8 w-8 ${_question.answered ? "bg-green-300": _question.visited ? "bg-red-400" : "bg-gray-200"} rounded-md cursor-pointer`}
              onClick={() => {
                handleOntapSideBar(index);
              }}
            >
              {index + 1}
            </div>
          ))}
        </div>
      </div>
      {/* Side Navigation */}

      {/* Submit Button */}
      <div className="bg-slate-50 col-span-1 row-span-1 row-start-8 flex justify-center items-center w-full">
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500" onClick={openModal}>
          Submit
        </button>
      </div>
      {/* Submit Button */}



      <Modal isOpen={modal} onClose={closeModal} totalQuestions={processedQuestions.length} answeredQuestions={answered} answers={processedQuestions}/>
    </div>
  );
};

export default WriteExamScreen;
