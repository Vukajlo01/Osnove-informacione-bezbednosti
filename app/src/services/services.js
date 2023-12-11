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

    // Other placeholder methods...
};

export default axiosData;
