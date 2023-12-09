import {getImageFullPath} from "../../utils/index.js";

const SignatureUpload = ({ signature, setSignature, defaultSignatureUrl }) => {
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        setSignature(file);
    };

    return (
        <div className="flex flex-col items-center mt-8">
            <label htmlFor="signatureInput" className="text-lg mb-2">
                Upload Signature
            </label>
            <input
                type="file"
                id="signatureInput"
                accept="image/*"
                onChange={handleFileChange}
                className="border p-2"
            />
            {signature && (
                <div className="mt-4">
                    <p className="text-lg">Preview:</p>
                    <img
                        src={URL.createObjectURL(signature)}
                        alt="Signature Preview"
                        className="mt-2 border"
                        style={{ maxWidth: '200px' }}
                    />
                </div>
            )}
            {defaultSignatureUrl && (
                <div className="mt-4">
                    <p className="text-lg">Default Signature:</p>
                    <img
                        src={getImageFullPath(defaultSignatureUrl)}
                        alt="Default Signature"
                        className="mt-2 border"
                        style={{ maxWidth: '200px' }}
                    />
                </div>
            )}
        </div>
    );
};

export default SignatureUpload;
