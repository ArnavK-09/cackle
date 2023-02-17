// imports
import jwt_decode from "jwt-decode";

// types
import type { CackleUser } from "~~/types";
import type { JwtPayload } from "jwt-decode";

// custom temp type
type CackleUserWithToken = {
    access_token: string;
    user: CackleUser;
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
    function setUser(user: CackleUser) {
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
            await useApi<CackleUserWithToken>("auth/login", {
                method: "POST",
                body: { username, password },
            })
                .then((res) => {
                    // set user token
                    setUserToken(res.access_token);
                    // set user
                    setUser(res.user);

                    // resolve
                    resolve(res);
                })
                .catch((err) => reject(err));
        });
    };

    // register user
    const registerUser = async (
        name: string,
        username: string,
        email: string,
        password: string
    ) => {
        // promise
        return new Promise(async (resolve, reject) => {
            // sending req
            await useApi<CackleUser>("auth/register", {
                method: "POST",
                body: { name, username, email, password },
            })
                .then((res) => {
                    console.log(res);
                    resolve(true);
                })
                .catch((err) => reject(err));
        });
    };

    // get user from server
    const getUserData = async () => {
        // promise
        return new Promise(async (resolve, reject) => {
            // sending req
            await useApi<CackleUser>("auth/userinfo")
                .then((user) => {
                    setUser(user);
                    resolve(user);
                })
                .catch((err) => reject(err));
        });
    };

    // refresh token
    const refreshToken = async () => {
        // promise
        return new Promise(async (resolve, reject) => {
            // sending req
            await useApi<CackleUserWithToken>("auth/refreshtoken")
                .then((res) => {
                    setUserToken(res.access_token);
                    resolve(res);
                })
                .catch((error) => reject(error));
        });
    };

    // refresh access token
    const refreshAcessToken = () => {
        // get current token
        const currentToken = getAuthToken.value;

        // validate
        if (!currentToken || currentToken == null) {
            // pass
            return;
        }
        // decode token
        const decodedToken = jwt_decode<JwtPayload>(currentToken as string);

        // refresh
        setTimeout(async () => {
            // refreshing
            await refreshToken();
            refreshAcessToken();
        }, decodedToken.exp - 5999);
    };

    // log out
    const logOutUser = () => {
        return new Promise(async (resolve, reject) => {
            // sending req
            await useApi<string>("auth/logout", {
                method: "POST",
            })
                .then((res) => {
                    // set null to values
                    setUserToken(null);
                    setUser(null);

                    // resolve
                    resolve(res);
                })
                .catch((err) => {
                    // set null to values
                    setUserToken(null);
                    setUser(null);

                    // if error
                    reject(err);
                });
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
                refreshAcessToken();
                // done
                resolve(true);
            } catch (e) {
                // err
                reject(e);
            } finally {
                // off loading
                setLoading(false);
                // resolve
                resolve(true);
            }
        });
    }

    // returning
    return {
        getAuthToken,
        getAuthUser,
        isAuthLoading,
        loginUser,
        registerUser,
        getUserData,
        refreshToken,
        logOutUser,
        refreshAcessToken,
        implementAuthentication,
    };
}
