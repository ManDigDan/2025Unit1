function Employee(name,age,baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    this.monthlyBonus = 1000 //4
    
    this.calculateFinalSalary = function(){ //1
        let finalSalary = this.baseSalary + this.monthlyBonus //2
        console.log('Final salary is: ' + finalSalary) //3
    }
    
    this.getEmpDetails = function() {
        console.log('Name: '+this.name+'... Age: '+this.age);
    }
}

let emp1 = new Employee('John',30,2000);
emp1.getEmpDetails();
// emp1.monthlyBonus = 9999999999 //6
emp1.calculateFinalSalary() //5