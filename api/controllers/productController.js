const admin = require('../firebaseConfig');

const getProducts = async (uid) => {
    try {
      const productRef = admin.firestore().collection('products');
      const productSnapshot = await productRef.get();
      const productData = [];
  
      productSnapshot.forEach((doc) => {
        productData.push(doc.data());
      });      
  
      await admin.firestore().collection("audits").add({
        messageType: "INFO",
        message: "Administrator (uid: " + uid + ") has been accessed to users collection",
        date: admin.firestore.FieldValue.serverTimestamp(),
      });
  
      return { code: 200, payload: productData };
    } catch (error) {
      await admin.firestore().collection("audits").add({
        messageType: "ERROR",
        message: error.message,
        date: admin.firestore.FieldValue.serverTimestamp(),
      });
      return { code: 500, payload: "Internal Server Error" };
    }
  };

  module.exports = { getProducts };