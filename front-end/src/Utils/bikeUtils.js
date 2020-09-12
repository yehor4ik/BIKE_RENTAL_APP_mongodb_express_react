export const removeElementById = (id, items) => {
    return items.filter((el) => el.id !== id)
};

export const getTotal = (arr) => {
    const sum = arr.reduce((acc, item) => {
        return acc + +item.price;
    }, 0)
    return sum.toFixed(2)
}