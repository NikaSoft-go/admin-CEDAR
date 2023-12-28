import {useEffect, useState} from 'react';
import Sidebar from '../../components/sidebar/index.jsx';
import Button from '../../components/button/index.jsx';
import ResponsibilityTable from "../../components/invoices/tableA.jsx";
import {IoMdAddCircleOutline} from "react-icons/io";
import {FiTrash2} from "react-icons/fi";
import {axiosClient} from "../../libs/axiosClient.js";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {
    bladeDetailInitial, bodyDetailInitial,
    consumablesInitial, emptyAssetsDetails,
    emptyDimensionDetails, equipmentsInitial,
    returnAssetsData, returnReportDataType,
} from "../../utils/data.js";
import MultiSelect from "../../components/multiSelect/index.jsx";
import FileUploadComponent from "../../components/imagesSelect/index.jsx";
import {getImageFullPath} from "../../utils/index.js";

const EditReport = () => {
    const { id } = useParams();
    const keyItems = [
        "ACP - Accept",
        "MPI - Magnetic Particle Inspection",
        "VT - Visual Inspection",
        "DPI - Dye Penetrant Inspection",
        "DIM - Dimensional",
        "PT - Pitted Thread",
        "GT - Galled Thread",
        "SD - Seal Damaged",
    ];

    const [selectedOptions, setSelectedOptions] = useState([]);
    const [images, setImages] = useState([]);
    const [reportTypeData, setReportTypeData] = useState([]);
    const [imageLinks, setImageLinks] = useState([]);
    const [consumablesData, setConsumablesData] = useState(consumablesInitial);
    const [equipmentsData, setEquipmentsData] = useState(equipmentsInitial);
    const [assetDetails, setAssetsDetails] = useState([]);
    const [dimensionOneDetails, setDimensionOneDetails] = useState([]);
    const [dimensionTwoDetails, setDimensionTwoDetails] = useState([]);
    const [bodyDetails, setBodyDetails] = useState(bodyDetailInitial);
    const [bladeDetails, setBladeDetails] = useState(bladeDetailInitial);
    const [showSections, setShowSections] = useState({
        bodyDetails: true,
        bladeDetails: true,
        dimensionOne: true,
        dimensionTwo: true,
    });

    const navigate = useNavigate();

    const [state, setState] = useState({});
    const [issuerInfo, setIssuerInfo] = useState({});
    const [reviewerInfo, setReviewrInfo] = useState({});

    const reportData = {
        ...state,
        issuer: JSON.stringify(issuerInfo),
        quality_controller: JSON.stringify(reviewerInfo),
        asset_details: JSON.stringify(assetDetails),
        dimension_one: JSON.stringify(dimensionOneDetails),
        dimension_two: JSON.stringify(dimensionTwoDetails),
        body: JSON.stringify(bodyDetails),
        blade: JSON.stringify(bladeDetails),
        report_type_data: JSON.stringify(reportTypeData),
        consumables: JSON.stringify(consumablesData),
        keys: JSON.stringify(selectedOptions),
        equipments: JSON.stringify(equipmentsData),
    }

    const handleChange = (e, items=state, setItems=setState) => {
        setItems({
            ...items,
            [e.target.name]: e.target.value
        })
    }

    const handleFilesSelect = (files) => {
        const updatedFiles = files?.map((elt) => {
            return {
                name: elt.name,
                file: elt.rawFile
            }
        })
        setImages(updatedFiles);
    };


    const handleAddTableItem = (setFunc, items, emptyItems) => {
        setFunc([
            ...items,
            emptyItems,
        ]);
    };

    const handleRemoveTableItems = (index, items, setItems) => {
        const updatedCostItems = [...items];
        updatedCostItems.splice(index, 1);
        setItems(updatedCostItems);
    };

    const handleTableItemChange = (index, field, value, items, setItems) => {
        const updatedCostItems = [...items];
        updatedCostItems[index][field] = value;
        setItems(updatedCostItems);
    };

    const handleAddReport = async (e) => {
        e.preventDefault();
        if (!reportData.report_type) {
            toast.error("Report type is required")
            return;
        }
        try {
            const formData = new FormData();
            // create form-data
            Object.entries(reportData).forEach(([key, value]) => {
                formData.append(key, value);
            });

            const imageFiles = images?.map((elt) => elt?.file);
            const imageNames = images?.map((elt) => elt.name);

            // Add signature image
            imageFiles.forEach(function(image) {
                formData.append('images[]', image);
            });

            imageNames.forEach(function(imageName) {
                formData.append('file_names[]', imageName);
            });
            const response = await axiosClient.patch(
                `/reports/update-report/${id}/`,
                formData
            );
            toast.success(response.data.message);
            navigate('/reports')
        } catch (err) {
            console.log(err);
            toast.error(err.response.data.message);
        }
    }

    const handleMultiSelectChange = (selected) => {
        setSelectedOptions(selected);
    };

    useEffect(() => {
        if (state.report_type) {
            setReportTypeData(returnReportDataType(state.report_type, "data"));
            setAssetsDetails(returnAssetsData(state.report_type))
        }
    }, [state.report_type]);


    useEffect(() => {
        if (id) {
            const getInvoice = async () => {
                try {
                    const response = await axiosClient.get(`/reports/get-report/${id}/`);
                    const {
                        issuer,
                        quality_controller,
                        asset_details,
                        dimension_one,
                        dimension_two,
                        body,
                        blade,
                        report_type_data,
                        consumables,
                        keys,
                        equipments,
                        images,
                        ...otherValues
                    }  = response.data.data;
                    setState({
                        ...state,
                        ...otherValues
                    });
                    setImageLinks(images?.map((image) => {
                        return {
                            link: getImageFullPath(image.file),
                            name: image.name
                        }
                    }))
                    setAssetsDetails(JSON.parse(asset_details));
                    setDimensionTwoDetails(JSON.parse(dimension_two));
                    setDimensionOneDetails(JSON.parse(dimension_one));
                    setReviewrInfo(JSON.parse(quality_controller));
                    setIssuerInfo(JSON.parse(issuer));
                    setBodyDetails(JSON.parse(body));
                    setBladeDetails(JSON.parse(blade));
                    setReportTypeData(JSON.parse(report_type_data));
                    setConsumablesData(JSON.parse(consumables));
                    setEquipmentsData(JSON.parse(equipments));
                    setSelectedOptions(JSON.parse(keys));
                    setShowSections({
                        bodyDetails: JSON.parse(body)?.length > 0,
                        bladeDetails: JSON.parse(blade)?.length > 0,
                        dimensionOne: JSON.parse(dimension_one)?.length > 0,
                        dimensionTwo: JSON.parse(dimension_two)?.length > 0
                    })
                } catch (err) {
                    console.error(err);
                }
            }
            getInvoice();
        }

    }, [id]);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Edit Report</h1>
                        {/* Add Invoice Form (Example) */}
                        <form onSubmit={handleAddReport}>
                            <h3 className="font-bold mb-4">Client Details</h3>
                            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Client Name */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Client Name:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Client Name"
                                        name="client_name"
                                        value={state.client_name}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Client Address */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Client
                                        Address:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Client Address"
                                        name="client_address"
                                        value={state.client_address}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Client City */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Client City:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Client City"
                                        name="client_city"
                                        value={state.client_city}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Client Country */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Client
                                        Country:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Client Country"
                                        name="client_country"
                                        value={state.client_country}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Examination Location */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Examination
                                        Location:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Examination Location"
                                        name="examination_location"
                                        value={state.examination_location}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>
                            </div>

                            <h3 className="font-bold mb-4">Job Details</h3>
                            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Contract */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Contract:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Contract"
                                        name="contract"
                                        value={state.contract}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Work Order */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Work Order:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Work Order"
                                        name="work_order"
                                        value={state.work_order}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Purchase Order */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Purchase
                                        Order:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Purchase Order"
                                        name="purchase_order"
                                        value={state.purchase_order}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Client Job Reference */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Client Job
                                        Reference:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Client Job Reference"
                                        name="client_job_reference"
                                        value={state.client_job_reference}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Rig */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Rig:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Rig"
                                        name="rig"
                                        value={state.rig}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>

                            <h3 className="font-bold mb-4">Report Details</h3>
                            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Report Number */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Report Number:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Report Number"
                                        name="report_number"
                                        value={state.report_number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Date of examination */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Date of
                                        examination:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="date"
                                        placeholder="Date of examination"
                                        name="examination_date"
                                        value={state.examination_date}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Date of Next Examination */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Date of Next
                                        Examination:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="date"
                                        placeholder="Date of Next Examination"
                                        name="next_examination_date"
                                        value={state.next_examination_date}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Area of Examination */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Area of
                                        Examination:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Area of Examination"
                                        name="examination_area"
                                        value={state.examination_area}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Services */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Services:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Services"
                                        name="services"
                                        value={state.services}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Standards */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Standards:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Standards"
                                        name="standards"
                                        value={state.standards}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Local Procedure Number */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Local Procedure
                                        Number:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Local Procedure Number"
                                        name="local_procedure_number"
                                        value={state.local_procedure_number}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Drawing Number */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Drawing
                                        Number:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Drawing Number"
                                        name="drawing_number"
                                        value={state.drawing_number}
                                        onChange={handleChange}
                                    />
                                </div>

                                {/* Test Restrictions */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Test
                                        Restrictions:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Test Restrictions"
                                        name="test_restrictions"
                                        value={state.test_restrictions}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Surface Condition */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Surface
                                        Condition:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Surface Condition"
                                        name="surface_condition"
                                        value={state.surface_condition}
                                        onChange={handleChange}
                                        required
                                    />
                                </div>

                                {/* Report Type */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Report Type:</label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="report_type"
                                        onChange={handleChange}
                                        value={state.report_type}
                                        required
                                    >
                                        <option>Select a report type</option>
                                        <option value="MPI without connections">MPI without connections</option>
                                        <option value="MPI with connections">MPI with connections</option>
                                        <option value="DPI without connections">DPI without connections</option>
                                        <option value="DPI with connections">DPI with connections</option>
                                        <option value="Ultrasonic Inspection">Ultrasonic Thickness</option>
                                        <option value="Lifting Inspection">Lifting Inspection</option>
                                        <option value="Welding">Welding</option>
                                    </select>
                                </div>

                                {/* Report Status */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Report Status:</label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="report_status"
                                        value={state.report_status}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option>Select a report status</option>
                                        <option value="Accepted">Accepted</option>
                                        <option value="Rejected">Rejected</option>
                                    </select>
                                </div>
                            </div>

                            <h3 className="font-bold mb-4">Inspected by</h3>
                            <div className="mb-10 grid grid-cols-1 md:grid-cols-2 gap-4">
                                {/* Issuer name */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Inspector name:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="text"
                                        placeholder="Inspector"
                                        value={issuerInfo.name}
                                        name="name"
                                        onChange={(e) => handleChange(e, issuerInfo, setIssuerInfo)}
                                        required
                                    />
                                </div>

                                {/* Issue date */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Inspection date:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="date"
                                        placeholder="Inspection date"
                                        value={issuerInfo.date}
                                        name="date"
                                        onChange={(e) => handleChange(e, issuerInfo, setIssuerInfo)}
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
                                        value={issuerInfo.qualification}
                                        onChange={(e) => handleChange(e, issuerInfo, setIssuerInfo)}
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
                                        value={reviewerInfo.name}
                                        onChange={(e) => handleChange(e, reviewerInfo, setReviewrInfo)}
                                        required
                                    />
                                </div>

                                {/* Review date */}
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Review date:</label>
                                    <input
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        type="date"
                                        placeholder="Review date"
                                        name="date"
                                        value={reviewerInfo.date}
                                        onChange={(e) => handleChange(e, reviewerInfo, setReviewrInfo)}
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
                                        value={reviewerInfo.qualification}
                                        onChange={(e) => handleChange(e, reviewerInfo, setReviewrInfo)}
                                        required
                                    />
                                </div>

                            </div>

                            {/* Asset Details */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Assets Details:</label>
                                <table className="w-full border">
                                    <thead>
                                    <tr>
                                        <th className="border p-2">Type</th>
                                        <th className="border p-2">Serial Number</th>
                                        <th className="border p-2">Model</th>
                                        <th className="border p-2">Description</th>
                                        <th className="border p-2">Size</th>
                                        <th className="border p-2">Material</th>
                                        <th className="border p-2"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {assetDetails?.map((asset, index) => (
                                        <tr key={index}>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Type"
                                                    value={asset.type}
                                                    required
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'type',
                                                            e.target.value,
                                                            assetDetails,
                                                            setAssetsDetails
                                                        )}
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Serial Number"
                                                    value={asset.serial_number}
                                                    required
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'serial_number',
                                                            e.target.value,
                                                            assetDetails,
                                                            setAssetsDetails
                                                        )}
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Model"
                                                    value={asset.model}
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'model',
                                                            e.target.value,
                                                            assetDetails,
                                                            setAssetsDetails
                                                        )
                                                    }
                                                    required
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Description"
                                                    value={asset.description}
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'description',
                                                            e.target.value,
                                                            assetDetails,
                                                            setAssetsDetails
                                                        )
                                                    }
                                                    required
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Size"
                                                    value={asset.size}
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'size',
                                                            e.target.value,
                                                            assetDetails,
                                                            setAssetsDetails
                                                        )
                                                    }
                                                    required
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Material"
                                                    value={asset.material}
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'material',
                                                            e.target.value,
                                                            assetDetails,
                                                            setAssetsDetails
                                                        )
                                                    }
                                                    required
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <button
                                                    type="button"
                                                    className="remove-btn rounded p-1"
                                                    onClick={() =>
                                                        handleRemoveTableItems(index, assetDetails, setAssetsDetails)}
                                                >
                                                    <FiTrash2/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <button
                                    type="button"
                                    className="add-item-btn text-white rounded px-2 py-1"
                                    onClick={() =>
                                        handleAddTableItem(
                                            setAssetsDetails,
                                            assetDetails,
                                            emptyAssetsDetails
                                        )
                                    }
                                >
                                    <IoMdAddCircleOutline/>
                                </button>
                            </div>

                            <div className="mb-4 flex items-center justify-start">
                                <div>
                                    <p className="text-left">Select Dimension Details to show</p>
                                </div>
                                <div className="ml-12">
                                    <input
                                        type="checkbox"
                                        className='mr-2'
                                        checked={showSections.dimensionOne}
                                        onClick={() => setShowSections({
                                            ...showSections,
                                            dimensionOne: !showSections.dimensionOne
                                        })}
                                    />
                                    <label>Dimension 1 Details</label>
                                </div>
                                <div className="ml-12">
                                    <input
                                        type="checkbox"
                                        className='mr-2'
                                        checked={showSections.dimensionTwo}
                                        onClick={() => setShowSections({
                                            ...showSections,
                                            dimensionTwo: !showSections.dimensionTwo
                                        })}
                                    />
                                    <label>Dimension 2 Details</label>
                                </div>
                            </div>

                            {/* Dimension 1 Details */}
                            {showSections.dimensionOne && <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Dimension 1:</label>
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Type:</label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="dimension_one_name"
                                        value={state.dimension_one_name}
                                        onChange={handleChange}
                                        required
                                    >
                                        <option>Select a type</option>
                                        <option value="Box">Box</option>
                                        <option value="Pin">Pin</option>
                                    </select>
                                </div>
                                <table className="w-full border">
                                    <thead>
                                    <tr>
                                        <th className="border p-2">Property</th>
                                        <th className="border p-2">Value</th>
                                        <th className="border p-2"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {dimensionOneDetails.map((dimension, index) => (
                                        <tr key={index}>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Property"
                                                    value={dimension.property}
                                                    required
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'property',
                                                            e.target.value,
                                                            dimensionOneDetails,
                                                            setDimensionOneDetails
                                                        )}
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Value"
                                                    value={dimension.value}
                                                    required
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'value',
                                                            e.target.value,
                                                            dimensionOneDetails,
                                                            setDimensionOneDetails
                                                        )}
                                                />
                                            </td>
                                            <td className="border p-2">
                                                <button
                                                    type="button"
                                                    className="remove-btn rounded p-1"
                                                    onClick={() =>
                                                        handleRemoveTableItems(
                                                            index,
                                                            dimensionOneDetails,
                                                            setDimensionOneDetails
                                                        )}
                                                >
                                                    <FiTrash2/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <button
                                    type="button"
                                    className="add-item-btn text-white rounded px-2 py-1"
                                    onClick={() =>
                                        handleAddTableItem(
                                            setDimensionOneDetails,
                                            dimensionOneDetails,
                                            emptyDimensionDetails
                                        )
                                    }
                                >
                                    <IoMdAddCircleOutline/>
                                </button>
                            </div> }

                            {/* Dimension 2 Details */}
                            {showSections.dimensionTwo && <div className="mb-10">
                                <label className="block text-gray-700 text-md font-bold mb-2">Dimension 2:</label>
                                <div>
                                    <label className="block text-gray-700 text-md font-bold mb-2">Type:</label>
                                    <select
                                        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                        name="dimension_two_name"
                                        onChange={handleChange}
                                        value={state.dimension_two_name}
                                        required
                                    >
                                        <option>Select a type</option>
                                        <option value="Box">Box</option>
                                        <option value="Pin">Pin</option>
                                    </select>
                                </div>
                                <table className="w-full border">
                                    <thead>
                                    <tr>
                                        <th className="border p-2">Property</th>
                                        <th className="border p-2">Value</th>
                                        <th className="border p-2"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {dimensionTwoDetails.map((dimension, index) => (
                                        <tr key={index}>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Property"
                                                    value={dimension.property}
                                                    required
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'property',
                                                            e.target.value,
                                                            dimensionTwoDetails,
                                                            setDimensionTwoDetails
                                                        )}/>
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Value"
                                                    value={dimension.value}
                                                    required
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'value',
                                                            e.target.value,
                                                            dimensionTwoDetails,
                                                            setDimensionTwoDetails
                                                        )}/>
                                            </td>
                                            <td className="border p-2">
                                                <button
                                                    type="button"
                                                    className="remove-btn rounded p-1"
                                                    onClick={() =>
                                                        handleRemoveTableItems(
                                                            index,
                                                            dimensionTwoDetails,
                                                            setDimensionTwoDetails
                                                        )}
                                                >
                                                    <FiTrash2/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <button
                                    type="button"
                                    className="add-item-btn text-white rounded px-2 py-1"
                                    onClick={() =>
                                        handleAddTableItem(
                                            setDimensionTwoDetails,
                                            dimensionTwoDetails,
                                            emptyDimensionDetails
                                        )
                                    }
                                >
                                    <IoMdAddCircleOutline/>
                                </button>
                            </div>}

                            <h3 className="font-bold mb-4">Body / Blade Details</h3>
                            <div className="mb-4 flex items-center justify-start">
                                <div>
                                    <p className="text-left">Select Sections to show</p>
                                </div>
                                <div className="ml-12">
                                    <input
                                        type="checkbox"
                                        className='mr-2'
                                        checked={showSections.bodyDetails}
                                        onClick={() => setShowSections({
                                            ...showSections,
                                            bodyDetails: !showSections.bodyDetails
                                        })}
                                    />
                                    <label>Body Details</label>
                                </div>
                                <div className="ml-12">
                                    <input
                                        type="checkbox"
                                        className='mr-2'
                                        checked={showSections.bladeDetails}
                                        onClick={() => setShowSections({
                                            ...showSections,
                                            bladeDetails: !showSections.bladeDetails
                                        })}
                                    />
                                    <label>Blade Details</label>
                                </div>
                            </div>

                            {/* Body Details */}
                            {showSections.bodyDetails === true && <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Body Details</label>
                                <table className="w-full border">
                                    <thead>
                                    <tr>
                                        <th className="border p-2">Property</th>
                                        <th className="border p-2">Value</th>
                                        <th className="border p-2"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {bodyDetails.map((dimension, index) => (
                                        <tr key={index}>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Property"
                                                    value={dimension.property}
                                                    required
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'property',
                                                            e.target.value,
                                                            assetDetails,
                                                            setAssetsDetails
                                                        )}/>
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Value"
                                                    value={dimension.value}
                                                    required
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'value',
                                                            e.target.value,
                                                            assetDetails,
                                                            setAssetsDetails
                                                        )}/>
                                            </td>
                                            <td className="border p-2">
                                                <button
                                                    type="button"
                                                    className="remove-btn rounded p-1"
                                                    onClick={() =>
                                                        handleRemoveTableItems(
                                                            index,
                                                            bodyDetails,
                                                            setBodyDetails
                                                        )}
                                                >
                                                    <FiTrash2/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                                <button
                                    type="button"
                                    className="add-item-btn text-white rounded px-2 py-1"
                                    onClick={() =>
                                        handleAddTableItem(
                                            setDimensionTwoDetails,
                                            dimensionTwoDetails,
                                            emptyDimensionDetails
                                        )
                                    }
                                >
                                    <IoMdAddCircleOutline/>
                                </button>
                            </div>}

                            {/* Blade Details */}
                            {showSections.bladeDetails === true &&
                                <div className="mb-4">
                                    <label className="block text-gray-700 text-md font-bold mb-2">Blade Details</label>
                                    <table className="w-full border">
                                        <thead>
                                        <tr>
                                            <th className="border p-2">Property</th>
                                            <th className="border p-2">Value</th>
                                            <th className="border p-2"></th>
                                        </tr>
                                        </thead>
                                        <tbody>
                                        {bladeDetails.map((dimension, index) => (
                                            <tr key={index}>
                                                <td className="border p-2">
                                                    <input
                                                        type="text"
                                                        className="w-full p-1"
                                                        placeholder="Property"
                                                        value={dimension.property}
                                                        required
                                                        onChange={(e) =>
                                                            handleTableItemChange(
                                                                index,
                                                                'property',
                                                                e.target.value,
                                                                assetDetails,
                                                                setAssetsDetails
                                                            )}/>
                                                </td>
                                                <td className="border p-2">
                                                    <input
                                                        type="text"
                                                        className="w-full p-1"
                                                        placeholder="Value"
                                                        value={dimension.value}
                                                        required
                                                        onChange={(e) =>
                                                            handleTableItemChange(
                                                                index,
                                                                'value',
                                                                e.target.value,
                                                                assetDetails,
                                                                setAssetsDetails
                                                            )}/>
                                                </td>
                                                <td className="border p-2">
                                                    <button
                                                        type="button"
                                                        className="remove-btn rounded p-1"
                                                        onClick={() =>
                                                            handleRemoveTableItems(
                                                                index,
                                                                bladeDetails,
                                                                setBladeDetails
                                                            )}
                                                    >
                                                        <FiTrash2/>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                        </tbody>
                                    </table>
                                    <button
                                        type="button"
                                        className="add-item-btn text-white rounded px-2 py-1"
                                        onClick={() =>
                                            handleAddTableItem(
                                                setDimensionTwoDetails,
                                                dimensionTwoDetails,
                                                emptyDimensionDetails
                                            )
                                        }
                                    >
                                        <IoMdAddCircleOutline/>
                                    </button>
                                </div>}

                            {/* Visual */}
                            <div className="mb-10">
                                <label className="block text-gray-700 text-md font-bold mb-2">Visual:</label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Visual"
                                    name="visual"
                                    value={state.visual}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Report Type Data */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Report Type Data</label>
                                <table className="w-full border">
                                    <thead>
                                    <tr>
                                        <th className="border p-2">Title</th>
                                        <th className="border p-2">Value</th>
                                        <th className="border p-2"></th>
                                    </tr>
                                    </thead>
                                    <tbody>
                                    {reportTypeData?.map((dimension, index) => (
                                        <tr key={index}>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Property"
                                                    value={dimension.property}
                                                    required
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'property',
                                                            e.target.value,
                                                            reportTypeData,
                                                            setReportTypeData
                                                        )}/>
                                            </td>
                                            <td className="border p-2">
                                                <input
                                                    type="text"
                                                    className="w-full p-1"
                                                    placeholder="Value"
                                                    value={dimension.value}
                                                    required
                                                    onChange={(e) =>
                                                        handleTableItemChange(
                                                            index,
                                                            'value',
                                                            e.target.value,
                                                            reportTypeData,
                                                            setReportTypeData
                                                        )}/>
                                            </td>
                                            <td className="border p-2">
                                                <button
                                                    type="button"
                                                    className="remove-btn rounded p-1"
                                                    onClick={() =>
                                                        handleRemoveTableItems(
                                                            index,
                                                            bodyDetails,
                                                            setReportTypeData
                                                        )}
                                                >
                                                    <FiTrash2/>
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                    </tbody>
                                </table>
                            </div>

                            {/* Consumables */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Consumables</label>
                                <ResponsibilityTable
                                    column1="Responsibilities"
                                    initalItems={consumablesInitial}
                                    responsibilities={consumablesData}
                                    setResponsibilities={setConsumablesData}
                                />
                            </div>

                            {/* Equipments */}
                            <div className="mb-4">
                                <label className="block text-gray-700 text-md font-bold mb-2">Equipments</label>
                                <ResponsibilityTable
                                    column1="Responsibilities"
                                    initalItems={equipmentsInitial}
                                    responsibilities={equipmentsData}
                                    setResponsibilities={setEquipmentsData}
                                />
                            </div>

                            {/* Inspector's Comment */}
                            <div className="mb-3">
                                <label className="block text-gray-700 text-md font-bold mb-2">Inspector&apos;s Comment:</label>
                                <textarea
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    placeholder="Inspector's Comment"
                                    name="comments"
                                    value={state.comments}
                                    onChange={handleChange}
                                    required
                                />
                            </div>

                            {/* Keys */}
                            <div className="mb-3">
                                <label className="block text-gray-700 text-md font-bold mb-2">Key</label>
                                <MultiSelect
                                    options={keyItems}
                                    selectedOptions={selectedOptions}
                                    onChange={handleMultiSelectChange}
                                />
                            </div>

                            {/* Images */}
                            <div className="mb-3">
                                <label className="block text-gray-700 text-md font-bold mb-2">Images</label>
                                <FileUploadComponent setImages={handleFilesSelect} selectedLinks={imageLinks} />
                            </div>

                            <Button>Update Report</Button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EditReport;
