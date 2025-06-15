document.addEventListener('DOMContentLoaded', function() {
    const envelope = document.querySelector('.envelope');
    const note = document.querySelector('.note');
    const fathersDay = document.querySelector('.fathers-day');
    
    envelope.addEventListener('click', function() {
        envelope.classList.toggle('active');
        note.classList.toggle('active');
        fathersDay.classList.toggle('hidden');
    });
}); 