// DEBUG SCRIPT: Run this in browser console to test theme toggle

// Check current theme
console.log('=== THEME DEBUG ===');
console.log('Root classes:', document.documentElement.className);
console.log('Has light-mode class:', document.documentElement.classList.contains('light-mode'));
console.log('localStorage theme:', localStorage.getItem('theme'));

// Test CSS variables
const styles = getComputedStyle(document.documentElement);
console.log('CSS Variables:');
console.log('--brand-bg:', styles.getPropertyValue('--brand-bg'));
console.log('--brand-text-primary:', styles.getPropertyValue('--brand-text-primary'));
console.log('--brand-accent:', styles.getPropertyValue('--brand-accent'));

// Force dark mode
console.log('\n=== FORCING DARK MODE ===');
document.documentElement.classList.remove('light-mode');
localStorage.setItem('theme', 'dark');
console.log('Set to dark mode');
console.log('Refresh page or reload components');

// To force light mode, run:
// document.documentElement.classList.add('light-mode');
// localStorage.setItem('theme', 'light');
// location.reload();
