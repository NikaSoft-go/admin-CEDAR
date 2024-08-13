import {cleanHeaders} from "../../../utils/index.js";


const WeldingJointDetails = ({ data }) => {
    const headers = cleanHeaders(data);

    const symbols ={
        "correct": "✓",
        "wrong": "✗"
    }

    const bgColors = {
        "correct": "#90EE90",
        "wrong": "#FF6347"
    }

    return (
        <div className="mt-5">
            <p className="text-[14px] font-bold mb-2">Joint Details</p>
            <table className="equipment_table w-[100%]">
                <thead>
                    <tr>
                        {headers?.map((elt, index) =>
                            <th className="text-center" key={index}>{elt}</th>
                        )}
                    </tr>
                </thead>
                <tbody>
                    {data?.map((elt, index) =>
                        <tr key={index}>
                            {Object.keys(elt)?.map((eltHeader, index) => {
                                if (eltHeader === "acc") {
                                    return (
                                        <td
                                            key={index}
                                            style={{
                                                backgroundColor: bgColors[elt[eltHeader]],
                                                textAlign: "center"
                                            }}
                                        >{symbols[elt[eltHeader]]}</td>
                                    )
                                } else {
                                    return (
                                        <td
                                            key={index}
                                            style={{ textAlign: "center" }}
                                        >{elt[eltHeader]}</td>
                                    )
                                }
                            })}
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default WeldingJointDetails;