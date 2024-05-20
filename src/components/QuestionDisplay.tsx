import React, { useState, useEffect } from 'react';

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

interface QuestionDisplayProps {
  questionIndex: number;
  question: Question;
}

const QuestionDisplay: React.FC<QuestionDisplayProps> = ({ questionIndex, question }) => {
  const [selectedOption, setSelectedOption] = useState<number | null>(null);

  useEffect(() => {
    if (question.optionsSelected && question.optionsSelected.length > 0) {
      setSelectedOption(question.optionsSelected[0]);
      question.visited = true;
    }
  }, [question]);

  const handleOptionChange = (index: number) => {
    setSelectedOption(index);

    question.answered = true;
  };

  return (
    <div>
      <div className="flex flex-col">
        <div className="flex items-center mb-4">
          <h2 className="text-2xl font-semibold mr-3">{`Question ${questionIndex + 1}`}</h2>
          <span className="bg-blue-500 text-white text-sm font-medium px-3 py-1 rounded-full">
            {question.questionType}
          </span>
        </div>
        <span className="w-full border-t-2 mb-2"></span>
      </div>
      <div>
        <p className="text-lg mb-4">{question.question}</p>
        <form className="space-y-3">
          {question.options.map((option, index) => (
            <div key={`option${questionIndex}${index}`}>
              <label className="flex items-center space-x-3">
                <input
                  type="radio"
                  name={`Question ${questionIndex + 1}`}
                  id={`option${questionIndex}${index}`}
                  value={option}
                  className="form-radio h-4 w-4 text-blue-600"
                  checked={selectedOption === index}
                  onChange={() => handleOptionChange(index)}
                />
                <span>{option}</span>
              </label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default QuestionDisplay;
