

export default function ViewComments(
    {comments, label}
) {
    return (
        <div className={"mt-5 flex flex-col"}>
            <p className={"font-bold text-sm mb-3"}>{label}</p>
            <div className={"p-2"} style={{border: "1px solid #000"}}>
                {comments?.map((elt, index) =>
                    <p className={"mb-1"} key={index} style={{fontSize: 13}}>{elt?.value}</p>
                )}
            </div>
        </div>
    )
}
