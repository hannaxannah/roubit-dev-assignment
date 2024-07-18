export const SIGN_UP_QUERY = `
    mutation SignUp($createUserInput: CreateUserInput!) {
        signUp(createUserInput: $createUserInput) {
        status
        data {
            id
            email
            fullName
            username
        }
        message
        }
    }
    `;

export const SIGN_IN_QUERY = `
    mutation SignIn($loginInput: LoginInput!) {
        signIn(loginInput: $loginInput) {
        status
        data {
            accessToken
        }
        message
        }
    }
    `;
