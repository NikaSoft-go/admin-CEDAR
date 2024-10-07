
import { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/index.jsx";
import {Link, useNavigate} from "react-router-dom";
import {axiosClient} from "../../libs/axiosClient.js";
import {IoEyeOutline} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {BsTrash} from "react-icons/bs";
import {toast} from "react-toastify";
import {setJobInvoiceData} from "../../redux/slices/jobInvoiceSlice.js";

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    const previewInvoice = (e, id) => {
        e.stopPropagation()
        navigate(`/preview-invoice/${id}`);
    }

    const deleteInvoice = async (e, id) => {
        e.stopPropagation()
        try {
            const response = await axiosClient.delete(`/invoices/delete-job-invoice/${id}`);
            toast.success(response.data?.message);
            getAllInvoices();
        } catch (e) {
            console.error(e);
        }
    }

    const getAllInvoices = async () => {
        try {
            const response = await axiosClient.get('/job-invoices/get-job-invoices/');
            const data = response.data.data;
            setInvoices(data);
            dispatch(setJobInvoiceData(data));
        } catch (error) {
            console.error(error);
        }
    }

    useEffect(() => {
        getAllInvoices();
    }, []);

    const totalInvoices = invoices.length;

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Invoices</h1>
                        <div className="mb-4 flex justify-between items-center">
                            <p className="text-gray-600">
                                Total Invoices: <span className="font-bold">{totalInvoices}</span>
                            </p>
                            <Link
                                to="/add-invoice"
                                className="add-invoice-btn font-bold py-2 px-4 rounded"
                            >
                                Add Invoice
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {invoices.map((invoice) => (
                                <div
                                    key={invoice?.id}
                                    className="bg-white p-4 rounded-md shadow-md"
                                    onClick={() => navigate(`/invoice/update/${invoice?.id}`)}
                                >
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <h2 className="text-lg font-semibold mb-2">{invoice?.invoice_number}</h2>
                                        <div className="flex">
                                            <p onClick={(e) => previewInvoice(e, invoice?.id)}>
                                                <IoEyeOutline size={16} fill="#288068
                                                " />
                                            </p>
                                            <BsTrash className="ml-3" fill="red" onClick={(e) => deleteInvoice(e, invoice?.id)} />
                                        </div>
                                    </div>
                                    <p className="text-gray-600">
                                        <b>Date:</b> {invoice?.invoice_date}
                                        <br />
                                        <b>Receiver Address:</b> {invoice?.receiver_address}
                                        <br />
                                        <b>Total:</b> {invoice?.currency} {invoice?.total_amount}
                                        <br />
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

export default Invoices;
