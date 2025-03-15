

export default function LiftingInfoView({ data }) {
    return (
        <div className={"mt-3"}>
            <p className={"font-bold text-sm"}>Lifting</p>
            <div className={"w-full mt-3"}>
                <table style={{border: "1px solid #000"}} className={"w-full asset-details-table"}>
                    <thead>
                    <tr>
                        <th className={"p-1 text-left"}>
                            (i) Is this the first through examination of lifting equipment after installation or
                            after assembly at a new site or in new location?
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"text-sm"}>{data.lifting_data?.q1_a}</td>
                    </tr>
                    </tbody>
                </table>
                <table style={{border: "1px solid #000"}} className={"w-full mt-3 asset-details-table"}>
                    <tbody>
                    <tr>
                        <td className={"text-sm"}>If Yes, has the equipment been installed correctly?</td>
                        <td className={"text-sm"}>If No, when was the equipment carried out?</td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>{data.lifting_data?.q1_b}</td>
                        <td className={"text-sm"}>{data.lifting_data?.q1_c}</td>
                    </tr>
                    </tbody>
                </table>
                <table style={{border: "1px solid #000"}} className={"w-full mt-3 asset-details-table"}>
                    <thead>
                    <tr>
                        <th className={"p-1 text-center"} colSpan={2}>
                            Was the examination carried out:
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"text-sm pt-4"} style={{border: 0}}>Within an interval of six months
                            .......................................................................
                        </td>
                        <td className={"text-sm pt-4"} style={{borderBottom: 0, borderLeft: 0}}>Within an interval of 12
                            months.......................................................................
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-sm pt-4"} style={{borderRight: 0}}>In accordance with an examination scheme
                            .......................................................................
                        </td>
                        <td className={"text-sm pt-4"} style={{borderLeft: 0}}>After the occurrence of exceptional
                            circumstances? .......................................................................
                        </td>
                    </tr>
                    </tbody>
                </table>
                <table className={"w-full mt-3 asset-details-table"}>
                    <thead>
                    <tr>
                        <th className={"p-1 text-left"}>
                            (ii) Is it the case that equipment would be safe to operate?
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"text-sm"}>{data.lifting_data?.q2_a}</td>
                    </tr>
                    </tbody>
                </table>
                <table className={"w-full asset-details-table"}>
                    <thead>
                    <tr>
                        <th className={"p-1 text-left"} style={{borderTop: 0}}>
                            (iii) Does any part of the equipment have a defect which is or could become a danger to a
                            person?
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"text-sm"}>{data.lifting_data?.q3_a}</td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>
                            Identification of any part of the equipment found to have a defect which is or could become
                            a
                            danger to person and a description of the defect? (<b>If none state NONE</b>)
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>{data.lifting_data?.q3_b}</td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>Is the above a defect which is of immediate danger to person?</td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>{data.lifting_data?.q3_c}</td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>Is the above a defect which is not yet, but could become a danger to
                            person?
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>{data.lifting_data?.q3_d}</td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>If Yes, state when:</td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>{data.lifting_data?.q3_e}</td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>Particulars of any repair,renewal,or alteration required to remedy the
                            defect identified above?
                        </td>
                    </tr>
                    <tr>
                        <td className={"text-sm"}>{data.lifting_data?.q3_f}</td>
                    </tr>

                    </tbody>
                </table>
                <table className={"w-full asset-details-table"}>
                    <thead>
                    <tr>
                        <th className={"p-1 text-left"} style={{borderTop: 0}}>
                            (iv) Details of any tests carried out as part of the examination?
                        </th>
                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td className={"text-sm"}>{data.lifting_data?.q4_a}</td>
                    </tr>
                    </tbody>
                </table>
            </div>
        </div>
)
}