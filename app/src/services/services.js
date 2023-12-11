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
          console.error('Error in getAudit:', error);
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
          console.error('Error in getAudit:', error);
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
          console.error('Error in getAudit:', error);
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
          console.error('Error in getAudit:', error);
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
          console.error('Error in getAudit:', error);
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
          console.error('Error in getAudit:', error);
          throw error;
      }
    },
    
};

export default axiosData;
