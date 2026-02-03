const {
  price,
  quantity,
  tax = 7,
} = { name: "shirt", price: 500, quantity: "7" };

// console.log(price, quantity, tax);
// const discount = (product.price * 20) / 100;
// const yourPay = product.price - discount;
// const vatAmount = (product.price * 7) / 100;
// const totalAmount = yourPay + vatAmount;

// const price = product.price;
// const discount = (price * 20) / 100;
// const yourPay = price - discount;
// const vatAmount = (price * 7) / 100;
// const totalAmount = yourPay + vatAmount;

const discount = (price * 20) / 100;
const yourPay = price - discount;
const vatAmount = (price * 7) / 100;
const totalAmount = yourPay + vatAmount;

const device = { name: "phone", brand: "Samsung", price1: 18000 };
const { name, brand, price1 } = device;
// console.log(name, brand, price1);

const numbers = [22, 23, 24, 25];
const [first, second] = numbers;
// console.log(first, second);
