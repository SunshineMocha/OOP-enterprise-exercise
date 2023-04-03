// per creare map, filter e reduce uso Metodi e classi Statici, che non hanno bisogno di una classe per essere stanziate
class Utility{ // creo class vuota
    
    // utilizziamo la classe utility per implementare map, filter e reduce come se non le avessimo

    static filter(array, func){
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            if (func(element)) {
                tempArray.push(element);
                return tempArray;
            } 
        }
        return tempArray;
    }

    static map(array, func){
        const tempArray = [];
        for (let i = 0; i < array.length; i++) {
            const element = array[i];
            const newElement = func(element);
            tempArray.push(newElement);
        }
        return tempArray;
    }

    static reduce(array, func, start){
        let accumulator = start;
        let startIndex;
        if(start !== undefined){
            accumulator = start;
            startIndex = 0;
        }
        else{
            accumulator = array[0];
            startIndex = 1;
        }
        for (let i = startIndex; i < array.length; i++) {
            const current = array[i];
            accumulator = func(accumulator, current);
        }
        return accumulator;
    }
}