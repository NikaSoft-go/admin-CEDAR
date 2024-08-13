const WeldingEquipmentDetails = ({
    data,
    sectionHead
}) => {
    const paddedData = [...data];
    while (paddedData.length % 3 !== 0) {
        paddedData.push({ property: '', value: '' });
    }
    return (
        <div className="mt-5">
            <p className={"text-[14px] font-bold mb-2"}>{sectionHead}</p>

            <table className="equipment_table w-[100%]">
                <tbody>
                {paddedData.map((item, index) => (
                    index % 3 === 0 && (
                        <tr key={index}>
                            {paddedData.slice(index, index + 3).map((subItem, subIndex) => (
                                <td key={subIndex}>
                                    {subItem?.property &&
                                        (<><span className={"cell-bold"}>{subItem?.property}:</span> {subItem?.value}</>)}
                                </td>
                            ))}
                        </tr>
                    )
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default WeldingEquipmentDetails;