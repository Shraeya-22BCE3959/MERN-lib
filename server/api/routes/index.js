const express = require('express');
const axios = require('axios');
const router = express.Router();


const userController = require("../controller/userAPI");
const bookController = require("../controller/bookAPI");


// user api
router.get("/allUser", userController.allUser);
router.post("/register", userController.registerUser);
router.post("/updateUser", userController.updateUser);
router.post("/login", userController.loginUser);
router.post("/logout", userController.logout);
router.get("/logedinuser", userController.userDetails);
router.get("/userDetail/:id", userController.userDetail);

router.post("/addBook", bookController.addBook);
router.get("/allBook", bookController.getAllBooks);
router.get("/search/:id", bookController.searchBooks);
router.post("/addToCart", bookController.addToCart);
router.post("/checkout", bookController.checkout);
router.post("/returnBooks", bookController.returnBooks);
router.post("/filter/", bookController.returnBooks);
router.post("/removeFromCart", bookController.removeFromCart);
router.get("/filter/:genre/:year/:title", bookController.filter);
router.get("/booksInCart/:username", bookController.booksInCart);
router.get("/borrowedBooks", bookController.borrowedBooks);

// Proxy avatar route
router.get('/avatar/:name', async (req, res) => {
  try {
    const response = await axios.get(
      `https://api.multiavatar.com/${req.params.name}.png?apikey=dIwKHchoCn6x9k`,
      { responseType: 'arraybuffer' }
    );
    res.set('Content-Type', 'image/png');
    res.send(response.data);
  } catch (error) {
    console.error(error); // <--- This will help you debug!
    res.status(500).send('Error fetching avatar');
  }
});


module.exports = router;