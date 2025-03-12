import {FiTrash2} from "react-icons/fi";
import {emptyLiftingAssetsDetails, emptyLiftingItemDetails} from "../../../utils/data.js";
import {IoMdAddCircleOutline} from "react-icons/io";


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
          "label": "Procedure",
          "type": "text",
          "name": "standards",
          "required": true
        },
        {
          "label": "Specification",
          "type": "text",
          "name": "local_procedure_number",
          "required": true
        },
        {
          "label": "Acceptance Criteria",
          "type": "text",
          "name": "drawing_number"
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
          "required": true
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
    {
      "title": "Inspected by",
      "fields": [
        {
          "label": "Inspector name",
          "type": "text",
          "name": "name",
          "required": true
        },
        {
          "label": "Inspection date",
          "type": "text",
          "name": "date",
          "required": true
        },
        {
          "label": "Inspector qualification",
          "type": "text",
          "name": "qualification",
          "required": true
        }
      ]
    },
    {
      "title": "Reviewed by",
      "fields": [
        {
          "label": "Reviewer name",
          "type": "text",
          "name": "name",
          "required": true
        },
        {
          "label": "Review date",
          "type": "text",
          "name": "date",
          "required": true
        },
        {
          "label": "Reviewer qualification",
          "type": "text",
          "name": "qualification",
          "required": true
        }
      ]
    }
  ]
}

export default function AddReportLiftingReportCommonFields(
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
                <label className="block text-gray-700 text-md font-bold mb-2">Assets Details:</label>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Type</th>
                        <th className="border p-2">Serial Number</th>
                        <th className="border p-2">Model</th>
                        <th className="border p-2">Description</th>
                        <th className="border p-2">Image</th>
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
                                    placeholder="Image"
                                    value={asset.image}
                                    onChange={(e) =>
                                        props.handleTableItemChange(
                                            index,
                                            'image',
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
                            emptyLiftingAssetsDetails
                        )
                    }
                >
                    <IoMdAddCircleOutline/>
                </button>
            </div>

            <div className="mb-4">
                <label className="block text-gray-700 text-md font-bold mb-2">Items:</label>
                <table className="w-full border">
                    <thead>
                    <tr>
                        <th className="border p-2">Serial Number</th>
                        <th className="border p-2">Description and Identification of Equipment</th>
                        <th className="border p-2">SWL</th>
                        <th className="border p-2">Test Load Applied</th>
                        <th className="border p-2">Date of Manufacture</th>
                        <th className="border p-2">Date of Last Examination</th>
                        <th className="border p-2">Date of Next Examination</th>
                        <th className="border p-2"></th>
                    </tr>
                    </thead>
                    <tbody>
                    {props.reportTypeData?.map((asset, index) => (
                        <tr key={index}>
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
                                        props.reportTypeData,
                                        props.setReportTypeData
                                    )}
                            />
                          </td>
                          <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Description and Identification of Equipment"
                                value={asset.description_and_identification_equipment}
                                required
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'description_and_identification_equipment',
                                        e.target.value,
                                        props.reportTypeData,
                                        props.setReportTypeData
                                    )}
                            />
                          </td>
                          <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="SWL"
                                value={asset.swl}
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'swl',
                                        e.target.value,
                                        props.reportTypeData,
                                        props.setReportTypeData
                                    )
                                }
                                required
                            />
                          </td>
                          <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Test Load Applied"
                                value={asset.test_load_applied}
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'test_load_applied',
                                        e.target.value,
                                        props.reportTypeData,
                                        props.setReportTypeData
                                    )
                                }
                                required
                            />
                          </td>
                          <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Date of Manufacture"
                                value={asset.date_manufacture}
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'date_manufacture',
                                        e.target.value,
                                        props.reportTypeData,
                                        props.setReportTypeData
                                    )
                                }
                                required
                            />
                          </td>
                          <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Date of Last Examination"
                                value={asset.date_last_examination}
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'date_last_examination',
                                        e.target.value,
                                        props.reportTypeData,
                                        props.setReportTypeData
                                    )
                                }
                                required
                            />
                          </td>
                          <td className="border p-2">
                            <input
                                type="text"
                                className="w-full p-1"
                                placeholder="Date of Next Examination"
                                value={asset.date_next_examination}
                                onChange={(e) =>
                                    props.handleTableItemChange(
                                        index,
                                        'date_next_examination',
                                        e.target.value,
                                        props.reportTypeData,
                                        props.setReportTypeData
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
                                        props.reportTypeData,
                                        props.setReportTypeData
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
                          props.setReportTypeData,
                          props.reportTypeData,
                          emptyLiftingItemDetails
                      )
                  }
              >
                <IoMdAddCircleOutline/>
              </button>
            </div>
        </div>
    )
}