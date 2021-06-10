import Entity from '../Entities/AbstractEntity'

abstract class AbstractRepository {
    protected table : String

    public findAll() {
        return []
    }

    abstract findById(id : Number) : Entity;

    abstract create(entity : Entity) : Entity

    public update(id : Number, changes : Object) : Boolean {
        return true
    }

    public delete(id : Number) : Boolean {
        return true
    }
}

export default AbstractRepository