class Manager extends Person{
    constructor(name, surname, employees = []) {
        super(name, surname);
        this.employees = employees;
    }
    toString() {
        return super.toString()+`Employees: ${(this.employees).length}\nClients: ${this.totalClients()}\nTotal Earnings: ${this.totalEarnings()}€`;
    }
    totalClients(){
        let employeeList = this.employees;
        let totClients = 0;
        for (let i = 0; i < employeeList.length; i++) {
            let actualEmployee = employeeList[i];
            let partialClients = (actualEmployee.clients).length;
            totClients = partialClients + totClients;
        }
        return totClients;
    }
    totalEarnings(){
        let employeeList = this.employees;
        let totEarned = 0;
        for (let i = 0; i < employeeList.length; i++) {
            let actualEmployee = employeeList[i];
            let partialEarned = actualEmployee.totalEarnings();
            totEarned = partialEarned + totEarned;
        }
        return totEarned;
    }
    hire(newEmployee){
        this.employees.push(newEmployee);
    }
    emploYEET(Employee){
        this.employees.pop(Employee);
    }
}