// api composable 
export default async <T>(url: String, options: any = {}) => {
    // get token 
    const { getAuthToken } = useAuth();

    return $fetch<T>('/api/' + url, {
        ...options,
        headers: {
            ...options.headers,
            Authorization: `Bearer ${getAuthToken.value}`
        }
    });
};