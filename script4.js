//ЗАВДАННЯ 7

class Client {
    // Оголошення приватних властивостей #login та #email
    #login;
    #email;

    // Конструктор для створення об'єкта з властивостями login та email
    constructor(login, email) {
        this.#login = login;
        this.#email = email;
    }

    // Геттер для властивості login
    get login() {
        return this.#login;
    }

    // Сеттер для властивості login
    set login(value) {
        this.#login = value;
    }

    // Геттер для властивості email
    get email() {
        return this.#email;
    }

    // Сеттер для властивості email
    set email(value) {
        this.#email = value;
    }
}

// Приклад використання
const client = new Client('user123', 'user123@example.com');
console.log(client.login);  // Виведе: user123
console.log(client.email);  // Виведе: user123@example.com

client.login = 'newUser456';
client.email = 'newUser456@example.com';
console.log(client.login);  // Виведе: newUser456
console.log(client.email);  // Виведе: newUser456@example.com