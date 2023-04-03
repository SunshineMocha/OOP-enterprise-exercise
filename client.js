class Client extends Person{
    constructor(name, surname, doBYear, doBMonth, doBDay, address, orders = []){
        super(name, surname, doBYear, doBMonth, doBDay);
        this.address = address;
        this.orders = orders;
    }
    addOrder(newOrder){
        this.orders.push(newOrder);
    }
    delOrder(delOrder){
        this.orders.pop(delOrder);
    }
    sumOfOrders() {
        const totOrders = (this.orders).length
        return totOrders;
    }
    toString() {
        if (this.isBirthday()=== true) {
            return super.toString()+`Address: ${this.address}\nOrder(s): ${this.sumOfOrders()}\nTotal Spent: ${this.totalOrdersPrice().toFixed(2)}€\nOrder(s) List:\n${this.orders}\nNOTE: Today's their birthday!`;
        } 
        else {
            return super.toString()+`Address: ${this.address}\nOrder(s): ${this.sumOfOrders()}\nTotal Spent: ${this.totalOrdersPrice().toFixed(2)}€\nOrder(s) List:\n${this.orders.join("")}\n`;
        }
}
    totalOrdersPrice(){
        let totalPrice = 0;
        for (let i = 0; i < (this.orders).length; i++) {
            const order = (this.orders)[i];
            totalPrice += order.totalPrice();
        }
        return totalPrice;
    }
}

/*
Orders List with for
    for(i = 0; i < this.orders.length; i++){
        let orders = this.orders[i];
        description+='----------\n'
        description += orders.toString()
    }
totalOrdersPrice with reduce
    return this.orders.reduce((previous, current) => {
        previous+=current.totalPrice()
        return previous;
    },0);
*/

