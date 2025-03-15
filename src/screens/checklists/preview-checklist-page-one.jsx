import Logo from "../../assets/logo.png";
import {toTitleCase} from "../../utils/index.js";
import CustomAssetTable from "../../components/assetTable/assetTable.jsx";


export default function PreviewChecklistPageOne(
    {checklist}
) {
    return (
        <div style={{margin: "10px 25px"}}>
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
                    <p>P.O.BOX SQ 518 Tema comm.12, Opposite witsand int. school</p>
                    <p>Greater Accra, Ghana –West Africa</p>
                </div>
            </div>
            <div style={{background: "#D8D8D8", padding: "10px 5px", border: "1px solid #000", borderTop: 0}}>
                <p className={"font-bold"}>
                    Any reply in a shaded box (RED) requires
                    corrective action prior to using the {toTitleCase(checklist.checklist_type)}.
                </p>
            </div>
            <div className={"mt-6"}>
                <CustomAssetTable data={checklist?.checklists_info} label={""}/>
            </div>
            <div className={"mt-6"} style={{border: "1px solid #000", padding: 10}}>
                <p className={"mb-3"}><b>INSPECTOR&apos;S NAME:</b> {checklist?.inspectors_name}</p>
                <p className={"mb-3"}><b>QUALIFICATION:</b> {checklist?.qualification}</p>
                <p><b>DATE:</b> {checklist?.date}</p>
            </div>
        </div>
    )
}