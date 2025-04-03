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


export function safeJsonParse(
    input,
    fallback
){
    if (typeof input === 'undefined') {
        return fallback;
    }

    if (typeof input !== 'string') {
        return fallback;
    }

    try {
        return JSON.parse(input);
    } catch {
        return fallback;
    }
}


export const getReportFormatInfo = (report) => {
    return {
        ...report,
        consumables: safeJsonParse(report.consumables, {}),
        dimension_one: safeJsonParse(report.dimension_one, {}),
        dimension_two: safeJsonParse(report.dimension_two, {}),
        issuer: safeJsonParse(report.issuer, {}),
        quality_controller: safeJsonParse(report.quality_controller, {}),
        keys: safeJsonParse(report.keys, {}),
        report_type_data: safeJsonParse(report.report_type_data, {}),
        body: safeJsonParse(report.body, {}),
        blade: safeJsonParse(report.blade, {}),
        asset_details: safeJsonParse(report.asset_details, {}),
        equipments: safeJsonParse(report.equipments, {}),
        ut_results: safeJsonParse(report.ut_results, {})?.rows || [],
        inspector_comments: safeJsonParse(report.inspector_comments, []),
        equipment_consumables: safeJsonParse(report.equipment_consumables, []),
        other_welding_props: safeJsonParse(report.other_welding_props, []),
        welding_table_data: safeJsonParse(report.welding_table_data, []),
        lifting_data: typeof report?.lifting_data === "string"
            ? safeJsonParse(report.lifting_data)
            : report.lifting_data,
        personnel_data: typeof report.personnel_data === "string"
                ? safeJsonParse(report.personnel_data)
                : report.personnel_data
    }
}

export const getChecklistInfo = (checklist) => {
    return {
        ...checklist,
        checklists_info: typeof checklist?.checklists_info === "string"
        ? safeJsonParse(checklist?.checklists_info): checklist?.checklists_info
    }
}

