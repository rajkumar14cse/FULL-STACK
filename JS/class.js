class Student {
    constructor() {
        this.id = 101;
        this.name = "raj"
    }
    showDetails() {
        console.log(this.id + " " + this.name)
    }
    displayInfo() {
        console.log("this is displayInfo method")
    }
}

let s = new Student();
s.showDetails();
s.displayInfo();