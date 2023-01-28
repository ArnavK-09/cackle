export default (url: String, options: any = {}) => {
    // const { useAuthToken } = useAuth()


    return $fetch('/api/' + url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer $ {useAuthToken().value}`
        }
    })
}