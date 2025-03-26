import IncrementalList from "../incrementalList/index.jsx";
import FileUploadComponent from "../imagesSelect/index.jsx";
import {getInvoiceImageFullPath} from "../../utils/index.js";


export default function BottomComponent(
    {
        hasComment = true,
        hasImages = true,
        hasSignature = true,
        ...props
    }
) {
    return (
        <div className={"mt-6"}>
            {hasComment && <div className="mb-6 w-[100%]">
                <label className="block text-gray-700 text-md font-bold mb-2">Inspector&apos;s comment:</label>
                <IncrementalList
                    items={props.comments}
                    setItems={props.setComments}
                    addItem={props.addItem}
                />
            </div>}

            <h3 className="font-bold mb-4">Inspected by</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Issuer name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Inspector name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Inspector"
                        name="name"
                        value={props.issuerInfo.name}
                        onChange={props.handleIssuerInfoChange}
                        required
                    />
                </div>

                {/* Issue date */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Inspection date:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Inspection date"
                        name="date"
                         value={props.issuerInfo.date}
                        onChange={props.handleIssuerInfoChange}
                        required
                    />
                </div>

                {/* Issuer qualification */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Inspector qualification</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Inspector qualification"
                        name="qualification"
                        value={props.issuerInfo.qualification}
                        onChange={props.handleIssuerInfoChange}
                        required
                    />
                </div>

            </div>

            <h3 className="font-bold mb-4">Reviewed by</h3>
            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Reviewed name */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Reviewer name:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Reviewer name"
                        name="name"
                        onChange={props.handleReviewerInfoChange}
                        value={props.reviewerInfo.name}
                        required
                    />
                </div>

                {/* Review date */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">Review date:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Review date"
                        name="date"
                        onChange={props.handleReviewerInfoChange}
                        value={props.reviewerInfo.date}
                        required
                    />
                </div>

                {/* Reviewer qualification */}
                <div>
                    <label className="block text-gray-700 text-md font-bold mb-2">
                        Reviewer qualification</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="text"
                        placeholder="Reviewer qualification"
                        name="qualification"
                        value={props.reviewerInfo.qualification}
                        onChange={props.handleReviewerInfoChange}
                        required
                    />
                </div>
            </div>

            {hasSignature && <label className="block text-gray-700 text-md font-bold mb-2">Stamp Files:</label>}
            {hasSignature && <div className="mb-6 flex justify-start w-[100%]">
                <div className="w-[100%]">
                    <label className="block text-gray-700 text-md font-bold mb-2">Inspector Signature:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file"
                        name="inspector_signature"
                        onChange={props.handleChange}
                    />
                    {props.state.inspector_signature_url && (
                        <div className="mt-2 relative">
                            <img
                                src={getInvoiceImageFullPath(props.state.inspector_signature_url)}
                                alt="Inspector Signature"
                                className="w-32 h-32 object-cover rounded-lg shadow-md"
                            />
                            <button
                                type={"button"}
                                onClick={() => props.handleDeleteSignature('inspector_signature')}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    )}
                </div>
                <div className="w-[100%]">
                    <label className="block text-gray-700 text-md font-bold mb-2">Reviewer Signature:</label>
                    <input
                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                        type="file"
                        name="reviewer_signature"
                        onChange={props.handleChange}
                    />
                    {props.state.reviewer_signature_url && (
                        <div className="mt-2 relative">
                            <img
                                src={getInvoiceImageFullPath(props.state.reviewer_signature_url)}
                                alt="Reviewer Signature"
                                className="w-32 h-32 object-cover rounded-lg shadow-md"
                            />
                            <button
                                type={"button"}
                                onClick={() => props.handleDeleteSignature('reviewer_signature')}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    )}
                </div>
            </div>}

            {/* Images */}
            {hasImages && <div className="mb-3">
                <label className="block text-gray-700 text-md font-bold mb-2">Images</label>
                <FileUploadComponent setImages={props.handleFilesSelect}/>
                {/* Display Uploaded Images */}
                <div className="mt-4 flex flex-wrap gap-4">
                    {props.state.images?.map((image, index) => (
                        <div key={index} className="flex relative">
                            <img
                                src={typeof image.file === 'string' ? getInvoiceImageFullPath(image.file) : URL.createObjectURL(image)}
                                alt={`uploaded-image-${index}`}
                                className="w-32 h-32 object-cover rounded-lg shadow-md"
                            />
                            <button
                                onClick={() => props.handleImageDelete(index)}
                                className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-6 h-6 flex items-center justify-center hover:bg-red-600"
                            >
                                ×
                            </button>
                        </div>
                    ))}
                </div>
            </div>}
        </div>
    )
}