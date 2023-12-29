import {FiTrash2} from "react-icons/fi";
import {IoMdAddCircleOutline} from "react-icons/io";

const AddReportUltrasonicThickness = (props) => {

    return (
        <>
            <h3 className="font-bold mb-4">Report Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Client Name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Customer:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Customer"
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

                {/* Next Examination Date */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Next Examination:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Next Examination"
                        name="next_examination_date"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Work Order Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Work Order Number:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Work Order Number"
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

                {/* Request Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Request No:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Request No:"
                        name="drawing_number"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Contract Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Contract No:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Contract No"
                        name="contract"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Serial No */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Serial No:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Serial No"
                        name="serial_number"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Operating Pressure */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Operating Pressure:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Operating Pressure"
                        name="operating_pressure"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Test Restrictions */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Test Restrictions:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Test Restrictions"
                        name="test_restrictions"
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

                {/* Minimum Thickness */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Minimum Thickness:</label>
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

                {/* Diagnostic Area Surface */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Diagnostic Area Surface:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Diagnostic Area Surface"
                        name="diagnostic_area_surface"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Date of Manufacturing */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Date of Manufacturing:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Date of Manufacturing"
                        name="date_of_manufacturing"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Technique Standard */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Technique Standard:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Technique Standard"
                        name="technique_standard"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Technical Standard */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Technical Standard:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Technical Standard"
                        name="standards"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Procedure */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Procedure No:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Procedure"
                        name="local_procedure_number"
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

                {/* Description */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Description</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Description"
                        name="description"
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
                                        props.handleTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
                                            props.equipmentConsumables,
                                            props.setEquipmentConsumables
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
                                            props.equipmentConsumables,
                                            props.setEquipmentConsumables
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
                                        props.handleTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
                                            props.otherWeldingProps,
                                            props.setOtherWeldingProps
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
                                            props.otherWeldingProps,
                                            props.setOtherWeldingProps
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
                                    placeholder="Scope"
                                    value={cost.welder_stamp}
                                    required
                                    onChange={(e) => props.handleWeldingTableItemChange(index, 'welder_stamp', e.target.value)}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Quantity"
                                    value={cost.size}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'size', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Unit Price"
                                    value={cost.thickness}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'thickness', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Total Cost"
                                    value={cost.remarks}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'remarks', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Total Cost"
                                    value={cost.indications}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'indications', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <select
                                    className="w-full p-1"
                                    placeholder="Total Cost"
                                    value={cost.acc}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'acc', e.target.value)
                                    }
                                    required
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
                                    placeholder="Total Cost"
                                    value={cost.rej}
                                    onChange={(e) =>
                                        props.handleWeldingTableItemChange(index, 'rej', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() => props.handleRemoveWeldingTableItem(index)}
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
                    onClick={props.handleAddWeldingTableItem}
                >
                    <IoMdAddCircleOutline />
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
                        type="date"
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
                        onChange={(e) => props.handleChange(e, props.reviewerInfo, props.setReviewrInfo)}
                        required
                    />
                </div>

                {/* Review date */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Review date:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        placeholder="Review date"
                        name="date"
                        onChange={(e) => props.handleChange(e, props.reviewerInfo, props.setReviewrInfo)}
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
                        onChange={(e) => props.handleChange(e, props.reviewerInfo, props.setReviewrInfo)}
                        required
                    />
                </div>
            </div>
        </>
    );
};

export default AddReportUltrasonicThickness;
