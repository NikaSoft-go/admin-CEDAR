import { useState } from 'react';
import {FiTrash2} from "react-icons/fi";
import {IoMdAddCircleOutline} from "react-icons/io";

const ResponsibilityTable = ({ column1, initalItems }) => {
    const [responsibilities, setResponsibilities] = useState(initalItems);

    const handleAddRow = () => {
        setResponsibilities([...responsibilities, { category: '', values: [''] }]);
    };

    const handleRemoveRow = (index) => {
        const updatedResponsibilities = [...responsibilities];
        updatedResponsibilities.splice(index, 1);
        setResponsibilities(updatedResponsibilities);
    };

    const handleRemoveValue = (rowIndex, valueIndex) => {
        const updatedResponsibilities = [...responsibilities];
        updatedResponsibilities[rowIndex].values.splice(valueIndex, 1);
        setResponsibilities(updatedResponsibilities);
    };

    const handleCategoryChange = (index, value) => {
        const updatedResponsibilities = [...responsibilities];
        updatedResponsibilities[index].category = value;
        setResponsibilities(updatedResponsibilities);
    };

    const handleValueChange = (rowIndex, valueIndex, value) => {
        const updatedResponsibilities = [...responsibilities];
        updatedResponsibilities[rowIndex].values[valueIndex] = value;
        setResponsibilities(updatedResponsibilities);
    };

    const handleAddValue = (rowIndex) => {
        const updatedResponsibilities = [...responsibilities];
        updatedResponsibilities[rowIndex].values.push('');
        setResponsibilities(updatedResponsibilities);
    };

    return (
        <div className="responsibility-table">
            <table className="border-collapse w-full">
                <thead>
                <tr>
                    <th className="border p-2">Category</th>
                    <th className="border p-2">{column1}</th>
                    <th className="border p-2"></th>
                </tr>
                </thead>
                <tbody>
                {responsibilities.map((row, rowIndex) => (
                    <tr key={rowIndex}>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                value={row.category}
                                onChange={(e) => handleCategoryChange(rowIndex, e.target.value)}
                                placeholder="Category"
                            />
                            {responsibilities.length > 1 && (
                                <button
                                    type="button"
                                    className="remove-btn text-white rounded p-1 mt-1"
                                    onClick={() => handleRemoveRow(rowIndex)}
                                >
                                    <FiTrash2 />
                                </button>
                            )}
                        </td>
                        <td className="border p-2">
                            {row.values.map((value, valueIndex) => (
                                <div key={valueIndex} className="flex items-center mb-2">
                                    <input
                                        type="text"
                                        className="w-full p-1 mr-2"
                                        value={value}
                                        onChange={(e) => handleValueChange(rowIndex, valueIndex, e.target.value)}
                                        placeholder="Responsibility"
                                    />
                                    {row.values.length > 1 && (
                                        <button
                                            type="button"
                                            className="remove-btn text-white rounded p-1"
                                            onClick={() => handleRemoveValue(rowIndex, valueIndex)}
                                        >
                                            <FiTrash2 />
                                        </button>
                                    )}
                                </div>
                            ))}
                            <button
                                type="button"
                                className="add-item-btn text-white rounded px-2 py-1"
                                onClick={() => handleAddValue(rowIndex)}
                            >
                                <IoMdAddCircleOutline />
                            </button>
                        </td>
                        <td className="border p-2"></td>
                    </tr>
                ))}
                </tbody>
            </table>
            <button
                type="button"
                className="add-item-btn text-white rounded px-2 py-1 mt-2"
                onClick={handleAddRow}
            >
                <IoMdAddCircleOutline />
            </button>
        </div>
    );
};

export default ResponsibilityTable;
