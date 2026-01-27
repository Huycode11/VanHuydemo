
function Product(id, name, price, quantity, category, isAvailable) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}
const products = [
    new Product(1, "Laptop Dell", 25000000, 5, "Electronics", true),
    new Product(2, "iPhone 15", 35000000, 3, "Electronics", false),
    new Product(3, "Tai nghe Sony", 5000000, 0, "Accessories", true),
    new Product(4, "Chuột Logitech", 800000, 10, "Accessories", true),
    new Product(5, "Bàn phím cơ", 2000000, 2, "Accessories", false),
    new Product(6, "Màn hình LG", 7000000, 4, "Electronics", true)
];
const namePriceList = products.map(p => ({
    name: p.name,
    price: p.price
}));
console.log("Câu 3 - Name & Price:", namePriceList);
const inStockProducts = products.filter(p => p.quantity > 0);

console.log("Câu 4 - Sản phẩm còn hàng:", inStockProducts);
const hasExpensiveProduct = products.some(p => p.price > 30000000);

console.log("Câu 5 - Có sản phẩm > 30.000.000:", hasExpensiveProduct);

const accessoriesAvailable = products
    .filter(p => p.category === "Accessories")
    .every(p => p.isAvailable === true);

console.log("Câu 6 - Accessories đang bán:", accessoriesAvailable);

const totalInventoryValue = products.reduce((total, p) => {
    return total + p.price * p.quantity;
}, 0);

console.log("Câu 7 - Tổng giá trị kho:", totalInventoryValue);


console.log("Câu 8:");
for (const p of products) {
    console.log(
        `Tên: ${p.name} - Danh mục: ${p.category} - Trạng thái: ${p.isAvailable ? "Đang bán" : "Ngừng bán"}`
    );
}

console.log("Câu 9:");
for (const key in products[0]) {
    console.log(`${key}: ${products[0][key]}`);
}

const sellingAndInStock = products
    .filter(p => p.isAvailable && p.quantity > 0)
    .map(p => p.name);

console.log("Câu 10 - Sản phẩm đang bán & còn hàng:", sellingAndInStock);
