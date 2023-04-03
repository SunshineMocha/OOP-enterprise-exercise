class Employee extends Person{
    constructor(name, surname, doBYear, doBMonth, doBDay, clients=[]) {
        super(name, surname, doBYear, doBMonth, doBDay);
        this.clients = clients;
    }
    bestClient(){
        const clients = this.clients;
        let bestClient = clients[0];
        for (let i = 1; i < clients.length; i++) {
            const actualClient = clients[i];
            const bestTotal = bestClient.totalOrdersPrice();
            const actualTotal = actualClient.totalOrdersPrice();
            if (actualTotal > bestTotal) {
                bestClient = actualClient;
            }
        }
        return bestClient;
    }
    toString(){
        return super.toString()+`Client(s): ${(this.clients).length}\nTotal Earned: ${this.totalEarnings()}€\nBest Client: ${this.bestClient()}`;
    }
    totalEarnings(orders){
        let totalEarn = 0;
        for (let i = 0; i < (this.clients).length; i++) {
            const client = (this.clients)[i];
            totalEarn += client.totalOrdersPrice();
        }
        return totalEarn.toFixed(2);
    }
    addClient(newClient){
        this.clients.push(newClient);
    }
    removeClient(delClient){
        // this.clients.pop(delClient); ver 1.0
        let clients = this.clients; // ver 2.0, removes the client ONLY if it's already present
        for (let i = 0; i < clients.length; i++){
            if (delClient === clients[i]) {
                clients.splice(i, 1);
            }
        }
    }
}