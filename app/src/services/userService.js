import axios from 'axios';

const userData = {
    
    async getUserById(currentUser, token){
        try{  
          const response = await axios.post(
            global.APIEndpoint + "/api/user/getById",
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
            console.error('Error in getUserById:', error);
            throw error;
        }
      },

      async getUsers(currentUser, token){
        try{  
          const response = await axios.post(
            global.APIEndpoint + '/api/user/get',
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
            console.error('Error in getUser:', error);
            throw error;
        }
      },

      async deleteUserGuid(uidToDelete, token){
        try{  
          const response = await axios.post(
            global.APIEndpoint + '/api/user/delete/guid',
            {
              uid: uidToDelete,
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
            console.error('Error in deleteUserGuid:', error);
            throw error;
        }
      },

      async createNewAccount(currentUser, userProperties, userData, token){
        try{  
          const response = await axios.post(
            global.APIEndpoint + '/api/user/newAccount',
            {
              uid: currentUser.uid,
              userProperties: userProperties,
              userData: userData
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
            console.error('Error in createNewAccount:', error);
            throw error;
        }
      },
  
      async updateAdminUser(currentUser, editData, token){
        try{  
          const response = await axios.post(
            global.APIEndpoint + '/api/user/update/admin',
            {
              uid: currentUser.uid,
              data: editData
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
            console.error('Error in updateAdminUser:', error);
            throw error;
        }
      },

      async getUserRole(currentUser, token){
        try{  
          const response = await axios.post(
            global.APIEndpoint + '/api/role/get',
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
            console.error('Error in getRole:', error);
            throw error;
        }
      },
}

export default userData;