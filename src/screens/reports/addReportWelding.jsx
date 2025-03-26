import {FiTrash2} from "react-icons/fi";
import {IoMdAddCircleOutline} from "react-icons/io";
import FileUploadComponent from "../../components/imagesSelect/index.jsx";

const AddReportWelding = (props) => {

    return (
        <>
            <h3 className="font-bold mb-4">Client Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
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

                {/* Asset Serial Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Asset
                        Serial Number:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Asset Serial Number"
                        name="serial_number"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Client Name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client"
                        name="client_name"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Location:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Location"
                        name="examination_location"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Test Date */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Test Date:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Test Date"
                        name="examination_date"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Job Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Job Number:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Job Number"
                        name="work_order"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Report Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Report No:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Report Number"
                        name="report_number"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Request / Document Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Request/Doc No:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Request/Doc No:"
                        name="drawing_number"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Contract Name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Contract Name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Contract Name"
                        name="contract"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Drawing Reference */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Drawing Reference:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Drawing Reference"
                        name="client_job_reference"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Sample Selection */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Sample Selection:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Sample Selection"
                        name="sample_selection"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Extent of Test */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Extent of Test:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Extent of Test"
                        name="extent_test"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Size */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Size:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Size"
                        name="size"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Material */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Material:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Material"
                        name="material"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Thickness */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Thickness:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Thickness"
                        name="thickness"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Surface Condition */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Surface Condition:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Surface Condition"
                        name="surface_condition"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Weld Prep */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Weld Prep:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Weld Prep"
                        name="weld_prep"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Weld Process */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Weld Process:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Weld Process"
                        name="weld_process"
                        onChange={props.handleChange}
                    />
                </div>

                {/* PWHT */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">PWHT:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="PWHT"
                        name="pwht"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Temperature */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Temperature:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Temperature"
                        name="temperature"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Specification */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Specification:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Specification"
                        name="specification"
                        onChange={props.handleChange}
                        required
                    />
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

                {/* Acceptance Criteria */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Acceptance Criteria:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Acceptance Criteria"
                        name="acceptance_criteria"
                        onChange={props.handleChange}
                        required
                    />
                </div>
            </div>

            <div className="my-4">
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Property</th>
                        <th className="border p-2">Value</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.equipmentConsumables?.map((dimension, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Property"
                                    value={dimension.property}
                                    required
                                    onChange={(e) =>
                                        props.handleEquipmentConsumablesItemChange(
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
                                        props.handleEquipmentConsumablesItemChange(
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
                                            props.equipmentConsumables,
                                            props.setEquipmentConsumables
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

            <div className="my-4">
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Property</th>
                        <th className="border p-2">Value</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.otherWeldingProps?.map((dimension, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Property"
                                    value={dimension.property}
                                    required
                                    onChange={(e) =>
                                        props.handleOtherWeldingPropsItemChange(
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
                                        props.handleOtherWeldingPropsItemChange(
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
                                            props.otherWeldingProps,
                                            props.setOtherWeldingProps
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

            {/* Table Data */}
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Table Data:</label>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Joint Number</th>
                        <th className="border p-2">Welder Stamp</th>
                        <th className="border p-2">Size</th>
                        <th className="border p-2">Thickness</th>
                        <th className="border p-2">Remarks</th>
                        <th className="border p-2">Indications</th>
                        <th className="border p-2">Acc</th>
                        <th className="border p-2">Rej</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.weldingTableData.map((cost, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Joint Number"
                                    value={cost.joint_number}
                                    required
                                    onChange={(e) => props.handleWeldingTableItemChange(index, 'joint_number', e.target.value)}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Welder Stamp"
                                    value={cost.welder_stamp}
                                    required
                                    onChange={(e) => props.handleWeldingTableItemChange(index, 'welder_stamp', e.target.value)}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Size"
                                    value={cost.size}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'size', e.target.value)
                                    }
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Thickness"
                                    value={cost.thickness}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'thickness', e.target.value)
                                    }
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Remarks"
                                    value={cost.remarks}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'remarks', e.target.value)
                                    }
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Indications"
                                    value={cost.indications}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'indications', e.target.value)
                                    }
                                />
                            </td>
                            <td className="border p-2">
                                <select
                                    className="w-full p-1"
                                    placeholder="Acc"
                                    value={cost.acc}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'acc', e.target.value)
                                    }
                                >
                                    <option value="">Select state</option>
                                    <option value="correct">Accepted</option>
                                    <option value="wrong">Rejected</option>
                                </select>
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Rej"
                                    value={cost.rej}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'rej', e.target.value)
                                    }
                                />
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() => props.handleRemoveWeldingTableItem(index)}
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
                    onClick={props.handleAddWeldingTableItem}
                >
                    <IoMdAddCircleOutline/>
                </button>
            </div>

            {/* Item Tested */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Item Tested</label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Item Tested"
                    name="item_tested"
                    onChange={props.handleChange}
                    required
                />
            </div>

            {/* Method of Test */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Method of Test</label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Method of Test"
                    name="test_method"
                    onChange={props.handleChange}
                    required
                />
            </div>

            {/* Results */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Results</label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Results"
                    name="results"
                    onChange={props.handleChange}
                    required
                />
            </div>

            {/* Limitations */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Limitations</label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Limitations"
                    name="limitations"
                    onChange={props.handleChange}
                    required
                />
            </div>

            {/* Disclaimer */}
            <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Disclaimer</label>
                <textarea
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    placeholder="Disclaimer"
                    name="disclaimer"
                    onChange={props.handleChange}
                />
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
    );
};

export default AddReportWelding;
