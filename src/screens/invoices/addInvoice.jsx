import React, { useState } from 'react';
import Sidebar from '../../components/sidebar/index.jsx';
import Button from '../../components/button/index.jsx';
import ResponsibilityTable from "../../components/invoices/tableA.jsx";
import {IoMdAddCircleOutline} from "react-icons/io";
import {FiTrash2} from "react-icons/fi";

const AddInvoicePage = () => {
    // Your form logic goes here
    const [scopeItems, setScopeItems] = useState(['']);
    const [resourceItems, setResourceItems] = useState(['']);
    const [costItems, setCostItems] = useState([
        { item: '', scope: '', quantity: '', unitPrice: '', totalCost: '' },
    ]);

    const responsibilitiesInitials = [
        { category: "Customer's Responsibility", values: ['Responsibility 1', 'Responsibility 2'] },
    ]

    const termsInitials = [
        {
            category: "General",
            values: [
                'Refer to General Terms and Conditions here, notwithstanding',
                '30 days from invoice'
            ]
        },
    ]

    const handleAddScope = () => {
        setScopeItems([...scopeItems, '']);
    };

    const handleRemoveScope = (index) => {
        const updatedScopeItems = [...scopeItems];
        updatedScopeItems.splice(index, 1);
        setScopeItems(updatedScopeItems);
    };

    const handleAddResource = () => {
        setResourceItems([...resourceItems, '']);
    };

    const handleRemoveResource = (index) => {
        const updatedResourceItems = [...resourceItems];
        updatedResourceItems.splice(index, 1);
        setResourceItems(updatedResourceItems);
    };

    const handleAddCostItem = () => {
        setCostItems([
            ...costItems,
            { item: '', scope: '', quantity: '', unitPrice: '', totalCost: '' },
        ]);
    };

    const handleRemoveCostItem = (index) => {
        const updatedCostItems = [...costItems];
        updatedCostItems.splice(index, 1);
        setCostItems(updatedCostItems);
    };

    const handleCostItemChange = (index, field, value) => {
        const updatedCostItems = [...costItems];
        updatedCostItems[index][field] = value;
        setCostItems(updatedCostItems);
    };

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Add Invoice</h1>
                        {/* Add Invoice Form (Example) */}
                        <form>
                            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Date */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Date:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="date"
                                        placeholder="Date"
                                    />
                                </div>

                                {/* Client Name */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Client Name:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Client Name"
                                    />
                                </div>

                                {/* Prepared By */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Prepared By:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Prepared By"
                                    />
                                </div>

                                {/* Requirements */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Requirements:</label>
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Requirements"
                                    />
                                </div>
                            </div>

                            {/* Scope */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Scope:</label>
                                {scopeItems.map((scope, index) => (
                                    <div key={index} className="flex items-center mb-2">
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                                            type="text"
                                            placeholder="Scope"
                                            value={scope}
                                            onChange={(e) => {
                                                const updatedScopeItems = [...scopeItems];
                                                updatedScopeItems[index] = e.target.value;
                                                setScopeItems(updatedScopeItems);
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="remove-btn rounded px-2 py-1"
                                            onClick={() => handleRemoveScope(index)}
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="add-item-btn text-white rounded px-2 py-1"
                                    onClick={handleAddScope}
                                >
                                    <IoMdAddCircleOutline />
                                </button>
                            </div>

                            {/* Resources */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Resources:</label>
                                {resourceItems.map((resource, index) => (
                                    <div key={index} className="flex items-center mb-2">
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline mr-2"
                                            type="text"
                                            placeholder="Resource"
                                            value={resource}
                                            onChange={(e) => {
                                                const updatedResourceItems = [...resourceItems];
                                                updatedResourceItems[index] = e.target.value;
                                                setResourceItems(updatedResourceItems);
                                            }}
                                        />
                                        <button
                                            type="button"
                                            className="remove-btn rounded px-2 py-1"
                                            onClick={() => handleRemoveResource(index)}
                                        >
                                            <FiTrash2 />
                                        </button>
                                    </div>
                                ))}
                                <button
                                    type="button"
                                    className="add-item-btn text-white rounded px-2 py-1"
                                    onClick={handleAddResource}
                                >
                                    <IoMdAddCircleOutline />
                                </button>
                            </div>

                            {/* Cost */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Cost:</label>
                                <table className="w-full border">
                                    <thead>
                                    <tr>
                                        <th className="border p-2">Item</th>
                                        <th className="border p-2">Scope</th>
                                        <th className="border p-2">Quantity</th>
                                        <th className="border p-2">Unit Price</th>
                                        <th className="border p-2">Total Cost</th>
                                        <th className="border p-2"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {costItems.map((cost, index) => (
                                        <tr key={index}>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Item"
                                                    value={cost.item}
                                                    onChange={(e) => handleCostItemChange(index, 'item', e.target.value)}
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Scope"
                                                    value={cost.scope}
                                                    onChange={(e) => handleCostItemChange(index, 'scope', e.target.value)}
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Quantity"
                                                    value={cost.quantity}
                                                    onChange={(e) =>
                                                        handleCostItemChange(index, 'quantity', e.target.value)
                                                    }
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Unit Price"
                                                    value={cost.unitPrice}
                                                    onChange={(e) =>
                                                        handleCostItemChange(index, 'unitPrice', e.target.value)
                                                    }
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Total Cost"
                                                    value={cost.totalCost}
                                                    onChange={(e) =>
                                                        handleCostItemChange(index, 'totalCost', e.target.value)
                                                    }
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <button
                                                    type="button"
                                                    className="remove-btn rounded p-1"
                                                    onClick={() => handleRemoveCostItem(index)}
                                                >
                                                    <FiTrash2 />
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <button
                                    type="button"
                                    className="add-item-btn text-white rounded px-2 py-1"
                                    onClick={handleAddCostItem}
                                >
                                    <IoMdAddCircleOutline />
                                </button>
                            </div>

                            {/* Responsibility */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Responsibilities</label>
                                <ResponsibilityTable
                                    column1="Responsibilities"
                                    initalItems={responsibilitiesInitials}
                                />
                            </div>

                            {/* Terms */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Terms</label>
                                <ResponsibilityTable
                                    column1="Terms"
                                    initalItems={termsInitials}
                                />
                            </div>

                            <Button>Add Invoice</Button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AddInvoicePage;
