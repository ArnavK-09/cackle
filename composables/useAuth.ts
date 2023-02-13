// imports
import jwt_decode from "jwt-decode";

// types
import type { LoginUserWithID } from "~~/types";
import type { JwtPayload } from "jwt-decode";

// custom temp type
type LoginUserWithToken = {
    access_token: string;
    user: LoginUserWithID;
};

// Auth system
export function useAuth() {
    /* ssr state */
    const getAuthToken = useState("auth_token");
    const getAuthUser = useState("auth_user");
    const isAuthLoading = useState("is_auth_loading");

    /* methods */
    // set user token
    function setUserToken(token: string) {
        getAuthToken.value = token;
    }

    // set user
    function setUser(user: LoginUserWithID) {
        getAuthUser.value = user;
    }

    // set loading 
    function setLoading(loading: boolean) {
        isAuthLoading.value = loading;
    }

    /* api functions */

    // login user
    const loginUser = async (username: string, password: string) => {
        // promise
        return new Promise(async (resolve, reject) => {
            // sending req
            const { data, error } = await useApi<LoginUserWithToken>(
                "auth/login",
                {
                    method: "POST",
                    body: { username, password },
                }
            );

            // validating
            if (error.value) {
                // if error
                reject(error);
            } else {
                // set user token
                setUserToken(data.value.access_token);
                // set user
                setUser(data.value.user);

                // resolve
                resolve(data.value);
            }
        });
    };

    // get user from server
    const getUserData = async () => {
        // promise
        return new Promise(async (resolve, reject) => {
            // sending req
            const { data, error } = await useApi<LoginUserWithToken>(
                "auth/userinfo"
            );

            // validating
            if (error.value) {
                // if error
                reject(error);
            } else {
                // set user
                setUser(data.value.user);

                // resolve
                resolve(data.value);
            }
        });
    };

    // refresh token
    const refreshToken = () => {
        // promise
        return new Promise(async (resolve, reject) => {
            // sending req
            const { data, error } = await useApi<LoginUserWithToken>(
                "auth/newtoken"
            );

            // validating
            if (error.value) {
                // if error
                reject(error);
            } else {
                // set user token
                setUserToken(data.value.access_token);
                // resolve
                resolve(data.value);
            }
        });
    };

    // refresh access token
    const refreshAcessToken = () => {
        // promise 
        return new Promise(async (resolve, reject) => {
            // get current token
            const currentToken = getAuthToken.value;

            // validate
            if (!currentToken || currentToken == null) {
                // pass
                return;
            }
            // decode token
            const decodedToken = jwt_decode<JwtPayload>(currentToken as string);
            console.log(decodedToken.exp - 5999)
            // refresh
            setTimeout(async () => {
                // refreshing
                await refreshToken();
                refreshAcessToken();
            }, decodedToken.exp - 5999);
        });
    };

    // log out
    const logOutUser = () => {
        return new Promise(async (resolve, reject) => {
            // sending req
            const { data, error } = await useApi<string>("auth/logout", {
                method: "POST",
            });

            // validating
            if (error.value) {
                // set null to values
                setUserToken(null);
                setUser(null);

                // if error
                reject(error);
            } else {
                // set null to values
                setUserToken(null);
                setUser(null);

                // resolve
                resolve(data.value);
            }
        });
    };

    /* START AUTH */
    async function implementAuthentication() {
        // promise 
        return new Promise(async (resolve, reject) => {
            // set loading 
            setLoading(true);

            // implementing auth 
            try {
                // get token & user 
                await refreshToken();
                await getUserData();
                await refreshAcessToken();
            } catch(e) {
                // err 
                reject(e)
            } finally {
                // off loading 
                setLoading(false)

                // resolve 
                resolve(true)
            }
        })
    }

    // returning
    return {
        getAuthToken,
        getAuthUser,
        isAuthLoading,
        loginUser,
        getUserData,
        refreshToken,
        logOutUser,
        refreshAcessToken,
        implementAuthentication
    };
}
