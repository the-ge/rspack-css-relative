document.addEventListener('DOMContentLoaded', () => {
    const d = new Date();
    const f = new Intl.DateTimeFormat('ro-RO', { year: "numeric", month: "numeric", day: "numeric", hour: 'numeric', minute: 'numeric', second: 'numeric', timeZone: 'Europe/Bucharest' });
    document.querySelector('.js-test').textContent = `[ ${f.format(d)} ] Bundling JavaScript works!`;
});
