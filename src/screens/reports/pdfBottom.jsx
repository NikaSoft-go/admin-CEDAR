import {formatDate, generateImageUrl} from "../../utils/index.js";


const PdfBottom = ({ data }) => {
    return (
        <div className="mt-3 pdf_bottom">
            <table className="w-[100%]">
                <thead>
                    <tr>
                        <th></th>
                        <th>Inspected by</th>
                        <th>Reviewed by</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><div style={{
                            color: data?.report_status === 'Accepted' ? 'green' : 'red',
                            fontSize: 25
                        }}><b>{data?.report_status}</b></div></td>
                        <td>
                            <div>
                                {data?.inspector_signature_url && <img
                                    src={generateImageUrl(data?.inspector_signature_url)}
                                    alt={"inspector_signature"}
                                    style={{ width: 150 }}
                                />}
                            </div>
                        </td>
                        <td>
                            <div>
                                {data?.reviewer_signature_url && <img
                                    src={generateImageUrl(data?.reviewer_signature_url)}
                                    alt={"reviewer_signature"}
                                    style={{ width: 150 }}
                                />}
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>Name</td>
                        <td>{data?.issuer?.name}</td>
                        <td>{data?.quality_controller?.name}</td>
                    </tr>
                    <tr>
                        <td>Qualification</td>
                        <td>{data?.issuer?.qualification}</td>
                        <td>{data?.quality_controller?.qualification}</td>
                    </tr>
                    <tr>
                        <td>Date</td>
                        <td>{formatDate(data?.issuer?.date)}</td>
                        <td>{formatDate(data?.quality_controller?.date)}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default PdfBottom;