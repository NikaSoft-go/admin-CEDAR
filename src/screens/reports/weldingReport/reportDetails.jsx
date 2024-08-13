

const WeldingReportDetails = ({ data }) => {
    return (
        <div className="mt-5">
            <p className={"text-[14px] font-bold mb-2"}>Report Details</p>
            <table className="equipment_table w-[100%]">
                <tbody>
                <tr>
                    <td><span className={"cell-bold"}>Client: </span>{data?.client_name}</td>
                    <td><span className={"cell-bold"}>Location: </span>{data?.examination_location}</td>
                    <td><span className={"cell-bold"}>Test Date: </span>{data?.examination_date}</td>
                </tr>
                <tr>
                    <td><span className={"cell-bold"}>Job Number: </span>{data?.work_order}</td>
                    <td><span className={"cell-bold"}>Request/Doc No: </span>{data?.drawing_number}</td>
                    <td><span className={"cell-bold"}>Report No: </span>{data?.report_number}</td>
                </tr>
                <tr>
                    <td><span className={"cell-bold"}>Contract Name: </span>{data?.contract}</td>
                    <td><span className={"cell-bold"}>Drawing Reference: </span>{data?.client_job_reference}</td>
                    <td><span className={"cell-bold"}>Sample Selection: </span>{data?.sample_selection}</td>
                </tr>
                <tr>
                    <td><span className={"cell-bold"}>Extent of Test: </span>{data?.extent_test}</td>
                    <td><span className={"cell-bold"}>Size: </span>{data?.size}</td>
                    <td><span className={"cell-bold"}>Material: </span>{data?.material}</td>
                </tr>
                <tr>
                    <td><span className={"cell-bold"}>Thickness: </span>{data?.thickness}</td>
                    <td><span className={"cell-bold"}>Surface Condition: </span>{data?.surface_condition}</td>
                    <td><span className={"cell-bold"}>Weld Prep: </span>{data?.weld_prep}</td>
                </tr>
                <tr>
                    <td><span className={"cell-bold"}>Weld Process: </span>{data?.weld_process}</td>
                    <td><span className={"cell-bold"}>PWHT: </span>{data?.pwht}</td>
                    <td><span className={"cell-bold"}>Temperature: </span>{data?.temperature}</td>
                </tr>
                <tr>
                    <td><span className={"cell-bold"}>Specification: </span>{data?.specification}</td>
                    <td><span className={"cell-bold"}>Acceptance Criteria: </span>{data?.acceptance_criteria}</td>
                    <td></td>
                </tr>
                </tbody>
            </table>
        </div>
    )
}

export default WeldingReportDetails;