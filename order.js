function goBack() {
    history.back();
}

const countrySelect = document.getElementById('country-select');
const formEurope = document.getElementById('form-europe');
const formRussia = document.getElementById('form-russia');
const formTurkey = document.getElementById('form-turkey');
countrySelect.addEventListener('change', function () {
    const selectedForm = document.getElementById(countrySelect.value);
    formEurope.style.display = 'none';
    formRussia.style.display = 'none';
    formTurkey.style.display = 'none';
    selectedForm.style.display = 'flex';
});

var productName = localStorage.getItem('productName');
var productNameInputs = document.getElementsByClassName('product-name-input');
for (var i = 0; i < productNameInputs.length; i++) {
    productNameInputs[i].value = productName;
}

// Получаем кнопку
var submitButton = document.getElementById("submit-button");
// Добавляем обработчик события на изменение полей формы
document.getElementById("form-europe").addEventListener("change", function () {
    // Получаем значения полей формы
    var name = document.getElementsByName("name")[0].value;
    var country = document.getElementsByName("country")[0].value;
    var region = document.getElementsByName("region")[0].value;
    var city = document.getElementsByName("city")[0].value;
    var adress = document.getElementsByName("adress")[0].value;
    var index = document.getElementsByName("index")[0].value;
    var number = document.getElementsByName("number")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var product = document.getElementsByName("product")[0].value;
    var size = document.getElementsByName("size")[0].value;
    // Проверяем, заполнены ли все поля формы
    if (name && country && city && adress && index && number && email && product && size) {
        // Если все поля заполнены, меняем цвет кнопки
        submitButton.classList.add("active");

    } else {
        // Если есть незаполненные поля, возвращаем кнопке исходный цвет
        submitButton.classList.remove("active");
    }
});

document.getElementById("form-europe").addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    // Получаем данные из формы
    var name = document.getElementsByName("name")[0].value;
    var country = document.getElementsByName("country")[0].value;
    var region = document.getElementsByName("region")[0].value;
    var city = document.getElementsByName("city")[0].value;
    var adress = document.getElementsByName("adress")[0].value;
    var index = document.getElementsByName("index")[0].value;
    var number = document.getElementsByName("number")[0].value;
    var email = document.getElementsByName("email")[0].value;
    var product = document.getElementsByName("product")[0].value;
    var size = document.getElementsByName("size")[0].value;
    // Формируем запрос к API Телеграма
    var token = '6839056866:AAF1KQcqmfSbE3_2wMYTL4DWSJSOUkhLwSI';
    var chatId = '-4100479671';
    var text = "Новый заказ из Европы/Америки:\nИмя: " + name + "\nСтрана: " + country + "\nОбласть: " + region + "\nГород: " + city + "\nАдрес: " + adress + "\nИндекс: " + index + "\nТелефон: " + number + "\nEmail: " + email + "\nТовар: " + product + "\nРазмер: " + size;
    var telegramUrl = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text);
    // Отправляем AJAX-запрос
    var xhr = new XMLHttpRequest();
    xhr.open("GET", telegramUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // После успешной отправки формы перенаправляем пользователя на другую страницу
            window.location.href = "./processed.html"; // Замените "новая_страница.html" на URL желаемой страницы
        }
    };
    xhr.send();
});


// RUSSIA
// Получаем кнопку
var submitButtonRu = document.getElementById("submit-button-ru");
// Добавляем обработчик события на изменение полей формы
document.getElementById("form-russia").addEventListener("change", function () {
    // Получаем значения полей формы
    var name = document.getElementsByName("name-ru")[0].value;
    var city = document.getElementsByName("city-ru")[0].value;
    var adress = document.getElementsByName("adress-ru")[0].value;
    var index = document.getElementsByName("index-ru")[0].value;
    var number = document.getElementsByName("number-ru")[0].value;
    var email = document.getElementsByName("email-ru")[0].value;
    var product = document.getElementsByName("product-ru")[0].value;
    var size = document.getElementsByName("size-ru")[0].value;
    // Проверяем, заполнены ли все поля формы
    if (name && city && adress && index && number && email && product && size) {
        // Если все поля заполнены, меняем цвет кнопки
        submitButtonRu.classList.add("active");

    } else {
        // Если есть незаполненные поля, возвращаем кнопке исходный цвет
        submitButtonRu.classList.remove("active");
    }
});

document.getElementById("form-russia").addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    // Получаем данные из формы
    var name = document.getElementsByName("name-ru")[0].value;
    var city = document.getElementsByName("city-ru")[0].value;
    var adress = document.getElementsByName("adress-ru")[0].value;
    var index = document.getElementsByName("index-ru")[0].value;
    var number = document.getElementsByName("number-ru")[0].value;
    var email = document.getElementsByName("email-ru")[0].value;
    var product = document.getElementsByName("product-ru")[0].value;
    var size = document.getElementsByName("size-ru")[0].value;
    // Формируем запрос к API Телеграма
    var token = '6839056866:AAF1KQcqmfSbE3_2wMYTL4DWSJSOUkhLwSI';
    var chatId = '-1002083798857';
    var text = "Новый заказ из России:\nИмя: " + name + "\nГород: " + city + "\nАдрес: " + adress + "\nИндекс: " + index + "\nНомер: " + number + "\nEmail: " + email + "\nТовар: " + product + "\nРазмер: " + size;
    var telegramUrl = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text);
    // Отправляем AJAX-запрос
    var xhr = new XMLHttpRequest();
    xhr.open("GET", telegramUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // После успешной отправки формы перенаправляем пользователя на другую страницу
            window.location.href = "./processed.html"; // Замените "новая_страница.html" на URL желаемой страницы
        }
    };
    xhr.send();
});

