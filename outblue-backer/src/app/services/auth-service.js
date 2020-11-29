var jwt = require ('jsonwebtoken');

class AuthService {

    static key = 'a1Blu3-1c3ss0r1';

    static async sign(user) {
        jwt.sign({user}, AuthService.key, (err, token) => {
            console.log(token);
            return token;
        });
    }

    static async verify(token) {
        jwt.verify({token}, AuthService.key, (err, auth) => {
            if (err) {
                return undefined;
            }
            return auth;
        });
    }
}

module.exports = AuthService