//ЗАВДАННЯ 5

const fruits = [
    { name: "apple", price: 200 },
    { name: "orange", price: 300 },
    { name: "grapes", price: 750 }
];

// Функція, яка приймає масив об'єктів, робить знижку 20% та додає id
const processFruits = (fruitsArray) => {
    return fruitsArray.map((fruit, index) => ({
        ...fruit,
        id: index + 1,
        price: fruit.price * 0.8
    }));
};

// Викликаємо функцію та виводимо результат у консоль
const discountedFruits = processFruits(fruits);
console.log("Фрукти зі знижкою 20% та доданими id:", discountedFruits);



