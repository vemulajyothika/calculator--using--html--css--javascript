const display = document.getElementById('display');
const historyList = document.getElementById('history-list');
const themeToggle = document.getElementById('themeToggle');
const modeLabel = document.getElementById('mode-label');

function append(value) {
  display.value += value;
}

function clearDisplay() {
  display.value = '';
}

function deleteLast() {
  display.value = display.value.slice(0, -1);
}

function calculate() {
  try {
    const result = eval(display.value);
    addToHistory(display.value + ' = ' + result);
    display.value = result;
  } catch {
    alert('Invalid Expression');
  }
}

function addToHistory(entry) {
  const li = document.createElement('li');
  li.textContent = entry;
  historyList.prepend(li);
}


document.addEventListener('keydown', (e) => {
  if ((e.key >= '0' && e.key <= '9') || "+-*/.%".includes(e.key)) {
    append(e.key);
  } else if (e.key === 'Enter') {
    calculate();
  } else if (e.key === 'Backspace') {
    deleteLast();
  } else if (e.key === 'Escape') {
    clearDisplay();
  }
});


themeToggle.addEventListener('change', () => {
  document.body.classList.toggle('light');
  modeLabel.textContent = document.body.classList.contains('light') ? 'Light Mode' : 'Dark Mode';
});