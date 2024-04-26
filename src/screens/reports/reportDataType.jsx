const ReportDataType = ({data}) => {
    return (
        <div className="mt-3 report_type_data">
            <p className="text-[12px] font-bold mb-2">{data?.report_type}</p>
            <div>
                <table>
                    <thead>
                        <tr>
                            {data?.report_type_data?.slice(0, 6)?.map((elt, index) =>
                                <th key={index}>{elt.property}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {data?.report_type_data?.slice(0, 6)?.map((elt, index) =>
                                <td key={index}>{elt.value}</td>
                            )}
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            {data?.report_type_data?.slice(6, 12)?.map((elt, index) =>
                                <th key={index}>{elt.property}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {data?.report_type_data?.slice(6, 12)?.map((elt, index) =>
                                <td key={index}>{elt.value}</td>
                            )}
                        </tr>
                    </tbody>
                </table>
                <table>
                    <thead>
                        <tr>
                            {data?.report_type_data?.slice(12, 18)?.map((elt, index) =>
                                <th key={index}>{elt.property}</th>
                            )}
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            {data?.report_type_data?.slice(12, 18)?.map((elt, index) =>
                                <td key={index}>{elt.value}</td>
                            )}
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ReportDataType;