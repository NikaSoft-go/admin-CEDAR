import DocumentSpacer from "../../components/spacer/index.jsx";


const KeySection = ({ data }) => {
    return (
        <div>
            <DocumentSpacer name={"normal-key-section"} defaultValue={10} />
            <p className="text-[14px] font-bold mb-2">Key</p>
            <table className="w-[100%] equipment_table">
                <tbody>
                    <tr>
                        {data?.map(((elt, index) =>
                            <td key={index}>{elt}</td>
                        ))}
                    </tr>
                </tbody>
            </table>
        </div>
    )
}


export default KeySection;
