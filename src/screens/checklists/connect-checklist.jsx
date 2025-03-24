import Sidebar from "../../components/sidebar/index.jsx";
import {useEffect, useState} from "react";
import {axiosClient} from "../../libs/axiosClient.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {toTitleCase} from "../../utils/index.js";


export default function ConnectChecklists() {
    const [reports, setReports] = useState([]);
    const [checklists, setChecklists] = useState([]);
    const [report, setReport] = useState(null);
    const [checklist, setChecklist] = useState(null);
    const navigate = useNavigate();

    const fetchReportsDropdown = async () => {
        try {
            const response = await axiosClient.get('/reports/get-reports-dropdown/');
            const data = response.data.data;
            setReports(data);
        } catch (error) {
            console.error(error);
        }
    }

    const fetchChecklistsDropdown = async () => {
        try {
            const response = await axiosClient.get('/reports/get-checklists-dropdown/');
            const data = response.data.data;
            setChecklists(data);
        } catch (error) {
            console.error(error);
        }
    }

    const connectReports = async () => {
        try {
            const response = await axiosClient.post('/reports/connect-checklists/', {
                report: report,
                checklist: checklist
            });
            const message = response.data.message;
            toast.success(message);
            navigate("/checklists");
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchReportsDropdown();
        fetchChecklistsDropdown();
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
            <div className={"flex justify-center items-center w-full flex-col"}>
                <h1 className={"text-2xl font-bold uppercase"}>Connecting to report</h1>
                <div className={"flex mt-6 space-x-2"}>
                    <div className={"flex flex-col"}>
                        <label className={"text-xl font-semibold mb-3"}>Select Report</label>
                        <select
                            value={report}
                            className={"p-3 rounded-lg"}
                            onChange={(e) => setReport(e.target.value)}
                        >
                            <option>Select report</option>
                            {reports.map((report, index) => <option key={index} value={report.id}>{report.report_type} - {report.client_name}</option>)}
                        </select>
                    </div>
                    <div className={"flex flex-col"}>
                        <label className={"text-xl font-semibold mb-3"}>Select Checklist</label>
                        <select
                            value={checklist}
                            className={"p-3 rounded-lg"}
                            onChange={(e) => setChecklist(e.target.value)}
                        >
                            <option>Select checklist</option>
                            {checklists.map((checklist, index) => <option key={index} value={checklist.id}>{toTitleCase(checklist.checklist_type)} - {checklist.inspectors_name}</option>)}
                        </select>
                    </div>
                </div>
                <button
                    className={"mt-10 add-invoice-btn p-3 rounded-lg"}
                    onClick={connectReports}
                >
                    Connect
                </button>
            </div>
        </div>
    )
}