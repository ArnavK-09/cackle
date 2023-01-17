export default (url, options = {}) => {
    // const { useAuthToken } = useAuth()


    return $fetch('/api/' + url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer $ {useAuthToken().value}`
        }
    })
}