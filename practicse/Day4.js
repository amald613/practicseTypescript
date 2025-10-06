let items = ["soap","towel","bottle","watch"];

for (let item of items){
    console.log(`this is ${item}`);

}

for(let i=0;i<4;i++){
    if (i==2) continue;
    console.log(items[i]);
}

let examResult = {maths:45,english:44,malayalam:47,physics:50};

for (k in examResult){
    console.log(k);
    console.log(examResult[k]);
    console.log(examResult["maths"]);
}

let numbers =[1,2,3,4,5];
for (let j=0;j<=4;j++){
    if ((j%2)===0)continue;
    console.log(numbers[j]);

}

let i=1
do{
    console.log(i);
    i++;

}
while(i<5);


let m=1
while(m<5){
    console.log(m)
    m++;
}