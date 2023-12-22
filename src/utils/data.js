// Reports
export const emptyAssetsDetails = {type: '', serial_number: '', model: '', description: '', size: '', material: ''}
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
        "DPI with connections": DPIWithConnectionsData,
        "DPI without connections": DPIWithoutConnectionsData,
        "Ultrasonic Thickness": [],
        "Lifting Inspection": []
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
]

export const returnReportDataType = (type, keyType) => {
    const reportTypes = {
        "MPI": ["Visual Inspection MPI", "MPI"],
        "DPI": ["DPI", "DPI with connections", "DPI without connections"],
        "Lifting Inspection": ["Lifting Inspection"],
        "Ultrasonic Thickness": ["Ultrasonic Thickness"]
    };

    const initialData = {
        "MPI": MPIReportTypeDataInitial,
        "DPI": DPIReportTypeDataInitial,
        "Lifting Inspection": [],
        "Ultrasonic Thickness": []
    }

    const key = Object.keys(reportTypes).find(key => reportTypes[key].includes(type));

    if (keyType === "type") {
        return key;
    } else {
        console.log("key", key);
        return initialData[key];
    }
}

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