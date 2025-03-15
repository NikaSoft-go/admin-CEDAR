import {sameTypesReport} from "./data.js";


export const getImageFullPath = (fileName) => {
    return `${import.meta.env.VITE_APP_API_URL}/invoices/media/${fileName}`
}

export const getInvoiceImageFullPath = (fileName) => {
    return `${import.meta.env.VITE_APP_API_URL}/media/${fileName}`
}

export const generateImageUrl = (dbUrl) => {
    return `${import.meta.env.VITE_APP_API_URL}${dbUrl}`
}

export const formatDate = (date) => {
    const inputDate = new Date(date);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };

    return inputDate.toLocaleDateString('en-GB', options);
}

export const groupByIndices = (arrays) => {
    const result = [];
    const firstItem = arrays.length ? arrays[0] : [];
    firstItem.forEach((array, arrayIndex) => {
        const currentArr = [];
        arrays.forEach((element) => {
            currentArr.push(element[arrayIndex]);
        });
        result.push(currentArr);
    });

    return result
};

export const titleCase = (str) => {
    return str
        .toLowerCase()
        .split(' ')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
}

export const cleanHeaders = (data) => {
    const firstItem = data.length ? data[0] : {};
    return Object.keys(firstItem).map((header) => {
        return header
            .split("_")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');
    })
}


export const getReportNormal = (reportType) => {
    let currentType = "";
    for (const reportTypeKey in sameTypesReport) {
        const data = sameTypesReport[reportTypeKey];
        if (data?.includes(reportType)) {
            currentType = reportTypeKey;
            break;
        }
    }

    return currentType;
}

export const isLifting = (report_type) => [
    "Forklift Visual report"
].includes(report_type)

export const toTitleCase = (word) => {
    const excludes = {
        "of": "of",
        "and": "and",
        "swl": "SWL"
    }
    return word
        .toLowerCase()
        .split(" ")
        .map((word) => !Object.keys(excludes).includes(word)
            ? word.charAt(0).toUpperCase() + word.slice(1)
            : excludes[word]
        )
        .join(" ");
}


export const getReportFormatInfo = (report) => {
    return {
        ...report,
        consumables: JSON.parse(report.consumables || "{}"),
        dimension_one: JSON.parse(report.dimension_one || "{}"),
        dimension_two: JSON.parse(report.dimension_two || "{}"),
        issuer: JSON.parse(report.issuer || "{}"),
        quality_controller: JSON.parse(report.quality_controller || "{}"),
        keys: JSON.parse(report.keys || "{}"),
        report_type_data: JSON.parse(report.report_type_data || "{}"),
        body: JSON.parse(report.body || "{}"),
        blade: JSON.parse(report.blade || "{}"),
        asset_details: JSON.parse(report.asset_details || "{}"),
        equipments: JSON.parse(report.equipments || "{}"),
        ut_results: JSON.parse(report.ut_results || "{}")?.rows || [],
        inspector_comments: JSON.parse(report.inspector_comments || "[]"),
        equipment_consumables: JSON.parse(report.equipment_consumables || "[]"),
        other_welding_props: JSON.parse(report.other_welding_props || "[]"),
        welding_table_data: JSON.parse(report.welding_table_data || "[]"),
        lifting_data: typeof report?.lifting_data === "string"
            ? JSON.parse(report.lifting_data)
            : report.lifting_data,
        personnel_data: typeof report.personnel_data === "string"
                ? JSON.parse(report.personnel_data)
                : report.personnel_data
    }
}

export const getChecklistInfo = (checklist) => {
    return {
        ...checklist,
        checklists_info: typeof checklist?.checklists_info === "string"
        ? JSON.parse(checklist?.checklists_info): checklist?.checklists_info
    }
}