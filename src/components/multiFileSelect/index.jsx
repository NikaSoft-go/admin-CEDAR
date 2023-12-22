// MultiSelectFile.js
import { useRef, useState } from 'react';

const MultiSelectFile = ({ onFilesSelect, initialFilenames = [] }) => {
    const fileInputRef = useRef(null);
    const [selectedFiles, setSelectedFiles] = useState(initialFilenames);

    const handleFileChange = (event) => {
        const files = event.target.files;
        const selected = Array.from(files).map((file) => file.name);
        setSelectedFiles([...selectedFiles, ...selected]);
        onFilesSelect([...selectedFiles, ...files]);
    };

    const handleClearSelection = () => {
        setSelectedFiles([]);
        fileInputRef.current.value = null;
        onFilesSelect([]);
    };

    return (
        <div className="mb-4">
            <label
                className="block text-sm font-medium text-gray-700 mb-2"
                htmlFor="file-input"
            >
                Select Files
            </label>
            <div className="flex items-center space-x-4">
                <label className="cursor-pointer bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded inline-block">
                    Browse
                    <input
                        type="file"
                        className="hidden"
                        multiple
                        ref={fileInputRef}
                        onChange={handleFileChange}
                    />
                </label>
                {selectedFiles.length > 0 && (
                    <div className="flex items-center space-x-2">
                        <div className="flex-grow">
              <span className="text-gray-700 overflow-hidden overflow-ellipsis whitespace-nowrap">
                {selectedFiles.join(', ')}
              </span>
                        </div>
                        <button
                            className="text-white bg-red-500 hover:bg-red-700 py-2 px-4 rounded"
                            onClick={handleClearSelection}
                        >
                            Clear
                        </button>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MultiSelectFile;
