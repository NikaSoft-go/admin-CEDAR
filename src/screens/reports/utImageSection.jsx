import {getImageFullPath} from "../../utils/index.js";


const UTImageSection = ({ data }) => {
    return (
        <div className="mt-8">
            <div className="report-section-head">
                <p className={"text-[14px] font-bold text-center uppercase"}>Attachments</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {data?.map((elt, index) =>
                    <div key={index} className="image-card" style={{ padding: 0}}>
                        <div className="image-wrapper mb-5 p-2">
                            <img src={getImageFullPath(elt?.file)} alt="" style={{ width: 200, height: 200}}/>
                        </div>
                        <div
                            className={"w-[100%] text-center"}
                            style={{ borderTop: "1px solid #000", padding: "5px 0 10px 0"}}
                        >
                            <p>{elt?.name}</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default UTImageSection;