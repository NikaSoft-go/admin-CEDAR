

export const getImageFullPath = (fileName) => {
    return `${import.meta.env.VITE_APP_API_URL}/invoices/media/${fileName}`
}

export const formatDate = (date) => {
    const inputDate = new Date(date);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };

    return inputDate.toLocaleDateString('en-GB', options);
}