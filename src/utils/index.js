

export const getImageFullPath = (fileName) => {
    return `${import.meta.env.VITE_APP_API_URL}/invoices/media/${fileName}`
}