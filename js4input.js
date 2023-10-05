document.addEventListener('DOMContentLoaded', function() {
    var checkboxes = document.querySelectorAll('.myCheckbox');

    checkboxes.forEach(function(checkbox) {
        checkbox.addEventListener('click', function() {
            // Verificăm dacă checkboxul este bifat
            if (checkbox.checked) {
                // Salvăm starea în localStorage
                localStorage.setItem(checkbox.id, 'checked');
            } else {
                // Dacă nu este bifat, ștergem starea din localStorage
                localStorage.removeItem(checkbox.id);
            }
        });

        // Verificăm starea din localStorage și setăm checkboxul în consecință
        if (localStorage.getItem(checkbox.id) === 'checked') {
            checkbox.checked = true;
        }
    });
});
