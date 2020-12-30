// const User = require('../models/User');
// const generateJwt = require('../utils/generateJwt');
// const { verifyPassword } = require('../utils/generatePasswordHash');
const firebase = require('../lib/firebase');

exports.signUpUser = async (data) => {
    // const user = await new User({
    //     ...data,
    //     password: generatePasswordHash(data.password)
    // }).save();
    // const token = generateJwt({ id: user._id });
    // return {
    //     user,
    //     token
    // };
    const { email, password } = data;
    firebase
        .auth()
        .createUserWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
            return {
                user,
                token: '123123131'
            };
            // Signed in
            // ...
        })
        .catch((error) => {
            throw new Error(error);
            // var errorCode = error.code;
            // var errorMessage = error.message;
            // ..
        });
};
exports.loginUser = async (data) => {
    // const user = await User.findOne({ email: data.email });
    // if (!user) throw new Error('User not found');
    // if (!verifyPassword(data.password, user.password))
    //     throw new Error('Invalid password');
    // const token = generateJwt({ id: user._id });
    // return {
    //     user,
    //     token
    // };
    const { email, password } = data;
    firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then((user) => {
            console.log(user);
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
};
