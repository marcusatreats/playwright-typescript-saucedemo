interface User {
    username: string;
    password: string;
}

interface Users {
    standardUser: User;
    lockedUser: User;
    problemUser: User;
}

const users: Users = {
    standardUser: {
        username: 'standard_user',
        password: 'secret_sauce'
    },
    lockedUser: {
        username: 'locked_out_user',
        password: 'secret_sauce'
    },
    problemUser: {
        username: 'problem_user',
        password: 'secret_sauce'
    }
};

export default users;
