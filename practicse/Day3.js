let age = 18;
if( age>=18 ){
    console.log('Eligible');
}
else{
console.log('Not Eligible');
}

let mark = 85;
if (mark>=90){
    console.log('A grade');
}
else if(mark>=80){
    console.log('B grade');
}
else if(mark>=70){
    console.log('C grade');
}
else{
    console.log('D grade');
}

let x = 10; let y = 20;
console.log(x=="10");
console.log(x==="10");

console.log(x==10 && y>x);
console.log(x==11 || y>x);
console.log(!(x==10));

let day = "dfg";
switch(day){
    case 1 : console.log('monday');break;
    case 2 : console.log('tuesday');break;
    case "dfg" : console.log('wednesday');break;
    default: console.log('dont know');
}

let isPassed = true;
let result = isPassed?"passed":"failed";
console.log(result);

let number = 123;
if (number>0){
    console.log('positive');
}
else if(number<0){
    console.log('negative');
}
else if(number === 0){
    console.log("zero");
}
else{
    console.log("invalid number");
}

let month = 2;

switch (month){
    case 1 : console.log("January");break;
    case 2 : console.log('February');break;
    default:console.log('invalid');

}

let count =15;
let timeline= count>0?"postive":count<0?"negative":count===0?"zero":"invalid";
console.log(timeline);
