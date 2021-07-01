import Entity from "../Entities/AbstractEntity";

abstract class AbstractMapper {
    abstract mapObjectToEntity(obj : object) : Entity;
}

export default AbstractMapper