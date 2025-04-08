import DocumentSpacer from "../../components/spacer/index.jsx";


const visual = ({ data, title="Visual", uniqueId="" }) => {
    return (
        <div>
            <DocumentSpacer name={uniqueId} defaultValue={15} />
            <p className="text-[14px] font-bold mb-2">{title}</p>
            <div className="visual-text">
                {data}
            </div>
        </div>
    )
}

export default visual;
