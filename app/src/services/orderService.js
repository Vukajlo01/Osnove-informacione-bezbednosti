import axios from 'axios';

const orderData = {

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

};


export default orderData;