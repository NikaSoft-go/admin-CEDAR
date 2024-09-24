import {generateImageUrl} from "../../utils/index.js";
import {BottomTag} from "../../components/pdfComponents/bottomTag.jsx";

const UTPageTwo = ({ data }) => {
    const equipmentMethods = JSON.parse(data?.equipment_method || "[]");
    const utTable = JSON.parse(data?.ut_table_data || "[]");
    return (
        <div>
            <div className="mx-6 mt-3 mb-6 report-page-two">
                <div className="mt-5">
                    <div className="report-section-head">
                        <p className={"text-[14px] font-bold text-center uppercase"}>Report Details</p>
                    </div>
                    <table className="equipment_table w-[100%]">
                        <tbody>
                        <tr>
                            <td><b>Report No: </b>{data?.report_number}</td>
                            <td><b>Customer: </b>{data?.client_name}</td>
                            <td><b>Work Order No: </b>{data?.work_order}</td>
                        </tr>
                        <tr>
                            <td><b>Contract No: </b>{data?.contract}</td>
                            <td><b>Location: </b>{data?.examination_location}</td>
                            <td><b>Request No: </b>{data?.drawing_number}</td>
                        </tr>
                        <tr>
                            <td><b>Description: </b>{data?.description}</td>
                            <td><b>Test Date: </b>{data?.examination_date}</td>
                            <td><b>Next Examination: </b>{data?.next_examination_date}</td>
                        </tr>
                        <tr>
                            <td><b>Test Restrictions: </b>{data?.test_restrictions}</td>
                            <td><b>Serial No: </b>{data?.serial_number}</td>
                            <td><b>Operating Pressure: </b>{data?.operating_pressure}</td>
                        </tr>
                        <tr>
                            <td><b>Technique Standard: </b>{data?.technique_standard}</td>
                            <td><b>Material: </b>{data?.material}</td>
                            <td><b>Acceptance Criteria: </b>{data?.acceptance_criteria}</td>
                        </tr>
                        <tr>
                            <td><b>Technical Standard: </b>{data?.standards}</td>
                            <td><b>Date of Manufacturing: </b>{data?.date_of_manufacturing}</td>
                            <td><b>Diagnostic Area Surface: </b>{data?.diagnostic_area_surface}</td>
                        </tr>
                        <tr>
                            <td><b>Surface Condition: </b>{data?.surface_condition}</td>
                            <td><b>Minimum thickness: </b>{data?.thickness}</td>
                            <td></td>
                        </tr>
                        </tbody>
                    </table>
                </div>

                <div className={"mt-10"}>
                    <div className="report-section-head">
                        <p className={"text-[14px] font-bold text-center uppercase"}>Equipment, Technique & Application Method</p>
                    </div>
                    <table className="equipment_table w-[100%]">
                        <tbody>
                        <tr>
                            {equipmentMethods?.slice(0,4).map((elt, index) =>
                                <td key={index}><b>{elt?.property}: </b>{elt?.value}</td>
                            )}
                        </tr>
                        <tr>
                            {equipmentMethods?.slice(4,8).map((elt, index) =>
                                <td style={{ borderBottom: 0}} key={index}><b>{elt?.property}: </b>{elt?.value}</td>
                            )}
                        </tr>
                        </tbody>
                    </table>
                </div>
                <div>
                    <table className="equipment_table report w-[100%]">
                        <thead>
                        <tr>
                            <th>Probe Serial No</th>
                            <th>Type</th>
                            <th>Angle°</th>
                            <th>Crystal Size (mm)</th>
                            <th>Frequency (MHz)</th>
                            <th>Basic Sensitivity (Db)</th>
                            <th>Transfer Correction (Db)</th>
                            <th>Scanning Sensitivity (Db)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {utTable?.map((elt, index) =>
                            <tr key={index}>
                                <td>{elt?.probe_serial_number}</td>
                                <td>{elt?.type}</td>
                                <td>{elt?.angle}</td>
                                <td>{elt?.crystal_size}</td>
                                <td>{elt?.frequency}</td>
                                <td>{elt?.basic_sensitivity}</td>
                                <td>{elt?.transfer_correction}</td>
                                <td>{elt?.scanning_sensitivity}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <div className={"mt-10"} style={{ marginBottom: 228 }}>
                    <div className="report-section-head">
                        <p className={"text-[14px] font-bold text-center uppercase"}>Drawing</p>
                    </div>
                    <div className={"flex justify-between drawing-images"} style={{height: 300}}>
                        <div className={"flex flex-col justify-between drawing-image-one"}>
                            <div className={"drawing-image-two"} style={{height: '70%'}}>
                                {data?.drawing_image_one_url &&
                                    <img
                                        src={generateImageUrl(data?.drawing_image_one_url)}
                                        alt={"drawing image one"}
                                    />
                                }
                            </div>
                            <div className={"drawing-note p-2"} style={{height: '30%'}}>
                                {data?.drawing_note_one}
                            </div>
                        </div>
                        <div className={"flex flex-col justify-between"}>
                            <div className={"drawing-image-two"} style={{height: '70%'}}>
                                {data?.drawing_image_two_url &&
                                    <img
                                        src={generateImageUrl(data?.drawing_image_two_url)}
                                        alt={"drawing image two"}
                                    />
                                }
                            </div>
                            <div className={"drawing-note p-2"} style={{height: '30%'}}>
                                {data?.drawing_note}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <BottomTag/>
        </div>
    )
}

export default UTPageTwo;