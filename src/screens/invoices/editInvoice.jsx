import {useEffect, useState} from 'react';
import Sidebar from '../../components/sidebar/index.jsx';
import Button from '../../components/button/index.jsx';
import ResponsibilityTable from "../../components/invoices/tableA.jsx";
import {IoMdAddCircleOutline} from "react-icons/io";
import {FiTrash2} from "react-icons/fi";
import {axiosClient} from "../../libs/axiosClient.js";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
// import SignatureUpload from "../../components/signatureUpload/index.jsx";

const EditJobQuotationsPage = () => {
    const { id } = useParams();
    // Your form logic goes here

    const [scopeItems, setScopeItems] = useState([]);
    const [responsibilities, setResponsibilities] = useState([]);
    const [terms, setTerms] = useState([]);
    const [resourceItems, setResourceItems] = useState([]);
    const [costItems, setCostItems] = useState([]);
    // const [signature, setSignature] = useState(null);
    // const [defaultSignatureUrl, setDefaultSignatureUrl]= useState(null);
    const navigate = useNavigate();

    const [state, setState] = useState({
        invoice_date: "",
        invoice_type: "",
        client_name: "",
        invoice_name: "",
        requirements: "",
        prepared_by: "",
        mobile_phone_one: "",
        mobile_phone_two: "",
        presenter_phone: "",
        presenter_role: "",
        last_words: "",
        email: ""
    });

    const invoiceData = {
        ...state,
        scope: JSON.stringify(scopeItems),
        resources: JSON.stringify(resourceItems),
        costs: JSON.stringify(costItems),
        responsibilities: JSON.stringify(responsibilities),
        terms: JSON.stringify(terms),
    };

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

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

    const updateJobQuotation = async (e) => {
        e.preventDefault();
        if (!invoiceData.invoice_type) {
            toast.error("Invoice type is required")
            return;
        }
        try {
            const formData = new FormData();
            // create form-data
            Object.entries(invoiceData).forEach(([key, value]) => {
                formData.append(key, value);
            });

            // Add signature image
            // formData.append('signature', signature);
            const response = await axiosClient.patch(
                `/invoices/update-invoice/${id}/`,
                formData
            );
            toast.success(response.data.message);
            navigate('/job-quotation')
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (id) {
            const getInvoice = async () => {
                try {
                    const response = await axiosClient.get(`/invoices/get-invoice/${id}/`);
                    const {
                        invoice_name,
                        invoice_type,
                        invoice_date,
                        prepared_by,
                        client_name,
                        requirements,
                        scope,
                        resources,
                        terms,
                        costs,
                        email,
                        last_words,
                        mobile_phone_one,
                        mobile_phone_two,
                        responsibilities,
                        // signature,
                        presenter_role,
                        presenter_phone
                    }  = response.data.data;
                    setState({
                        invoice_name,
                        invoice_type,
                        invoice_date,
                        prepared_by,
                        client_name ,
                        requirements,
                        mobile_phone_one,
                        mobile_phone_two,
                        last_words,
                        email,
                        presenter_role,
                        presenter_phone
                    });
                    setScopeItems(JSON.parse(scope));
                    setResourceItems(JSON.parse(resources));
                    setTerms(JSON.parse(terms));
                    setResponsibilities(JSON.parse(responsibilities));
                    setCostItems(JSON.parse(costs));
                    // setDefaultSignatureUrl(signature);
                } catch (err) {
                    console.error(err);
                }
            }
            getInvoice();
        }

    }, [id]);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Update Job Quotation</h1>
                        {/* Add Invoice Form (Example) */}
                        <form onSubmit={updateJobQuotation}>
                            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Invoice Name */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Job Quotation Name:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Job Quotation Name"
                                        name="invoice_name"
                                        value={state.invoice_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Invoice Type */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Job Quotation Type:</label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="invoice_type"
                                        value={state.invoice_type}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option>Select an invoice type</option>
                                        <option value="UT - Ultrasonic Testing">UT - Ultrasonic Testing</option>
                                        <option value="DPI - Dye Penetrate Inspection">DPI - Dye Penetrate Inspection</option>
                                        <option value="MPI - Magnetic Particle Inspection">MPI - Magnetic Particle Inspection</option>
                                        <option value="VT - Visual Inspection">VT - Visual Inspection</option>
                                        <option value="Lifting Inspection">Lifting Inspection</option>
                                    </select>
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Date:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="date"
                                        placeholder="Date"
                                        name="invoice_date"
                                        value={state.invoice_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Client Name */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Client Name:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Client Name"
                                        name="client_name"
                                        value={state.client_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Prepared By */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Prepared By:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Prepared By"
                                        name="prepared_by"
                                        value={state.prepared_by}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Email Address */}

                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Email Address</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="email"
                                        placeholder="Email"
                                        name="email"
                                        value={state.email}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Mobile One */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Mobile Phone 1:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Mobile Phone 1"
                                        name="mobile_phone_one"
                                        value={state.mobile_phone_one}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Mobile Two */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Mobile Phone 2:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Mobile Phone 2"
                                        name="mobile_phone_two"
                                        value={state.mobile_phone_two}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Presenter Role */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Presenter Role</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Presenter Role"
                                        name="presenter_role"
                                        value={state.presenter_role}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Presenter Phone */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Presenter Phone</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Presenter Phone"
                                        name="presenter_phone"
                                        value={state.presenter_phone}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Footnote */}
                                <div className="mb-3">
                                    <label className="block text-gray-700 text-md font-bold mb-2">Footnote:</label>
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Footnote"
                                        name="last_words"
                                        value={state.last_words}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Requirements */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Requirements:</label>
                                    <textarea
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        placeholder="Requirements"
                                        name="requirements"
                                        value={state.requirements}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            {/* Scope */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Scope:</label>
                                <ResponsibilityTable
                                    column1="Scope"
                                    responsibilities={scopeItems}
                                    setResponsibilities={setScopeItems}
                                />
                            </div>

                            {/* Resources */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Resources:</label>
                                {resourceItems?.map((resource, index) => (
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
                                            required
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
                                                    required
                                                    onChange={(e) => handleCostItemChange(index, 'item', e.target.value)}
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Scope"
                                                    value={cost.scope}
                                                    required
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

                            {/* Responsibility */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Responsibilities</label>
                                <ResponsibilityTable
                                    column1="Responsibilities"
                                    responsibilities={responsibilities}
                                    setResponsibilities={setResponsibilities}
                                />
                            </div>

                            {/* Terms */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Terms</label>
                                <ResponsibilityTable
                                    column1="Terms"
                                    responsibilities={terms}
                                    setResponsibilities={setTerms}
                                />
                            </div>

                            {/*<div className="container mx-auto p-4">*/}
                            {/*    <label className="block text-gray-700 text-md font-bold mb-2">Signature upload</label>*/}
                            {/*    <SignatureUpload*/}
                            {/*        signature={signature}*/}
                            {/*        setSignature={setSignature}*/}
                            {/*        defaultSignatureUrl={defaultSignatureUrl}*/}
                            {/*    />*/}
                            {/*</div>*/}

                            <Button>Update Job Quotation</Button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EditJobQuotationsPage;
