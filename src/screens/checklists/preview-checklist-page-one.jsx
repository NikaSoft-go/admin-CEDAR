import Logo from "../../assets/logo.png";
import {toTitleCase} from "../../utils/index.js";
import CustomAssetTable from "../../components/assetTable/assetTable.jsx";
import DocumentSpacer from "../../components/spacer/index.jsx";


export default function PreviewChecklistPageOne(
    {checklist}
) {
    return (
        <div style={{margin: "0 25px"}}>
            <div
                className={"flex items-center"}
                style={{border: "1px solid #000"}}
            >
                <div style={{borderRight: "1px solid #000"}}>
                    <img src={Logo} alt={""} style={{width: 300, height: 200}}/>
                </div>
                <div className={"ml-3"}>
                    <p>www.cedarinspectionventures.com</p>
                    <p className={"text-blue-500 font-semibold underline"}>cedarinspectionventure@gmail.com</p>
                    <p>P.O.Box SQ 516, Tema comm.12, Opposite witsand int. school</p>
                    <p>Greater Accra, Ghana –West Africa</p>
                </div>
            </div>
            <div style={{background: "#D8D8D8", padding: "10px 5px", border: "1px solid #000", borderTop: 0}}>
                <p className={"font-bold"}>
                    Any reply in a shaded box (RED) requires
                    corrective action prior to using the {toTitleCase(checklist.checklist_type)}.
                </p>
            </div>
            <div>
                <CustomAssetTable data={checklist?.checklists_info} label={""} uniqueId={"checklist-asset-table"}/>
            </div>
            <DocumentSpacer name={"lifting-checklists-bottom"} defaultValue={15} />
            <div className="pdf_bottom">
                <table className="w-[100%]">
                    <thead>
                    <tr>
                        <th></th>
                        <th style={{fontSize: 14}}>Inspected by</th>
                        <th style={{fontSize: 14}}>Reviewed by</th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr className={"text-lg"}>
                        <td style={{fontSize: 14, paddingRight: 10}} className={"text-right mr-2"}>Name</td>
                        <td style={{fontSize: 14, paddingLeft: 5}}>{checklist?.inspector_name}</td>
                        <td  style={{fontSize: 14}}>{checklist?.reviewer_name}</td>
                    </tr>
                    <tr className={"text-lg"}>
                        <td style={{fontSize: 14, paddingRight: 10}}>Qualification</td>
                        <td style={{fontSize: 14}}>{checklist?.inspector_qualification}</td>
                        <td style={{fontSize: 14}}>{checklist?.reviewer_qualification}</td>
                    </tr>
                    <tr className={"text-lg"}>
                        <td style={{fontSize: 14, paddingRight: 10}}>Date</td>
                        <td style={{fontSize: 14}}>{checklist?.inspector_date}</td>
                        <td style={{fontSize: 14}}>{checklist?.reviewer_date}</td>
                    </tr>
                    </tbody>
                </table>
            </div>

        </div>
    )
}
