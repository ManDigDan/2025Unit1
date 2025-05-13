function Employee(name,age,baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    //part 2
    let monthlyBonus = 1000 //part 3 change to let
    let calculateFinalSalary = function(){
        let finalSalary = this.baseSalary + this.monthlyBonus //part 3 remove this.
        console.log('Final salary is: ' + finalSalary)
    }

    this.getEmpDetails = function() {
        console.log('Name: '+this.name+'... Age: '+this.age)
        calculateFinalSalary() //part 3
    }
}

let emp1 = new Employee('John',30,2000);
emp1.getEmpDetails();
//part 3
emp1.monthlyBonus = 10000000
emp1.calculateFinalSalary(); //part 2