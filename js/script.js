let user = {
   name: "Shavkat",
   surname: "Normurodov",
   age: 15,
   gender: "male",
   address: "Ипак йули",
   phone: 998901111111,
   passport: {
      id: "UDLDAkmS",
      data: "2023",
      todata: "2033",
   },
   wives: "Мехрибон",
   nicname: "ShavkatKill",
};
let obj = {
   pol: 19,
   lop: 20,
   oi: 90,
   ser: "Hoi4",
   o: true,
   t: false,
};
let newsObj = Object.assign({}, user, obj);
let objKeys = Object.keys(newsObj);
let objyval = Object.values(newsObj);
let arrObj = objKeys.concat(objyval);
// console.log(arrObj ,objKeys,objyval);
let types = {
   string: [],
   number: [],
   boolean: [],
   object: [],
};
let st = arrObj.filter(item => {
   if (typeof item === "string") {
      types.string.push(item)
   } else if (typeof item === "object") {
      types.object.push(item)
   } else if (typeof item === "number") {
      types.number.push(item)
   } else if (typeof item === "boolean") {
      types.boolean.push(item)
   }
});
console.log(types);