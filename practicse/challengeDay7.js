let taskList = [
    { id: 101, details: { status: "Pending", priority: "High" }, assignedTo: "Amal" },
    { id: 102, details: { status: "Completed", priority: "Low" }, assignedTo: "John" },
    { id: 103, details: { status: "Pending", priority: "Medium" }, assignedTo: "Amal" },
    { id: 104, details: { status: "In Progress", priority: "High" }, assignedTo: "Sara" },
    { id: 105, details: { status: "Completed", priority: "Medium" }, assignedTo: "Amal" }
  ];
  
  function getTasksByStatus(task,sts){
   let filtered = task.filter(t=>t.details.status===sts);
   let ids = filtered.map(t=>t.id);
    return ids;
  }

  let completedTaskIds = getTasksByStatus(taskList,"Completed");
  console.log(completedTaskIds);


//  function printTaskSummary({id,details:{status,priority},assignedTo}) {
// console.log(`Task ${id} assigned to ${assignedTo} is ${status} with priority ${priority}`);
//  }

 function printTaskSummary({id, details: {status, priority}, assignedTo}) {
    console.log(`Task ${id} assigned to ${assignedTo} is ${status} with priority ${priority}`);
  }
  taskList.forEach(task => printTaskSummary(task));
  taskList.forEach(t=>{
    if(t.assignedTo==="Amal"){
        console.log(t) ;
    }});
   
console.log(taskList.some(t=>t.details.priority==="Low"&&t.assignedTo==="John"));

taskList.forEach(t=>{
    if(t.details.status==="Pending"){
         t.details.status="In Progress"
    }})

    console.log(taskList);