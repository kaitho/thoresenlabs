document.getElementById('year').textContent = new Date().getFullYear();

const params = new URLSearchParams(window.location.search);
const formStatus = document.getElementById('form-status');

if (params.get('sent') === '1' && formStatus) {
  formStatus.textContent = 'Takk! Meldingen er sendt.';
  window.history.replaceState({}, '', window.location.pathname + '#contact');
}
