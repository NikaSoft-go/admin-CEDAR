import {groupByIndices} from "../../utils/index.js";
import DocumentSpacer from "../../components/spacer/index.jsx";


const EquipmentSection = ({ data }) => {
    const headers = data?.map((elt) => elt?.category);
    const tableItems = groupByIndices(data?.map((elt) => elt?.values));

    return (
        <div>
            <DocumentSpacer name={"normal-equipment"} defaultValue={10} />
            <p className="text-[14px] font-bold mb-2">Equipment</p>
            <table className="equipment_table w-[100%]">
                <thead>
                    <tr>
                        {headers?.map((elt, index) =>
                            <th className="text-left" key={index}>{elt}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {tableItems?.map((elt, index) =>
                        <tr key={index}>
                            {elt?.map((innerElt, index) =>
                                <td key={index}>{innerElt}</td>
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default EquipmentSection;
