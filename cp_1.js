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

form.addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const comment = comments.value.trim();

  if (!name || !email || !comment) {
    alert('Please fill in all fields.');
    return;
  }

  const entry = document.createElement('div');
  entry.className = 'feedback-entry';
  entry.innerHTML = `<strong>${name}</strong> (${email})<p>${comment}</p>`;
  
  feedbackDisplay.appendChild(entry);
  form.reset();
  charCount.textContent = '0 characters';
});

document.body.addEventListener('click', () => {
  console.log('Background clicked!');
});

form.addEventListener('click', e => {
  e.stopPropagation();
});