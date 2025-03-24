import {FiTrash2} from "react-icons/fi";
import {IoMdAddCircleOutline} from "react-icons/io";
import UTTableSection from "../../components/utTableSections/index.jsx";
import IncrementalList from "../../components/incrementalList/index.jsx";
import FileUploadComponent from "../../components/imagesSelect/index.jsx";
import {getInvoiceImageFullPath} from "../../utils/index.js";

const EditReportUltrasonicThickness = (props) => {

    return (
        <>
            <h3 className="font-bold mb-4">Report Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Client Name */}
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

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Customer:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Customer"
                        name="client_name"
                        value={props.state.client_name}
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
                        value={props.state.examination_location}
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
                        value={props.state.examination_date}
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
                        value={props.state.next_examination_date}
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
                        value={props.state.work_order}
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
                        value={props.state.report_number}
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
                        value={props.state.drawing_number}
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
                        value={props.state.contract}
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
                        value={props.state.serial_number}
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
                        value={props.state.operating_pressure}
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
                        value={props.state.test_restrictions}
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
                        value={props.state.material}
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
                        value={props.state.thickness}
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
                        value={props.state.surface_condition}
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
                        value={props.state.diagnostic_area_surface}
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
                        value={props.state.date_of_manufacturing}
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
                        value={props.state.technique_standard}
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
                        value={props.state.standards}
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
                        value={props.state.local_procedure_number}
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
                        value={props.state.acceptance_criteria}
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
                        value={props.state.description}
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
                    {props.equipmentMethod?.map((dimension, index) => (
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
                                            props.equipmentMethod,
                                            props.setEquipmentMethod
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
                                            props.equipmentMethod,
                                            props.setEquipmentMethod
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
                                            props.equipmentMethod,
                                            props.setEquipmentMethod
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
                        <th className="border p-2">Probe Serial No</th>
                        <th className="border p-2">Type</th>
                        <th className="border p-2">Angle°</th>
                        <th className="border p-2">Crystal Size (mm)</th>
                        <th className="border p-2">Frequency (MHz)</th>
                        <th className="border p-2">Basic Sensitivity (Db)</th>
                        <th className="border p-2">Transfer Correction (Db)</th>
                        <th className="border p-2">Scanning Sensitivity (Db)</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.utTableData.map((cost, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Probe Serial No"
                                    value={cost.probe_serial_number}
                                    required
                                    onChange={(e) => props.handleUTTableItemChange(index, 'probe_serial_number', e.target.value)}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Type"
                                    value={cost.type}
                                    required
                                    onChange={(e) => props.handleUTTableItemChange(index, 'type', e.target.value)}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Angle"
                                    value={cost.angle}
                                    onChange={(e) =>
                                        props.handleUTTableItemChange(index, 'angle', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Crystal Size"
                                    value={cost.crystal_size}
                                    onChange={(e) =>
                                        props.handleUTTableItemChange(index, 'crystal_size', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Frequency"
                                    value={cost.frequency}
                                    onChange={(e) =>
                                        props.handleUTTableItemChange(index, 'frequency', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Basic Sensitivity"
                                    value={cost.basic_sensitivity}
                                    onChange={(e) =>
                                        props.handleUTTableItemChange(index, 'basic_sensitivity', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Transfer Correction"
                                    value={cost.transfer_correction}
                                    onChange={(e) =>
                                        props.handleUTTableItemChange(index, 'transfer_correction', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Scanning Sensitivity"
                                    value={cost.scanning_sensitivity}
                                    onChange={(e) =>
                                        props.handleUTTableItemChange(index, 'scanning_sensitivity', e.target.value)
                                    }
                                    required
                                />
                            </td>
                            <td className="border p-2">
                                <button
                                    type="button"
                                    className="remove-btn rounded p-1"
                                    onClick={() => props.handleRemoveUTTableItem(index)}
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
                    onClick={props.handleAddUTTableItem}
                >
                    <IoMdAddCircleOutline/>
                </button>
            </div>

            <label className="block text-gray-700 text-md font-bold mb-2">Drawing:</label>
            <div className="mb-6 flex justify-start w-[100%]">
                <div className="w-[100%]">
                    <label className="block text-gray-700 text-md font-bold mb-2">Image 1:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file"
                        name="drawing_image_one"
                        onChange={props.handleChange}
                    />
                    {props.state.drawing_image_one_url && (
                        <div className="mt-2 relative">
                            <img
                                src={typeof props.state.drawing_image_one_url === 'string' ? props.state.drawing_image_one_url : URL.createObjectURL(props.state.drawing_image_one_url)}
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
                    <label className="block text-gray-700 text-md font-bold mb-2">Image 2:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file"
                        name="drawing_image_two"
                        onChange={props.handleChange}
                    />
                    {props.state.drawing_image_two_url && (
                        <div className="mt-2 relative">
                            <img
                                src={typeof props.state.drawing_image_two_url === 'string' ? props.state.drawing_image_two_url : URL.createObjectURL(props.state.drawing_image_two_url)}
                                alt="Inspector Signature"
                                className="w-32 h-32 object-cover rounded-lg shadow-md"
                            />
                            <button
                                onClick={() => props.handleDeleteSignature('drawing_image_two_url')}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    )}
                </div>
            </div>
            <div className={"flex justify-start"}>
                <div className="mb-6 w-[100%]">
                    <label className="block text-gray-700 text-md font-bold mb-2">Drawing Note 1:</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Drawing Note 1"
                        name="drawing_note_one"
                        onChange={props.handleChange}
                        value={props.state.drawing_note_one}
                        required
                    ></textarea>
                </div>
                <div className="ml-2 mb-6 w-[100%]">
                    <label className="block text-gray-700 text-md font-bold mb-2">Drawing Note 2:</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Drawing Note 2"
                        name="drawing_note"
                        value={props.state.drawing_note}
                        onChange={props.handleChange}
                        required
                    ></textarea>
                </div>
            </div>
            <div className="mb-6 w-[100%]">
                <label className="block text-gray-700 text-md font-bold mb-2">Ultrasonic Inspection Results:</label>
                <UTTableSection setResults={props.setUtResults}/>
            </div>

            <div className="mb-6 w-[100%]">
                <label className="block text-gray-700 text-md font-bold mb-2">Inspector&apos;s comment:</label>
                <IncrementalList
                    items={props.comments}
                    setItems={props.setComments}
                    addItem={props.addComment}
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
                        value={props.issuerInfo.name}
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
                        value={props.reviewerInfo.date}
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
                        value={props.reviewerInfo.qualification}
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
    );
};

export default EditReportUltrasonicThickness;
