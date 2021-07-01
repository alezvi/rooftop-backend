import Product from "../Entities/ProductEntity";
import AbstractMapper from "./AbstractMapper";

class ProductMapper extends AbstractMapper {
    public mapObjectToEntity(obj : { id : Number, title : String}) : Product {
        let product = new Product

        product.setId(obj.id)
        product.setTitle(obj.title)

        return product
    }
}

export default ProductMapper
