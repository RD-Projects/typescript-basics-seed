class ShoppingList {
    groceries: string[];
    constructor(){
        this.groceries = []
    }
    addItem(item: string) {
        this.groceries.push(item);
    }
    removeItem(item: string){
        this.groceries = this.groceries.filter((grocery) => item !== grocery);
    }
}

const myNewList = new ShoppingList()
myNewList.addItem('kwark')
myNewList.addItem('sap')
myNewList.addItem('sla');
myNewList.addItem('koek')
console.log(myNewList.groceries)
myNewList.removeItem('sap');
console.log(myNewList)
