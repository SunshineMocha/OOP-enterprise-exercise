class Employee extends Person{
    constructor(name, surname, clients) {
        super(name, surname);
        this.clients = clients;
    }
    bestClient(){

        // Stampa la lista del miglior cliente
        // return 'Paolino Paperino';
        // return client.toString();
    }
    toString() {
        return super.toString()+`Client(s): ${(this.clients).length}\nTotal Earned: ${this.totalEarnings()}€\nBest Client: ${this.bestClient()}`;
    }
    totalEarnings(){
        return '0';
    }/*
    addClient(){
                // fare una push sull'array ordini
        return 'cliente aggiunto';
    }
    removeClient(){
                // fare una pop sull'array ordini
        return 'cliente rimosso';
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
*/
