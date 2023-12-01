
const TableWithHeader = () => {
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="2" className="header-cell">
                        Header
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="data-cell">Date</td>
                    <td className="data-cell">28 JUNE 2023</td>
                </tr>
                <tr>
                    <td className="data-cell">Quote Number</td>
                    <td className="data-cell">1</td>
                </tr>
                <tr>
                    <td className="data-cell">Client</td>
                    <td className="data-cell">My client</td>
                </tr>
                <tr>
                    <td className="data-cell">Prepared By</td>
                    <td className="data-cell">Me</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

export default TableWithHeader;
