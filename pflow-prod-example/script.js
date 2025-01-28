// $(function(){

var json = {
  title: "Опрос 'Отзывов о продукте'",
  // showProgressBar: "top",
  pages: [ // Разбивка на страницы реализуется через список объектов `pages`
    {
      questions: [  // Разбивка на блоки / вопросы -- через список объектов `questions`
        {
          type: "rating",
          name: "satisfaction",
          title: "На сколько Вы удовлетворены нашим Продуктом?",
          mininumRateDescription: "Не удовлетворён",
          maximumRateDescription: "Полностью удовлетворён",
        },
        {
          type: "checkbox",
          name: "recommended",
          visibleIf: "{satisfaction} > 3",
          title:
            "Кому бы Вы порекомендовали наш Продукт?",
          choices: [
            "family|Семье",
            "friends|Друзьям",
            "fools|Коллегам",
          ],
        },
        {
          type: "checkbox",
          name: "troubles",
          visibleIf: "{satisfaction} < 3",
          title:
            "Что Вам больше всего не понравилось?",
          choices: [
            "product|Продукт",
            "price|Цена",
            "placement|Размещение",
            "promotion|Продвижение",
          ],
        },
				{
          type: "radiogroup",
          name: "unique_selling_proposition",
          title:
            "Что на ваш взгляд является главным конкурентным преимуществом Продукта?",
          choices: [
            "features|Фичи",
            "support|Поддержка",
            "price|Цена",
          ],
        },
        {
          type: "text",  // Автоматически опознаётся браузером как поле ввода e-mail
          name: "email",
          title:
            "e-mail",
        },
        {
          type: "comment",
          name: "comment",
          title:
            "Напишите, чего не хватает нашему Продукту для получения максимальной оценки.",
        },
      ],
    },
  ],
}

Survey.StylesManager.applyTheme("defaultV2")

var survey = new Survey.Model(json)

survey.onComplete.add(function (result) {
  document.querySelector("#result").innerHTML = "result: " + JSON.stringify(result.data)
})

survey.render("surveyElement")


// });