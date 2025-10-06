let taskList = [
    { id: 201, details: { status: "Completed", priority: "High" }, assignedTo: "Amal" },
    { id: 202, details: { status: "Pending", priority: "Low" }, assignedTo: "Sara" },
    { id: 203, details: { status: "In Progress", priority: "Medium" }, assignedTo: "John" },
    { id: 204, details: { status: "Completed", priority: "Low" }, assignedTo: "Amal" },
    { id: 205, details: { status: "Pending", priority: "High" }, assignedTo: "Sara" },
    { id: 206, details: { status: "Completed", priority: "Medium" }, assignedTo: "John" },
    { id: 207, details: { status: "Pending", priority: "High" }, assignedTo: "Amal" }
  ];

//   Amal has 3 tasks (2 Completed, 1 Pending)
// Sara has 2 tasks (1 Pending, 1 Completed)

let summary = {};
taskList.forEach(task=>{
    const {id,details:{status,priority},assignedTo}=task
    if (!summary[assignedTo]){
        summary[assignedTo] = {total:0,Completed:0,Pending:0,"In Progress":0}
    }
   
        summary[assignedTo].total=summary[assignedTo].total+1;
        summary[assignedTo][status]+=1;
  
   
})
for(let person in summary){
    const {total,Completed,Pending,"In Progress":inProgress} = summary[person];
console.log(`${person} has ${total} tasks(${Completed} Completed, ${Pending} Pending),${inProgress} In Progress`);
}

// taskList.forEach(task=>{if(
//     task.details.status==="In Progress"
// ){task.details.status="Pending"}});
// console.log(taskList);

// const finded = taskList.find(task=>{
//     return task.details.status==="In Progress"&& task.details.priority==="High";
    
// })
// console.log(finded);

// const finded = taskList.find(task => task.details.status === "In Progress" && task.details.priority === "High");
//   console.log(finded);

  const finded = taskList.find(task =>
    task.details.status === "In Progress" &&
    task.details.priority === "High"
  );
  console.log(finded);
  