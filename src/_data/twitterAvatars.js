const getTwitterAvatarUrl = require("twitter-avatar-url");

module.exports = async () => {
    const avatars = await getTwitterAvatarUrl(["breakzplatform", "itsamejoselito"]); 

    console.log(avatars);
    
    return avatars;
};