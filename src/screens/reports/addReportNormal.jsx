import {FiTrash2} from "react-icons/fi";
import {
    consumablesInitial,
    equipmentsInitial,
    keyItems
} from "../../utils/data.js";
import {IoMdAddCircleOutline} from "react-icons/io";
import ResponsibilityTable from "../../components/invoices/tableA.jsx";
import MultiSelect from "../../components/multiSelect/index.jsx";
import FileUploadComponent from "../../components/imagesSelect/index.jsx";
import IncrementalList from "../../components/incrementalList/index.jsx";
import TableList from "../../components/tableList/tableList.jsx";


const AddReportNormal = (props) => {
    const assetHeaders = [
        "Type",
        "Serial Number",
        "Model",
        "Description",
        "Size",
        "Material"
    ]
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
                        required
                    />
                </div>

                {/* Date of examination */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Date of
                        examination:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Date of examination"
                        name="examination_date"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Date of Next Examination */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Date of Next
                        Examination:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Date of Next Examination"
                        name="next_examination_date"
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
                        onChange={(e) => props.handleChange(e, props.reviewerInfo, props.setReviewerInfo)}
                        required
                    />
                </div>
            </div>

            {/* Asset Details */}
            <div className="mb-4">
                <TableList
                    listData={props.assetDetails}
                    setListData={props.setAssetsDetails}
                    handleRemoveTableItems={props.handleRemoveTableItems}
                    handleTableItemChange={props.handleAssetDataTableItemChange}
                    tableHeaders={assetHeaders}
                    label={"Asset Details:"}
                />
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
                                        props.handleDimensionOneTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
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
                                        props.handleDimensionOneTableItemChange(
                                            index,
                                            'value',
                                            e.target.value,
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
                                        props.handleDimensionTwoTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
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
                                        props.handleDimensionTwoTableItemChange(
                                            index,
                                            'value',
                                            e.target.value,
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
                                        props.handleBodyTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
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
                                        props.handleBodyTableItemChange(
                                            index,
                                            'value',
                                            e.target.value,
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
                                            props.handleBladeTableItemChange(
                                                index,
                                                'property',
                                                e.target.value,
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
                                            props.handleBladeTableItemChange(
                                                index,
                                                'value',
                                                e.target.value,
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
                                        props.handleReportTypeTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
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
                                        props.handleReportTypeTableItemChange(
                                            index,
                                            'value',
                                            e.target.value,
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
                <IncrementalList
                    items={props.comments}
                    setItems={props.setComments}
                    addItem={props.addComment}
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
                </div>
                <div className="w-[100%]">
                    <label className="block text-gray-700 text-md font-bold mb-2">Reviewer Signature:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file"
                        name="reviewer_signature"
                        onChange={props.handleChange}
                    />
                </div>
            </div>

            {/* Images */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Images</label>
                <FileUploadComponent setImages={props.handleFilesSelect}/>
            </div>
        </>
    )
}

export default AddReportNormal;