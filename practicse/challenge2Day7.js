const { count } = require("console");

let taskList = [
    { id: 201, details: { status: "Completed", priority: "High" }, assignedTo: "Amal" },
    { id: 202, details: { status: "Pending", priority: "Low" }, assignedTo: "Sara" },
    { id: 203, details: { status: "In Progress", priority: "Medium" }, assignedTo: "John" },
    { id: 204, details: { status: "Completed", priority: "Low" }, assignedTo: "Amal" },
    { id: 205, details: { status: "Pending", priority: "High" }, assignedTo: "Sara" },
    { id: 206, details: { status: "Completed", priority: "Medium" }, assignedTo: "John" },
    { id: 207, details: { status: "Pending", priority: "High" }, assignedTo: "Amal" }
  ];
let filtered = taskList.filter(t=>t.assignedTo==="Amal"&& t.details.priority==="High"); 
console.log(filtered); 
let mappedId = filtered.map(t=>t.id);
console.log(mappedId);

console.log(taskList.every(t=>t.details.priority!=="Low"));

 let Count = {};
for (task of taskList){
  let person =task.assignedTo;
  if (Count[person]){
    Count[person]=Count[person]+1;
  }
  else{
    Count[person]=1
  }
}
console.log(Count);



let AllStatus ={};
for(task of taskList){
  let person = task.assignedTo;
  let sts=task.details.status;
  if(!AllStatus[person]){
    AllStatus[person]={total:0,Completed:0,"In Progress":0,Pending:0}
    
  }
  else{
    AllStatus[person].total=AllStatus[person].total+1;
    AllStatus[person][sts]= AllStatus[person][sts]+1;
    
  }
}
console.log(AllStatus);
// AllStatus.forEach(t=>{console.log(`${t.assignedTo} has `)})