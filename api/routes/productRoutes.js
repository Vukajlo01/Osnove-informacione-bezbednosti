const { checkRole, getUserRole } = require('../middleware/role');
const { verifyToken } = require('../middleware/verify');
const express = require('express');
const router = express.Router();
const products = require('../controllers/productController');

// Product route to get all products
router.get('/get', async (req, res) => {

  // Call controller method for products data fetch
  let data = await products.getProducts();
  return res.status(200).json(data);
});

// Product route to get all products
router.get('/getProductsPerSellerUid', async (req, res) => {
  const { uid } = req.body.form; // seller uid from body of request

  // Call controller method for products data fetch
  let data = await products.getProducts(uid);
  return res.status(200).json(data);
});

// Product route to create a new product
router.post('/create', verifyToken, async (req, res) => {
  const { author, dateValidity, genres, name, photoBase64, price, productionYear, quantity, sellerUid, used } = req.body.form;
  const reqData = { author: author, dateValidity: dateValidity, genres: genres, name: name, photoBase64: photoBase64, price: price, productionYear: productionYear, quantity: quantity, sellerUid: sellerUid, used: used };
  
  // RBAC
  let role = await getUserRole(sellerUid);

  if (role == null) {
    return res.status(403).json({ code: 403, payload: "You don't have permission to view this data" });
  }

  let reqs = await checkRole(role, "products", "write");

  if (reqs === false) {
    return res.status(403).json({ code: 403, payload: "You don't have permission to view this data" });
  }
  // END OF RBAC

  // Call controller method to create a product
  let data = await products.createProduct(reqData);
  return res.status(data.code).json({ code: data.code, payload: data.payload });
});

module.exports = router;