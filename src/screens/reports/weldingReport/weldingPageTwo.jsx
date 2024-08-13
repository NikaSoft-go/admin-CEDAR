import WeldingReportDetails from "./reportDetails.jsx";
import WeldingEquipmentDetails from "./equipmentDetails.jsx";
import WeldingJointDetails from "./jointDetails.jsx";


const WeldingPageTwo = ({ data }) => {
    return (
        <div className="mx-6 mt-3 mb-6">
            <WeldingReportDetails data={data} />
            <WeldingEquipmentDetails
                data={data?.equipment_consumables}
                sectionHead={"Equipments"}
            />
            <WeldingEquipmentDetails
                data={data?.other_welding_props}
                sectionHead={"Consumables"}
            />
            <WeldingJointDetails data={data?.welding_table_data} />
        </div>
    )
}

export default WeldingPageTwo;