// Домашнє завдання
// --1--
// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній
// бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind
// const studentInfo = {
//   name: "Serhiy",
//   speciality: "fullstack",
//   score: "8",
//   missedless: "10",
//   showInfo: function () {
//     console.log(
//       "Student name: " +
//         this.name +
//         ", Spesiality: " +
//         this.speciality +
//         ", Average score: " +
//         this.score +
//         ", Missed lessons: " +
//         this.missedless
//     );
//   },
// };
// studentInfo2 = {
//   name: "Olha",
//   speciality: "JavaScript",
//   score: "10",
//   missedless: "15",
// };
// studentInfo3 = {
//   name: "Anna",
//   speciality: "designer",
//   score: "12",
//   missedless: "5",
// };
// studentInfo.showInfo.bind(studentInfo)();
// studentInfo.showInfo.call(studentInfo2);
// studentInfo.showInfo.apply(studentInfo3);

// --2--
// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// при натисканні на кнопку css - має видати коротке визначення що це таке

// const info = {
//   showInfo() {
//     alert(this.item);
//   },
// };
// const html = {
//   item: "HyperText Markup Language — мова розмітки гіпертексту",
// };
// const css = {
//   item: "Cascading Style Sheets це спеціальна мова стилю сторінок",
// };
// document
//   .querySelector("#html")
//   .addEventListener("click", info.showInfo.bind(html));
// document
//   .querySelector("#css")
//   .addEventListener("click", info.showInfo.bind(css));

// --3--
// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) jrange 89. 3,4

// const fruitShop = {
//   name: "banana",
//   price: 30,
//   weight: 4.5,
//   showPrice: function () {
//     console.log(this.name + " " + this.price * this.weight + "грн");
//   },
// };
// fruit1 = {
//   name: "cherry",
//   price: 58,
//   weight: 1.3,
// };
// fruit2 = {
//   name: "orange",
//   price: 89,
//   weight: 3.4,
// };

// fruitShop.showPrice();
// fruitShop.showPrice.call(fruit1);
// fruitShop.showPrice.apply(fruit2);
