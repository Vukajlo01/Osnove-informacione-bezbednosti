import axios from 'axios';

const productData = {
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
}

export default productData;