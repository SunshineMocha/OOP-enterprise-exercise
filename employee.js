class Employee extends Person{
    constructor(name, surname, doBYear, doBMonth, doBDay, clients) {
        super(name, surname, doBYear, doBMonth, doBDay);
        this.doBYear = doBYear;
        this.doBMonth = doBMonth;
        this.doBDay = doBDay;
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
            const element = (this.clients)[i];
            totalEarn += element.totalOrdersPrice();
        }
        return totalEarn;
    }
    addClient(newClient){
        this.clients.push(newClient);
    }
    removeClient(delClient){
        this.clients.pop(delClient);
    }
}
