import React from 'react';
import { Dialog, DialogPanel, Transition, TransitionChild } from '@headlessui/react';
import { Fragment } from 'react';
import CourseCard from '../../../components/CourseCard';

interface CourseCard{
    category?:string;
    courseName?:string;
    description?:string;
    online?:boolean;
    offline?:boolean;
    sessions?:string[];
    price?:number;
    image?:File;
    showActions?:boolean;
}

interface PreviewModalProps {
  isOpen: boolean;
  closeModal: () => void;
  finalCourseValues:CourseCard;
}

const PreviewModal: React.FC<PreviewModalProps> = ({ isOpen, closeModal,finalCourseValues }) => {

    console.log(finalCourseValues);
    
  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-10 overflow-y-auto" onClose={closeModal}>
          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>

          <TransitionChild
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <DialogPanel className="flex items-center justify-start min-h-full p-4 ">
              <div className="w-full  bg-white rounded-lg shadow-lg">
                <div className="px-4 py-2 border-b border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-800">Preview</h3>
                </div>
                <div className="p-4">
                  <CourseCard courseName={finalCourseValues.courseName} description={finalCourseValues.description} offline = {finalCourseValues.offline} online = {finalCourseValues.online} sessions={finalCourseValues.sessions} price={finalCourseValues.price} image={finalCourseValues.image}/>
                </div>
                <div className="flex justify-between p-4 border-t border-gray-200">
                  <button
                    onClick={closeModal}
                    className="px-4 py-2 text-sm font-medium text-gray-600 hover:text-gray-800 focus:outline-none"
                  >
                    Close
                  </button>
                  <button className="px-4 py-2 text-sm font-medium text-blue-600 hover:text-blue-800 focus:outline-none">
                    Save
                  </button>
                </div>
              </div>
            </DialogPanel>
          </TransitionChild>
        </Dialog>
      </Transition>
    </>
  );
};

export default PreviewModal;
