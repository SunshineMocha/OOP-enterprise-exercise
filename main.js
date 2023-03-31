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
client03 = new Client("Daniele","Puggioni", "via Cesarea, 5", [order09, order06, order02, order05, order01]);
client04 = new Client("Pietro","Viglino", "via Roma, 9", [order00, order01,order02, order03]);
// RESPONSABILI NEGOZI
employee00 = new Employee("Davide","Cresta",[client01]);
employee01 = new Employee("Luis","Castro",[client03, client04]);
employee02 = new Employee("Valentina","Cherubini",[client02]);
employee03 = new Employee("Vlad","Vladi",[client00]);
// MANAGER
manager00 = new Manager("Chiara", "Badile", [employee02, employee00]);
manager01 = new Manager("Andrea", "Asioli", [employee01, employee03]);

//let doT = new Date(2022, 11, 31).getFullYear();
// Stampe test
console.log();
// Da finire: Classe Client, funzione addOrder
// Da finire: Classe Employee, funzioni totalEarnings, bestClient, addClient, removeClient
// Da finire: Classe Manager, funzioni totalClients, totalEarnings, addEmployee, emploYeet
// Da finire: Classe Person, funzioni getAge, isBirthday


/* 
1) Modellare un gestionale di una azienda di vendite. 
Entità/Classi: 
Manager:
- Name (nome)
- Surname (cognome)
- Employees (impiegati) -> Array di Emplyee
Cosa sa fare: 
- sa calcolare gli introiti totali del reparto
    get allEarnings()
- sa fare il suo toString() con il numero degli impiegati totali, numero dei clienti totali e l'earnings
Employee (impiegato):
- Name (nome)
- Surname (cognome)
- Clients (Clienti) -> Array di Clienti
Cosa sa fare: 
- sa calcolare il suo bestClient()
- sa fare il suo toString che ritorna i dati di Employee, il numero dei clienti e quale è il suo miglior cliente
Client(cliente):
- Name (nome)
- Surname (cognome)
- Address (indirizzo)
- Orders (Ordini) -> Array di Order
Cosa sa fare: 
- sa calcolare la somma dei suoi ordini 
    get sumOfOrder()
- sa fare il suo toString() che, oltre a restituire i suoi dati mi lista tutti gli ordini passati
Order (Ordine)
- Product (Nome Prodotto)
- Quantity (Quantità)
- Unity Price (Prezzo Unitario)
Cosa sa fare: 
- sa calcolare il suo prezzo totale
    get totalPrice()
- sa fare il suo toString()
Specifiche:
- Tutti erediteranno da Person
Specifiche facoltative:
 - Person ha una dob (date) (data di nascita)
 - Person ha get age() 
 - Person ha isBirthday()
 - se è il compleanno, aggiungere nota alla string
*/