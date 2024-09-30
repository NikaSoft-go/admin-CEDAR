import PropTypes from 'prop-types';

const TableWithHeader = ({ data }) => {
    return (
        <div className="table-container">
            <table className="custom-table">
                <thead>
                <tr>
                    <th colSpan="2" className="header-cell">
                        {data?.invoice_name}
                    </th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="data-cell">Date</td>
                    <td className="data-cell">{data?.invoice_date}</td>
                </tr>
                <tr>
                    <td className="data-cell">Quote Number</td>
                    <td className="data-cell">{data?.invoice_type}</td>
                </tr>
                <tr>
                    <td className="data-cell">Client</td>
                    <td className="data-cell">{data?.client_name}</td>
                </tr>
                <tr>
                    <td className="data-cell">Prepared By</td>
                    <td className="data-cell">{data?.prepared_by}</td>
                </tr>
                </tbody>
            </table>
        </div>
    );
};

TableWithHeader.propTypes = {
    data: PropTypes.shape({
        invoice_date: PropTypes.string,
        invoice_name: PropTypes.string,
        quote_number: PropTypes.string,
        client_name: PropTypes.string,
        prepared_by: PropTypes.string,
    }).isRequired,
};

export default TableWithHeader;
