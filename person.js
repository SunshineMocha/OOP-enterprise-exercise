class Person{
    constructor(name, surname, /*doB*/){
    this.name = name;
    this.surname = surname;
    /*this.doB = doB;*/
    }
    toString(){
        return `\nName: ${this.name} ${this.surname}\n`;
    }
    /*
    getAge(){
        let age = 0;
        let testdoB = new Date(1993, 08, 05).getFullYear();
        let today = new Date().getFullYear();
        console.log(today);
        age = today - testdoB;
        console.log(age);
        return age; 
    }
    */
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
Funzioni classe Manager:
toString()
totalClients()
totalEarnings()
*/