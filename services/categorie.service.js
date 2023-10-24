const {faker}= require('@faker-js/faker');

class CategoriesService {
  constructor (){
    this.categorie=[];
    this.generate();
  };


generate() {
  const limit= 100;
for (let index = 0; index < limit; index++) {
 this.categorie.push ({
  //  id: faker.string.uuid(),
   name: faker.commerce.productAdjective(),
  //  price:parseInt(faker.commerce.price(),10),
  // image:faker.image.avatar(),
 })
}
}
find () {
  return this.categorie;
}


};


module.exports=CategoriesService;
