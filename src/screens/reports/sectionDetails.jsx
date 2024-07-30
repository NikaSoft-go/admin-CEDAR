
 const sectionDetails = ({ data }) => {
    return (
        <div className="mt-3 flex justify-start w-100">
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
                                <td>Contract Name: </td>
                                <td><p>{data?.contract || '-'}</p></td>
                            </tr>
                            <tr>
                                <td>Sample Selection: </td>
                                <td><p>{data?.sample_selection}</p></td>
                            </tr>
                            <tr>
                                <td>Drawing Reference</td>
                                <td><p>{data?.client_job_reference || '-'}</p></td>
                            </tr>
                            <tr>
                                <td>Extend of Test: </td>
                                <td><p>{data?.extent_test}</p></td>
                            </tr>
                            <tr>
                                <td>Size: </td>
                                <td><p>{data?.size}</p></td>
                            </tr>
                            <tr>
                                <td>Material: </td>
                                <td><p>{data?.material}</p></td>
                            </tr>
                            <tr>
                                <td>Thickness: </td>
                                <td><p>{data?.thickness}</p></td>
                            </tr>
                            <tr>
                                <td>Weld Prep: </td>
                                <td><p>{data?.weld_prep}</p></td>
                            </tr>
                            <tr>
                                <td>Weld Process: </td>
                                <td><p>{data?.weld_process}</p></td>
                            </tr>
                            <tr>
                                <td>PWHT: </td>
                                <td><p>{data?.pwht}</p></td>
                            </tr>
                            <tr>
                                <td>Temperature: </td>
                                <td><p>{data?.temperature}°C</p></td>
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
                            <td>Specification: </td>
                            <td><p>{data?.specification}</p></td>
                        </tr>
                        <tr>
                            <td>Acceptance Criteria: </td>
                            <td><p>{data?.acceptance_criteria}</p></td>
                        </tr>
                        <tr>
                            <td>Test Restrictions: </td>
                            <td><p>{data?.test_restrictions}</p></td>
                        </tr>
                        <tr>
                            <td>Surface Condition: </td>
                            <td><p>{data?.surface_condition}</p></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default sectionDetails;