// src/components/Invoices.js
import { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/index.jsx";
import {Link, useNavigate} from "react-router-dom";
import {axiosClient} from "../../libs/axiosClient.js";
import {IoEyeOutline} from "react-icons/io5";
import {useDispatch} from "react-redux";
import {setInvoiceData} from "../../redux/slices/invoiceSlice.js";

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {
        const getAllInvoices = async () => {
            try {
                const response = await axiosClient.get('/invoices/get-invoices/');
                const data = response.data.data;
                setInvoices(data);
                dispatch(setInvoiceData(data));
            } catch (error) {
                console.error(error);
            }
        }

        getAllInvoices();

    }, []);

    const totalInvoices = invoices.length;

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar />
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Job Quotations</h1>
                        <div className="mb-4 flex justify-between items-center">
                            <p className="text-gray-600">
                                Total Job Quotations: <span className="font-bold">{totalInvoices}</span>
                            </p>
                            <Link
                                to="/add-invoice"
                                className="add-invoice-btn font-bold py-2 px-4 rounded"
                            >
                                Add Job Quotation
                            </Link>
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                            {invoices.map((invoice) => (
                                <div
                                    key={invoice?.id}
                                    className="bg-white p-4 rounded-md shadow-md"
                                >
                                    <div className="flex justify-between items-center cursor-pointer">
                                        <h2 className="text-lg font-semibold mb-2">{invoice?.quote_number}</h2>
                                        <p onClick={() => navigate(`/preview-invoice/${invoice?.id}`)}><IoEyeOutline size={16}/></p>
                                    </div>
                                    <p className="text-gray-600">
                                        <b>Client:</b> {invoice?.client_name}
                                        <br />
                                        <b>Date:</b> {invoice?.invoice_date}
                                        <br />
                                        <b>Prepared by:</b> {invoice?.prepared_by}
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
