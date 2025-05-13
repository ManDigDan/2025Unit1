function Employee(name,age,baseSalary){
    this.name = name;
    this.age = age;
    this.baseSalary = baseSalary;
    
    let monthlyBonus = 1000; //1
    
    let calculateFinalSalary = function(){ //2 change to let
        let finalSalary = baseSalary + monthlyBonus //6 remove "".this".
        console.log('Final salary is: ' + finalSalary)
    }
    
    this.getEmpDetails = function() {
        console.log('Name: '+this.name+'... Age: '+this.age);
        calculateFinalSalary(); //5
    }
}

let emp1 = new Employee('John',30,2000);
emp1.getEmpDetails();
emp1.monthlyBonus = 9999999999 // 4 delete
emp1.calculateFinalSalary() // 3 delete