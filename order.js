class Order{
    constructor(product, quantity, unitPrice){
    this.product = product;
    this.quantity = quantity;
    this.unitPrice = unitPrice;
    }
    totalPrice(){
        const total = this.unitPrice * this.quantity;
        return total;
    }
    toString(){
        return `----------\nProduct: ${this.product} \nQuantity: ${this.quantity}\nUnit Cost: ${this.unitPrice.toFixed(2)}€\nTotal: ${this.totalPrice().toFixed(2)}€\n`;
    }
}