const admin = require('firebase-admin');
const { getUserByFirebaseId } = require('../services/userService');

const createUser = async (user) => {
    admin.auth().createUser({
        ...user,
    })
        .then((userRecord) => {
            console.log('Successfully created new user:', userRecord);
        })
        .catch((error) => {
            console.error('Error creating new user:', error);
        });
}
exports.getUserByFirebaseId = async (req, res) => {
    res.status(200).json(await getUserByFirebaseId(req.query.firebaseId))
}

exports.createUser = async (req, res) => {
    const { email, password, displayName } = req.body;
    try {
        const userRecord = await admin.auth().createUser({
            email,
            password,
            displayName,
        });
        res.status(201).json({
            uid: userRecord.uid,
            email: userRecord.email,
            displayName: userRecord.displayName,
        });
    } catch (error) {
        console.error('Error creating new user:', error);
        res.status(500).json({ error: 'Failed to create new user' });
    }
}

exports.signIn = async (req, res) => {
    const { email, password } = req.body;

    admin.auth().getUserByEmail(email)
        .then((userRecord) => {
            if (!userRecord) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({
                uid: userRecord.uid,
                email: userRecord.email,
                displayName: userRecord.displayName,
            });
        })
        .catch((error) => {
            console.error('Error signing in:', error);
            if (error.errorInfo.code === 'auth/user-not-found') {
                createUser({ email, password })
                    .then(async () => {
                        const user = await admin.auth().getUserByEmail(email);
                        res.status(200).json({
                            uid: user.uid,
                            email: user.email,
                            displayName: user.displayName,
                        });
                    })
                    .catch((error) => {
                        console.error('Error creating new user:', error);
                        res.status(500).json({ error: 'Failed to create new user' });
                    });
            }
        })
        ;
}


exports.getUserByEmail = async (req, res) => {
    const email = req.query.email;
    admin.auth().getUserByEmail(email)
        .then(userRecord => {
            if (!userRecord) {
                return res.status(404).json({ error: 'User not found' });
            }
            res.json({
                ...userRecord,
            });
        })
        .catch(error => {
            // console.error('Error fetching user data:', error);
            console.log(error.errorInfo.code);
            if (error.errorInfo.code === 'auth/user-not-found') {

            }
        })
        ;
};

exports.getUserProfile = (req, res) => {
    const user = req.user;
    console.log('User profile accessed:', user.uid);
    res.json({
        ...user,
    });
};

