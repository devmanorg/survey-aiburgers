const json = {
  title: "Пройдите Опрос о качестве кафе \"Ai Burgers!\"",
  // showProgressBar: "top",  // Добавляет к опроснику блок `номер текущей страницы / количество страниц`
  pages: [ // Разбивка на страницы реализуется через список объектов `pages`
    {
      questions: [  // Разбивка на блоки / вопросы -- через список объектов `questions`
        {
          type: "html",
          name: "description",
          html: "<h6>Спасибо, что посетили \"Ai Burger!\" — поделитесь вашим мнением в нашем коротком опросе, чтобы помочь нам стать лучше, а также получите шанс выиграть подарочный сертификат!</h6>",
        },
        {
          type: "rating",
          name: "satisfaction",
          isRequired: true,
          // defaultValue: 5,
          "rateCount": 10,
          "rateMax": 10,
          title: "На сколько Вас устраивает \"Ai Burgers!\"?",
          mininumRateDescription: "Не устраивает",
          maximumRateDescription: "Полностью устраивает",
        },
        {
          type: "checkbox",
          name: "advantages",
          // isRequired: true,
          title:
            "Что Вам больше всего понравилось?",
          choices: [
            "product|Продукт",
            "price|Цена",
            "placement|Размещение",
            "promotion|Продвижение",
          ],
        },
        {
          type: "comment",  // `type: "text"` -- для однострочного поля ввода
          name: "comment",
          title:
            "Чего не хватает \"Ai Burgers!\"?",
        },
      ],
    },
  ],
}

var survey = new Survey.Model(json)

survey.onComplete.add(function (result) {
  document.querySelector("#result").innerHTML = "result: " + JSON.stringify(result.data)
})

document.addEventListener("DOMContentLoaded", function() {
    survey.render(document.getElementById("surveyContainer"));
});
