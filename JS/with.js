class Student {
    id = 10014;
    name = " RajKumar";
    showDetails() {
        console.log(this.id + " " + this.name)
    }
}
let s = new Student();
s.showDetails();