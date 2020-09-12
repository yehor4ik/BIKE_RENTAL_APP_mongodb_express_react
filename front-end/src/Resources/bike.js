import { get, create, remove } from '../Services/networkProvider';

export const getBikes = async () => {
        const res = await get('bikes');
        return res;
};

export const createItem = async (item = {}) => {
    const res = create('bikes', item);
    return res;
};

export const removeItem = async (id) => {
    const res = await remove('bikes', id);
    return res
}; 
