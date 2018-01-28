export const getForm = state => state.form;
export const getStatus = state => getForm(state).get('status');
export const getError = state => getForm(state).get('error');
export const getFormResponse = state => getForm(state).get('data');