import TableList from "../../components/tableList/tableList.jsx";
import {useEffect, useState} from "react";
import Sidebar from "../../components/sidebar/index.jsx";
import {toTitleCase} from "../../utils/index.js";
import {craneChecklistData, forkliftChecklistData} from "../../utils/data.js";
import Button from "../../components/button/index.jsx";
import {axiosClient} from "../../libs/axiosClient.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


export default function AddChecklist() {
    const [checkListsInfo, setCheckListsInfo] = useState([]);
    const [state, setState] = useState({});
    const checklistInfoHeaders = [
        `Prior to starting the ${toTitleCase(state.checklist_type ?? "crane")}`,
        "Yes",
        "No",
        "N/A"
    ]

    const navigate = useNavigate();

    const handleChange = (e) => {
        setState((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleRemoveTableItems = (index) => {
        const updatedCostItems = [...checkListsInfo];
        updatedCostItems.splice(index, 1);
        setCheckListsInfo(updatedCostItems);
    };

    const handleChecklistDataTableItemChange = (index, field, value) => {
        const updatedCostItems = [...checkListsInfo];
        updatedCostItems[index][field] = value;
        setCheckListsInfo(updatedCostItems);
    };

    const formData = {
        sections: [
            {
                title: "Inspector",
                fields: [
                    {
                        label: "Inspector's Name",
                        type: "text",
                        name: "inspectors_name",
                        required: true
                    },
                    {
                        label: "Qualification",
                        type: "text",
                        name: "qualification",
                        required: true
                    },
                    {
                        label: "Date",
                        type: "text",
                        name: "date",
                        required: true
                    },
                ]
            },
        ]
    };

    const addChecklist = async (e) => {
        e.stopPropagation();
        try {
            axiosClient.post("/reports/add-checklist/", {
                ...state,
                checklists_info: checkListsInfo
            });
            toast.success("Checklist added successfully");
            navigate("/checklists");
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        if (state.checklist_type) {
            setCheckListsInfo(
                state.checklist_type === "crane"
                    ? craneChecklistData : forkliftChecklistData
            )
        }
    }, [state.checklist_type])

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
            <div className={"flex-1 flex flex-col overflow-hidden"}>
                <div className={"flex flex-col overflow-y-auto px-4 pt-3"}>
                    <form onSubmit={addChecklist}>
                        <div className={"mt-6 mb-10"}>
                            <label className="block text-gray-700 text-md font-bold mb-2">Checklist type:</label>
                            <select
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                placeholder="Checklist type"
                                name="checklist_type"
                                onChange={handleChange}
                                required
                            >
                                <option value={""}>Select checklist type</option>
                                <option value={"forklift"}>Forklift</option>
                                <option value={"crane"}>Crane</option>
                            </select>
                        </div>
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
                                                    onChange={handleChange}
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
                                                    onChange={handleChange}
                                                    required={field.required}
                                                />
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                        {state.checklist_type && <TableList
                            listData={checkListsInfo}
                            setListData={setCheckListsInfo}
                            handleRemoveTableItems={handleRemoveTableItems}
                            handleTableItemChange={handleChecklistDataTableItemChange}
                            tableHeaders={checklistInfoHeaders}
                            label={"Checklists:"}
                        />}
                        <div className={"mt-6 mb-6"}>
                            <Button>Add Checklist</Button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}