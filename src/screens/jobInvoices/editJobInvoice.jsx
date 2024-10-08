import {useEffect, useState} from 'react';
import Sidebar from '../../components/sidebar/index.jsx';
import Button from '../../components/button/index.jsx';
import {IoMdAddCircleOutline} from "react-icons/io";
import {FiTrash2} from "react-icons/fi";
import {axiosClient} from "../../libs/axiosClient.js";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";

const EditInvoice = () => {
    const [costItems, setCostItems] = useState([
        {
            item: 1,
            quantity: '',
            description: '',
            unitPrice: '',
            totalCost: ''
        },
    ]);

    const navigate = useNavigate();

    const [state, setState] = useState({});
    const {id} = useParams();

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

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

    const handleAddInvoice = async (e) => {
        e.preventDefault();
        try {
            const payload = {
                ...state,
                invoice_data: JSON.stringify(costItems),
            }

            const response = await axiosClient.patch(
                `/job-invoices/update-job-invoice/${id}/`,
                payload
            );
            toast.success(response.data.message);
            navigate('/invoices')
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
        }
    }

    const getInvoice = async (id) => {
        try {
            const resp = await axiosClient.get(`/job-invoices/get-job-invoice/${id}/`);
            // eslint-disable-next-line no-unused-vars
            const {invoice_number, invoice_data, ...otherData} = resp.data.data;
            setState(otherData);
            setCostItems(JSON.parse(invoice_data));
        } catch (err) {
            console.log(err);
        }
    }

    useEffect(() => {
        if (id) {
            getInvoice(id);
        }
    }, [id]);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Edit Invoice</h1>
                        {/* Add Invoice Form (Example) */}
                        <form onSubmit={handleAddInvoice}>
                            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Receiver */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Receiver Name:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Receiver Name"
                                        name="receiver"
                                        onChange={handleChange}
                                        value={state.receiver}
                                        required
                                    />
                                </div>

                                {/* Receiver Address */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Receiver Address:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Receiver Address"
                                        name="receiver_address"
                                        value={state.receiver_address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Invoice Date */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Invoice Date:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Invoice Date"
                                        name="invoice_date"
                                        value={state.invoice_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Due date */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Due date:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Due date"
                                        name="due_date"
                                        value={state.due_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Currency */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Currency:</label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Currency"
                                        name="currency"
                                        onChange={handleChange}
                                        value={state.currency}
                                        required
                                    >
                                        <option>Select a currency</option>
                                        <option value="USD">USD</option>
                                        <option value="GHC">GHC</option>
                                    </select>
                                </div>
                            </div>

                            {/* Cost */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Cost:</label>
                                <table className="w-full border">
                                    <thead>
                                        <tr>
                                            <th className="border p-2">Quantity</th>
                                            <th className="border p-2">Description</th>
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
                                                        placeholder="Quantity"
                                                        value={cost.quantity}
                                                        required
                                                        onChange={(e) => handleCostItemChange(index, 'quantity', e.target.value)}
                                                    />
                                                </td>
                                                <td className="border p-2">
                                                    <input
                                                        type="text"
                                                        className="w-full p-1"
                                                        placeholder="Description"
                                                        value={cost.description}
                                                        onChange={(e) =>
                                                            handleCostItemChange(index, 'description', e.target.value)
                                                        }
                                                        required
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
                                                        required
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
                                                        required
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

                            <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* NHL % */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">NHL (%):</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="NHL Percent"
                                        name="nhl_percent"
                                        value={state.nhl_percent}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* NHL Amount */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">NHL Amount:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="NHL Amount"
                                        name="nhl"
                                        value={state.nhl}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* GETFL % */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">GETFL (%):</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="GETFL Percent"
                                        name="getfl_percent"
                                        value={state.getfl_percent}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* GETFL Amount*/}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">GETFL Amount:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="GETFL Amount"
                                        name="getfl"
                                        value={state.getfl}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* COVID % */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">COVID (%):</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="COVID Percent"
                                        name="covid_percent"
                                        value={state.covid_percent}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* COVID Amount */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">COVID Amount:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="COVID Amount"
                                        name="covid"
                                        value={state.covid}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* VAT % */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">VAT (%):</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="VAT Percent"
                                        name="vat_percent"
                                        value={state.vat_percent}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* VAT Amount */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">VAT Amount:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="VAT Amount"
                                        name="vat"
                                        value={state.vat}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Subtotal */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Subtotal:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Subtotal"
                                        name="subtotal"
                                        value={state.subtotal}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Total before tax */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Total Before Tax:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Total before tax"
                                        name="total_before_tax"
                                        value={state.total_before_tax}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Total amount */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Total amount:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Total amount"
                                        name="total_amount"
                                        value={state.total_amount}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Approved by */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Approved By:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Approved By"
                                        name="approver"
                                        value={state.approver}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Approver Contact */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Approver Contact:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Approver Contact"
                                        name="approver_contact"
                                        value={state.approver_contact}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Account Number */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Account Number:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Account Number"
                                        name="account_number"
                                        value={state.account_number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Bank Name */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Bank Name:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Bank Name"
                                        name="bank_name"
                                        value={state.bank_name}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Routing */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Swift code / sort code:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Swift code / sort code"
                                        name="routing"
                                        value={state.routing}
                                        onChange={handleChange}
                                    />
                                </div>

                               {/* Terms and Conditions */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Terms and Conditions:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Terms and Conditions"
                                        name="terms_and_conditions"
                                        value={state.terms_and_conditions}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <Button>Update Invoice</Button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EditInvoice;
