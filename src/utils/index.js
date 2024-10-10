

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