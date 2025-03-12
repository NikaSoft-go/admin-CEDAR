// Reports
export const emptyAssetsDetails = {type: '', serial_number: '', model: '', description: '', size: '', material: ''}
export const emptyLiftingAssetsDetails = {type: '', serial_number: '', model: '', description: '', image: ''}
export const emptyLiftingItemDetails = {
    serial_number: '',
    description_and_identification_equipment: '',
    swl: '',
    test_load_applied: '',
    date_manufacture: '',
    date_last_examination: '',
    date_next_examination: '',
}
export const emptyDimensionDetails = {property: '', value: ''}
export const DPIWithConnectionsData = [
    {
        type: "String Stabilizer",
        serial_number: 'SDT 9759 (SBD 88158)',
        model: '-',
        description: 'STRING STABILIZER',
        size: '15 3/4 in',
        material: 'Non Mag'
    },
]
export const DPIWithoutConnectionsData = [
    {
        type: "Locks",
        serial_number: '12-09',
        model: '-',
        description: 'PRIMARY AND SECONDARY LOCK',
        size: '-',
        material: 'Non Mag'
    },
]
export const MPIAssetsData = [
    {
        type: "Cross Over",
        serial_number: 'G3625168-2',
        model: '-',
        description: '3-7/8" CAS Box X 3-1/2" PH6 Pin',
        size: '5 in',
        material: 'Carbon Steel'
    },
]

export const returnAssetsData = (type) => {
    const assets = {
        "MPI": MPIAssetsData,
        "MPI with connections": MPIAssetsData,
        "DPI with connections": DPIWithConnectionsData,
        "DPI": DPIWithoutConnectionsData,
        "Ultrasonic Thickness": [],
        "Forklift Visual with MPI report": [emptyLiftingAssetsDetails],
        "Forklift Visual report": [emptyLiftingAssetsDetails],
        "Crane Visual with MPI report": [emptyLiftingAssetsDetails],
        "Crane Visual report": [emptyLiftingAssetsDetails],
    }

    return assets[type]
}

export const boxDimensionInitial = [
    {
        property: "Condition",
        value: 'ACP',
    },
    {
        property: "Thread Type",
        value: '6 5/8 REG',
    },
    {
        property: "OD",
        value: '8 1/4 in',
    },
    {
        property: "Bevel Diameter",
        value: '7 44/64 in',
    },
    {
        property: "Counter Bore Length",
        value: '11/16 in',
    },
    {
        property: "Counter Bore Diameter",
        value: '6 1/16 in',
    },
    {
        property: "Box Depth",
        value: '6 1/16 in',
    },
    {
        property: "Cold Work Stamp",
        value: 'Yes',
    },
    {
        property: "BSR",
        value: '31 3/4 in',
    },
    {
        property: "Float/Bore Back Length",
        value: '8 9/16 in',
    },
    {
        property: "Float/Bore Back Diameter",
        value: '5 18/64 in',
    },
    {
        property: "Tong Space",
        value: 'N/A',
    },
    {
        property: "Fishing Neck",
        value: '31 3/4 in',
    },
]
export const pinDimensionInitial = [
    {
        property: "Condition",
        value: 'ACP',
    },
    {
        property: "Thread Type",
        value: '6 5/8 REG',
    },
    {
        property: "OD",
        value: '8 1/4 in',
    },
    {
        property: "ID",
        value: '8 1/4 in',
    },
    {
        property: "Bevel Diameter",
        value: '7 44/64 in',
    },
    {
        property: "Pin Length",
        value: '11/16 in',
    },
    {
        property: "SRG Width",
        value: '6 1/16 in',
    },
    {
        property: "SRG Diameter",
        value: '8 9/16 in',
    },
    {
        property: "Cold Work Stamp",
        value: '5 18/64 in',
    },
    {
        property: "Tong Space",
        value: '5 18/64 in',
    },
    {
        property: "Fishing Neck",
        value: '31 3/4 in',
    },
    {
        property: "BSR",
        value: '31 3/4 in',
    },
]

export const getDimensionData = (type) => {
    const dimensionData = {
        Box: boxDimensionInitial,
        Pin: pinDimensionInitial,
    }

    return dimensionData[type]
}

export const bodyDetailInitial = [
    {
        property: "Body Condition",
        value: 'ACP',
    },
    {
        property: "Bore Condition",
        value: 'ACP',
    },
    {
        property: "Bore Debris Free",
        value: 'Yes',
    },
    {
        property: "Shoulder to Shoulder",
        value: '7 44/64 in',
    },
]

