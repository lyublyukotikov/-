document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const activateAllButton = document.querySelector('.directions-form__button');
  const items = document.querySelectorAll('.card__directions .item');
  const checkboxes = document.querySelectorAll('.card__directions input[type="checkbox"]');

  // Функция для фильтрации элементов на основе ввода в поле поиска
  function filterItems() {
    const query = searchInput.value.toLowerCase();
    items.forEach(item => {
      const title = item.querySelector('.item-title').textContent.toLowerCase();
      if (title.includes(query)) {
        item.classList.remove('hidden');
      } else {
        item.classList.add('hidden');
      }
    });
  }

  // Функция для активации всех чекбоксов
  function activateAll(event) {
    event.preventDefault(); // Предотвращает отправку формы и обновление страницы
    checkboxes.forEach(checkbox => {
      checkbox.checked = true;
    });
  }

  // Обработчик ввода в поле поиска
  searchInput.addEventListener('input', filterItems);

  // Обработчик нажатия на кнопку "Активировать все"
  activateAllButton.addEventListener('click', activateAll);
});
