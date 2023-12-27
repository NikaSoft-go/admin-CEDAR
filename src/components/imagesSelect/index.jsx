import {useState, useEffect} from 'react';

const FileUploadComponent = ({ selectedLinks, setImages }) => {
    const [files, setFiles] = useState([]);
    const [rawFiles, setRawFiles] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [fileName, setFileName] = useState('');
    const [file, setFile] = useState(null);
    const [rawFile, setRawFile] = useState(null);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        setFiles(selectedLinks || []);
    }, [selectedLinks]);

    const openModal = (index) => {
        setIsModalOpen(true);
        if (index !== undefined) {
            setEditIndex(index);
            setFileName(files[index].name);
            // If the file has a link property, set it as the file
            setFile(files[index].file || null);
        } else {
            setEditIndex(null);
            setFileName('');
            setFile(null);
        }
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setFileName('');
        setFile(null);
        setEditIndex(null);
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile) {
            setRawFile(selectedFile);
            setFile(selectedFile);

            // Use FileReader to read the contents of the image and set it as a preview
            const reader = new FileReader();
            reader.onloadend = () => {
                const imagePreview = reader.result;
                setFile((prevFile) => ({...prevFile, preview: imagePreview}));
            };
            reader.readAsDataURL(selectedFile);
        }
    };

    const handleAddFile = () => {
        if (fileName && file && rawFile) {
            if (editIndex !== null) {
                // Edit existing file
                const updatedFiles = [...files];
                updatedFiles[editIndex] = {name: fileName, file};
                const updatedRawFiles = [...rawFiles];
                updatedRawFiles[editIndex] = {name: fileName, rawFile};
                setRawFiles(updatedRawFiles);
            } else {
                // Add new file
                setFiles([...files, {name: fileName, file}]);
                setRawFiles([...rawFiles, {name: fileName, rawFile}]);
            }
            closeModal();
        } else {
            // Handle validation or display an error message
            alert('Please enter a valid filename and select a file.');
        }
    };

    const handleEdit = (index) => {
        openModal(index);
    };

    const handleDelete = (index) => {
        const updatedFiles = [...files];
        updatedFiles.splice(index, 1);
        setFiles(updatedFiles);

        const updatedRawFiles = [...rawFiles];
        updatedRawFiles.splice(index, 1);
        setRawFiles(updatedRawFiles);
    };

    useEffect(() => {
        setImages(rawFiles);
    }, [rawFiles]);

    return (
        <div>
            <button
                type="button"
                onClick={() => openModal()}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
                Add File
            </button>

            {isModalOpen && (
                <div className="fixed z-10 inset-0 overflow-y-auto">
                    <div
                        className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
                        <div className="fixed inset-0 transition-opacity" aria-hidden="true">
                            <div className="absolute inset-0 bg-gray-500 opacity-75"></div>
                        </div>

                        <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
              &#8203;
            </span>

                        <div
                            className="inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:w-full sm:max-w-lg"
                            role="dialog"
                            aria-modal="true"
                            aria-labelledby="modal-headline"
                        >
                            <div className="bg-white px-4 pt-5 pb-4 sm:p-6 sm:pb-4">
                                <h3 className="text-lg leading-6 font-medium text-gray-900" id="modal-headline">
                                    Add File
                                </h3>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">File Name</label>
                                    <input
                                        type="text"
                                        onChange={(e) => setFileName(e.target.value)}
                                        value={fileName}
                                        className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                    />
                                </div>
                                <div className="mt-4">
                                    <label className="block text-sm font-medium text-gray-700">File</label>
                                    <input type="file" onChange={handleFileChange} className="mt-1 p-2 w-full"/>
                                </div>
                            </div>
                            <div className="bg-gray-50 px-4 py-3 sm:px-6 sm:flex sm:flex-row-reverse">
                                <button
                                    type="button"
                                    onClick={handleAddFile}
                                    className="w-full inline-flex justify-center rounded-md border border-transparent shadow-sm px-4 py-2 bg-blue-500 text-base font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring focus:border-blue-300 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Add
                                </button>
                                <button
                                    type="button"
                                    onClick={closeModal}
                                    className="mt-3 w-full inline-flex justify-center rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-base font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring focus:border-blue-300 sm:mt-0 sm:ml-3 sm:w-auto sm:text-sm"
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-8">
                <h2 className="text-xl font-medium mb-4">Files Preview:</h2>
                <ul>
                    {files.map((uploadedFile, index) => (
                        <li key={index} className="mb-4">
                            <div className="flex items-center">
                                {uploadedFile.file && uploadedFile.file.preview && (
                                    <img
                                        src={uploadedFile.file.preview}
                                        alt="Preview"
                                        className="w-10 h-10 object-cover mr-4"
                                    />
                                )}
                                {uploadedFile.link && (
                                    <img src={uploadedFile.link} alt="" className="w-10 h-10 object-cover mr-4"/>
                                )}
                                <div>
                                    <p className="text-lg font-semibold">{uploadedFile.name}</p>
                                    <button
                                        type="button"
                                        onClick={() => handleEdit(index)}
                                        className="text-blue-500 underline"
                                    >
                                        Edit
                                    </button>
                                    <button
                                        type="button"
                                        onClick={() => handleDelete(index)}
                                        className="ml-2 text-red-500 underline"
                                    >
                                        Delete
                                    </button>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default FileUploadComponent;