export const bladeDetailInitial = [
    {
        property: "Blade Condition",
        value: 'ACP',
    },
    {
        property: "Blade Length",
        value: '10 in',
    },
    {
        property: "Blade Width",
        value: '7 44/64 in',
    },
    {
        property: "Blade OD Centre",
        value: '15',
    },
]

export const DPIReportTypeDataInitial = [
    {
        property: "Penetrate Type",
        value: 'Visible Water Washable',
    },
    {
        property: "Penetrant Application",
        value: 'Aerosol Spray',
    },
    {
        property: "Penetrant Dwell Time",
        value: '15 minutes',
    },
    {
        property: "Emulsification Time",
        value: '-',
    },
    {
        property: "Test Temperature",
        value: 'Ambient',
    },
    {
        property: "Developer Type",
        value: 'Non-aqueous',
    },
    {
        property: "Developer Application",
        value: 'Aerosol Spray',
    },
    {
        property: "Developer Dwell Time",
        value: '10 minutes',
    },
    {
        property: "Drying Time",
        value: '4 minutes',
    },
    {
        property: "Remover/Cleaner Type",
        value: 'Water Washable',
    },
    {
        property: "Pre-Cleaner Application",
        value: 'Aerosol Spray',
    },
    {
        property: "Remover Application",
        value: 'Water Wash',
    },
    {
        property: "Post Test Cleaning",
        value: 'Yes',
    },
]

export const MPIReportTypeDataInitial = [
    {
        property: "Test Temperature",
        value: 'Ambient',
    },
    {
        property: "Magnetic Flow",
        value: 'Longitudinal',
    },
    {
        property: "Current Flow",
        value: 'A/C',
    },
    {
        property: "Contact Spacing",
        value: '3-4 in',
    },
    {
        property: "Field Application Time",
        value: '3 Secs',
    },
    {
        property: "Magnetic Particle Concentration",
        value: 'F.I = 0.2',
    },
    {
        property: "Contrast Paint Application",
        value: 'N/A',
    },
    {
        property: "Ink/Powder 1 Application",
        value: 'Trigger Spray',
    },
    {
        property: "Ink/Powder 1 Carrier",
        value: 'Kerosene',
    },
    {
        property: "Ink/Powder 2 Application",
        value: 'Trigger Spray',
    },
    {
        property: "Ink/Powder 2 Carrier",
        value: 'Kerosene',
    },
    {
        property: "Black Light Intensity - Beginning",
        value: '1000+',
    },
    {
        property: "Black Light Intensity - End",
        value: '2300+',
    },
    {
        property: "Pull Test",
        value: 'Yes',
    },
    {
        property: "Initial Demagnetisation",
        value: '-',
    },
    {
        property: "Final Demagnetisation",
        value: '-',
    },
    {
        property: "Post Test Cleaning",
        value: 'Yes',
    },
    {
        property: "Preparation of surface before examination",
        value: '-',
    },
]

export const equipmentConsumablesInitial = [
    {
        property: "Make",
        value: '',
    },
    {
        property: "Yoke Serial ",
        value: '',
    },
    {
        property: "Current",
        value: '',
    },
    {
        property: "Flux Indicator",
        value: '',
    },
    {
        property: "Yoke Type",
        value: '',
    },
    {
        property: "Lift weight Serial No",
        value: '',
    },
    {
        property: "Prod Spacing",
        value: '',
    },
    {
        property: "Consumable Manufacturer",
        value: '',
    },
    {
        property: "Black Ink Product code",
        value: '',
    },
    {
        property: "Contrast Paint Product code",
        value: '',
    },
    {
        property: "Fluorescent ink Product code",
        value: '',
    },
    {
        property: "Lift weight original conformance date",
        value: '',
    },
    {
        property: "Black Ink batch no",
        value: '',
    },
    {
        property: "Contrast Paint batch no",
        value: '',
    },
    {
        property: "Dry Powder batch no",
        value: '',
    },
    {
        property: "Fluorescence ink batch no",
        value: '',
    },
]

export const equipmentTechniqueInitial = [
    {
        property: "Couplant",
        value: '',
    },
    {
        property: "Equipment Manufacturer",
        value: '',
    },
    {
        property: "Model",
        value: '',
    },
    {
        property: "Serial Number",
        value: '',
    },
    {
        property: "Calibration Block Number",
        value: '',
    },
    {
        property: "Reject Level",
        value: '',
    },
    {
        property: "Time base Range(s)",
        value: '',
    },
    {
        property: "Velocity",
        value: '',
    },
]

