class Client extends Person{
    constructor(name, surname, address, orders){
        super(name, surname);
        this.address = address;
        this.orders = orders;
    }
    sumOfOrders() {
        const totOrders = (this.orders).length
        return totOrders;
    }
    toString() {
        return super.toString()+`Address: ${this.address}\nOrder(s): ${this.sumOfOrders()}\nTotal Spent: ${this.totalOrdersPrice()}€\nOrder(s) List:\n${this.orders}\n`;
    }
    totalOrdersPrice(){
        let totalPrice = 0;
        for (let i = 0; i < (this.orders).length; i++) {
            const element = (this.orders)[i];
            totalPrice += element.totalPrice();
        }
        return totalPrice;
    }
    addOrder(){
        // fare una push sull'array ordini
    }
}