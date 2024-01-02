// src/components/FormComponent.js

import {useEffect, useState} from 'react';
import {utTableResults} from "../../utils/data.js";

const FormComponent = ({ setResults }) => {
    const [formData, setFormData] = useState({
        rows: utTableResults,
    });

    const handleChange = (event, rowIndex, degree, valueKey) => {
        const { name, value } = event.target;

        if (name === 'rowName') {
            setFormData((prevData) => ({
                ...prevData,
                rows: prevData.rows.map((row, index) =>
                    index === rowIndex ? { ...row, rowName: value } : row
                ),
            }));
        } else {
            setFormData((prevData) => ({
                ...prevData,
                rows: prevData.rows.map((row, index) =>
                    index === rowIndex
                        ? {
                            ...row,
                            degrees: {
                                ...row.degrees,
                                [degree]: {
                                    ...row.degrees[degree],
                                    [valueKey]: value,
                                },
                            },
                        }
                        : row
                ),
            }));
        }
    };

    const handleAddRow = () => {
        setFormData((prevData) => ({
            ...prevData,
            rows: [
                ...prevData.rows,
                {
                    rowName: '',
                    degrees: {
                        '0': { value1: '', value2: '' },
                        '90': { value1: '', value2: '' },
                    },
                },
            ],
        }));
    };

    const handleAddDegree = (rowIndex) => {
        setFormData((prevData) => ({
            ...prevData,
            rows: prevData.rows.map((row, index) =>
                index === rowIndex
                    ? {
                        ...row,
                        degrees: {
                            ...row.degrees,
                            [`${Object.keys(row.degrees).length * 90}`]: { value1: '', value2: '' },
                        },
                    }
                    : row
            ),
        }));
    };

    const handleDeleteRow = (rowIndex) => {
        setFormData((prevData) => ({
            ...prevData,
            rows: prevData.rows.filter((_, index) => index !== rowIndex),
        }));
    };

    const handleDeleteDegree = (rowIndex, degree) => {
        setFormData((prevData) => ({
            ...prevData,
            rows: prevData.rows.map((row, index) => ({
                ...row,
                degrees: Object.keys(row.degrees).reduce((acc, key) => {
                    if (!(index === rowIndex && key === degree)) {
                        acc[key] = row.degrees[key];
                    }
                    return acc;
                }, {}),
            })),
        }));
    };

    useEffect(() => {
        setResults(formData);
    }, [formData]);

    return (
        <form className="grid grid-cols-2 gap-4 mt-8">
            {formData.rows.map((row, rowIndex) => (
                <div key={rowIndex} className="mb-4 grid grid-cols-2 gap-4">
                    <div>
                        <label htmlFor={`rowName_${rowIndex}`} className="block text-sm font-medium text-gray-600">
                            Row {rowIndex + 1}
                        </label>
                        <input
                            type="text"
                            id={`rowName_${rowIndex}`}
                            name={`rowName_${rowIndex}`}
                            value={row.rowName}
                            onChange={(event) => handleChange(event, rowIndex)}
                            className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                        />
                        <button
                            type="button"
                            onClick={() => handleDeleteRow(rowIndex)}
                            className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                        >
                            Delete Row
                        </button>
                    </div>

                    <div>
                        {Object.entries(row.degrees).map(([degree, values]) => (
                            <div key={degree} className="mb-2">
                                <label
                                    htmlFor={`degree_${rowIndex}_${degree}_value1`}
                                    className="block text-sm font-medium text-gray-600"
                                >
                                    {degree} degrees - Value 1
                                </label>
                                <input
                                    type="text"
                                    id={`degree_${rowIndex}_${degree}_value1`}
                                    name={`degree_${rowIndex}_${degree}_value1`}
                                    value={values.value1}
                                    onChange={(event) => handleChange(event, rowIndex, degree, 'value1')}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />

                                <label
                                    htmlFor={`degree_${rowIndex}_${degree}_value2`}
                                    className="block text-sm font-medium text-gray-600 mt-2"
                                >
                                    Value 2
                                </label>
                                <input
                                    type="text"
                                    id={`degree_${rowIndex}_${degree}_value2`}
                                    name={`degree_${rowIndex}_${degree}_value2`}
                                    value={values.value2}
                                    onChange={(event) => handleChange(event, rowIndex, degree, 'value2')}
                                    className="mt-1 p-2 border border-gray-300 rounded-md w-full"
                                />

                                <button
                                    type="button"
                                    onClick={() => handleDeleteDegree(rowIndex, degree)}
                                    className="mt-2 px-2 py-1 bg-red-500 text-white rounded-md hover:bg-red-600"
                                >
                                    Delete Degree
                                </button>
                            </div>
                        ))}
                        <button
                            type="button"
                            onClick={() => handleAddDegree(rowIndex)}
                            className="mt-2 px-2 py-1 bg-blue-500 text-white rounded-md hover:bg-blue-600"
                        >
                            Add Degree
                        </button>
                    </div>
                </div>
            ))}

            <div className="mt-4">
                <button
                    type="button"
                    onClick={handleAddRow}
                    className="px-4 py-2 mr-2 bg-green-500 text-white rounded-md hover:bg-green-600"
                >
                    Add Row
                </button>
            </div>
        </form>
    );
};

export default FormComponent;
