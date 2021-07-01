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
var AbstractRepository_1 = require("../Repositories/AbstractRepository");
var ProductEntity_1 = require("../Entities/ProductEntity");
var fs_1 = require("fs");
var ProductsRepository = /** @class */ (function (_super) {
    __extends(ProductsRepository, _super);
    function ProductsRepository() {
        var _this = _super.call(this) || this;
        _this.table = 'products.json';
        var path = __dirname + '/../../products.json';
        var content = fs_1.readFileSync(path, { encoding: 'utf-8' });
        var products = JSON.parse(content);
        _this.data = products.map(function (item) {
            var product = new ProductEntity_1["default"];
            product.setId(item.id);
            product.setTitle(item.title);
            // product.setPrice(item.price)
            return product;
        });
        return _this;
    }
    return ProductsRepository;
}(AbstractRepository_1["default"]));
exports["default"] = ProductsRepository;
