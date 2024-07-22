import PropTypes from 'prop-types';

const ReportPageOneTable = ({ data }) => {
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="2" className="header-cell">
                        {data?.report_title}
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
                    <td className="data-cell">Asset Serial number</td>
                    <td className="data-cell">{data?.serial_number}</td>
                </tr>
                <tr>
                    <td className="data-cell">Asset Model</td>
                    <td className="data-cell">{data?.asset_model}</td>
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
