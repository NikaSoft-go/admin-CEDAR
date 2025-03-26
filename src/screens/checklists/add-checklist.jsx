import TableList from "../../components/tableList/tableList.jsx";
import {useEffect, useState} from "react";
import Sidebar from "../../components/sidebar/index.jsx";
import {toTitleCase} from "../../utils/index.js";
import {craneChecklistData, forkliftChecklistData} from "../../utils/data.js";
import Button from "../../components/button/index.jsx";
import {axiosClient} from "../../libs/axiosClient.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import BottomComponent from "../../components/bottomComponent/bottomComponent.jsx";


export default function AddChecklist() {
    const [checkListsInfo, setCheckListsInfo] = useState([]);
    const [state, setState] = useState({});
    const checklistInfoHeaders = [
        `Prior to starting the ${toTitleCase(state.checklist_type ?? "crane")}`,
        "Yes",
        "No",
        "N/A"
    ]

    const [issuerInfo, setIssuerInfo] = useState({});
    const [reviewerInfo, setReviewerInfo] = useState({});

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

    const handleIssuerInfoChange = (e) => {
        const value = e.target?.files ? e.target.files[0] : e.target.value;
        setIssuerInfo((items) => ({
            ...items,
            [e.target.name]: value
        }))
    }

    const handleReviewerInfoChange = (e) => {
        const value = e.target?.files ? e.target.files[0] : e.target.value;
        setReviewerInfo((items) => ({
            ...items,
            [e.target.name]: value
        }))
    }

    const addChecklist = async (e) => {
        e.stopPropagation();
        try {
            axiosClient.post("/reports/add-checklist/", {
                ...state,
                checklists_info: checkListsInfo,
                inspector_name: issuerInfo.name,
                inspector_qualification: issuerInfo.qualification,
                inspector_date: issuerInfo.date,
                reviewer_name: reviewerInfo.name,
                reviewer_qualification: reviewerInfo.qualification,
                reviewer_date: reviewerInfo.date,
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
                        <BottomComponent
                            handleIssuerInfoChange={handleIssuerInfoChange}
                            handleReviewerInfoChange={handleReviewerInfoChange}
                            issuerInfo={issuerInfo}
                            reviewerInfo={reviewerInfo}
                            hasComment={false}
                            hasImages={false}
                            hasSignature={false}
                        />
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