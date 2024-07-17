import PdfBottom from "./pdfBottom.jsx";
import UTImageSection from "./utImageSection.jsx";

const UTPageThree = ({ data }) => {
    const utResults = JSON.parse(data?.ut_results || "[]");
    return (
        <div className={"mx-6 mt-3 mb-6"}>
            <div className="report-page-three">
                <div className="mt-5">
                    <div className="report-section-head mb-3">
                        <p className={"text-[14px] font-bold text-center uppercase"}>Ultrasonic Inspection Results</p>
                    </div>
                    <table className="w-[100%]">
                        <thead>
                        <tr>
                            <th rowSpan={2} className={"uppercase"}>Shells</th>
                            <th colSpan={2 * Object.keys(utResults[0]?.degrees || "{}")?.length} className={"uppercase"}>
                                Sections (Reading mm)
                            </th>
                        </tr>
                        <tr>
                            {Object.keys(utResults[0]?.degrees || "{}")?.map((elt, index) =>
                                <th colSpan={2} key={index}>{elt}</th>)}
                        </tr>
                        </thead>
                        <tbody>
                        {utResults?.map((elt, index) =>
                            <tr key={index}>
                                <td><b>{elt?.rowName}</b></td>
                                {Object.entries(elt?.degrees)?.map((innerElt) => {
                                    return Object.values(innerElt[1] || "{}").map((degree, index) => <td key={index}>{degree}</td>)
                                })}
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
                <div className={"mt-8 flex justify-between"} style={{ border: "1px solid #000"}}>
                    <div style={{ width: "30%", backgroundColor: "#999999", padding: 10}}>
                        <p className={"uppercase"} style={{ fontSize: 12 }}><b>Inspector&apos;s Comment: </b></p>
                    </div>
                    <div style={{ width: "70%" }}>
                        <p>{data?.comments}</p>
                    </div>
                </div>
            </div>
            <UTImageSection data={data?.images} />
            <PdfBottom data={data} />
        </div>

    )
}

export default UTPageThree;