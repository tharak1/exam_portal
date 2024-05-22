import { Dialog, Transition } from '@headlessui/react';
import { Fragment, useState } from 'react';

export default function Modal() {
    const [isOpen, setIsOpen] = useState(false);
    const [category, setCategory] = useState({ name: '', image: null });
    const [imagePreview, setImagePreview] = useState<string | null>(null);

    const handleImageChange = (e:any) => {
        const file = e.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setImagePreview(reader.result as string);
            };
            reader.readAsDataURL(file);
            setCategory({ ...category, image: file });
        }
    };

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        setIsOpen(true);
    }

    const saveCategory = () => {
        // Implement your save category logic here
        console.log('Category name:', category.name);
        console.log('Category image:', category.image);
        closeModal();
    };

    return (
        <>
            <div className="text-center rounded-lg text-white font-bold">
                <button
                    type="button"
                    onClick={openModal}
                    className="w-full bg-violet-600 py-2 text-center rounded-lg text-white font-bold p-2"
                >
                    Add Category
                </button>
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl p-2 text-left align-middle shadow-xl transition-all bg-gray-50">
                                    <section>
                                        <div className="flex flex-col items-center justify-center py-8 mx-auto lg:py-0">
                                            <div className="w-full rounded-lg md:mt-0 sm:max-w-md xl:p-0">
                                                <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                                                    <form className="space-y-4 md:space-y-6" action="#">
                                                        <div>
                                                            <label htmlFor="categoryName" className="block mb-2 text-sm font-medium text-gray-900">Category Name</label>
                                                            <input
                                                                value={category.name}
                                                                onChange={(e) => setCategory({ ...category, name: e.target.value })}
                                                                type="text"
                                                                name="categoryName"
                                                                id="categoryName"
                                                                className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                                                required
                                                            />
                                                        </div>
                                                        <div>
                                                            <label htmlFor="categoryImage" className="block mb-2 text-sm font-medium text-gray-900">Category Image</label>
                                                            <input
                                                                onChange={handleImageChange}
                                                                type="file"
                                                                name="categoryImage"
                                                                id="categoryImage"
                                                                accept="image/*"
                                                                className="border outline-0 border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 bg-gray-100"
                                                                required
                                                            />
                                                        </div>
                                                        {imagePreview && (
                                                            <div>
                                                                <img src={imagePreview} alt="Category Preview" className="object-contain w-full h-48 mt-4 rounded-lg" />
                                                            </div>
                                                        )}
                                                    </form>
                                                    <button
                                                        onClick={saveCategory}
                                                        type="button"
                                                        className="focus:outline-none w-full text-white bg-violet-600 hover:bg-violet-800 outline-0 font-medium rounded-lg text-sm px-5 py-2.5"
                                                    >
                                                        Save Category
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
