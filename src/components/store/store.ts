import { makeAutoObservable } from "mobx";

class Counter{
    count  = 0
    constructor(){
        makeAutoObservable(this)
    }

    plus(){
        this.count += 1
    }

    minus(){
        this.count -= 1
    }
}
export const counter = new Counter();

class Item{
    itemsArray = []
    itemState = false
    constructor(){
        makeAutoObservable(this)
    }

    addMassive(data){
        this.itemsArray.push(data)
        this.itemState = true 
    }

    
}