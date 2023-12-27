import {groupByIndices} from "../../utils/index.js";


const EquipmentSection = ({ data }) => {
    console.log(data?.equipments);
    const headers = data?.equipments?.map((elt) => elt?.category);
    console.log("headers", headers);
    const tableItems = groupByIndices(data?.equipments?.map((elt) => elt?.values));
    console.log("tableItems", tableItems);

    const getValue = (value, newElt) => {
        console.log(value, newElt);
        return "man"
    }
    return (
        <div className="mt-3">
            <p className="text-[14px] font-bold mb-2">Equipment</p>
            <table>
                <thead>
                    <tr>
                        {headers?.map((elt, index) =>
                            <th key={index}>{elt}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data?.equipments?.map((elt, index) =>
                        <tr key={index}>
                            {headers?.map((innerElt, index) =>
                                {getValue(elt, innerElt)}
                            )}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default EquipmentSection;