// Verificăm dacă există deja o stare salvată în local storage
var savedState = localStorage.getItem('checkboxState');

// Dacă există, setăm starea checkbox-ului corespunzător
if (savedState === 'checked') {
    document.getElementById('myCheckbox').checked = true;
}

// Adăugăm un eveniment pentru a salva starea în local storage la fiecare modificare
document.getElementById('myCheckbox').addEventListener('change', function() {
    if (this.checked) {
        localStorage.setItem('checkboxState', 'checked');
    } else {
        localStorage.removeItem('checkboxState');
    }
});
