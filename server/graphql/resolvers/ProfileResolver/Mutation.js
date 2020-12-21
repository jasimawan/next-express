const { createUserProfile } = require('../../../services/ProfileService');

exports.createProfile = async (parent, args, ctx) => {
    if (!ctx.id)
        throw new Error(
            'You are not authorized to create a profile. Please login'
        );
    const profile = await createUserProfile(args.input, ctx.id);
    return profile;
};
