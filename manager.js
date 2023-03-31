class Manager extends Person{
    constructor(name, surname, employees = []) {
        super(name, surname);
        this.employees = employees;
    }
    toString() {
        return super.toString()+`Employees: ${(this.employees).length}\nClients: ${this.totalClients()}\nTotal Earnings: ${this.totalEarnings()}€`;
    }
    totalClients(){
        return '0';
    }
    totalEarnings(){
        return '0';
    }
    /*
    addEmployee(){
        return 'Impiegato aggiunto';
    }
    emploYeet(){
        return 'Impiegato rimosso';
    }*/
}
/*
Funzioni classe Order: 
totalPrice()
toString()
Funzioni classe Client: 
sumOfOrders()
toString()
totalOrdersPrice()
addOrder()
Funzioni classe Employee: 
bestClient()
toString()
totalEarnings
*/