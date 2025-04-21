// public/script.js
window.addEventListener('DOMContentLoaded', () => {
  const options = { duration: 2, separator: ',' };

  const countAnimated = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    const num = parseInt(el.textContent.trim(), 10);
    const count = new CountUp.CountUp(id, num, options);
    if (!count.error) count.start();
  };

  // Animate each dynamic stat
  ['happyCats', 'lovingHomes', 'friendlyFelines', 'numBreeds', 'numCats', 'numUsers'].forEach(id => {
    countAnimated(id);
  });
});
