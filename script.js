// ==========================================================================
// WINX CLUB COSPLAY PROJECT - JAVASCRIPT
// ==========================================================================

document.addEventListener('DOMContentLoaded', () => {
    // --- MODAL SOCIAL CONTROL ---
    const modal = document.getElementById('socialModal');
    const openBtns = document.querySelectorAll('.open-social-modal');
    const closeBtn = document.querySelector('.close-modal');

    openBtns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            if (modal) modal.style.display = 'flex';
        });
    });

    if (closeBtn) {
        closeBtn.addEventListener('click', () => {
            modal.style.display = 'none';
        });
    }

    if (modal) {
        window.addEventListener('click', (e) => {
            if (e.target === modal) {
                modal.style.display = 'none';
            }
        });
    }

    // --- FORM SUBMISSION HANDLER ---
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const keyInput = document.getElementById('secretKey').value;
            
            if (!keyInput) {
                alert("Per favore, inserisci la chiave d'accesso per inviare il messaggio.");
                return;
            }

            alert("Messaggio inviato con successo! Grazie per averci contattato.");
            contactForm.reset();
        });
    }
});