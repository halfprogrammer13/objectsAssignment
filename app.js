// var count=0;
// var itemsArray =
//     [
//         { name: "juice", price: 50, quantity: "3" },
//         { name: "cookie", price: 30, quantity: "9" },
//         { name: "shirt", price: 880, quantity: "1" },
//         { name: "pen", price: 100, quantity: "2" }
//     ];
// for(var i =0;i<itemsArray.length;i++)
// {

//     count += itemsArray[i].price;

// }
// console.log(count);

// function Student (name,age,id,fatherName,batch)
// {
//   this.name=name;
//   this.age=age;
//   this.id=id;
//   this.fatherName=fatherName;
//   this.batch=batch;

// };
// var student1=new Student("hanzala",21,10114,"khalid",7);
// var student2=new Student("abdullah",23,104,"khalid",6);
// var student3=new Student("moosa",13,11104,"akmal",5);
// console.log(student1,student2,student3);

var obj={

    firstName:'hanzala',
    lastName:"khalid",
    email:"abc@gmail.com",
    password:"1234",
    age:23,
    gender:'M',
    city:"karachi",
    country:"pakistan"
  };


  question 4 half:::::function Person(name,address,gender,profession,eductaion)
{
  this.name=name;
  this.address=address;
  this.gender=gender;
  this.profession=profession;
  this.eductaion=eductaion;
}
window.localStorage.setItem("name","hanzala")
window.localStorage.setItem("address","lines area")
var p1=localStorage.getItem("name")
var p2=localStorage.getItem("address");
console.log(p1,p2);
