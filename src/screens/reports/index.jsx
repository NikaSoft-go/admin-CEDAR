// src/components/Invoices.js
import { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/index.jsx";
import {Link, useNavigate} from "react-router-dom";
import {axiosClient} from "../../libs/axiosClient.js";
import {IoEyeOutline} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {BsTrash} from "react-icons/bs";
import {toast} from "react-toastify";
import {setReportData} from "../../redux/slices/reportSlice.js";

const Reports = () => {
    const [reports, setReports] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const previewReport = (e, id) => {
        e.stopPropagation()
        navigate(`/preview-report/${id}`);
    }

    const deleteReport = async (e, id) => {
        e.stopPropagation()
        try {
            const response = await axiosClient.delete(`/reports/delete-report/${id}`);
            toast.success(response.data?.message);
            getAllReports();
        } catch (e) {
            console.error(e);
        }
    }

    const getAllReports = async () => {
        try {
            const response = await axiosClient.get('/reports/get-reports/');
            const data = response.data.data;
            setReports(data);
            dispatch(setReportData(data));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllReports();
    }, []);

    const totalReports = reports.length;

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Reports</h1>
                        <div className="mb-4 flex justify-between items-center">
                            <p className="text-gray-600">
                                Total Reports: <span className="font-bold">{totalReports}</span>
                            </p>
                            <Link
                                to="/add-report"
                                className="add-invoice-btn font-bold py-2 px-4 rounded"
                            >
                                Add Report
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {reports.map((report) => (
                                <div
                                    key={report?.id}
                                    className="bg-white p-4 rounded-md shadow-md"
                                    onClick={() => navigate(`/report/update/${report?.id}`)}
                                >
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <h2 className="text-lg font-semibold mb-2">{report?.report_type} - {report?.work_order}</h2>
                                        <div className="flex">
                                            <p onClick={(e) => previewReport(e, report?.id)}>
                                                <IoEyeOutline size={16} fill="#288068
                                                " />
                                            </p>
                                            <BsTrash className="ml-3" fill="red" onClick={(e) => deleteReport(e, report?.id)} />
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        <b>Client:</b> {report?.client_name}
                                        <br />
                                        <b>Date:</b> {report?.examination_date}
                                        <br />
                                        <b>Inspected by:</b> {JSON.parse(report?.issuer || "{}")?.name}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default Reports;
