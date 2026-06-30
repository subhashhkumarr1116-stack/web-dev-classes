let data ={
    "name" : "devashish",
    "age" : "45",
}

console.log(typeof(data));

 data = JSON.stringify(data);
console.log(data);
console.log(typeof(data));

data = JSON.parse(data);
console.log(typeof(data));


