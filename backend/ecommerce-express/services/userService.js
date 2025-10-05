const User = require("../models/User");

exports.getUserByFirebaseId = async (firebaseId) => {
    const user = await User.findOne({
        firebaseId,
    });
    if (!user) {
        return (await createUser({ firebaseId }));
            
    }
    return user;
}

const createUser = exports.createUser = async ({firebaseId}) => {
    return await User.insertOne({
        firebaseId,
    })
        .then((user) => {
            return user;
        })
        .catch((error) => {
            console.error('Error creating new user:', error);
            throw error;
        })
    ;
}