let numbers = [1,2,3,4,5,6];
let newNumbers = numbers.map(n=>n**2);
console.log(newNumbers);

let tasks = [
    {id: 101, status: "Pending"},
    {id: 102, status: "Completed"},
    {id: 103, status: "Pending"}
  ];
  let taskFilter = tasks.filter(t=>t.status==="Pending");
  console.log(taskFilter);
  let idFilter = tasks.find(t=>t.id===102);
  console.log(idFilter);
tasks.forEach(t=>console.log(`Task ${t.id} is ${t.status}`));

let someTask = tasks.some(t=>t.status==="Completed");
console.log(someTask);
let everyTask = tasks.every(t=>t.status==="Completed");
console.log(everyTask); 

