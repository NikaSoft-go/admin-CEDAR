
const AddReportWelding = ({
    handleChange
 }) => {

    return (
        <>
            <h3 className="font-bold mb-4">Client Details</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Client Name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Client:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Client"
                        name="client_name"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Location */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Location:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Examination Location"
                        name="examination_location"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Test Date */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Test Date:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Test Date"
                        name="examination_date"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Job Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Job Number:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Job Number"
                        name="work_order"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Report Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Report No:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Report Number"
                        name="report_number"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Request / Document Number */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Request/Doc No:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Request/Doc No:"
                        name="drawing_number"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Contract Name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Contract Name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Contract Name"
                        name="contract"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Drawing Reference */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Drawing Reference:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Drawing Reference"
                        name="client_job_reference"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Sample Selection */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Sample Selection:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Sample Selection"
                        name="sample_selection"
                        onChange={handleChange}
                        required
                    />
                </div>

                {/* Drawing Reference */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Drawing Reference:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Drawing Reference"
                        name="client_job_reference"
                        onChange={handleChange}
                        required
                    />
                </div>
            </div>
        </>
    );
};

export default AddReportWelding;
