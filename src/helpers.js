export const saveToken = (token) => {
    console.log('saving token')
    localStorage.setItem('token', token.token)
    console.log('token saved')
}

export const getToken = () => {
    return localStorage.getItem('token')
}


