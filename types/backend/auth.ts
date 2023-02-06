// login user type
type LoginUser = {
    username: string;
    password: string;
};

// login user with id type
type LoginUserWithID = {
    id: string;
    username: string;
    password: string;
};

// user
type CackleUser = {
    id: string;
    email: string;
    name: string;
    username: string;
    password: string;
    pfp: string;
    createdAt: Date;
};

// exporting
export type { LoginUser, LoginUserWithID, CackleUser };
