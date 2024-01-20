function toggleTable(tableNumber) {
    // Получаем ссылку на таблицу по номеру
    var table = document.getElementById('table' + tableNumber);
    // Получаем ссылку на соответствующий элемент стрелки по ID
    var iconElement = document.getElementById('icon-support' + tableNumber);

    // Проверяем текущее состояние видимости таблицы
    if (table.style.display === 'none' || table.style.display === '') {
        // Если таблица скрыта или свойство display не установлено, показываем ее
        table.style.display = 'table';
        if (iconElement) {
            iconElement.classList.add('rotate'); // Добавляем класс rotate
        }
    } else {
        // Если таблица отображается, скрываем ее
        table.style.display = 'none';
        if (iconElement) {
            iconElement.classList.remove('rotate'); // Удаляем класс rotate
        }
    }
}