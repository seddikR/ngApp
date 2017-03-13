export class Product {
    constructor(
        public id?: number,
        public productId?: number,
        public productName?: string,
        public productDescription?: string,
        public productImage?: any,
        public supplierId?: number,
        public categoryId?: number,
    ) { }
}
