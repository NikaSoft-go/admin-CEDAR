

export const getImageFullPath = (fileName) => {
    return `${import.meta.env.VITE_APP_API_URL}/invoices/media/${fileName}`
}

export const formatDate = (date) => {
    const inputDate = new Date(date);
    const options = { day: '2-digit', month: 'short', year: 'numeric' };

    return inputDate.toLocaleDateString('en-GB', options);
}

export const groupByIndices = (arrays) => {
    const result = [];
    console.log("arrays", arrays);
    arrays.forEach((array, arrayIndex) => {
        console.log("index", array, arrayIndex);
        const currentArr = [];
        array.forEach((element, elementIndex) => {
           if (elementIndex === arrayIndex) {
               currentArr.push(element);
           }
        });
        result.push(currentArr);
    });

    console.log("result: ", result);

    return result
};