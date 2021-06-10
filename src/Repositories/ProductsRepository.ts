import AbstractRepository from '../Repositories/AbstractRepository'

class ProductsRepository extends AbstractRepository {
    protected table : String = 'products.json'
}

export default ProductsRepository