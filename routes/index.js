var express = require('express');
var router = express.Router();
const Product = require("../models/products");
const Email  = require("../models/emails");
const Customer  = require("../models/customers");
const Cart  = require("../models/carts");

/* GET home page. */
router.get('/',checkUser, function(req, res, next) {
  var allCarts = [];
  Product.find({})
  .then((resault)=>{
    var maxProduct = [];
    for(let x = 0 ; x < resault.length ; x++)
    {
      if(x == 8)
      {
        break;
      }
      maxProduct.push(resault[x]);
    }
    Cart.find({userId : req.session.email._id}).then((carts)=>{
      for(let z = 0 ; z < carts.length; z++)
      {
        allCarts.push(carts[z]);
      }
      res.render('index', { title: 'Electric Shop' ,products : maxProduct,cartsLength : allCarts.length == 0 ? 0 : allCarts.length});
    })
    .catch((err)=>{
      console.log(err.message);
    });
  })
  .catch((err)=>console.log(err.message));
});

router.get('/userPage',checkUser ,function(req, res, next) {
  var allCarts = [];
  Product.find({})
  .then((resault)=>{
    var maxProduct = [];
    for(let x = 0 ; x < resault.length ; x++)
    {
      if(x > 7 && x <= 15 )
      {
        maxProduct.push(resault[x]);;
      }
    }
    Cart.find({userId : req.session.email._id}).then((carts)=>{
      for(let z = 0 ; z < carts.length; z++)
      {
        allCarts.push(carts[z]);
      }
      res.render('userPage', { title: 'Electric Shop' ,products : maxProduct,cartsLength : allCarts.length == 0 ? 0 : allCarts.length});
    })
  })
  .catch((err)=>console.log(err.message));
});

router.get("/contact",checkUser,(req,res,next)=>{
  res.render("contact",{title : 'Electric Shop',layout : 'layouts'});
});

router.post("/addEmail",function(req,res,next){
var name = req.body.name;
var email = req.body.email;
var subject = req.body.subject;
var message = req.body.message;
const addEmail = new Email({
  email : email,
  subject :subject,
  message:message,
});
addEmail.save().then((resault)=>{
  res.redirect("/");
})
.catch((err)=>{
  console.log(err.message)
});
});

router.get("/signup",(req,res,next)=>{
res.render("signup",{title : 'Electric Shop',layout : 'layouts'});
});

router.post("/signup",(req,res,next)=>{
var name = req.body.name;
var email = req.body.email;
var address = req.body.address;
var phone = req.body.phone;
var password = req.body.password;
var rePassword = req.body.rePassword;
if(rePassword == password)
{
  const customer = new Customer({
    customerName : name,
    email  : email,
    pass : password,
    phone : phone,
    address : address,
  });
  customer.save()
  .then((resault)=>{
    res.redirect("/");
  })
  .catch((err)=>{
    console.log(err.message);
  });
}else{
  res.redirect("/signup");
}
});


router.get("/signin",(req,res,next)=>{
res.render("signin",{title : 'Electric Shop',layout : 'layouts'});
});
router.post("/signin",(req,res,next)=>{
  var email = req.body.email;
  var password = req.body.password;
  Customer.find({email : email,pass:password}).then((resault)=>{
    if(resault.length > 0)
    {
      Email.find({email:email})
      .then((email)=>{
        if(email.length > 0)
        {
          req.session.email = email[0];
          req.session.user = resault[0];
      res.redirect("/");
        }else{
          res.redirect("/signin");
        }
      })
      .catch((err)=>{
        console.log(err.message);
      });
    }else{
     res.redirect("/signin");
    }
  }).catch((err)=>{
    console.log(err.message);
  });
});

router.post("/addCart/:product/:price/:productId",checkUser,(req,res,next)=>{
const productId = req.params.productId;
Cart.find({productId : productId})
.then((allCarts)=>{
  if(allCarts.length > 0)
  {
    var quantity = 0;
    var price = 0;
    for(let x = 0 ; x < allCarts.length;x++)
    {
      quantity += allCarts[x]['quantity'];
      price +=parseInt(allCarts[x]['price']);
    }
    const product = req.params.product;
    const userId = req.session.email._id;
    const updateCart = {
      product : product,
      price:price+parseInt(req.params.price),
      quantity :quantity+1,
      userId : userId,
      productId:productId,
    };
   Cart.updateOne({_id:allCarts[0]._id},{$set:updateCart}).then((updated)=>{
    console.log(updated);
    res.redirect("/");
   })
   .catch((err)=>{
    console.log(err.message);
   });
  }else{
const product = req.params.product;
const price = req.params.price;
const quantity = 1;
const userId = req.session.email._id;
const addCart = new Cart({
  product : product,
  price:price,
  quantity :quantity,
  userId : userId,
  productId:productId,
});
addCart.save()
.then((resault)=>{
  res.redirect("/");
})
.catch((err)=>{
  console.log(err.message);
});
  }
})
.catch((err)=>{
  console.log(err.message);
});

});

function checkUser(req,res,next) {
if(req.session.email)
{
next();
}else{
res.redirect("/signin");
}
}

router.get("/carts",checkUser,(req,res,next)=>{
  Cart.find({userId:req.session.email._id}).populate("userId").populate("productId").then((resaluts)=>{
    res.render("carts",{title : 'Electric Shop',layout : 'layouts',resault : resaluts});
  }).catch((err)=>{
    console.log(err.message);
  });
});

router.get("/checkOut",checkUser,(req,res,next)=>{
const userId = req.session.email._id;
Cart.find({userId : userId})
.then((resaults)=>{
 if(resaults.length > 0)
  {
    for(let x = 0 ; x < resaults.length ; x++)
      {
        Cart.deleteOne({userId : resaults[x].userId}).then((cartsDeleted)=>{
          res.redirect("/");
        })
        .catch((err)=>{
          console.log(err.message);
        });
      }
  }else{
 res.redirect("/");
  }
})
.catch((err)=>{
  console.log(err.message);
});
});
module.exports = router;
