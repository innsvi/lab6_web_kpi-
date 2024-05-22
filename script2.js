//ЗАВДАННЯ 2

const medicines = {
    Агалгін: new Date("2022-05-01"),
    Ношпа: new Date("2025-07-02"),
    Альфахолін: new Date("2024-12-21"),
    Аспірин: new Date("2022-08-15"),
    Аспаркам: new Date("2024-04-18")
};

// Отримуємо поточну дату
const currentDate = new Date();

// Отримуємо масив медикаментів, у яких строк зберігання ще не пройшов
const validMedicines = Object.entries(medicines)
    .filter(([name, expiryDate]) => expiryDate > currentDate)
    .sort(([, dateA], [, dateB]) => dateA - dateB)
    .map(([name]) => name);

// Виводимо результат у консоль
console.log("Медикаменти, строк зберігання яких ще не пройшов, у хронологічному порядку:", validMedicines);