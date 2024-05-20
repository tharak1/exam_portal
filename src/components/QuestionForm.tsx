import React, { useState } from 'react';

interface QuestionFormProps {
    index: number;
    updateQuestion: (index:number,updatedQuestion: any) => void;
    deleteQuestion: (index:number) => void;
}

const QuestionForm: React.FC<QuestionFormProps> = ({index,updateQuestion,deleteQuestion}) => {

    const [questionType, setQuestionType] = useState<string>('single Correct');
    const [options, setOptions] = useState<{ id: number; value: string }[]>([{ id: 0 , value: '' }]);

    const handleTypeChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
        setQuestionType(event.target.value);
    };

    const handleAddOption = () => {
        const newId = options.length;
        const newOption = { id: newId, value: '' };
        setOptions([...options, newOption]);
    };

    const handleOptionChange = (id: number, value: string) => {
        const updatedOptions = options.map(option => (option.id === id ? { ...option, value } : option));
        setOptions(updatedOptions);
    };

    const handleDeleteOption = (id: number) => {
        const updatedOptions = options.filter(option => option.id !== id);
        setOptions(updatedOptions);
    };

    const handleCaptureData = () => {
        const questionObject = generateQuestionObject();
        updateQuestion(index,questionObject);
    };

    const handleDeleteData = () => {
        deleteQuestion(index);
    }

    const renderOptions = () => {
        if (questionType === 'single Correct' || questionType === 'multi Correct') {
            return (
                <div className="space-y-4">
                    {options.map(option => (
                        <div className="flex items-center" key={option.id}>
                            {questionType === 'multi Correct' ? (
                                <input type="checkbox" name="options" className="mr-2" />
                            ) : (
                                <input type="radio" name="options" className="mr-2" />
                            )}
                            <input
                                type="text"
                                placeholder={`Option ${option.id + 1}`}
                                className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500"
                                value={option.value}
                                onChange={(e) => handleOptionChange(option.id, e.target.value)}
                            />
                            <button className="ml-2 text-red-500" onClick={() => handleDeleteOption(option.id)}>x</button>
                        </div>
                    ))}
                    <button className="bg-green-500 px-4 py-1 rounded-md" onClick={handleAddOption}>
                        Add Option
                    </button>
                </div>
            );
        } else if (questionType === 'numerical' || questionType === 'short answer') {
            return (
                <div className="space-y-4">
                    <div className="flex items-center">
                        <input type="text" placeholder="Enter your answer" className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500" />
                    </div>
                </div>
            );
        }
    };

    const generateQuestionObject = () => {
        const question = (document.getElementById(`question${index}`) as HTMLInputElement)?.value.trim();
        const answerKey = (document.getElementById(`ans_key${index}`) as HTMLInputElement)?.value.trim();
        const points = (document.getElementById(`points${index}`) as HTMLInputElement)?.value.trim();

        const correctAnswer = answerKey.split(",").map(item => {
            if (questionType === "numerical") {
                return parseInt(item);
            }
            return parseInt(item.trim()) - 1;
        });
        return {
            questionType,
            question,
            options: options.map(option => option.value),
            correctAnswer,
            points: parseInt(points)
        };
    };

    return (
        <div id='question-form' className="bg-white rounded-lg shadow p-6 w-full m-4 border-2">
            <div className="flex justify-between items-center mb-4">
                <input type="text" id={`question${index}`} placeholder="Untitled Question" className="w-full border-b border-gray-300 focus:outline-none focus:border-blue-500" />
                <select id="questionType" value={questionType} onChange={handleTypeChange} className="ml-4 max-w-xs bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                    <option value="single Correct">Single Correct</option>
                    <option value="multi Correct">Multi Correct</option>
                    <option value="numerical">Numerical</option>
                    <option value="short answer">Short Answer</option>
                </select>
            </div>
            {renderOptions()}
            <div className="flex justify-between items-center mt-4">
                <div>
                    <label htmlFor="ans_key" className="block mb-2 text-sm font-medium text-gray-900 ">Answer key</label>
                    <input type="text" id={`ans_key${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="option or ans" required />
                </div>

                <div>
                    <label htmlFor="points" className="block mb-2 text-sm font-medium text-gray-900 ">Points</label>
                    <input type="text" id={`points${index}`} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="ex.1,2,.." required />
                </div>
            </div>
            <div className="flex justify-end mt-3  w-full">
                <button className="bg-red-400 px-4 py-1 rounded-md mr-3" onClick={handleDeleteData}>
                    Delete
                </button>
                <button className="bg-slate-500 px-4 py-1 rounded-md" onClick={handleCaptureData}>
                    Draft it
                </button>
            </div>
        </div>
    );
}

export default QuestionForm;