export const LoginStart = (userCredential) => ({
    type: "LOGIN_START"
});

export const LoginSuccess = (user) => ({
    type: "LOGIN_SUCCESS",
    payload: email,
});

export const LoginFailed = () => ({
    type: "LOGIN_FAILED"
});