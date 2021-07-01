import AbstractEntity from '../Entities/AbstractEntity'

class Product extends AbstractEntity {
    private title : String 
    private price : Number

    public setTitle(title : String) {
        this.title = title
    }

    public setPrice(price : Number) {
        this.price = price
    }

    public getPrice() : Number {
        return this.price 
    }

    public getTitle() : String {
        return this.title
    }
}

export default Product