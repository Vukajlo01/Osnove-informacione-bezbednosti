import axios from 'axios';

const axiosData = {
    
    async getAudit(currentUser, token) {
      try {
        const response = await axios.post(
          global.APIEndpoint + '/api/audit/get',
          {
            uid: currentUser.uid,
          },
          {
            headers: {
              Authorization: `${token}`,
              'Content-Type': 'application/json',
            },
          }
        );

        return response;

      } catch (error) {
          console.error('Error in getAudit:', error);
          throw error;
      }
    },

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

    async getOrders(currentUser, token){
      try{  
        const response = await axios.post(
          global.APIEndpoint + "/api/order/get",
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
          console.error('Error in getOrders:', error);
          throw error;
      }
    },

    async getProducts(token){
      try{  
        const response = await axios.post(
          global.APIEndpoint + "/api/product/get",         
          {
            headers: {
              Authorization: `${token}`,
              "Content-Type": "application/json",
            },
          }
        );

        return response;
      
      } catch (error) {
          console.error('Error in getProducts:', error);
          throw error;
      }
    },

    async getGenres(currentUser, token){
      try{  
        const response = await axios.post(
          global.APIEndpoint + '/api/genre/get',
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
          console.error('Error in getGenres:', error);
          throw error;
      }
    },

    async deleteProduct(uidToDelete, sellerUidToDelete, currentUser, token){
      try{  
        const response = await axios.post(
          global.APIEndpoint + '/api/product/delete',
          {
            uid: uidToDelete,
            sellerUid: sellerUidToDelete,
            currentUserUid: currentUser.uid
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
          console.error('Error in deleteProduct:', error);
          throw error;
      }
    },

    async updateProduct(currentUser, editData, token){
      try{  
        const response = await axios.post(
          global.APIEndpoint + '/api/product/update/',
          {
            currentUserUid: currentUser.uid,
            payload: editData,
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
          console.error('Error in updateProduct:', error);
          throw error;
      }
    },

    async getUser(currentUser, token){
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

    async getRole(currentUser, token){
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
          console.error('Error in getUser:', error);
          throw error;
      }
    },

    
};

export default axiosData;
