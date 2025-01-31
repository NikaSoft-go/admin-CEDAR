import { useState } from 'react';
import Sidebar from '../../components/sidebar/index.jsx';
import Button from '../../components/button/index.jsx';
import ResponsibilityTable from "../../components/invoices/tableA.jsx";
import {IoMdAddCircleOutline} from "react-icons/io";
import {FiTrash2} from "react-icons/fi";
import {axiosClient} from "../../libs/axiosClient.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
// import SignatureUpload from "../../components/signatureUpload/index.jsx";

const AddJobQuotationsPage = () => {
    // Your form logic goes here
    const scopeInitials = [
        {
            category: "NON-DESTRUCTIVE TESTING",
            values: [
                'a) 130m weld linear length - Ultrasonic Testing',
                'b) 250m weld linear length - Magnetic Particle',
                'c) 15 x Welded Joints - Radiographic Testing'
            ]
        },
        {
            category: "LOAD TESTING",
            values: [
                'a) Load Testing to 50T',
                'b) Loadcell',
                'c) Manifold Frame to top section'
            ]
        },
    ]
    const responsibilitiesInitials = [
        {
            category: "Customer's Responsibility",
            values: [
                'Site specific inductions and access to work areas.',
                'Scaffolding (No ladders to be used on site).',
                'QC to go with technicians to locate & identify welds',
                'All welds to be tested to be clearly marked and flagged with tape.',
                'Running water, drainage and electricity to be provided at Darkroom facility.',
                'Certified electrician to connect up power to Darkroom',
                'Ablution facilities',
                'Lighting for after-hours work if required.',
                'Crane (if lifting and reorientation of equipment required).',
                'Issue Purchase Order to APEX ALS.',
            ]
        },
        {
            category: "CIV's Responsibilities",
            values: [
                'Provide Component Personnel for specified task(s).',
                'Provide Flights, Visas, Accommodation, Transfers and Equipment logistics at cost +5% to client.',
                'Provide PPR, equipment and consumables for the task of conduction scope as required.',
            ]
        },
    ]
    const termsInitials = [
        {
            category: "General",
            values: [
                'Refer to General Terms and Conditions here, notwithstanding',
            ]
        },
        {
            category: "Payment Terms",
            values: [
                '30 days from invoice',
            ]
        },
        {
            category: "Lead Time",
            values: [
                '2 weeks',
            ]
        },
        {
            category: "Equipment & Consumables",
            values: [
                'All equipment Duties, Excess will charged to client at cost +5%. ' +
                'Consumables logistics (where applicable) will be charged to client at cost +5%.',
            ]
        },

        {
            category: "Note(s)",
            values: [
                'N/A'
            ]
        },
        {
            category: "Durations",
            values: [
                'Estimated duration for the proposed scope in: 5 days working (excluding Load Testing). ' +
                'Note: Estimated durations are a best guess based on previous experience in the field ' +
                'and do not take into account any operational or weather delays. Should there be an ' +
                'extension of the proposed scope duration due to delays outside of CIV control, then ' +
                'the team & equipment day rate of USD 1,124.50 shall apply (excluding Load Testing). ' +
                'These days will be verified on the timesheets',
            ]
        },
        {
            category: "Exclusion 1",
            values: [
                'Price Quoted for services rendered directly to Wayoe Engineering & Construction ' +
                'and excludes; WHT 7.5%, GETFL/NHIL 5%, Covid 1% and VAT. These will be included at the ' +
                'date of invoicing.',
            ]
        },
        {
            category: "Exclusion 2",
            values: [
                'Price excludes all Access Equipment if work at height required. These to be supplied ' +
                'by Wayoe Engineering & Construction.',
            ]
        },
        {
            category: "Validity",
            values: [
                'The quote is valid for 30 days.',
            ]
        },
    ]
    // const [signature, setSignature] = useState(null);

    const [scopeItems, setScopeItems] = useState(scopeInitials);
    const [responsibilities, setResponsibilities] = useState(responsibilitiesInitials);
    const [terms, setTerms] = useState(termsInitials);
    const [resourceItems, setResourceItems] = useState([
        '2 x NDT Personnel : UT, MT, RT L2 (ISO9712)',
        'Load Testing Engineers',
        'Project Manager (Office Based)',
        'UT Set & Probes, MT Yoke & Inverter, IR 192 Gamma Source & accessories'
    ]);
    const [costItems, setCostItems] = useState([
        {
            item: 1,
            scope: 'Inspection Personnel - 2 man team (based on 6 days working)',
            quantity: 'Lumpsum', unitPrice: '10', totalCost: 'USD 9,288.50'
        },
        {
            item: 2,
            scope: 'IR 192 Gamma Source & Accessories (based on 5 days working) MT / UT Sets & Accessories',
            quantity: 'Lumpsum', unitPrice: '10', totalCost: 'USD 9,288.50'
        },
        {
            item: 3,
            scope: 'Consumables:RT Films (100x400mm) x15 Processing Chemicals : Developer & Fixer x 1 NDT Consumables (White Contrast/Black Ink/Solvent) x 25',
            quantity: 'Lumpsum', unitPrice: '10', totalCost: 'USD 9,288.50'
        },
        {
            item: 4,
            scope: 'Load Testing Engineers + 50T Waterbag and Load Cell',
            quantity: 'Lumpsum', unitPrice: '10', totalCost: 'USD 9,288.50'
        },
    ]);

    const navigate = useNavigate();

    const [state, setState] = useState({});

    const handleChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        })
    }

    const invoiceData = {
        ...state,
        scope: JSON.stringify(scopeItems),
        resources: JSON.stringify(resourceItems),
        costs: JSON.stringify(costItems),
        responsibilities: JSON.stringify(responsibilities),
        terms: JSON.stringify(terms),
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

    const handleAddInvoice = async (e) => {
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

            const response = await axiosClient.post(
                '/invoices/add-invoice/',
                formData
            );
            toast.success(response.data.message);
            navigate('/job-quotation')
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
        }
    }

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Add Job Quotation</h1>
                        {/* Add Invoice Form (Example) */}
                        <form onSubmit={handleAddInvoice}>
                            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Invoice Name */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Job Quotation Name:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Job Quotation Name"
                                        name="invoice_name"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Invoice Type */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Job Quotation Type:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Job Quotation Type"
                                        name="invoice_type"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Date */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Date:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="date"
                                        placeholder="Date"
                                        name="invoice_date"
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
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                            </div>

                            {/* Scope */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Scope:</label>
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Scope Header Text</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Scope Header Text"
                                        name="scope_header_text"
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                                <ResponsibilityTable
                                    column1="Scope"
                                    initalItems={scopeInitials}
                                    responsibilities={scopeItems}
                                    setResponsibilities={setScopeItems}
                                />
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
                                        <th className="border p-2">Unit Price</th>
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
                                                    placeholder="Unit Price"
                                                    value={cost.unitPrice}
                                                    required
                                                    onChange={(e) => handleCostItemChange(index, 'unitPrice', e.target.value)}
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
                                                    <FiTrash2/>
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
                                    <IoMdAddCircleOutline/>
                                </button>
                                <div className="mb-6 grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div>
                                    <label className="block text-gray-700 text-sm font-bold mb-2">NHL (%):</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="NHL Percent"
                                            name="nhl_percent"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* NHL Amount */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">NHL
                                            Amount:</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="NHL Amount"
                                            name="nhl"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* GETFL % */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">GETFL (%)</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="GETFL Percent"
                                            name="getfl_percent"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* GETFL Amount */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">GETFL
                                            Amount:</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="GETFL Amount"
                                            name="getfl"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* COVID % */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">COVID (%):</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="COVID Percent"
                                            name="covid_percent"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* COVID Amount */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">COVID
                                            Amount:</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="COVID Amount"
                                            name="covid"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* VAT % */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">VAT(%):</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="VAT Percent"
                                            name="vat_percent"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* VAT Amount */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">VAT
                                            Amount:</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="VAT Amount"
                                            name="vat"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Subtotal */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Subtotal:</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Subtotal"
                                            name="subtotal"
                                            onChange={handleChange}
                                        />
                                    </div>

                                    {/* Total before tax */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Total Before
                                            Tax:</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Total before tax"
                                            name="total_before_tax"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>

                                    {/* Total amount */}
                                    <div>
                                        <label className="block text-gray-700 text-sm font-bold mb-2">Total
                                            amount:</label>
                                        <input
                                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                            type="text"
                                            placeholder="Total amount"
                                            name="total_amount"
                                            onChange={handleChange}
                                            required
                                        />
                                    </div>
                                </div>
                            </div>

                            {/* Responsibility */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Responsibilities</label>
                                <ResponsibilityTable
                                    column1="Responsibilities"
                                    initalItems={responsibilitiesInitials}
                                    responsibilities={responsibilities}
                                    setResponsibilities={setResponsibilities}
                                />
                            </div>

                            {/* Terms */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Terms</label>
                                <ResponsibilityTable
                                    column1="Terms"
                                    initalItems={termsInitials}
                                    responsibilities={terms}
                                    setResponsibilities={setTerms}
                                />
                            </div>

                            {/*<div className="container mx-auto p-4">*/}
                            {/*    <label className="block text-gray-700 text-md font-bold mb-2">Signature upload</label>*/}
                            {/*    <SignatureUpload*/}
                            {/*        signature={signature}*/}
                            {/*        setSignature={setSignature}*/}
                            {/*    />*/}
                            {/*</div>*/}


                            <Button>Add Job Quotation</Button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AddJobQuotationsPage;
