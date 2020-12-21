const Profile = require('../models/Profile');
const { getUserById } = require('./UserService');
exports.createUserProfile = async (profileData, userId) => {
    if (!profileData || !userId) throw new Error('Invalid arguments');
    const user = await getUserById(userId);
    if (!user) throw new Error('User does not exist');

    const checkProfileExists = await this.getUserProfile(userId);
    if (checkProfileExists) throw new Error('Profile already created');
    const profile = new Profile({
        user,
        ...profileData
    });
    await profile.save();
    return profile;
};
exports.getUserProfile = async (userId) => {
    if (!userId) throw new Error('Invalid arguments');
    const user = await getUserById(userId);
    if (!user) throw new Error('User does not exist');
    const profile = await Profile.findOne({ user });
    return profile.populate('user').execPopulate();
};
