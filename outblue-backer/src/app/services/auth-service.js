var jwt = require ('jsonwebtoken');

class AuthService {

    static key = 'a1Blu3-1c3ss0r1';

    static async sign(user) {
        return new Promise((resolve, reject) => {
            jwt.sign({user}, AuthService.key, (err, token) => {
                resolve(token);
            });
        });
    }

    static async verify(token) {
        jwt.verify({token}, AuthService.key, (err, auth) => {
            console.log(auth);
            if (err) {
                return undefined;
            }
            return auth;
        });
    }
}

module.exports = AuthService