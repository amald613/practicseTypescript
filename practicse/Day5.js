

function isEven(num){
    if (num>0){
        return num%2 === 0
    }
    else{
        return ( "invalid number")
    }
}
console.log(isEven(-1));

function greetUser(name,role){
    return `My name is ${name} and my role is ${role}`;
}

const user1= greetUser("amal","QA");
console.log(user1);

let tasks = {study:"High",movie:"low",cricket:"High",carroms:"medium"};
function highPriorityTasks(arr){
    let HighPriorityList = [];
    for (let task in arr){
        if (arr[task]==="High")
            {HighPriorityList.push(task);}
      
    }
      return `high prioity tasks are ${HighPriorityList.join(", ")}`;
    
}

console.log(highPriorityTasks(tasks));

const evenCheck = (no)=>{if (no>0){return no%2===0;}else{return "invalid number"};} 
console.log(evenCheck("s"));

let hobby = {cricket:"high",football:"low",tennis:"high"};
const highTask = (ar)=>{let highList=[];for(let tas in ar){if(ar[tas]=="high"){highList.push(tas)}}return highList};

console.log(highTask(hobby));