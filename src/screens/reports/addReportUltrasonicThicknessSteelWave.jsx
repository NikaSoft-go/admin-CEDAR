import {FiTrash2} from "react-icons/fi";
import {IoMdAddCircleOutline} from "react-icons/io";
import IncrementalList from "../../components/incrementalList/index.jsx";
import FileUploadComponent from "../../components/imagesSelect/index.jsx";
import FieldWithTwoFields from "../../components/fieldWithTwoFields/fieldWithTwoFields.jsx";
import MultiSelect from "../../components/multiSelect/index.jsx";
import {abbreviationsItems} from "../../utils/data.js";

const AddReportUltrasonicThicknessSteelWave = (props) => {

    return (
        <>
            <h3 className="font-bold mb-4">Report Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
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

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Date of Test:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="date"
                        placeholder="Customer"
                        name="examination_date"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Address:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Address"
                        name="examination_location"
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

                {/* Description */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Item Description</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Description"
                        name="description"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Procedure */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Procedure used:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Procedure"
                        name="local_procedure_number"
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

                {/* Diagnostic Area Surface */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Area/s Tested:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Area/s Tested"
                        name="diagnostic_area_surface"
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

                {/* Material */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">State of Manufacture:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Material"
                        name="material"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Acceptance Standard */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Acceptance Standard:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Acceptance Standard"
                        name="standards"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Surface Temperature */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Surface Temperature:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Surface Temperature"
                        name="temperature"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Weld process */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Weld process:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Weld process"
                        name="weld_process"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Weld configuration */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Weld configuration:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Weld process"
                        name="specification"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Weld configuration */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Weld prep angle:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Weld prep angle"
                        name="weld_prep"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Weld root face */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Weld root face:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Weld root face"
                        name="weld_root_face"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Weld root gap */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Weld root gap:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Weld root gap"
                        name="weld_root_gap"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Drawing Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Drawing No:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Drawing No"
                        name="drawing_number"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Material Thickness */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Material Thickness:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Thickness"
                        name="thickness"
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
            </div>

            {/* Table Data */}
            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Table Data:</label>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Probe Type</th>
                        <th className="border p-2">Probe manufacturer:</th>
                        <th className="border p-2">Probe Frequency:</th>
                        <th className="border p-2">Crystal size:</th>
                        <th className="border p-2">Probe serial number:</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.utSteelWaveTableData.map((cost, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Probe Type"
                                    value={cost.type}
                                    required
                                    onChange={(e) => props.handleUTTableItemChange(index, 'type', e.target.value)}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Probe manufacturer"
                                    value={cost.angle}
                                    required
                                    onChange={(e) => props.handleUTTableItemChange(index, 'type', e.target.value)}
                                />
                            </td>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Probe frequency"
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
                                    placeholder="Probe serial number"
                                    value={cost.probe_serial_number}
                                    onChange={(e) =>
                                        props.handleUTTableItemChange(index, 'probe_serial_number', e.target.value)
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

            <h3 className="font-bold mb-4">Consumables</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Ultrasonic Flaw detector:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Ultrasonic Flaw detector"
                        name="ultrasonic_flaw_detector"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Manufacturer:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Manufacturer"
                        name="manufacturer"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Serial no:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Serial no"
                        name="serial_number"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Next calibration due date:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Next calibration due date"
                        name="next_examination_date"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Couplant Manufacturer:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Couplant Manufacturer"
                        name="couplant_manufacturer"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Couplant Batch no:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Couplant Batch no"
                        name="couplant_batch"
                        onChange={props.handleChange}
                        required
                    />
                </div>
            </div>

            <h3 className="font-bold mb-4">Application & Testing</h3>
            <h3 className="font-bold mb-4">Range calibration / reference block</h3>
            <div className="mb-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Material:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Material"
                        name="range_calibration_material"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Type:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Type"
                        name="range_calibration_type"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Ref no:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Ref no"
                        name="range_calibration_ref"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Velocity:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Velocity"
                        name="range_calibration_velocity"
                        onChange={props.handleChange}
                        required
                    />
                </div>
            </div>

            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">0 Degree. Calibrated range</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="100m"
                        name="zero_degree_calibrated_range"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Angle beam. Calibrated range:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="200mm"
                        name="angle_beam_calibrated_range"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">0 Degree. Scanning
                        Sensitivity:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="25 dB."
                        name="zero_degree_scanning_sensitivity"
                        onChange={props.handleChange}
                        required
                    />
                </div>

            </div>

            <h3 className="font-bold mb-4">Angle beam. Calibrated range</h3>
            <FieldWithTwoFields setData={props.setScanningSensitivity}/>

            {/* Report Type Data */}
            <h3 className="font-bold mb-4">Quality checks record</h3>
            <div className="mb-4">
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Title</th>
                        <th className="border p-2">Value</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.utQualityCheckRecordData?.map((dimension, index) => (
                        <tr key={index}>
                            <td className="border p-2">
                                <input
                                    type="text"
                                    className="w-full p-1"
                                    placeholder="Property"
                                    value={dimension.name}
                                    required
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'property',
                                            e.target.value,
                                            props.utQualityCheckRecordData,
                                            props.setUtQualityCheckRecordData
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

            <div className={"grid grid-cols-1 md:grid-cols-2 gap-4"}>
                {/* Description */}
                <div className={"mb-6"}>
                    <label className="block text-gray-700 text-md font-bold mb-2">Quality check record
                        description</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Description"
                        name="description"
                        onChange={props.handleChange}
                        required
                    />
                </div>

                {/* Acceptance criteria */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Acceptance criteria:</label>
                    <textarea
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        placeholder="Acceptance Criteria"
                        name="acceptance_criteria"
                        onChange={props.handleChange}
                        required
                    />
                </div>
            </div>

            {/* Keys */}
            <div className="mb-10">
                <label className="block text-gray-700 text-md font-bold mb-2">Abbreviations Used</label>
                <MultiSelect
                    options={abbreviationsItems}
                    selectedOptions={props.abbreviationsUsed}
                    onChange={props.handleAbbreviationSelectChange}
                />
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

export default AddReportUltrasonicThicknessSteelWave;
