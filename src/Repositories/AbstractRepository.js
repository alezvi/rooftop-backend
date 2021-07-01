"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var AbstractRepository = /** @class */ (function () {
    function AbstractRepository() {
        this.table = '';
    }
    // public constructor() {
    //     let content = readFileSync(__dirname + '../../' + this.table, {encoding: 'utf-8'})
    //     // instanciar el mapper de esta entidad 
    //     // invocar el metodo mapObjectToEntity
    //     this.data = JSON.parse(content)
    // }
    AbstractRepository.prototype.findAll = function () {
        return this.data;
    };
    AbstractRepository.prototype.findById = function (id) {
        return this.data.find(function (obj) {
            return obj.getId() == id;
        });
        // for (let i = 0; i < this.data.length; i++) {
        //     if (this.data[i].getId() == id) {
        //         return this.data[i]
        //     }  
        // }
    };
    AbstractRepository.prototype.create = function (entity) {
        entity.setId(Date.now());
        this.data = __spreadArrays(this.data, [entity]);
        return entity;
    };
    AbstractRepository.prototype.update = function (entity) {
        if (entity.getId()) {
            this.data.map(function (obj) {
                if (obj.getId() == entity.getId()) {
                    return entity;
                }
                return obj;
            });
        }
        else {
            this.create(entity);
        }
        return true;
    };
    AbstractRepository.prototype["delete"] = function (id) {
        var count = this.data.length;
        this.data = this.data.filter(function (obj) {
            return obj.getId() != id;
        });
        return this.data.length < count;
    };
    return AbstractRepository;
}());
exports["default"] = AbstractRepository;
