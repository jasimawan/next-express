const { getUserProfile } = require('../../../services/ProfileService');

exports.profile = async (parent, args) => {
    const { id } = args;
    if (!id)
        throw new Error('You are not authorized to get your profile. Please login and create one');
    const profile = await getUserProfile(id);
    return profile;
};
