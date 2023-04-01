// ORDINI
order00 = new Order("Margherita", 4, 5.00);
order01 = new Order("Biancaneve", 2, 5.50);
order02 = new Order("Pioggia", 1, 6.00);
order03 = new Order("Marinara", 3, 5.00);
order04 = new Order("Vera Napoli", 6, 6.00);
order05 = new Order("Pugliese", 10, 6.00);
order06 = new Order("Siciliana", 8, 6.00);
order07 = new Order("Romana", 5, 6.50);
order08 = new Order("Napoletana", 8, 6.00);
order09 = new Order("Bufala", 9, 7.00);
// CLIENTI
client00 = new Client("Jing","Wang", "via XX Settembre, 20", [order00, order03]);
client01 = new Client("Davide","Consigliere", "via XXV Aprile, 25", [order01, order04, order08]);
client02 = new Client("Simone","Maccarone", "via XII Ottobre, 12", [order07]);
client03 = new Client("Daniele","Puggioni", "via Cesarea, 5", [order09, order06, order02]);
client04 = new Client("Pietro","Viglino", "via Roma, 9", [order05]);
// RESPONSABILI NEGOZI
employee00 = new Employee("Davide","Cresta",[client01]);
employee01 = new Employee("Luis","Castro",[client03, client04]);
employee02 = new Employee("Valentina","Cherubini",[client02]);
employee03 = new Employee("Vlad","Vladi",[client00]);
// MANAGER
manager00 = new Manager("Chiara", "Badile", [employee02, employee00]);
manager01 = new Manager("Andrea", "Asioli", [employee01, employee03]);
// Stampe test
// Da finire: Classe Person, funzioni getAge, isBirthday
//let doT = new Date(2022, 11, 31).getFullYear();

let age;
let testdoB = new Date(1993, 08, 05).toString(); console.log(testdoB);
let today = new Date(2013,08,05).toString(); console.log(today);
age = today - testdoB; console.log(age);
