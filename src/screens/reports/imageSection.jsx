import {getImageFullPath} from "../../utils/index.js";


const ImageSection = ({ data }) => {
    console.log(data);
    return (
        <div className="mt-3">
            <p className="text-[14px] font-bold mb-2">Images</p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2">
                {data?.map((elt, index) =>
                    <div key={index} className="image-card">
                        <div className="image-wrapper">
                            <img src={getImageFullPath(elt?.file)} alt="" style={{ width: 200, height: 200}}/>
                        </div>
                        <p>{elt?.name}</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ImageSection;