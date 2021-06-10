
abstract class Entity {
    protected id : Number

    public setId(id: Number) {
        this.id = id
    }

    public getId() : Number {
        return this.id
    }
}

export default Entity