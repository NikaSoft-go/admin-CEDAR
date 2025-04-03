import {useEffect, useState} from 'react';
import Sidebar from '../../components/sidebar/index.jsx';
import Button from '../../components/button/index.jsx';
import {axiosClient} from "../../libs/axiosClient.js";
import {toast} from "react-toastify";
import {useNavigate, useParams} from "react-router-dom";
import {
    bladeDetailInitial, bodyDetailInitial,
    consumablesInitial, equipmentConsumablesInitial, equipmentsInitial, equipmentTechniqueInitial,
    getDimensionData, otherEquipmentsProps, qualityCheckRecord, returnAssetsData,
    returnReportDataType, utSteelWaveTableInitial, utTableInitial, weldingTableInitial,
} from "../../utils/data.js";
import AddReportUltrasonicThicknessSteelWave from "./addReportUltrasonicThicknessSteelWave.jsx";
import EditReportNormal from "./editReportNormal.jsx";
import EditReportUltrasonicThickness from "./editReportUltrasonicThickness.jsx";
import EditReportWelding from "./editReportWelding.jsx";
import EditReportLifting from "./liftingReport/editReportLifting.jsx";
import {getReportNormal} from "../../utils/index.js";

const EditReport = () => {
    const {id} = useParams();
    const [currentTypeComp, setCurrentTypeComp] = useState("");
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [images, setImages] = useState([]);
    const [reportTypeData, setReportTypeData] = useState([]);
    const [consumablesData, setConsumablesData] = useState(consumablesInitial);
    const [equipmentsData, setEquipmentsData] = useState(equipmentsInitial);
    const [assetDetails, setAssetsDetails] = useState([]);
    const [utResults, setUtResults] = useState([]);
    const [comments, setComments] = useState([
        {id: 1, value: ""}
    ]);
    const [liftingInfo, setLiftingInfo] = useState({});
    const [personnelData, setPersonnelData] = useState([]);
    const [scanningSensitivity, setScanningSensitivity] = useState([]);
    const [dimensionOneDetails, setDimensionOneDetails] = useState([]);
    const [equipmentConsumables, setEquipmentConsumables] = useState(equipmentConsumablesInitial);
    const [equipmentMethod, setEquipmentMethod] = useState(equipmentTechniqueInitial);
    const [otherWeldingProps, setOtherWeldingProps] = useState(otherEquipmentsProps);
    const [dimensionTwoDetails, setDimensionTwoDetails] = useState([]);
    const [bodyDetails, setBodyDetails] = useState(bodyDetailInitial);
    const [bladeDetails, setBladeDetails] = useState(bladeDetailInitial);
    const [showSections, setShowSections] = useState({
        bodyDetails: true,
        bladeDetails: true,
        dimensionOne: true,
        dimensionTwo: true
    });

    const [weldingTableData, setWeldingTableData] = useState(weldingTableInitial);
    const [utQualityCheckRecordData, setUtQualityCheckRecordData] = useState(qualityCheckRecord);
    const [abbreviationsUsed, setAbbreviationsUsed] = useState([]);
    const [utTableData, setUtTableData] = useState(utTableInitial);
    const [utSteelWaveTableData, setUtSteelWaveTableData] = useState(utSteelWaveTableInitial);

    const navigate = useNavigate();

    const [state, setState] = useState({});
    const [issuerInfo, setIssuerInfo] = useState({});
    const [reviewerInfo, setReviewerInfo] = useState({});

    useEffect(() => {
        const fetchReportData = async () => {
            try {
                console.log("an")
                const response = await axiosClient.get(`/reports/get-report/${id}/`);
                const reportData = response.data.data;

                // Pre-fill the form with existing data
                setState(reportData);
                setIssuerInfo(JSON.parse(reportData.issuer || "{}"));
                setReviewerInfo(JSON.parse(reportData.quality_controller || "{}"));
                setAssetsDetails(JSON.parse(reportData.asset_details || "[]"));
                setDimensionOneDetails(JSON.parse(reportData.dimension_one || "[]"));
                setDimensionTwoDetails(JSON.parse(reportData.dimension_two || "[]"));
                setBodyDetails(JSON.parse(reportData.body || "[]"));
                setBladeDetails(JSON.parse(reportData.blade || "[]"));
                setReportTypeData(JSON.parse(reportData.report_type_data || "[]"));
                setConsumablesData(JSON.parse(reportData.consumables || "[]"));
                setSelectedOptions(JSON.parse(reportData.keys || "[]"));
                setEquipmentsData(JSON.parse(reportData.equipments || "[]"));
                setEquipmentConsumables(JSON.parse(reportData.equipment_consumables || "[]"));
                setOtherWeldingProps(JSON.parse(reportData.other_welding_props || "[]"));
                setWeldingTableData(JSON.parse(reportData.welding_table_data || "[]"));
                setEquipmentMethod(JSON.parse(reportData.equipment_method || "[]"));
                setUtResults(JSON.parse(reportData.ut_results || "[]"));
                setUtTableData(JSON.parse(reportData.ut_table_data || "[]"));
                setComments(JSON.parse(reportData.inspector_comments || "[]"));
                setLiftingInfo(
                    typeof reportData?.lifting_data === "string"
                        ? JSON.parse(reportData.lifting_data)
                        : reportData.lifting_data
                );
                setPersonnelData(
                    typeof reportData.personnel_data === "string"
                        ? JSON.parse(reportData.personnel_data)
                        : reportData.personnel_data
                );
                // setScanningSensitivity(JSON.parse(reportData.scanning_sensitivity));
                // setUtQualityCheckRecordData(JSON.parse(reportData.ut_quality_check_record));
                // setAbbreviationsUsed(JSON.parse(reportData.abbreviations_used));

                // Set the current report type component
                getReportNormal(reportData.report_type);
            } catch (err) {
                console.log("hello", err);
                toast.error("Failed to fetch report data");
            }
        };

        fetchReportData();
    }, [id]);

    const handleChange = (e, items = state, setItems = setState) => {
        const value = e.target?.files ? e.target.files[0] : e.target.value;
        setItems({
            ...items,
            [e.target.name]: value
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

    const handleAddTableItem = (setFunc) => {
        const emptyData = returnReportDataType(state.report_type, "data");
        setFunc((items) => [
            ...items,
            emptyData[0],
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

    const handleLiftingInfo = (e) => {
        setLiftingInfo((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const handleAddWeldingTableItem = () => {
        setWeldingTableData([
            ...weldingTableData,
            {
                joint_number: '',
                welder_stamp: '',
                size: '',
                thickness: '',
                remarks: '',
                indications: '',
                acc: '',
                rej: ''
            },
        ]);
    };

    const handleRemoveWeldingTableItem = (index) => {
        const updatedCostItems = [...weldingTableData];
        updatedCostItems.splice(index, 1);
        setWeldingTableData(updatedCostItems);
    };

    const handleWeldingTableItemChange = (index, field, value) => {
        const updatedCostItems = [...weldingTableData];
        updatedCostItems[index][field] = value;
        setWeldingTableData(updatedCostItems);
    };

    const handleAssetDataTableItemChange = (index, field, value) => {
        const updatedCostItems = [...assetDetails];
        updatedCostItems[index][field] = value;
        setAssetsDetails(updatedCostItems);
    };

    const handlePersonnelTableItemChange = (index, field, value) => {
        const updatedCostItems = [...personnelData];
        updatedCostItems[index][field] = value;
        setPersonnelData(updatedCostItems);
    };

    const handleReportTypeTableItemChange = (index, field, value) => {
        const updatedCostItems = [...reportTypeData];
        updatedCostItems[index][field] = value;
        setReportTypeData(updatedCostItems);
    };

    const handleAddUTTableItem = () => {
        setUtTableData([
            ...utTableData,
            {
                probe_serial_number: '',
                type: '',
                angle: '',
                crystal_size: '',
                frequency: '',
                basic_sensitivity: '',
                transfer_correction: '',
                scanning_sensitivity: ''
            },
        ]);
    };

    const handleRemoveUTTableItem = (index) => {
        const updatedCostItems = [...utTableData];
        updatedCostItems.splice(index, 1);
        setUtTableData(updatedCostItems);
    };

    const handleUTTableItemChange = (index, field, value) => {
        const updatedCostItems = [...utTableData];
        updatedCostItems[index][field] = value;
        setUtTableData(updatedCostItems);
    };

    const handleUpdateReport = async (e) => {
        e.preventDefault();

        let utTableDataFinal = [];

        if (currentTypeComp === "Ultrasonic Inspection (Steel Wave)") {
            utTableDataFinal = utSteelWaveTableInitial
        } else {
            utTableDataFinal = utTableData
        }

        const bodyData = showSections?.bodyDetails
            ? (bodyDetails || []) : []
        const bladeData = showSections?.bladeDetails
            ? (bladeDetails || []) : []
        const reportData = {
            ...state,
            issuer: JSON.stringify(issuerInfo),
            quality_controller: JSON.stringify(reviewerInfo),
            asset_details: JSON.stringify(assetDetails || []),
            dimension_one: JSON.stringify(dimensionOneDetails),
            dimension_two: JSON.stringify(dimensionTwoDetails),
            body: JSON.stringify(bodyData),
            blade: JSON.stringify(bladeData),
            report_type_data: JSON.stringify(reportTypeData || []),
            consumables: JSON.stringify(consumablesData || []),
            keys: JSON.stringify(selectedOptions || []),
            equipments: JSON.stringify(equipmentsData || []),
            equipment_consumables: JSON.stringify(equipmentConsumables || []),
            other_welding_props: JSON.stringify(otherWeldingProps || []),
            welding_table_data: JSON.stringify(weldingTableData || []),
            equipment_method: JSON.stringify(equipmentMethod || []),
            ut_results: JSON.stringify(utResults || []),
            ut_table_data: JSON.stringify(utTableDataFinal),
            inspector_comments: JSON.stringify(comments || []),
            personnel_data: JSON.stringify(personnelData || []),
            lifting_data: JSON.stringify(liftingInfo || {}),
        }

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
            imageFiles.forEach(function (image) {
                formData.append('images', image);
            });

            imageNames.forEach(function (imageName) {
                formData.append('file_names', imageName);
            });

            if (!imageFiles.length) {
                formData.delete('images');
            }

            formData.delete('drawing_image_one_url');
            formData.delete('drawing_image_two_url');
            formData.delete('inspector_signature_url');
            formData.delete('reviewer_signature_url');

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

    const handleAbbreviationSelectChange = (selected) => {
        setAbbreviationsUsed(selected);
    };

    const handleOtherWeldingPropsItemChange = (index, field, value) => {
        const updatedCostItems = [...otherWeldingProps];
        updatedCostItems[index][field] = value;
        setOtherWeldingProps(updatedCostItems);
    };

    const handleEquipmentConsumablesItemChange = (index, field, value) => {
        const updatedCostItems = [...equipmentConsumables];
        updatedCostItems[index][field] = value;
        setEquipmentConsumables(updatedCostItems);
    };

    const handleDeleteSignature = (signature) => {
        setState((prev) => ({
            ...prev,
            [signature]: null,
            [`${signature}_url`]: ""
        }))
    }

    const handleImageDelete = (index) => {
        setState((prev) => ({
            ...prev,
            images: [...prev.images.filter((_, itemIndex) => itemIndex !== index)]
        }))
    }

    const handleIssuerInfoChange = (e) => {
        const value = e.target?.files ? e.target.files[0] : e.target.value;
        setIssuerInfo((items) => ({
            ...items,
            [e.target.name]: value
        }))
    }

    const handleReviewerInfoChange = (e) => {
        const value = e.target?.files ? e.target.files[0] : e.target.value;
        setReviewerInfo((items) => ({
            ...items,
            [e.target.name]: value
        }))
    }

    const addComment = () => {
        setComments((prevItems) => [
            ...prevItems,
            {
                id: prevItems.length + 1,
                value: '',
            },
        ]);
    };

    const normalDependencies = {
        handleChange,
        issuerInfo,
        setIssuerInfo,
        reviewerInfo,
        setReviewerInfo,
        assetDetails,
        handleTableItemChange,
        setAssetsDetails,
        handleRemoveTableItems,
        handleAddTableItem,
        showSections,
        setShowSections,
        dimensionOneDetails,
        setDimensionOneDetails,
        bodyDetails,
        setBodyDetails,
        dimensionTwoDetails,
        setDimensionTwoDetails,
        bladeDetails,
        setBladeDetails,
        reportTypeData,
        setReportTypeData,
        consumablesData,
        setConsumablesData,
        equipmentsData,
        setEquipmentsData,
        selectedOptions,
        handleMultiSelectChange,
        handleFilesSelect,
        handleDeleteSignature,
        handleImageDelete,
        state,
        comments,
        setComments,
        addComment,
    }

    const weldingDependencies = {
        handleChange,
        equipmentConsumables,
        setEquipmentConsumables,
        handleEquipmentConsumablesItemChange,
        handleOtherWeldingPropsItemChange,
        handleRemoveTableItems,
        handleTableItemChange,
        setOtherWeldingProps,
        otherWeldingProps,
        setWeldingTableData,
        weldingTableData,
        handleAddWeldingTableItem,
        handleWeldingTableItemChange,
        handleRemoveWeldingTableItem,
        issuerInfo,
        setIssuerInfo,
        reviewerInfo,
        setReviewerInfo,
        handleFilesSelect,
        handleDeleteSignature,
        handleImageDelete,
        state
    }

    const utReportDependencies = {
        handleChange,
        equipmentMethod,
        setEquipmentMethod,
        setUtTableData,
        utTableData,
        handleTableItemChange,
        handleRemoveTableItems,
        handleUTTableItemChange,
        handleRemoveUTTableItem,
        handleAddUTTableItem,
        issuerInfo,
        setIssuerInfo,
        reviewerInfo,
        setReviewerInfo,
        setUtResults,
        utResults,
        comments,
        setComments,
        addComment,
        handleFilesSelect,
        handleDeleteSignature,
        handleImageDelete,
        state
    }

    const utSteelWaveReportDependencies = {
        handleChange,
        equipmentMethod,
        setEquipmentMethod,
        setUtSteelWaveTableData,
        utSteelWaveTableData,
        handleTableItemChange,
        handleRemoveTableItems,
        handleUTTableItemChange,
        handleRemoveUTTableItem,
        handleAddUTTableItem,
        issuerInfo,
        setIssuerInfo,
        reviewerInfo,
        setReviewerInfo,
        setUtResults,
        utResults,
        comments,
        setComments,
        setScanningSensitivity,
        utQualityCheckRecordData,
        setUtQualityCheckRecordData,
        abbreviationsUsed,
        handleFilesSelect,
        handleAbbreviationSelectChange
    }

    const liftingReportDependencies = {
        handleChange,
        handleAddTableItem,
        handlePersonnelTableItemChange,
        handleReportTypeTableItemChange,
        handleAssetDataTableItemChange,
        handleRemoveTableItems,
        handleFilesSelect,
        handleLiftingInfo,
        handleIssuerInfoChange,
        handleReviewerInfoChange,
        handleImageDelete,
        handleDeleteSignature,
        addComment,
        setComments,
        comments,
        issuerInfo,
        reviewerInfo,
        assetDetails,
        setAssetsDetails,
        reportTypeData,
        setReportTypeData,
        personnelData,
        setPersonnelData,
        setLiftingInfo,
        liftingInfo,
        state
    }

    useEffect(() => {
        if (state.report_type) {
            setCurrentTypeComp(getReportNormal(state.report_type));
            setReportTypeData(returnReportDataType(state.report_type, "data"));
            setAssetsDetails(returnAssetsData(state.report_type))
        }
    }, [state.report_type]);

    useEffect(() => {
        if (state.dimension_one_name) {
            setDimensionOneDetails(getDimensionData(state.dimension_one_name));
        }
    }, [state.dimension_one_name]);

    useEffect(() => {
        if (state.dimension_two_name) {
            setDimensionTwoDetails(getDimensionData(state.dimension_two_name));
        }
    }, [state.dimension_two_name]);

    return (
        <div className="flex h-screen bg-gray-100">
            <Sidebar/>
            <div className="flex-1 flex flex-col overflow-hidden">
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                    <div className="p-4">
                        <h1 className="text-2xl font-semibold mb-4">Edit Report</h1>
                        {/* Edit Invoice Form */}
                        <form onSubmit={handleUpdateReport}>
                            {/* Report Type */}
                            <div className="mb-5">
                                <label className="block text-gray-700 text-md font-bold mb-2">Report Title:</label>
                                <input
                                    className="mb-5 shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    type="text"
                                    placeholder="Report Title"
                                    name="report_title"
                                    value={state.report_title || ''}
                                    onChange={handleChange}
                                    required
                                />

                                <label className="block text-gray-700 text-md font-bold mb-2">Report Type:</label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="report_type"
                                    value={state.report_type || ''}
                                    onChange={handleChange}
                                    required
                                >
                                    <option>Select a report type</option>
                                    <option value="MPI">Magnetic Particle
                                        Inspection
                                    </option>
                                    <option value="MPI with connections">MPI with connections</option>
                                    <option value="DPI">DYE Penetrant
                                        Inspection
                                    </option>
                                    <option value="DPI with connections">DPI with connections</option>
                                    <option value="Ultrasonic Inspection">Ultrasonic Thickness</option>
                                    <option value="Ultrasonic Inspection (Steel Wave)">Ultrasonic Inspection (Steel
                                        Wave)
                                    </option>
                                    <option value="Lifting Inspection">Lifting Inspection</option>
                                    <option value="Welding">Welding</option>
                                    <option value="Forklift Visual with MPI report">Forklift Visual with MPI report
                                    </option>
                                    <option value="Forklift Visual report">Forklift Visual report</option>
                                    <option value="Crane Visual with MPI report">Crane Visual with MPI report</option>
                                    <option value="Crane Visual report">Crane Visual report</option>
                                </select>
                            </div>

                            {currentTypeComp === "Normal" && <EditReportNormal {...normalDependencies} />}

                            {currentTypeComp === "Welding" && <EditReportWelding {...weldingDependencies} />}

                            {currentTypeComp === "Ultrasonic Inspection" &&
                                <EditReportUltrasonicThickness {...utReportDependencies} />}

                            {currentTypeComp === "Ultrasonic Inspection (Steel Wave)" &&
                                <AddReportUltrasonicThicknessSteelWave {...utSteelWaveReportDependencies} />}

                            {currentTypeComp === "Lifting Inspection" &&
                                <EditReportLifting
                                    {...liftingReportDependencies}
                                />
                            }
                            <div className="mt-8"></div>
                            <Button>Update Report</Button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default EditReport;
