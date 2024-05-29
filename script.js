//ЗАВДАННЯ 1

// Функція createProduct приймає об'єкт товару без id та колбек.
// Додає унікальний ідентифікатор до товару та викликає колбек з новим об'єктом.
function createProduct(obj, callback) {

    const product = { ...obj, id: Date.now() };

    callback(product);
}

// Колбек logProduct приймає об'єкт товару та логує його в консоль
function logProduct(product) {
    console.log("Продукт:", product);
}

// Колбек logTotalPrice приймає об'єкт товару та логуює загальну вартість товару в консоль
function logTotalPrice(product) {

    const totalPrice = product.price * product.quantity;
    console.log("Загальна вартість товару:", totalPrice);
}

// Приклад використання
const newProduct = { name: "Товар", price: 100, quantity: 2 };
createProduct(newProduct, logProduct);
createProduct(newProduct, logTotalPrice);



