let student = {
    id:1,
    nam:"amal",
    details:function(){console.log(`Name is ${this.nam} and id is ${this.id}`)}
};
student.details();

class std{
    constructor(ide,nme){
         this.ide= ide;
         this.nme=nme;
        }

    details(){
        console.log(`Name is ${this.nme} and id is ${this.ide}`)
    }

}
let student1 = new std(2,"ajal");
student1.details();
let student2 = new std(3,"avani");
student2.details();