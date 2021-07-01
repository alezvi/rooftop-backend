"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var typeorm_1 = require("typeorm");
var Product = /** @class */ (function () {
    function Product() {
    }
    __decorate([
        typeorm_1.PrimaryGeneratedColumn()
    ], Product.prototype, "id");
    __decorate([
        typeorm_1.Column({
            length: 200
        })
    ], Product.prototype, "title");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "price");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "stock");
    __decorate([
        typeorm_1.Column()
    ], Product.prototype, "description");
    __decorate([
        typeorm_1.Column({ name: "is_visible" })
    ], Product.prototype, "isVisible");
    __decorate([
        typeorm_1.Column({ name: "brand_id" })
    ], Product.prototype, "brandId");
    __decorate([
        typeorm_1.Column({ name: "created_at" })
    ], Product.prototype, "createdAt");
    __decorate([
        typeorm_1.Column({ name: "updated_at" })
    ], Product.prototype, "updatedAt");
    __decorate([
        typeorm_1.Column({ name: "deleted_at" })
    ], Product.prototype, "deletedAt");
    Product = __decorate([
        typeorm_1.Entity({ name: "products" })
    ], Product);
    return Product;
}());
exports["default"] = Product;
