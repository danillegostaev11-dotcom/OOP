function introduceYourself(name, age) {
    if (age !== undefined) {
        return "\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(name, " \u0438 \u043C\u043D\u0435 ").concat(age, " \u043B\u0435\u0442.");
    }
    else {
        return "\u041F\u0440\u0438\u0432\u0435\u0442, \u043C\u0435\u043D\u044F \u0437\u043E\u0432\u0443\u0442 ".concat(name, ".");
    }
}

var myLibrary = [
    {
        title: "это книга",
        author: "Я",
        year: 2026
    },
    {
        title: "печеньки",
        author: "снова Я",
        year: 1866
    },
    {
        title: "1984",
        author: "и тут Я"
    }
];

console.log(introduceYourself('Петр', 30));
console.log(introduceYourself('Анна'));
console.log(introduceYourself('Иван', 25));

console.log("\n=== Моя библиотека ===");
myLibrary.forEach(function (book, index) {
    console.log("".concat(index + 1, ". \"").concat(book.title, "\" - ").concat(book.author) +
        (book.year ? " (".concat(book.year, ")") : ' (год издания не указан)'));
});
