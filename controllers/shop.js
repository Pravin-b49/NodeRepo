const Product = require('../models/product');
const flash = require('connect-flash');

//create operation
exports.createProduct = (req, res, next) => {
  const product = {
    brand: req.body.brand,
    model_no: req.body.model_no,
    processor: req.body.processor,
    ram: req.body.ram,
    front_camera: req.body.front_camera,
    rear_camera: req.body.rear_camera,
    price: req.body.price,
    description: req.body.description
  }
  Product.create(product)
          .then(result=>{
            // console.log('result', result)
            // console.log('Created Product');
            req.flash('message', 'Product Saved Successfully');
            res.redirect('/');
          })
          .catch(err=> {
            console.log('error', err)
            req.flash('message', 'Error while storing product');
          //  return res.send({
          //     message: "Error while storing product."
          //   })
          })
};
//Read/Retrieve Data Operation
exports.getProducts = (req, res, next) => {
  Product.findAll()
  .then(result=>{
   res.render('shop/product_list',{
    pageTitle: 'Product List',
    path: '/',
    data: result
   })

  })
  .catch(err =>{
    console.error(err);
})
}
//Update Operation
exports.getEditProduct = async (req, res, next) => {
  console.log('req.query: ', req.query)
  const id = req.query.product_id
  const editMode = req.query.edit
  const product = await Product.findOne({ where: { id: id } })
  if(product === null) {
    res.send({message: "Product is not found"})
  } else {
    res.render('shop/index', {
      pageTitle: 'Edit Product',
      editing: editMode,
      product: product,
      message:'',
      path:'/'
    });
  }
};

exports.postEditProduct = (req, res, next) => {
  const product = {
    brand: req.body.brand,
    model_no: req.body.model_no,
    processor: req.body.processor,
    ram: req.body.ram,
    front_camera: req.body.front_camera,
    rear_camera: req.body.rear_camera,
    price: req.body.price,
    description: req.body.description
  }
  Product.update(product, { where: { id: req.body.productId }})
    .then(result => {
      // console.log('result', result)
      // console.log('UPDATED PRODUCT!');
      res.redirect('/shop/product_list');
    })
    .catch(err => console.log(err));
};

//Delete Operation
exports.getDeleteProduct = (req, res, next)=>{
  console.log(req.query);
  Product.destroy({ where: { id: req.query.product_id }})
  .then(result => {
    // console.log('result', result)
    // console.log('DELETED PRODUCT!');
    res.redirect('/shop/product_list');
  })
  .catch(err => console.log(err));
}



