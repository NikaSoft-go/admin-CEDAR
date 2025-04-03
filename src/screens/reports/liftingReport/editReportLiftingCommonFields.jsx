import TableList from "../../../components/tableList/tableList.jsx";
import {assetTableHeaders, itemTableHeaders, personnelHeaders} from "../../../utils/data.js";
import BottomComponent from "../../../components/bottomComponent/bottomComponent.jsx";


const formData = {
    sections: [
        {
            title: "Client Details",
            fields: [
                {
                    label: "Client Name",
                    type: "text",
                    name: "client_name",
                    required: true
                },
                {
                    label: "Client Address",
                    type: "text",
                    name: "client_address",
                    required: true
                },
                {
                    "label": "Client City",
                    "type": "text",
                    "name": "client_city",
                    "required": true
                },
                {
                    "label": "Client Country",
                    "type": "text",
                    "name": "client_country",
                    "required": true
                },
                {
                    "label": "Examination Location",
                    "type": "text",
                    "name": "examination_location",
                    "required": true
                },
                {
                    "label": "Asset Name",
                    "type": "text",
                    "name": "asset_name",
                    "required": true
                },
                {
                    "label": "Asset Serial Number",
                    "type": "text",
                    "name": "serial_number",
                    "required": true
                },
                {
                    "label": "Asset Model",
                    "type": "text",
                    "name": "asset_model",
                    "required": true
                }
            ]
        },
        {
            "title": "Job Details",
            "fields": [
                {
                    "label": "Contract",
                    "type": "text",
                    "name": "contract"
                },
                {
                    "label": "Work Order",
                    "type": "text",
                    "name": "work_order"
                },
                {
                    "label": "Purchase Order",
                    "type": "text",
                    "name": "purchase_order"
                },
                {
                    "label": "Client Job Reference",
                    "type": "text",
                    "name": "client_job_reference",
                    "required": true
                },
                {
                    "label": "Rig",
                    "type": "text",
                    "name": "rig"
                }
            ]
        },
        {
            "title": "Report Details",
            "fields": [
                {
                    "label": "Report Number",
                    "type": "text",
                    "name": "report_number",
                    "required": true
                },
                {
                    "label": "Date of examination",
                    "type": "date",
                    "name": "examination_date",
                    "required": true
                },
                {
                    "label": "Date of Next Examination",
                    "type": "date",
                    "name": "next_examination_date"
                },
                {
                    "label": "Area of Examination",
                    "type": "text",
                    "name": "examination_area",
                    "required": true
                },
                {
                    "label": "Services",
                    "type": "text",
                    "name": "services",
                    "required": true
                },
                {
                    "label": "Local Procedure Number",
                    "type": "text",
                    "name": "local_procedure_number",
                    "required": true
                },
                {
                    "label": "Standards",
                    "type": "text",
                    "name": "standards",
                    "required": true
                },
                {
                    "label": "Test Restrictions",
                    "type": "text",
                    "name": "test_restrictions",
                    "required": true
                },
                {
                    "label": "Surface Condition",
                    "type": "text",
                    "name": "surface_condition",
                    "required": true
                },
                {
                    "label": "Report Status",
                    "type": "select",
                    "name": "report_status",
                    "options": ["Accepted", "Rejected"],
                    "required": false
                },
                {
                    "label": "Revision",
                    "type": "text",
                    "name": "revision",
                    "required": true
                },
                {
                    "label": "Drawing Number",
                    "type": "text",
                    "name": "drawing_number",
                    "required": true
                }
            ]
        },
    ]
}