export const otherEquipmentsProps = [
    {
        property: "Lighting Conditions",
        value: '',
    },
    {
        property: "White Light Intensity",
        value: '',
    },
    {
        property: "UV-A Intensity",
        value: '',
    },
    {
        property: "Light Meter Manufacturer",
        value: '',
    },
    {
        property: "Calibration due",
        value: '',
    },
    {
        property: "Light Meter Serial Number",
        value: '',
    },
    {
        property: "Light measurement on the inspection surface",
        value: '',
    },
    {
        property: "Temperature Gauge Manufacturer",
        value: '',
    },
    {
        property: "Calibration due",
        value: '',
    },
    {
        property: "Temperature Gauge Serial Number",
        value: '',
    },
    {
        property: "Temperature taken on Test Sample",
        value: '',
    },
    {
        property: "UV-A Lamp Manufacturer",
        value: '',
    },
    {
        property: "Calibration due",
        value: '',
    },
    {
        property: "UV-A Radiometer Serial Number",
        value: '',
    },
    {
        property: "Calibration due",
        value: '',
    },
    {
        property: "UV-A Intensity",
        value: '',
    },
]

export const returnReportDataType = (type, keyType) => {
    const reportTypes = {
        "MPI": ["MPI", "MPI with connections"],
        "DPI": ["DPI", "DPI with connections", "DPI"],
        "Lifting Inspection": ["Lifting Inspection"],
        "Ultrasonic Thickness": ["Ultrasonic Thickness"],
        "Forklift Visual with MPI report": ["Forklift Visual with MPI report"],
        "Forklift Visual report": ["Forklift Visual report"],
        "Crane Visual with MPI report": ["Crane Visual with MPI report"],
        "Crane Visual report": ["Crane Visual report"],
    };

    const initialData = {
        "MPI": MPIReportTypeDataInitial,
        "DPI": DPIReportTypeDataInitial,
        "Lifting Inspection": [emptyLiftingAssetsDetails],
        "Ultrasonic Thickness": [],
        "Forklift Visual with MPI report": [emptyLiftingAssetsDetails],
        "Forklift Visual report": [emptyLiftingAssetsDetails],
        "Crane Visual with MPI report": [emptyLiftingAssetsDetails],
        "Crane Visual report": [emptyLiftingAssetsDetails],
    }

    const key = Object.keys(reportTypes).find(key => reportTypes[key].includes(type));

    if (keyType === "type") {
        return key;
    } else {
        return initialData[key];
    }
}

export const qualityCheckRecord = [
    {
        name: "Time base linearity:",
        value: "Within 2% accuracy",
    },
    {
        name: "Amplitude linearity:",
        value: "Within 5% accuracy",
    },
    {
        name: "Probe index verified:",
        value: "Measured from front of probe",
    },
    {
        name: "Probe angle verified:",
        value: "Within 2° from indicated angle",
    },
    {
        name: "Probe squint:",
        value: "Within 2° from dead ahead",
    },
]

export const consumablesInitial = [
    {
        category: "Type",
        values: [
            "Cleaner",
            "Pentrant",
            "Developer"
        ],
    },
    {
        category: "Manufacturer",
        values: [
            "Johnston & Allen",
            "Johnston & Allen",
            "Johnston & Allen"
        ],
    },
    {
        category: "Description",
        values: [
            "Cleaner JAC 2",
            "JAP Penetrant (Washable)",
            "JAP Developer"
        ],
    },
    {
        category: "Batch Number",
        values: [
            "M206001",
            "H1614",
            "D1353"
        ],
    },
    {
        category: "Expiry Date",
        values: [
            "05-Jan-2024",
            "01-Feb-2024",
            "12-Jan-2024"
        ],
    },
    {
        category: "Services",
        values: [
            "Visual",
            "DPI",
            "DPI"
        ],
    },
]

export const equipmentsInitial = [
    {
        category: "Type",
        values: [
            "DC Coil",
            "UV Lamp",
            "Black light Meter"
        ],
    },
    {
        category: "Description",
        values: [
            "C1030, NAV341, DC Coil",
            "VU-3-150, nav278, UV Lamp",
            "S744746, NAV321, UV Meter"
        ],
    },
    {
        category: "Certification Date",
        values: [
            "03-Aug-2023",
            "03-Aug-2023",
            "14-June-2023"
        ],
    },
    {
        category: "Expiry Date",
        values: [
            "03-Feb-2024",
            "03-Feb-2024",
            "13-Dec-2023"
        ],
    },
    {
        category: "Services",
        values: [
            "UV Light Inspection",
            "UV Light Inspection",
            "UV Light Inspection"
        ],
    },
]

