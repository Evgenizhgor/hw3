/* ======  1   ======================================   
Необходимо вывести сообщение в консоль 
"все теги прогрузились",
 когда все теги будут созданы браузером. */
document.addEventListener("DOMContentLoaded", function (event) {
  console.log("все теги прогрузились");
});
/* 2.============================
 Необходимо вывести сообщение в консоль
 "страница загрузилась",
 когда все ресурсы страницы будут загружены. */
window.addEventListener("load", function (event) {
  console.log("страница загрузилась");
});
/* 3.=====================================
 При клике на какой-либо тег 
на странице в консоль должно выводиться сообщение наподобие:
- Класс "super_element" присутствует в элементе "div".
- сообщение должно определять присутствует или отсутствует класс "super_element"
- у элемента, а также выводить в нижнем регистре верный тег в данной строке, по
- которому был совершен клик.
- Необходимо использовать делегирование. */
const buddy = document.querySelector("body");
buddy.addEventListener("click", function (e) {
  /* if (e.target.classList.contains("super_element")) {
    console.log(`${this.tagName} contains the class`);       //wrong(
  }
}); */ let tag = e.target.tagName.toLowerCase();
  if (e.target.classList.contains("super_element")) {
    console.log(`${tag} содержит класс "super_element"`);
  } else {
    console.log(`${tag} не содержит класс 'super_element'`);
  }
});
/* const buddyChild = document.querySelectorAll("*");
console.log(buddyChild);
buddyChild.forEach((element) => {
  element.addEventListener("click", function () {
    let elem = element.tagName;
    console.log(elem);
  });
}); */
/* 4. Сделайте, чтобы при наведении на textarea
 в консоли появлялось сообщение: "Вы навели на textarea." */
const ariaText = document
  .querySelector("textarea")
  .addEventListener("mouseover", () => {
    console.log("вы навели мышь на textarea");
  });
//
//

/* 5.=================================================
 Необходимо повесить событие клика на тег ul.

В обработчике события в консоль необходимо выводить текст, 
который записан внутри элемента кнопки, по которой был произведен клик. 
Если клик был не по кнопке, то ничего выводить не нужно.
 Необходимо использовать делегирование. */
const allLi = document.querySelector("ul");
function listen(el) {
  console.log(`нажата ${el.target.textContent}`);
}
allLi.addEventListener("click", listen);
//
/* 6.=======================================
 Вопрос: Почему в console.log пишется сначала текст из 5 задания
 и только потом выводится текст из 3 задания,
  если мы кликаем по кнопкам в ul?
  Ответ необходимо написать здесь же,
 под этим комментарием, своими словами. 
 ******************************
Возможно дело в том что в пятом задании путь всплытия событий
(взаимосвязь элементов между собой) короче.
так нааример поставив в поиск qs body вместо ul ситуация 
с последовательностью меняется.
 */
//
/* 7. =========================       С помощью JS 
необходимо изменить цвет заднего фона каждого второго тега li. */

const evLi = document.querySelectorAll("li");
evLi.forEach((el, i) => {
  if (i % 2 !== 0) {
    el.addEventListener("click", () => {
      el.style.backgroundColor = "green";
    });
  } // not a function/?
});
function coloRed() {
  var listEl = document.querySelectorAll("li");
  for (let i = 1; i < listEl.length; i += 2) {
    listEl[i].onclick = listEl[i].style.backgroundColor = "red";
  }
}
allLi.addEventListener("click", coloRed);
