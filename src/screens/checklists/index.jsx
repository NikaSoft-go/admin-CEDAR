import { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/index.jsx";
import {Link, useNavigate} from "react-router-dom";
import {axiosClient} from "../../libs/axiosClient.js";
import {IoEyeOutline} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {BsTrash} from "react-icons/bs";
import {toast} from "react-toastify";
import {setChecklists} from "../../redux/slices/reportSlice.js";

const Checklists = () => {
    const [checklistsData, setChecklistsData] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const previewChecklist = (e, id) => {
        e.stopPropagation()
        navigate(`/preview-checklist/${id}`);
    }

    const deleteChecklist = async (e, id) => {
        e.stopPropagation()
        try {
            const response = await axiosClient.delete(`/reports/delete-checklist/${id}`);
            toast.success(response.data?.message);
            getAllChecklists();
        } catch (e) {
            console.error(e);
        }
    }

    const getAllChecklists = async () => {
        try {
            const response = await axiosClient.get('/reports/checklists/');
            const data = response.data.data;
            setChecklistsData(data);
            dispatch(setChecklists(data));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllChecklists();
    }, []);

    const totalChecklists = checklistsData.length;

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Checklists</h1>
                        <div className="mb-6 flex justify-between items-center">
                            <p className="text-gray-600">
                                Total Checklists: <span className="font-bold">{totalChecklists}</span>
                            </p>
                            <div className={"space-x-2"}>
                                <Link
                                    to="/connect-checklists"
                                    className="add-invoice-btn font-bold py-2 px-4 rounded"
                                >
                                    Connect to report
                                </Link>
                                <Link
                                    to="/add-checklist"
                                    className="add-invoice-btn font-bold py-2 px-4 rounded"
                                >
                                    Add checklist
                                </Link>
                            </div>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {checklistsData.map((checklist) => (
                                <div
                                    key={checklist?.id}
                                    className="bg-white p-4 rounded-md shadow-md"
                                    onClick={() => navigate(`/checklist/update/${checklist?.id}`)}
                                >
                                    <p className={"font-bold text-lg"}>{checklist?.id}</p>
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <h2 className="text-lg font-semibold mb-2">
                                            {checklist?.inspector_name} - {checklist?.inspector_date}
                                        </h2>
                                        <div className="flex">
                                            <p onClick={(e) => previewChecklist(e, checklist?.id)}>
                                                <IoEyeOutline size={16} fill="#288068
                                                "/>
                                            </p>
                                            <BsTrash className="ml-3" fill="red"
                                                     onClick={(e) => deleteChecklist(e, checklist?.id)}/>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Checklists;