export const weldingTableInitial = [
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
    {
        joint_number: 'SW#14',
        welder_stamp: 'PW-10,W-67',
        size: '',
        thickness: '21.95mm',
        remarks: 'NRI',
        indications: 'Non Relevant Information',
        acc: 'correct',
        rej: '',
    },
]

export const utTableInitial = [
    {
        probe_serial_number: 'AN00233',
        type: 'Cygnus T5A-MSW',
        angle: '0',
        crystal_size: '5',
        frequency: '5',
        basic_sensitivity: 'N/A',
        transfer_correction: 'N/A',
        scanning_sensitivity: 'N/A',
    },
]

export const utSteelWaveTableInitial = [
    {
        type: '0° Single crystal',
        angle: 'DOPPLER',
        frequency: '2 MHz',
        crystal_size: '10mm.',
        probe_serial_number: 'HKA341',
    },
    {
        type: '45° Single crystal',
        angle: 'DOPPLER',
        frequency: '2 MHz',
        crystal_size: '8X9mm.',
        probe_serial_number: 'HKA325',
    },
    {
        type: '60° Single crystal',
        angle: 'DOPPLER',
        frequency: '2 MHz',
        crystal_size: '8X9mm.',
        probe_serial_number: 'HKA314',
    },
    {
        type: '70° Single crystal',
        angle: 'DOPPLER',
        frequency: '2 MHz',
        crystal_size: '8X9mm.',
        probe_serial_number: 'HKA643',
    },
    {
        type: 'Other',
        angle: 'DOPPLER',
        frequency: '2 MHz',
        crystal_size: '10mm.',
        probe_serial_number: 'N/A',
    },
]

export const utTableResults = [
    {
        rowName: 'COVER / SHELL A (mm)',
        degrees: {
            '0': { value1: '11.4', value2: '11.5' },
            '90': { value1: '11.4', value2: '11.3' },
            '180': { value1: '11.5', value2: '11.2' },
            '270': { value1: '11.3', value2: '11.3' },
        },
    },
    {
        rowName: 'SHELL B (mm)',
        degrees: {
            '0': { value1: '11.4', value2: '11.5' },
            '90': { value1: '11.4', value2: '11.3' },
            '180': { value1: '11.5', value2: '11.2' },
            '270': { value1: '11.3', value2: '11.3' },
        },
    },
    {
        rowName: 'SHELL C (mm)',
        degrees: {
            '0': { value1: '11.4', value2: '11.5' },
            '90': { value1: '11.4', value2: '11.3' },
            '180': { value1: '11.5', value2: '11.2' },
            '270': { value1: '11.3', value2: '11.3' },
        },
    },
    {
        rowName: 'BOTTOM / SHELL D (mm)',
        degrees: {
            '0': { value1: '11.4', value2: '11.5' },
            '90': { value1: '11.4', value2: '11.3' },
            '180': { value1: '11.5', value2: '11.2' },
            '270': { value1: '11.3', value2: '11.3' },
        },
    },
]


export const commentsInitial = [
    {
        id: 1,
        value: 'Ultrasonic thickness measurements were taken circumferentially at each shell',
    },
    {
        id: 2,
        value: 'Corrosion found at entire bottom (Shell D) with average pitting depth of about 2.7mm.' +
            ' see attachment',
    },
    {
        id: 3,
        value: 'Spot Corrosion found on cover (Shell A) with average pitting depth of about 4.8mm.' +
            ' see attachment',
    },
]

export const scanningSensitivity = [
    {
        id: 1,
        value1: '',
        value2: '',
    },
    {
        id: 2,
        value1: '',
        value2: '',
    },
    {
        id: 3,
        value1: '',
        value2: '',
    },
]

export const keyItems = [
    "ACP - Accept",
    "MPI - Magnetic Particle Inspection",
    "VT - Visual Inspection",
    "DPI - Dye Penetrant Inspection",
    "DIM - Dimensional",
    "PT - Pitted Thread",
    "GT - Galled Thread",
    "SD - Seal Damaged",
    "Corr - Corrosion",
    "Por - Porosity",
    "UC - Undercut",
    "Cra - Crack",
    "LOP - Lack of Penetration",
    "LOF - Lack of Fusion",
    "Mis - Misalignment",
    "OL - Overlap",
    "CBM - Clean to bear metal",
];

export const abbreviationsItems = [
    "MMAW = Manual metal arc welding",
    "FSH = Full screen height",
    "N/A = Not Applicable",
    "SDH = Side Drilled Hole",
    "DAC = Distance Amplitude Correction",
    "BWE = Back wall Echo",
];