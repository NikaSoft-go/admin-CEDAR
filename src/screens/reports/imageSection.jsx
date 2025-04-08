import {getImageFullPath} from "../../utils/index.js";
import DocumentSpacer from "../../components/spacer/index.jsx";


const ImageSection = ({ data, uniqueId }) => {
    return (
        <div>
            <DocumentSpacer name={uniqueId} defaultValue={15} />
            <p className="text-[14px] font-bold mb-2">Images</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {data?.map((elt, index) =>
                    <div key={index} className="image-card">
                        <div className="image-wrapper">
                            <img src={getImageFullPath(elt?.file)} alt="" style={{ width: 150, height: 150}}/>
                        </div>
                        <p>{elt?.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageSection;
