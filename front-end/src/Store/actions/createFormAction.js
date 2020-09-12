export const updateForm = (newForm) => {
    return {
        type: 'UPDATE_FORM',
        form: newForm
    };
};

export const clearForm = () => {
    return {
        type: 'CLEAR_FORM',
    }
}