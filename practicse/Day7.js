let task = {id:101, status:"Pending", priority:"High"};
console.log(task.status);
console.log(task["status"]);

let tasks = {id:102, details:{status:"Completed",priority:"medium"}};
let {id,details:{status,priority}} = tasks;
console.log(status,priority);

function printTask({id,status}){
    console.log(`Task ${id} is ${status}`);
}
printTask(task);

tasks.assignedTo = "Amal";
tasks.details.status = "Updated";

console.log(tasks);