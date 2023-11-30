// src/components/Invoices.js
import { useState, useEffect } from 'react';
import Sidebar from "../../components/sidebar/index.jsx";
import {Link} from "react-router-dom";

const Invoices = () => {
    const [invoices, setInvoices] = useState([]);

    useEffect(() => {
        // Simulating fetching invoice data (replace with actual data retrieval)
        const mockInvoices = [
            { id: 1, title: 'Invoice 001', amount: 500, status: 'Paid' },
            { id: 2, title: 'Invoice 002', amount: 750, status: 'Pending' },
            { id: 3, title: 'Invoice 003', amount: 1200, status: 'Unpaid' },
        ];
        setInvoices(mockInvoices);
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
                                    key={invoice.id}
                                    className="bg-white p-4 rounded-md shadow-md"
                                >
                                    <h2 className="text-lg font-semibold mb-2">{invoice.title}</h2>
                                    <p className="text-gray-600">
                                        Amount: ${invoice.amount}
                                        <br />
                                        Status: {invoice.status}
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