// TURKEY
// Получаем кнопку
var submitButtonTur = document.getElementById("submit-button-tur");
// Добавляем обработчик события на изменение полей формы
document.getElementById("form-turkey").addEventListener("change", function () {
    // Получаем значения полей формы
    var name = document.getElementsByName("name-tur")[0].value;
    var city = document.getElementsByName("city-tur")[0].value;
    var adress = document.getElementsByName("adress-tur")[0].value;
    var number = document.getElementsByName("number-tur")[0].value;
    var email = document.getElementsByName("email-tur")[0].value;
    var product = document.getElementsByName("product-tur")[0].value;
    var size = document.getElementsByName("size-tur")[0].value;
    // Проверяем, заполнены ли все поля формы
    if (name && city && adress && number && email && product && size) {
        // Если все поля заполнены, меняем цвет кнопки
        submitButtonTur.classList.add("active");

    } else {
        // Если есть незаполненные поля, возвращаем кнопке исходный цвет
        submitButtonTur.classList.remove("active");
    }
});

document.getElementById("form-turkey").addEventListener("submit", function (event) {
    event.preventDefault(); // Отменяем стандартное поведение формы
    // Получаем данные из формы
    var name = document.getElementsByName("name-tur")[0].value;
    var region = document.getElementsByName("region-tur")[0].value;
    var city = document.getElementsByName("city-tur")[0].value;
    var adress = document.getElementsByName("adress-tur")[0].value;
    var number = document.getElementsByName("number-tur")[0].value;
    var email = document.getElementsByName("email-tur")[0].value;
    var product = document.getElementsByName("product-tur")[0].value;
    var size = document.getElementsByName("size-tur")[0].value;
    // Формируем запрос к API Телеграма
    var token = '6839056866:AAF1KQcqmfSbE3_2wMYTL4DWSJSOUkhLwSI';
    var chatId = '-4100479671';
    var text = "Новый заказ из Турции:\nИмя: " + name + "\nОбласть: " + region + "\nГород: " + city + "\nАдрес: " + adress + "\nНомер: " + number + "\nEmail: " + email + "\nТовар: " + product + "\nРазмер: " + size;
    var telegramUrl = "https://api.telegram.org/bot" + token + "/sendMessage?chat_id=" + chatId + "&text=" + encodeURIComponent(text);
    // Отправляем AJAX-запрос
    var xhr = new XMLHttpRequest();
    xhr.open("GET", telegramUrl, true);
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            // После успешной отправки формы перенаправляем пользователя на другую страницу
            window.location.href = "./processed.html";
        }
    };
    xhr.send();
});

var latinRegex = /^[a-zA-Z0-9\s\-]+$/;
var cyrillicRegex = /^[а-яА-Я0-9\s\-]+$/;
var turRegex = /^[a-zA-Z0-9\s\-ıİşŞğĞüÜöÖçÇ]+$/u;

// Получаем все инпуты формы "form-europe"
var inputsLatin = document.querySelectorAll("#form-europe input.latin-input");
// Обработчик события ввода во всех инпутах
for (var i = 0; i < inputsLatin.length; i++) {
    inputsLatin[i].addEventListener("input", function () {
        var inputValue = this.value;
        // Проверяем, содержит ли значение только латинские символы
        if (!latinRegex.test(inputValue)) {
            // Если значение содержит не латинские символы, выводим сообщение об ошибке
            this.nextElementSibling.textContent = "Поле должно содержать только латинские буквы";
        } else {
            // Если значение содержит только латинские символы, очищаем сообщение об ошибке
            this.nextElementSibling.textContent = "";
        }
    });
}

// Получаем все инпуты формы "form-russia"
var inputsRussia = document.querySelectorAll("#form-russia input.cyrill-input");
// Обработчик события ввода во всех инпутах формы "form-russia"
for (var i = 0; i < inputsRussia.length; i++) {
    inputsRussia[i].addEventListener("input", function () {
        var inputValue = this.value;
        // Проверяем, содержит ли значение только символы кириллицы 
        if (!cyrillicRegex.test(inputValue)) {
            // Если значение содержит не символы кириллицы, выводим сообщение об ошибке
            this.nextElementSibling.textContent = "Поле должно содержать только буквы кириллицы";
        } else {
            // Если значение содержит только символы кириллицы, очищаем сообщение об ошибке
            this.nextElementSibling.textContent = "";
        }
    });
}

// Получаем все инпуты формы "form-russia"
var inputsTurkey = document.querySelectorAll("#form-turkey input.tur-input");
// Обработчик события ввода во всех инпутах формы "form-russia"
for (var i = 0; i < inputsTurkey.length; i++) {
    inputsTurkey[i].addEventListener("input", function () {
        var inputValue = this.value;
        // Проверяем, содержит ли значение только символы кириллицы 
        if (!turRegex.test(inputValue)) {
            // Если значение содержит не символы кириллицы, выводим сообщение об ошибке
            this.nextElementSibling.textContent = "Поле должно содержать только латинские и турецкие буквы";
        } else {
            // Если значение содержит только символы кириллицы, очищаем сообщение об ошибке
            this.nextElementSibling.textContent = "";
        }
    });
}