const form = document.getElementById('feedback-form');
const feedbackDisplay = document.getElementById('feedback-display');
const charCount = document.getElementById('char-count');

form.addEventListener('mouseover', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    const tooltip = e.target.parentElement.nextElementSibling;
    if (tooltip && tooltip.classList.contains('tooltip')) {
      tooltip.style.display = 'inline';
    }
  }
});

form.addEventListener('mouseout', e => {
  if (e.target.tagName === 'INPUT' || e.target.tagName === 'TEXTAREA') {
    const tooltip = e.target.parentElement.nextElementSibling;
    if (tooltip && tooltip.classList.contains('tooltip')) {
      tooltip.style.display = 'none';
    }
  }
});

const comments = document.getElementById('comments');
comments.addEventListener('input', () => {
  charCount.textContent = `${comments.value.length} characters`;
});

