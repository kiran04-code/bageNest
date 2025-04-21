const express = require("express")
const routes = express.Router()
const productmodel = require("../model/product-model")
const User = require("../model/user-model")
routes.get("/shop",async(req,res)=>{
    const pro = await productmodel.find({})
    res.render("shop",{products:pro})
})
routes.get("/cart", async (req, res) => {
    try {
        // Fetch the user by ID and populate the cart field
        const user = await User.findById(req.user._id).populate("cart");

        // Pass the user data to the view
        res.render("cart", { user: user });
    } catch (error) {
        console.error("Error fetching cart:", error);
        // Handle error or redirect to an appropriate page
        res.redirect("/shop");
    }
});

routes.get("/card/:id", async (req, res) => {
    try {
      // Fetch the user and product data
      const user = await User.findById(req.user._id);
      const products = await productmodel.find({}); // Ensure this is awaited
  
      // Add product to the user's cart if not already added
      if (!user.cart.includes(req.params.id)) {
        user.cart.push(req.params.id);
        await user.save();
      }
      res.render("shop", { products: products, error: "Item added to cart" });
  
    } catch (error) {
      console.error("Error adding to cart: ", error);
      req.flash("error", "Something went wrong.");
      res.redirect("/shop"); // Redirect in case of error
    }
  });
  
module.exports = routes