"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var AbstractEntity_1 = require("../Entities/AbstractEntity");
var Product = /** @class */ (function (_super) {
    __extends(Product, _super);
    function Product() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Product.prototype.setTitle = function (title) {
        this.title = title;
    };
    Product.prototype.setPrice = function (price) {
        this.price = price;
    };
    Product.prototype.getPrice = function () {
        return this.price;
    };
    Product.prototype.getTitle = function () {
        return this.title;
    };
    return Product;
}(AbstractEntity_1["default"]));
exports["default"] = Product;