export default function EditReportLiftingReportCommonFields(
    props
) {
    return (
        <div>
            {formData.sections.map((section, sectionIndex) => (
                <div key={sectionIndex}>
                    <h3 className="font-bold mb-4">{section.title}</h3>
                    <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                        {section.fields.map((field, fieldIndex) => (
                            <div key={fieldIndex}>
                                <label className="block text-gray-700 text-md font-bold mb-2">
                                    {field.label}:
                                </label>
                                {field.type === 'select' ? (
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name={field.name}
                                        onChange={props.handleChange}
                                        required={field.required}
                                    >
                                        <option>Select a {field.label.toLowerCase()}</option>
                                        {field.options.map((option, optionIndex) => (
                                            <option key={optionIndex} value={option}>
                                                {option}
                                            </option>
                                        ))}
                                    </select>
                                ) : (
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type={field.type}
                                        placeholder={field.label}
                                        name={field.name}
                                        value={props.state[field.name]}
                                        onChange={props.handleChange}
                                        required={field.required}
                                    />
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
            {/* Asset Details */}
            <div className="mb-4">
                <TableList
                    listData={props.assetDetails}
                    setListData={props.setAssetsDetails}
                    handleRemoveTableItems={props.handleRemoveTableItems}
                    handleTableItemChange={props.handleAssetDataTableItemChange}
                    tableHeaders={assetTableHeaders}
                    label={"Assets Details:"}
                />
            </div>
            <div className="mb-4">
                <TableList
                    listData={props.reportTypeData}
                    setListData={props.setReportTypeData}
                    handleRemoveTableItems={props.handleRemoveTableItems}
                    handleTableItemChange={props.handleReportTypeTableItemChange}
                    tableHeaders={itemTableHeaders}
                    label={"Items:"}
                />
            </div>
            <div className={"mt-4"}>
                <p className={"block text-gray-700 text-md font-bold mb-2"}>Lifting Info</p>
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        (i) Is this the first through examination of lifting equipment after installation or
                        after assembly at a new site or in new location?
                    </label>
                    <textarea
                        name={"q1_a"}
                        onChange={props.handleLiftingInfo}
                        value={props.liftingInfo["q1_a"]}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className={"flex gap-4 mt-4"}>
                    <div style={{width: "50%"}}>
                        <label className="block text-gray-700 text-md font-bold mb-2">
                            If Yes, has the equipment been installed correctly?
                        </label>
                        <textarea
                            name={"q1_b"}
                            value={props.liftingInfo["q1_b"]}
                            onChange={props.handleLiftingInfo}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                    <div style={{width: "50%"}}>
                        <label className="block text-gray-700 text-md font-bold mb-2">
                            If No, when was the equipment carried out?
                        </label>
                        <textarea
                            name={"q1_c"}
                            value={props.liftingInfo["q1_c"]}
                            onChange={props.handleLiftingInfo}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                    </div>
                </div>
            </div>
            <div className={"mt-8"}>
                <p className={"block text-gray-700 text-md font-bold mb-2"}>Was the examination carried out:</p>
                <div className={"flex gap-4"}>
                    <div style={{width: "50%"}}>
                        <label className="block text-gray-700 text-md font-bold mb-2">
                            Within an interval of six months
                        </label>
                        <input
                            name={"q1_d"}
                            value={props.liftingInfo["q1_d"]}
                            onChange={props.handleLiftingInfo}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <div style={{width: "50%"}}>
                        <label className="block text-gray-700 text-md font-bold mb-2">
                            Within an interval of 12 months
                        </label>
                        <input
                            name={"q1_e"}
                            value={props.liftingInfo["q1_e"]}
                            onChange={props.handleLiftingInfo}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                </div>
                <div className={"flex mt-4 gap-4"}>
                    <div style={{width: "50%"}}>
                        <label className="block text-gray-700 text-md font-bold mb-2">
                            In accordance with an examination scheme
                        </label>
                        <input
                            name={"q1_f"}
                            value={props.liftingInfo["q1_f"]}
                            onChange={props.handleLiftingInfo}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                    <div style={{width: "50%"}}>
                        <label className="block text-gray-700 text-md font-bold mb-2">
                            After the occurrence of exceptional circumstances?
                        </label>
                        <input
                            name={"q1_g"}
                            value={props.liftingInfo["q1_g"]}
                            onChange={props.handleLiftingInfo}
                            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
                    </div>
                </div>
            </div>
            <div className={"mt-8"}>
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        (ii) Is the case that equipment would be safe to operate?
                    </label>
                    <textarea
                        name={"q2_a"}
                        value={props.liftingInfo["q2_a"]}
                        onChange={props.handleLiftingInfo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
            </div>
            <div className={"mt-4"}>
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        (iii) Does any part of the equipment have a defect which is or could become a danger to a
                        person?
                    </label>
                    <textarea
                        name={"q3_a"}
                        value={props.liftingInfo["q3_a"]}
                        onChange={props.handleLiftingInfo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className={"mt-4"}>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Identification of any part of the equipment found to have a defect which is or could become a
                        danger
                        to person and a description of the defect? (If none state NONE)
                    </label>
                    <textarea
                        name={"q3_b"}
                        value={props.liftingInfo["q3_b"]}
                        onChange={props.handleLiftingInfo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className={"mt-4"}>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Is the above a defect which is of immediate danger to person?
                    </label>
                    <textarea
                        name={"q3_c"}
                        value={props.liftingInfo["q3_c"]}
                        onChange={props.handleLiftingInfo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className={"mt-4"}>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Is the above a defect which is not yet, but could become a danger to person?
                    </label>
                    <textarea
                        name={"q3_d"}
                        value={props.liftingInfo["q3_d"]}
                        onChange={props.handleLiftingInfo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className={"mt-4"}>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        If Yes, state when:
                    </label>
                    <textarea
                        name={"q3_e"}
                        value={props.liftingInfo["q3_e"]}
                        onChange={props.handleLiftingInfo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className={"mt-4"}>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Particulars of any repair,renewal,or alteration required to remedy the defect identified above?
                    </label>
                    <textarea
                        name={"q3_f"}
                        value={props.liftingInfo["q3_f"]}
                        onChange={props.handleLiftingInfo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className={"mt-8"}>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        (iv) Details of any tests carried out as part of the examination?
                    </label>
                    <textarea
                        name={"q4_a"}
                        value={props.liftingInfo["q4_a"]}
                        onChange={props.handleLiftingInfo}
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
                </div>
                <div className="mt-10">
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
            </div>
            {/*<div className="mt-8">*/}
            {/*    <TableList*/}
            {/*        listData={props.personnelData}*/}
            {/*        setListData={props.setPersonnelData}*/}
            {/*        handleRemoveTableItems={props.handleRemoveTableItems}*/}
            {/*        handleTableItemChange={props.handlePersonnelTableItemChange}*/}
            {/*        tableHeaders={personnelHeaders}*/}
            {/*        label={"Personnel:"}*/}
            {/*    />*/}
            {/*</div>*/}
            <BottomComponent
                handleFilesSelect={props.handleFilesSelect}
                handleChange={props.handleChange}
                handleIssuerInfoChange={props.handleIssuerInfoChange}
                handleReviewerInfoChange={props.handleReviewerInfoChange}
                setComments={props.setComments}
                comments={props.comments}
                addItem={props.addComment}
                issuerInfo={props.issuerInfo}
                reviewerInfo={props.reviewerInfo}
                state={props.state}
                handleImageDelete={props.handleImageDelete}
                handleDeleteSignature={props.handleDeleteSignature}
            />
        </div>
    )
}
