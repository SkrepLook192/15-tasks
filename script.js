document.addEventListener("DOMContentLoaded", () => {
    // 1. Обработчик click на H1
    const header = document.querySelector("h1");
    header.addEventListener("click", () => {
        alert("Вы кликнули на заголовок - так держать!");
    });

    // 2. Обработчик click для кнопки второго семестра
    const button = document.getElementById("secondSemesterBtn");
    button.addEventListener("click", () => {
        const table = document.getElementById("practices");
        table.innerHTML = `
            <tr><td>1. Базовое бэкенд-приложение</td></tr>
            <tr><td>2. HTTP-запросы</td></tr>
            <tr><td>3. JSON и работа с ним</td></tr>
            <tr><td>4. HTTP-ответы</td></tr>
            <tr><td>5. Проектирование API</td></tr>
            <tr><td>6. Роутинг и его настройка</td></tr>
            <tr><td>7. NoSQL базы данных</td></tr>
            <tr><td>8. Обеспечение авторизации и доступа пользователей</td></tr>
            <tr><td>9. Работа сторонних сервисов уведомления и авторизации</td></tr>
            <tr><td>10. Основы ReactJS</td></tr>
            <tr><td>11. Работа с компонентами динамической DOM</td></tr>
            <tr><td>12. Использование хуков в React</td></tr>
            <tr><td>13. Основы микросервисной архитектуры</td></tr>
            <tr><td>14. Разработка классических модулей веб-приложений</td></tr>
        `;
    });

    // 3. Обработчики событий для фотографии студента
    const photo = document.getElementById("studentPhoto");

    // Увеличение размера при наведении
    photo.addEventListener("mouseover", () => {
        photo.style.transform = "scale(1.1)";
    });

    // Восстановление размера при уходе курсора
    photo.addEventListener("mouseout", () => {
        photo.style.transform = "scale(1)";
    });

    // Замена фотографии при клике
    photo.addEventListener("click", () => {
        photo.src = "teacher.jpg"; // Укажите ссылку на фото преподавателя
        photo.alt = "Любимый преподаватель";
    });

    // Alert при двойном клике
    photo.addEventListener("dblclick", () => {
        alert("Не налегай, у меня не так много любимых преподавателей");
    });
});
