// -------- Data --------
let users={
  "ankhaa":{code:"1111",assigned:["Өөх мах"]},
  "amgaa":{code:"2222",assigned:["Газ"]},
  "admin":{code:"0000"}
};
let categories=["Өөх мах","Газ","Аяга","Ус ундаа"];
let products=[
  {name:"Гадар өөх",category:"Өөх мах",price:11000,initialStock:2000},
  {name:"Шингэн хий",category:"Газ",price:50000,initialStock:0},
  {name:"Шилэн аяга",category:"Аяга",price:3500,initialStock:0},
  {name:"Кока кола",category:"Ус ундаа",price:2500,initialStock:0}
];
let customers=["Туяа","Энхээ","Бат"];
let transactions=[]; 
let currentUser="";

// -------- API Fetch --------
async function saveData(){
  await fetch("/api/save",{
    method:"POST",
    headers:{"Content-Type":"application/json"},
    body:JSON.stringify({users,categories,products,transactions,customers})
  });
}
async function loadData(){
  let res=await fetch("/api/data");
  let data=await res.json();
  users=data.users; categories=data.categories; products=data.products;
  transactions=data.transactions; customers=data.customers;
}
