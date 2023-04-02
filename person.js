class Person{
    constructor(name, surname, doBYear, doBMonth, doBDay){
        this.name = name;
        this.surname = surname;
        this.doBYear = doBYear;
        this.doBMonth = doBMonth;
        this.doBDay = doBDay;
    }
    toString(){
        return `\nName: ${this.name} ${this.surname}\n`;
    }
    getAge(){
        let age = 0;
        let todayYear = new Date().getFullYear();
        //let todayMonth = new Date().getMonth();
        // let todayDay = new Date().getDate();
        let todayMonth = 8;
        let todayDay = 5;
        if (todayMonth <= this.doBMonth) {
            if (todayDay < this.doBDay) {
                return age = todayYear - this.doBYear - 1;
            }
            else{
                return age = todayYear - this.doBYear;
            }
        } else {
            return age = todayYear - this.doBYear;
        }
        
    }
    isBirthday(){
        let todayMonth = new Date().getMonth();
        let todayDay = new Date().getDate();

        if (this.doBMonth === todayMonth && this.doBDay === todayDay){
            return true;
        }
        else{
            return false;
            }
        }
}