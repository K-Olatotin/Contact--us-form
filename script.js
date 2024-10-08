document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const form = e.target;
    if (form.checkValidity()) {
        document.getElementById('success-message').classList.remove('hidden');

        form.reset();

        setTimeout(() => {
            document.getElementById('success-message').classList.add('hidden');
        }, 3000);
    } else {
        form.reportValidity();
    }
});