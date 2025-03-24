import Sidebar from "../../components/sidebar/index.jsx";
import {useEffect, useState} from "react";
import {axiosClient} from "../../libs/axiosClient.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";


export default function ConnectReports() {
    const [reports, setReports] = useState([]);
    const [mainReport, setMainReport] = useState(null);
    const [subReport, setSubReport] = useState(null);
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

    const connectReports = async () => {
        try {
            const response = await axiosClient.post('/reports/connect-reports/', {
                main_report: mainReport,
                sub_report: subReport
            });
            const message = response.data.message;
            toast.success(message);
            navigate("/reports");
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        fetchReportsDropdown();
    }, []);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
            <div className={"flex justify-center items-center w-full flex-col"}>
                <h1 className={"text-2xl font-bold uppercase"}>Connecting two reports</h1>
                <div className={"flex mt-6 space-x-2"}>
                    <div className={"flex flex-col"}>
                        <label className={"text-xl font-semibold mb-3"}>Select Main Report</label>
                        <select
                            value={mainReport}
                            className={"p-3 rounded-lg"}
                            onChange={(e) => setMainReport(e.target.value)}
                        >
                            <option>Select main report</option>
                            {reports.map((report, index) => <option key={index} value={report.id}>{report.report_type} - {report.client_name}</option>)}
                        </select>
                    </div>
                    <div className={"flex flex-col"}>
                        <label className={"text-xl font-semibold mb-3"}>Select Sub Report</label>
                        <select
                            value={subReport}
                            className={"p-3 rounded-lg"}
                            onChange={(e) => setSubReport(e.target.value)}
                        >
                            <option>Select report</option>
                            {reports.map((report, index) => <option key={index} value={report.id}>{report.report_type} - {report.client_name}</option>)}
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