document.addEventListener('DOMContentLoaded', function() {
    var checkbox = document.getElementById('myCheckbox');

    // Verificați dacă există o valoare salvată în localStorage pentru caseta de selectare
    var isChecked = localStorage.getItem('checkboxState') === 'true';

    // Setăm starea casetei de selectare bazată pe cea salvată în localStorage
    checkbox.checked = isChecked;

    checkbox.addEventListener('click', function() {
        // Salvați starea curentă a casetei de selectare în localStorage
        localStorage.setItem('checkboxState', checkbox.checked);
    });
});
