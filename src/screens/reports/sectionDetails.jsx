import DocumentSpacer from "../../components/spacer/index.jsx";

const sectionDetails = ({ data, isLifting, uniqueId = "" }) => {
    return (
        <div>
            <DocumentSpacer name={uniqueId} defaultValue={15} />
            <div className="flex justify-start w-100">
                <div className="left-section">
                    <div>
                        <p className="bg-[#D8D8D8] font-bold text-[12px] text-left pb-2 pl-2">Client Details</p>
                        <table className="section-table">
                            <tbody>
                            <tr>
                                <td>Client:</td>
                                <td><p>{data?.client_name}</p></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><p>{data?.client_address}</p></td>
                            </tr>
                            <tr>
                                <td></td>
                                <td><p>{data?.client_city}, {data?.client_country}</p></td>
                            </tr>
                            <tr>
                                <td>Location of Examination: </td>
                                <td><p>{data?.examination_location}</p></td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                    <div>
                        <p className="bg-[#D8D8D8] font-bold text-[12px] text-left pb-2 pl-2">Job Details</p>
                        <table className="section-table">
                            <tbody>
                            <tr>
                                <td>Contract: </td>
                                <td><p>{data?.contract || '-'}</p></td>
                            </tr>
                            <tr>
                                <td>Work Order: </td>
                                <td><p>{data?.work_order}</p></td>
                            </tr>
                            <tr>
                                <td>Purchase Order</td>
                                <td><p>{data?.purchase_order || '-'}</p></td>
                            </tr>
                            <tr>
                                <td>Client Job Reference: </td>
                                <td><p>{data?.client_job_reference}</p></td>
                            </tr>
                            <tr>
                                <td>Rig: </td>
                                <td><p>{data?.rig}</p></td>
                            </tr>
                            </tbody>
                        </table>

                    </div>
                </div>
                <div className="right-section">
                    <p className="bg-[#D8D8D8] font-bold text-left text-[12px] pb-2 pl-2">Report Details</p>
                    <table className="section-table">
                        <tbody>
                        <tr>
                            <td>Report Number:</td>
                            <td><p>{data?.report_number}</p></td>
                        </tr>
                        {isLifting && <tr>
                            <td>Revision:</td>
                            <td><p>{data?.revision}</p></td>
                        </tr>}
                        <tr>
                            <td>Date of Examination</td>
                            <td><p>{data?.examination_date}</p></td>
                        </tr>
                        <tr>
                            <td>Date of Next Examination</td>
                            <td><p>{data?.next_examination_date || '-'}</p></td>
                        </tr>
                        <tr>
                            <td>Area of Examination:</td>
                            <td><p>{data?.examination_area}</p></td>
                        </tr>
                        <tr>
                            <td>Services:</td>
                            <td><p>{data?.services}</p></td>
                        </tr>
                        {isLifting && <tr>
                            <td>Standards:</td>
                            <td><p>{data?.standards}</p></td>
                        </tr>}
                        {!isLifting && <tr>
                            <td>Procedure Number:</td>
                            <td><p>{data?.standards}</p></td>
                        </tr>}
                        {isLifting && <tr>
                            <td>Local Procedure Number:</td>
                            <td><p>{data?.local_procedure_number}</p></td>
                        </tr>}
                        {!isLifting && <tr>
                            <td>Specification:</td>
                            <td><p>{data?.local_procedure_number}</p></td>
                        </tr>}
                        {!isLifting && <tr>
                            <td>Acceptance Criteria:</td>
                            <td><p>{data?.drawing_number}</p></td>
                        </tr>}
                        {isLifting && <tr>
                            <td>Drawing Number:</td>
                            <td><p>{data?.drawing_number}</p></td>
                        </tr>}
                        <tr>
                            <td>Test Restrictions:</td>
                            <td><p>{data?.test_restrictions}</p></td>
                        </tr>
                        <tr>
                            <td>Surface Condition:</td>
                            <td><p>{data?.surface_condition}</p></td>
                        </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
 }

 export default sectionDetails;
