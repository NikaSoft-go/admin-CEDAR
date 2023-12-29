import {useEffect, useState} from 'react';
import Sidebar from '../../components/sidebar/index.jsx';
import Button from '../../components/button/index.jsx';
import {axiosClient} from "../../libs/axiosClient.js";
import {toast} from "react-toastify";
import {useNavigate} from "react-router-dom";
import {
    bladeDetailInitial, bodyDetailInitial,
    consumablesInitial, equipmentConsumablesInitial, equipmentsInitial, equipmentTechniqueInitial,
    getDimensionData, otherEquipmentsProps, returnAssetsData,
    returnReportDataType, utTableInitial, weldingTableInitial,
} from "../../utils/data.js";
import AddReportNormal from "./addReportNormal.jsx";
import AddReportWelding from "./addReportWelding.jsx";
import AddReportUltrasonicThickness from "./addReportUltrasonicThickness.jsx";

const AddReport = () => {
    // const [signature, setSignature] = useState(null);
    // const keyItems = [
    //     "ACP - Accept",
    //     "MPI - Magnetic Particle Inspection",
    //     "VT - Visual Inspection",
    //     "DPI - Dye Penetrant Inspection",
    //     "DIM - Dimensional",
    //     "PT - Pitted Thread",
    //     "GT - Galled Thread",
    //     "SD - Seal Damaged",
    // ];
    //
    // const excludedTypes = ["Welding", "Lifting Inspection", "Ultrasonic Inspection"];
    const [currentTypeComp, setCurrentTypeComp] = useState(null);
    const [selectedOptions, setSelectedOptions] = useState([]);
    const [images, setImages] = useState([]);
    const [reportTypeData, setReportTypeData] = useState([]);
    const [consumablesData, setConsumablesData] = useState(consumablesInitial);
    const [equipmentsData, setEquipmentsData] = useState(equipmentsInitial);
    const [assetDetails, setAssetsDetails] = useState([]);
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
    const [utTableData, setUtTableData] = useState(utTableInitial);

    const navigate = useNavigate();

    const [state, setState] = useState({});
    const [issuerInfo, setIssuerInfo] = useState({});
    const [reviewerInfo, setReviewerInfo] = useState({});

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
        equipments: JSON.stringify(equipmentsData)
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
            const response = await axiosClient.post(
                '/reports/add-report/',
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
        handleFilesSelect
    }

    const weldingDependencies = {
        handleChange,
        equipmentConsumables,
        setEquipmentConsumables,
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
        setReviewerInfo
    }

    const utReportDependencies = {
        handleChange,
        equipmentMethod,
        setEquipmentMethod,
        setUtTableData,
        utTableData,
        handleUTTableItemChange,
        handleRemoveUTTableItem,
        handleAddUTTableItem,
        issuerInfo,
        setIssuerInfo,
        reviewerInfo,
        setReviewerInfo
    }

    const reportComponents = {
        "Normal": <AddReportNormal {...normalDependencies} />,
        "Welding": <AddReportWelding {...weldingDependencies} />,
        "Ultrasonic Inspection": <AddReportUltrasonicThickness {...utReportDependencies} />,
    }

    const sameTypesReport = {
        "Normal": [
            "MPI without connections",
            "MPI with connections",
            "DPI without connections",
            "DPI with connections",
        ],
        "Ultrasonic Inspection": ["Ultrasonic Inspection"],
        "Lifting Inspection": ["Lifting Inspection"],
        "Welding": ["Welding"]
    }


    const getReportNormal = () => {
        let currentType = "";
        for (const reportType in sameTypesReport) {
            const data = sameTypesReport[reportType];
            if (data?.includes(state.report_type)) {
                currentType = reportType;
                break;
            }
        }

        setCurrentTypeComp(reportComponents[currentType]);
    }

    useEffect(() => {
        if (state.report_type) {
            getReportNormal();
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
                        <h1 className="text-2xl font-semibold mb-4">Add Report</h1>
                        {/* Add Invoice Form */}
                        <form onSubmit={handleAddReport}>
                            {/* Report Type */}
                            <div className="mb-5">
                                <label className="block text-gray-700 text-md font-bold mb-2">Report Type:</label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    name="report_type"
                                    onChange={handleChange}
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

                            <>{currentTypeComp}</>

                            <div className="mt-8"></div>
                            <Button>Add Report</Button>
                        </form>
                    </div>
                </main>
            </div>
        </div>
    );
};

export default AddReport;
