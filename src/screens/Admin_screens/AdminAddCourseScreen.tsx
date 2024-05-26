import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import PreviewModal from './AdminComponents/previewModal';

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


const AdminAddCourseScreen: React.FC = () => {
  const [imagePreview, setImagePreview] = useState<string | ArrayBuffer | null>(null);
  const [sessions,setSessions] = useState<string[]>([]);
  const [isOpen, setIsOpen] = useState(false);
  const [finalCourseValues, setFinalCourseValues] = useState<CourseCard>({});
  function closeModal() {
      setIsOpen(false);
  }

  function openModal() {
      setIsOpen(true);
  }

  const handleFormSubmit = (values: any) => {
    if (sessions.length === 0) {
      console.log("fill sessions");
      
    }
    const formValues = { ...values, sessions: sessions };
    console.log(formValues);
    setFinalCourseValues(formValues);
    openModal();

  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.currentTarget.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleAddSessions = () => {
    const inputElement = document.getElementById('session') as HTMLInputElement;
    if (inputElement) {
      const newSession = inputElement.value;
      console.log(newSession);
      setSessions([...sessions,newSession]);
      inputElement.value = "";
    }
  }

  const handleDeleteSession = (index : number) => {
    setSessions(sessions.filter((_, i) => i !== index));
  }

  return (
    <div className="w-full h-full overflow-auto mx-auto p-6 bg-white rounded shadow-md lg:px-24">
      <h1 className="text-3xl font-bold mb-6 text-center text-blue-600">Create New Course</h1>
      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
          setFieldValue,
        }) => (
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col">
                <label htmlFor="category" className="font-semibold">Category</label>
                <select
                  id="category"
                  name="category"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.category}
                  className={`p-2 border rounded-md ${touched.category && errors.category ? 'border-red-500' : 'border-gray-300'}`}
                >
                  <option value="">Select Category</option>
                  <option value="technology">Technology</option>
                  <option value="business">Business</option>
                  <option value="art">Art</option>
                  <option value="science">Science</option>
                </select>
                {touched.category && errors.category && <div className="text-red-500 text-sm mt-1">{errors.category}</div>}
              </div>
              <div className="flex flex-col">
                <label htmlFor="courseName" className="font-semibold">Course Name</label>
                <input
                  type="text"
                  id="courseName"
                  name="courseName"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.courseName}
                  className={`p-2 border rounded-md ${touched.courseName && errors.courseName ? 'border-red-500' : 'border-gray-300'}`}
                />
                {touched.courseName && errors.courseName && <div className="text-red-500 text-sm mt-1">{errors.courseName}</div>}
              </div>
            </div>
            <div className="flex flex-col ">
              <label htmlFor="description" className="font-semibold">Description</label>
              <textarea
                id="description"
                name="description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                rows={4}
                className={`p-2 border rounded-md ${touched.description && errors.description ? 'border-red-500' : 'border-gray-300'}`}
              />
              {touched.description && errors.description && <div className="text-red-500 text-sm mt-1">{errors.description}</div>}
            </div>



            <div className="grid grid-cols-1 gap-6">
            <label htmlFor="courseAvailability" className="font-semibold">Course Availability :</label>
              <div className="flex flex-row ">
                  <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="online"
                    checked={values.online}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4 rounded-xl"
                  />
                  <label className="font-semibold">Online</label>
                </div>
                <div className="flex items-center ml-4">
                  <input
                    type="checkbox"
                    name="offline"
                    checked={values.offline}
                    onChange={handleChange}
                    className="mr-2 h-4 w-4"
                  />
                  <label className="font-semibold">Offline</label>
                </div>
              </div>

            </div>

            <div className="flex flex-col">
            <label htmlFor="sessions" className="font-semibold">Sessions</label>

              <div className='flex flex-row '>
                <input
                    type="text"
                    id="session"
                    name="session"
                    onBlur={handleBlur}
                    // onChange={handleChange}
                    // value={values.courseName}


                    // onChange={handleChange}
                    // value={sessions}


                    className={`p-2 border rounded-md border-gray-400 ${touched.sessions && errors.sessions ? 'border-red-500' : 'border-gray-300'}`}
                  />
                <button className="py-2 px-4 rounded-md border-2 border-blue-300 bg-blue-400 hover:bg-blue-200 ml-4" onClick={handleAddSessions} type='button'>
                  ADD
                </button>
              </div>

              <div className='flex flex-col'>
                {
                  sessions.map((session,index)=>(
                    <div className='flex flex-row m-2' key={index}>
                      <p className="mr-4">{session}</p>
                      <button className="hover:bg-slate-200 rounded-full" onClick={() => {handleDeleteSession(index)}}><DeleteForeverIcon color='warning' fontSize='small'/></button>
                    </div>
                  ))
                }
              </div>


            </div>










            <div className="flex flex-col">
              <label htmlFor="price" className="font-semibold">Price</label>
              <input
                type="text"
                id="price"
                name="price"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.price}
                className={`p-2 border rounded-md ${touched.price && errors.price ? 'border-red-500' : 'border-gray-300'}`}
              />
              {touched.price && errors.price && <div className="text-red-500 text-sm mt-1">{errors.price}</div>}
            </div>
            <div className="flex flex-col">
              <label htmlFor="image" className="font-semibold ">Upload Image</label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={(event) => {
                  handleImageChange(event);
                  setFieldValue('image', event.currentTarget.files?.[0]);
                }}
                className="hidden"/>
              <button
                type="button"
                onClick={() => document.getElementById('image')?.click()}
                className="mt-2 px-2 py-2 w-28 bg-blue-500 text-white rounded">Choose File</button>

              {touched.image && errors.image && <div className="text-red-500 text-sm mt-1">{errors.image}</div>}
            </div>
            {imagePreview && (
              <div className="flex justify-start mt-4">
                <img src={imagePreview as string} alt="Preview" className="max-h-52 rounded-md border border-gray-300" />
              </div>
            )}
            <div className="flex justify-end">
              <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-md shadow">Create New Course</button>
            </div>
          </form>
        )}
      </Formik>

    <PreviewModal isOpen={isOpen} closeModal={closeModal} finalCourseValues={finalCourseValues}/>

    </div>
  );
};

const checkoutSchema = yup.object().shape({
  category: yup.string().required('required'),
  courseName: yup.string().required('required'),
  description: yup.string().required('required'),
  online: yup.boolean(),
  offline: yup.boolean(),
  price: yup.number().required('required').positive('must be a positive number'),
  image: yup.mixed().required('required'),
});

const initialValues = {
  category: '',
  courseName: '',
  description: '',
  online: false,
  offline: false,
  price: '',
  image: null,
  sessions:[]
};

export default AdminAddCourseScreen;
