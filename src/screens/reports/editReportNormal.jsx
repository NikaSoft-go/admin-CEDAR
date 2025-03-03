import {FiTrash2} from "react-icons/fi";
import {
    consumablesInitial,
    emptyAssetsDetails,
    emptyDimensionDetails,
    equipmentsInitial,
    keyItems
} from "../../utils/data.js";
import {IoMdAddCircleOutline} from "react-icons/io";
import ResponsibilityTable from "../../components/invoices/tableA.jsx";
import MultiSelect from "../../components/multiSelect/index.jsx";
import FileUploadComponent from "../../components/imagesSelect/index.jsx";
import {getInvoiceImageFullPath} from "../../utils/index.js";


const EditReportNormal = (props) => {
    console.log("props", props.state.images);
    console.log("props", props.state.inspector_signature);
    console.log("props", props.state.reviewer_signature);
    return (
        <>
            <h3 className="font-bold mb-4">Client Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Client Name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client Name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client Name"
                        name="client_name"
                        value={props.state.client_name}
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Client Address */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client
                        Address:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client Address"
                        name="client_address"
                        value={props.state.client_address}
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Client City */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client City:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client City"
                        name="client_city"
                        value={props.state.client_city}
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Client Country */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client
                        Country:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client Country"
                        name="client_country"
                        value={props.state.client_country}
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Examination Location */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Examination
                        Location:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Examination Location"
                        name="examination_location"
                        onChange={props.handleChange}
                        value={props.state.examination_location}
                        required
                    />
                </div>
            </div>

            <h3 className="font-bold mb-4">Job Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Contract */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Contract:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Contract"
                        name="contract"
                        onChange={props.handleChange}
                        value={props.state.contract}
                    />
                </div>

                {/* Work Order */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Work Order:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Work Order"
                        name="work_order"
                        onChange={props.handleChange}
                        value={props.state.work_order}
                    />
                </div>

                {/* Purchase Order */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Purchase
                        Order:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Purchase Order"
                        name="purchase_order"
                        onChange={props.handleChange}
                        value={props.state.purchase_order}
                    />
                </div>

                {/* Client Job Reference */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client Job
                        Reference:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client Job Reference"
                        name="client_job_reference"
                        onChange={props.handleChange}
                        value={props.state.client_job_reference}
                        required
                    />
                </div>

                {/* Rig */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Rig:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Rig"
                        name="rig"
                        onChange={props.handleChange}
                        value={props.state.rig}
                    />
                </div>
            </div>

            <h3 className="font-bold mb-4">Report Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Report Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Report Number:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Report Number"
                        name="report_number"
                        onChange={props.handleChange}
                        value={props.state.report_number}
                        required
                    />
                </div>

                {/* Date of examination */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Date of
                        examination:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        placeholder="Date of examination"
                        name="examination_date"
                        onChange={props.handleChange}
                        value={props.state.examination_date}
                        required
                    />
                </div>

                {/* Date of Next Examination */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Date of Next
                        Examination:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        placeholder="Date of Next Examination"
                        name="next_examination_date"
                        value={props.state.next_examination_date}
                        onChange={props.handleChange}
                    />
                </div>

                {/* Area of Examination */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Area of
                        Examination:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Area of Examination"
                        name="examination_area"
                        onChange={props.handleChange}
                        value={props.state.examination_area}
                        required
                    />
                </div>

                {/* Services */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Services:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Services"
                        name="services"
                        onChange={props.handleChange}
                        value={props.state.services}
                        required
                    />
                </div>

                {/*Procedure */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Procedure:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Procedure"
                        name="standards"
                        onChange={props.handleChange}
                        value={props.state.standards}
                        required
                    />
                </div>

                {/* Specification */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Specification:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Specification"
                        name="local_procedure_number"
                        onChange={props.handleChange}
                        value={props.state.local_procedure_number}
                        required
                    />
                </div>

                {/* Acceptance Criteria */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Acceptance Criteria:
                    </label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Acceptance Criteria"
                        name="drawing_number"
                        value={props.state.drawing_number}
                        onChange={props.handleChange}
                    />
                </div>

                {/* Test Restrictions */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Test
                        Restrictions:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Test Restrictions"
                        name="test_restrictions"
                        onChange={props.handleChange}
                        value={props.state.test_restrictions}
                        required
                    />
                </div>

                {/* Surface Condition */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Surface
                        Condition:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Surface Condition"
                        name="surface_condition"
                        onChange={props.handleChange}
                        value={props.state.surface_condition}
                        required
                    />
                </div>

                {/* Report Status */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Report Status:</label>
                    <select
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        name="report_status"
                        onChange={props.handleChange}
                        value={props.state.report_status}
                        required
                    >
                        <option>Select a report status</option>
                        <option value="Accepted">Accepted</option>
                        <option value="Rejected">Rejected</option>
                    </select>
                </div>

                {/* Asset Model */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Asset Model:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Asset Model"
                        name="asset_model"
                        value={props.state.asset_model}
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Asset Serial Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Asset Serial Number:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Asset Serial Number"
                        name="serial_number"
                        value={props.state.serial_number}
                        onChange={props.handleChange}
                        required
                    />
                </div>
                {/* Asset Name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Asset Name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Asset Name"
                        name="asset_name"
                        value={props.state.asset_name}
                        onChange={props.handleChange}
                        required
                    />
                </div>
            </div>

            <h3 className="font-bold mb-4">Inspected by</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Issuer name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Inspector name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Inspector"
                        value={props.issuerInfo.name}
                        name="name"
                        onChange={(e) => props.handleChange(e, props.issuerInfo, props.setIssuerInfo)}
                        required
                    />
                </div>

                {/* Issue date */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Inspection date:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Inspection date"
                        name="date"
                        value={props.issuerInfo.date}
                        onChange={(e) => props.handleChange(e, props.issuerInfo, props.setIssuerInfo)}
                        required
                    />
                </div>

                {/* Issuer qualification */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Inspector qualification</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Inspector qualification"
                        name="qualification"
                        value={props.issuerInfo.qualification}
                        onChange={(e) => props.handleChange(e, props.issuerInfo, props.setIssuerInfo)}
                        required
                    />
                </div>

            </div>

            <h3 className="font-bold mb-4">Reviewed by</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Reviewed name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Reviewer name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Reviewer name"
                        name="name"
                        value={props.reviewerInfo.name}
                        onChange={(e) => props.handleChange(e, props.reviewerInfo, props.setReviewerInfo)}
                        required
                    />
                </div>

                {/* Review date */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Review date:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Review date"
                        name="date"
                        value={props.reviewerInfo.date}
                        onChange={(e) => props.handleChange(e, props.reviewerInfo, props.setReviewerInfo)}
                        required
                    />
                </div>

                {/* Reviewer qualification */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Reviewer qualification</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Reviewer qualification"
                        name="qualification"
                        value={props.reviewerInfo.qualification}
                        onChange={(e) => props.handleChange(e, props.reviewerInfo, props.setReviewerInfo)}
                        required
                    />
                </div>
            </div>

            {/* Asset Details */}
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Assets Details:</label>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Type</th>
                        <th className="border p-2">Serial Number</th>
                        <th className="border p-2">Model</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Size</th>
                        <th className="border p-2">Material</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.assetDetails?.map((asset, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Type"
                                    value={asset.type}
                                    required
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'type',
                                            e.target.value,
                                            props.assetDetails,
                                            props.setAssetsDetails
                                        )}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Serial Number"
                                    value={asset.serial_number}
                                    required
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'serial_number',
                                            e.target.value,
                                            props.assetDetails,
                                            props.setAssetsDetails
                                        )}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Model"
                                    value={asset.model}
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'model',
                                            e.target.value,
                                            props.assetDetails,
                                            props.setAssetsDetails
                                        )
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Description"
                                    value={asset.description}
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'description',
                                            e.target.value,
                                            props.assetDetails,
                                            props.setAssetsDetails
                                        )
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Size"
                                    value={asset.size}
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'size',
                                            e.target.value,
                                            props.assetDetails,
                                            props.setAssetsDetails
                                        )
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Material"
                                    value={asset.material}
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'material',
                                            e.target.value,
                                            props.assetDetails,
                                            props.setAssetsDetails
                                        )
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() =>
                                        props.handleRemoveTableItems(
                                            index,
                                            props.assetDetails,
                                            props.setAssetsDetails
                                        )
                                    }
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
                    onClick={() =>
                        props.handleAddTableItem(
                            props.setAssetsDetails,
                            props.assetDetails,
                            emptyAssetsDetails
                        )
                    }
                >
                    <IoMdAddCircleOutline/>
                </button>
            </div>

            <div className="mb-4 flex items-center justify-start">
                <div>
                    <p className="text-left">Select Dimension Details to show</p>
                </div>
                <div className="ml-12">
                    <input
                        type="checkbox"
                        className='mr-2'
                        checked={props.showSections.dimensionOne}
                        onClick={() => props.setShowSections({
                            ...props.showSections,
                            dimensionOne: !props.showSections.dimensionOne
                        })}
                    />
                    <label>Dimension 1 Details</label>
                </div>
                <div className="ml-12">
                    <input
                        type="checkbox"
                        className='mr-2'
                        checked={props.showSections.dimensionTwo}
                        onClick={() => props.setShowSections({
                            ...props.showSections,
                            dimensionTwo: !props.showSections.dimensionTwo
                        })}
                    />
                    <label>Dimension 2 Details</label>
                </div>
            </div>

        {/* Dimension 1 Details */}
        {/* Dimension 1 Details */}
        {props.showSections.dimensionOne && <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Dimension 1:</label>
            <div>
                <label className="block text-gray-700 text-md font-bold mb-2">Type:</label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="dimension_one_name"
                    onChange={props.handleChange}
                    required
                >
                    <option>Select a type</option>
                    <option value="Box">Box</option>
                    <option value="Pin">Pin</option>
                </select>
            </div>
            <table className="w-full border">
                <thead>
                <tr>
                    <th className="border p-2">Property</th>
                    <th className="border p-2">Value</th>
                    <th className="border p-2"></th>
                </tr>
                </thead>
                <tbody>
                {props.dimensionOneDetails?.map((dimension, index) => (
                    <tr key={index}>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Property"
                                value={dimension.property}
                                required
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'property',
                                        e.target.value,
                                        props.dimensionOneDetails,
                                        props.setDimensionOneDetails
                                    )}
                            />
                        </td>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Value"
                                value={dimension.value}
                                required
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'value',
                                        e.target.value,
                                        props.dimensionOneDetails,
                                        props.setDimensionOneDetails
                                    )}
                            />
                        </td>
                        <td className="border p-2">
                            <button
                                type="button"
                                className="remove-btn rounded p-1"
                                onClick={() =>
                                    props.handleRemoveTableItems(
                                        index,
                                        props.dimensionOneDetails,
                                        props.setDimensionOneDetails
                                    )}
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
                onClick={() =>
                    props.handleAddTableItem(
                        props.setDimensionOneDetails,
                        props.dimensionOneDetails,
                        emptyDimensionDetails
                    )
                }
            >
                <IoMdAddCircleOutline/>
            </button>
        </div>}

        {/* Dimension 2 Details */}
        {props.showSections.dimensionTwo && <div className="mb-10">
            <label className="block text-gray-700 text-md font-bold mb-2">Dimension 2:</label>
            <div>
                <label className="block text-gray-700 text-md font-bold mb-2">Type:</label>
                <select
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    name="dimension_two_name"
                    onChange={props.handleChange}
                    required
                >
                    <option>Select a type</option>
                    <option value="Box">Box</option>
                    <option value="Pin">Pin</option>
                </select>
            </div>
            <table className="w-full border">
                <thead>
                <tr>
                    <th className="border p-2">Property</th>
                    <th className="border p-2">Value</th>
                    <th className="border p-2"></th>
                </tr>
                </thead>
                <tbody>
                {props.dimensionTwoDetails?.map((dimension, index) => (
                    <tr key={index}>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Property"
                                value={dimension.property}
                                required
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'property',
                                        e.target.value,
                                        props.dimensionTwoDetails,
                                        props.setDimensionTwoDetails
                                    )}/>
                        </td>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Value"
                                value={dimension.value}
                                required
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'value',
                                        e.target.value,
                                        props.dimensionTwoDetails,
                                        props.setDimensionTwoDetails
                                    )}/>
                        </td>
                        <td className="border p-2">
                            <button
                                type="button"
                                className="remove-btn rounded p-1"
                                onClick={() =>
                                    props.handleRemoveTableItems(
                                        index,
                                        props.dimensionTwoDetails,
                                        props.setDimensionTwoDetails
                                    )}
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
                onClick={() =>
                    props.handleAddTableItem(
                        props.setDimensionTwoDetails,
                        props.dimensionTwoDetails,
                        emptyDimensionDetails
                    )
                }
            >
                <IoMdAddCircleOutline/>
            </button>
        </div>}

            <h3 className="font-bold mb-4">Body / Blade Details</h3>
            <div className="mb-4 flex items-center justify-start">
                <div>
                    <p className="text-left">Select Sections to show</p>
                </div>
                <div className="ml-12">
                    <input
                        type="checkbox"
                        className='mr-2'
                        checked={props.showSections.bodyDetails}
                        onClick={() => props.setShowSections({
                            ...props.showSections,
                            bodyDetails: !props.showSections.bodyDetails
                        })}
                    />
                    <label>Body Details</label>
                </div>
                <div className="ml-12">
                    <input
                        type="checkbox"
                        className='mr-2'
                        checked={props.showSections.bladeDetails}
                        onClick={() => props.setShowSections({
                            ...props.showSections,
                            bladeDetails: !props.showSections.bladeDetails
                        })}
                    />
                    <label>Blade Details</label>
                </div>
            </div>

        {/* Body Details */}
        {props.showSections.bodyDetails === true && <div className="mb-4">
            <label className="block text-gray-700 text-md font-bold mb-2">Body Details</label>
            <table className="w-full border">
                <thead>
                <tr>
                    <th className="border p-2">Property</th>
                    <th className="border p-2">Value</th>
                    <th className="border p-2"></th>
                </tr>
                </thead>
                <tbody>
                {props.bodyDetails?.map((dimension, index) => (
                    <tr key={index}>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Property"
                                value={dimension.property}
                                required
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'property',
                                        e.target.value,
                                        props.bodyDetails,
                                        props.setBodyDetails
                                    )}/>
                        </td>
                        <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Value"
                                value={dimension.value}
                                required
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'value',
                                        e.target.value,
                                        props.bodyDetails,
                                        props.setBodyDetails
                                    )}/>
                        </td>
                        <td className="border p-2">
                            <button
                                type="button"
                                className="remove-btn rounded p-1"
                                onClick={() =>
                                    props.handleRemoveTableItems(
                                        index,
                                        props.bodyDetails,
                                        props.setBodyDetails
                                    )}
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
                onClick={() =>
                    props.handleAddTableItem(
                        props.setDimensionTwoDetails,
                        props.dimensionTwoDetails,
                        emptyDimensionDetails
                    )
                }
            >
                <IoMdAddCircleOutline/>
            </button>
        </div>}

        {/* Blade Details */}
        {props.showSections.bladeDetails === true &&
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Blade Details</label>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Property</th>
                        <th className="border p-2">Value</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.bladeDetails?.map((dimension, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Property"
                                    value={dimension.property}
                                    required
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
                                            props.bladeDetails,
                                            props.setBladeDetails
                                        )}/>
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Value"
                                    value={dimension.value}
                                    required
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'value',
                                            e.target.value,
                                            props.bladeDetails,
                                            props.setBladeDetails
                                        )}/>
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() =>
                                        props.handleRemoveTableItems(
                                            index,
                                            props.bladeDetails,
                                            props.setBladeDetails
                                        )}
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
                    onClick={() =>
                        props.handleAddTableItem(
                            props.setDimensionTwoDetails,
                            props.dimensionTwoDetails,
                            emptyDimensionDetails
                        )
                    }
                >
                    <IoMdAddCircleOutline/>
                </button>
            </div>}

        {/* Visual */}
            <div className="mb-10">
                <label className="block text-gray-700 text-md font-bold mb-2">Visual:</label>
                <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    type="text"
                    placeholder="Visual"
                    name="visual"
                    value={props.state.visual}
                    onChange={props.handleChange}
                    required
                />
            </div>

        {/* Report Type Data */}
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Report Type Data</label>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Value</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.reportTypeData?.map((dimension, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Property"
                                    value={dimension.property}
                                    required
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
                                            props.reportTypeData,
                                            props.setReportTypeData
                                        )}/>
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Value"
                                    value={dimension.value}
                                    required
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'value',
                                            e.target.value,
                                            props.reportTypeData,
                                            props.setReportTypeData
                                        )}/>
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() =>
                                        props.handleRemoveTableItems(
                                            index,
                                            props.reportTypeData,
                                            props.setReportTypeData
                                        )}
                                >
                                    <FiTrash2/>
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>

        {/* Consumables */}
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Consumables</label>
                <ResponsibilityTable
                    column1="Responsibilities"
                    initalItems={consumablesInitial}
                    responsibilities={props.consumablesData}
                    setResponsibilities={props.setConsumablesData}
                />
            </div>

        {/* Equipments */}
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Equipments</label>
                <ResponsibilityTable
                    column1="Responsibilities"
                    initalItems={equipmentsInitial}
                    responsibilities={props.equipmentsData}
                    setResponsibilities={props.setEquipmentsData}
                />
            </div>

        {/* Inspector's Comment */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Inspector&apos;s Comment:</label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Inspector's Comment"
                    name="comments"
                    value={props.state.comments}
                    onChange={props.handleChange}
                    required
                />
            </div>

        {/* Keys */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Key</label>
                <MultiSelect
                    options={keyItems}
                    selectedOptions={props.selectedOptions}
                    onChange={props.handleMultiSelectChange}
                />
            </div>

            <label className="block text-gray-700 text-md font-bold mb-2">Stamp Files:</label>
            <div className="mb-6 flex justify-start w-[100%]">
                <div className="w-[100%]">
                    <label className="block text-gray-700 text-md font-bold mb-2">Inspector Signature:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file"
                        name="inspector_signature"
                        onChange={props.handleChange}
                    />
                    {/* Display Uploaded Inspector Signature */}
                    {props.state.inspector_signature && (
                        <div className="mt-2 relative">
                            <img
                                src={typeof props.state.inspector_signature === 'string' ? props.state.inspector_signature : URL.createObjectURL(props.state.inspector_signature)}
                                alt="Inspector Signature"
                                className="w-32 h-32 object-cover rounded-lg shadow-md"
                            />
                            <button
                                onClick={() => props.handleDeleteSignature('inspector_signature')}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    )}
                </div>
                <div className="w-[100%]">
                    <label className="block text-gray-700 text-md font-bold mb-2">Reviewer Signature:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file"
                        name="reviewer_signature"
                        onChange={props.handleChange}
                    />
                    {/* Display Uploaded Reviewer Signature */}
                    {props.state.reviewer_signature && (
                        <div className="mt-2 relative">
                            <img
                                src={typeof props.state.reviewer_signature === 'string' ? props.state.reviewer_signature : URL.createObjectURL(props.state.reviewer_signature)}
                                alt="Reviewer Signature"
                                className="w-32 h-32 object-cover rounded-lg shadow-md"
                            />
                            <button
                                onClick={() => props.handleDeleteSignature('reviewer_signature')}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    )}
                </div>
            </div>

            {/* Images Section */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Images</label>
                <FileUploadComponent setImages={props.handleFilesSelect}/>

                {/* Display Uploaded Images */}
                <div className="mt-4 flex flex-wrap gap-4">
                    {props.state.images.map((image, index) => (
                        <div key={index} className="flex relative">
                            <img
                                src={typeof image.file === 'string' ? getInvoiceImageFullPath(image.file) : URL.createObjectURL(image)}
                                alt={`uploaded-image-${index}`}
                                className="w-32 h-32 object-cover rounded-lg shadow-md"
                            />
                            <button
                                onClick={() => props.handleImageDelete(index)}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </>
    )
}

export default EditReportNormal;