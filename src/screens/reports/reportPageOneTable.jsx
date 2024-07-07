import PropTypes from 'prop-types';

const ReportPageOneTable = ({ data }) => {
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="2" className="header-cell">
                        {data?.client_job_reference}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="data-cell">Client Name</td>
                    <td className="data-cell">{data?.client_name}</td>
                </tr>
                <tr>
                    <td className="data-cell">Asset Name</td>
                    <td className="data-cell">{data?.services}</td>
                </tr>
                <tr>
                    <td className="data-cell">Serial number</td>
                    <td className="data-cell">{data?.client_name}</td>
                </tr>
                <tr>
                    <td className="data-cell">Inspector Name and Qualification</td>
                    <td className="data-cell">{data?.issuer?.name} ({data?.issuer?.qualification})</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

ReportPageOneTable.propTypes = {
    data: PropTypes.shape({
        services: PropTypes.string,
        invoice_name: PropTypes.string,
        client_job_reference: PropTypes.string,
        client_name: PropTypes.string,
        issuer: PropTypes.shape({
            name: PropTypes.string,
            qualification: PropTypes.string
        }),
    }).isRequired,
};

export default ReportPageOneTable;
