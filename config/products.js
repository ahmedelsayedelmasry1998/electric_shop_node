const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/electric_shop").then((resault)=>{
    console.log("Connecting To Database ...");
  }).catch((err)=> console.log(err.message()));

  const Product = require("../models/products");
  let products = [
    new Product({
        productName : "MOBILE",
        title : "I PHONE 12",
        price : 20000,
        descraption : "It is apple usa company with water resistance ...",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "KEYBOARD",
        title : "LOKIA",
        price : 15000,
        descraption : "It is a cheap backlit gaming keyboard with 120keys...",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "MOUSA",
        title : "L 12 TRI",
        price : 22000,
        descraption : "   Mouse of tri-lateral button, having 3500dpi with anti-slip  technology.",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "LAPTOP",
        title : "HB INTEL 11",
        price : 25000,
        descraption : "   Mouse of tri-lateral button, having 3500dpi with anti-slip  technology.",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "LAPTOP",
        title : "HR 77GT INIEL I5",
        price : 30000,
        descraption : " It has 4gb ram with 256gb ssd and having 3gb HUD ...",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "KEYBOARD",
        title : "GEFORE KEYBOARD",
        price : 10000,
        descraption : "Gaming keyboard and has backlit with water resistence features along and suspension...",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "MOBILE",
        title : "I PHONE 12",
        price : 20000,
        descraption : "It is apple usa company with water resistance ...",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "KEYBOARD",
        title : "LOKIA",
        price : 15000,
        descraption : "It is a cheap backlit gaming keyboard with 120keys...",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "MOUSA",
        title : "L 12 TRI",
        price : 22000,
        descraption : "   Mouse of tri-lateral button, having 3500dpi with anti-slip  technology.",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "LAPTOP",
        title : "HB INTEL 11",
        price : 25000,
        descraption : "   Mouse of tri-lateral button, having 3500dpi with anti-slip  technology.",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "LAPTOP",
        title : "HR 77GT INIEL I5",
        price : 30000,
        descraption : " It has 4gb ram with 256gb ssd and having 3gb HUD ...",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "KEYBOARD",
        title : "GEFORE KEYBOARD",
        price : 10000,
        descraption : "Gaming keyboard and has backlit with water resistence features along and suspension...",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "MOBILE",
        title : "I PHONE 12",
        price : 20000,
        descraption : "It is apple usa company with water resistance ...",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "KEYBOARD",
        title : "LOKIA",
        price : 15000,
        descraption : "It is a cheap backlit gaming keyboard with 120keys...",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "MOUSA",
        title : "L 12 TRI",
        price : 22000,
        descraption : "   Mouse of tri-lateral button, having 3500dpi with anti-slip  technology.",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
    new Product({
        productName : "LAPTOP",
        title : "HB INTEL 11",
        price : 25000,
        descraption : "   Mouse of tri-lateral button, having 3500dpi with anti-slip  technology.",
        image : "./productImages/product.jpg",
        author : "bhabishya",
    }),
  ];

  let counter = 0;
  for(let x = 0 ; x < products.length ; x++)
  {
    products[x].save().then((resaults)=>{
        console.log("Added succefually");
        console.log(resaults);
        counter++;
    if(products.length == counter)
    {
        mongoose.disconnect();
    }
    }).catch((err)=>{
        console.log(err);
    });
    
  }