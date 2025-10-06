class std{
    constructor(ide,nme){
         this.ide= ide;
         this.nme=nme;
        }

    details = ()=>{
        console.log(`Name is ${this.nme} and id is ${this.ide}`)
    }

}
let student1 = new std(2,"ajal");
student1.details();
let student2 = new std(3,"avani");
student2.details();

class div extends std{
    constructor(ide,nme,divis){
        super(ide,nme);
        this.divis = divis;
    }
studentDiv(){
    console.log(`Name is ${this.nme} and id is ${this.ide} and division is ${this.divis}`);
}
}
let student3 = new div(4,"arjun","B");
student3.studentDiv();

setTimeout(student1.details,2000);


