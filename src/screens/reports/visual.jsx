

const visual = ({ data, title="Visual" }) => {
    return (
        <div className="mt-3">
            <p className="text-[14px] font-bold mb-2">{title}</p>
            <div className="visual-text">
                {data}
            </div>
        </div>
    )
}

export default visual;