export const saveToken = (token) => localStorage.setItem('token', token.token)
export const getToken = () => localStorage.getItem('token')
export const capatalize = (string) => string.toString().charAt(0).toUpperCase() + string.toString().slice(1);

