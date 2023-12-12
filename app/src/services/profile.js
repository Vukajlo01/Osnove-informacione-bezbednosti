import axios from 'axios';

const profile = {

    async deleteUser(currentUser, token) {
        try {
            const response = await axios.post(
                global.APIEndpoint + "/api/user/delete",
                {
                    uid: currentUser.uid,
                },
                {
                    headers: {
                        Authorization: `${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            return response;

        } catch (error) {
            console.error('Error in deleteUser:', error);
            throw error;
        }
    },

    async updateUserPicture(currentUser, selectedImage, token) {
        try {
            const response = await axios.post(
                global.APIEndpoint + "/api/user/updatePicture",
                {
                    uid: currentUser.uid,
                    photoBase64: `${selectedImage}`,
                },
                {
                    headers: {
                        Authorization: `${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            return response;

        } catch (error) {
            console.error('Error in updateUserPicture:', error);
            throw error;
        }
    },

    async updateUser(currentUser, user, token) {
        try {
            const response = await axios.post(
                global.APIEndpoint + "/api/user/update",
                {
                    uid: currentUser.uid,
                    firstName: `${user.firstName}`,
                    lastName: `${user.lastName}`,
                    date: `${user.date}`,
                },
                {
                    headers: {
                        Authorization: `${token}`,
                        "Content-Type": "application/json",
                    },
                }
            );

            return response;

        } catch (error) {
            console.error('Error in updateUser:', error);
            throw error;
        }
    },



};

export default profile;