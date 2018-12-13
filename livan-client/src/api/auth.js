import axios from 'axios';

export const localLogin = ({email, password}) => 
    axios.post('/api/v1.0/user/auth/local', {
        email,
        password
    });

export const socialLogin = ({id, password}) =>
    axios.post('/api/v1.0/user/auth/social', {
        id,
        password
    });