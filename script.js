//your JS code here. If required.
const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('active');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('expanding');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('shrinked', toggleActive));
