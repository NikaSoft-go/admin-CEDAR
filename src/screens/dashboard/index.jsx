

const Dashboard = () => {
    const today = new Date();
    const currentDate = today.toDateString();
    const currentTime = today.toLocaleTimeString();

    // Mock data (replace with actual data retrieval)
    const numberOfInvoices = 10;
    const numberOfReports = 5;

    return (
        <div className="p-4">
            <h1 className="text-2xl font-semibold mb-4">Dashboard</h1>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <p className="text-gray-600">Today&apos;s Date: {currentDate}</p>
                    <p className="text-gray-600">Current Time: {currentTime}</p>
                </div>
                <div>
                    <p className="text-blue-600">Invoices: {numberOfInvoices}</p>
                    <p className="text-green-600">Reports: {numberOfReports}</p>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
