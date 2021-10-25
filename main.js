// object product with properties

const product = {
    pname: "IPhone",
    brand: "Apple",
    price: "$1099"
 }


 // object constuctor for product for multiple uses

 function.Product(pname, brand, price) {
this.pname = pname;
this.brand = brand;
this.price = price;
 }

 // creating object using constructor
 const product1 = new Product('Galaxy A1', 'Samsung', '$999');

 console.log(product1);

 // Class

 class Product{
     constructor(pname){
         this.pname =pname
     }
 }

 class newProduct extends Product{
     constructor(pname){
         super(pname);
     }
 }

 const product2 = new newProduct("Nokia N");

 // Encapsulation

 const Product1 = function(pn, b, pr) {
     let pname = pn;
     let brand = b;
     let price = pr;

     return{
         summary : function(){
             console.log(pname)
         }
     }
 }

 const product3 = new Product1('iphone','apple','$999');


 // Abstraction

 const Product2 = function(getName, getBrand, getPrice) {
    // private variables 
    let pname = getName;
     let brand = getBrand;
     let price = getPrice;

     // public method
     this.setName = function(){
         return pname;
     }

     // private method
     const summary = function() {
         return(pname)
     }

     // public method that has access to private method
     this.giveSummary = function(){
         return summary()
     }
 }

 const product4 = new Product2('galaxy s2', 'samsung','$999');

 

 // inheritance 

 function product5(pname, brand, price) {
     this.pname = pname;
     this.brand =brand;
     this.price = price

     this.summary = function() {
         console.log("inheritance");
     }
 }

 const product6 = new product5('iphone6', 'apple','$999')


 // Polymorphism

 let product7 = function() { }
     product7.prototype.summary = function() {
         return "summary of product7"
     }
 
let product8 = function() {}
product8.prototype = Object.create(product7.prototype);
product8.prototype.summary = function() {
    return "summary of product8"
}

let product9 = function() {}
product9.prototype = Object.create(product7.prototype);
product9.prototype.summary = function() {
    return "summary of product9"
}

var products = [new product7(), new product8(), new product9];
products.forEach(function(product){
    console.log(product.summary());
})