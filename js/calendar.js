// js/calendar.js
/**
 * Moduł kartki z kalendarza.
 * 
 * Odpowiedzialność:
 * - Pobranie bieżącej daty systemowej (new Date())
 * - Sformatowanie dnia tygodnia, dnia i miesiąca w języku polskim
 *   (Wskazówka: new Intl.DateTimeFormat('pl-PL', { weekday: 'long', day: 'numeric', month: 'long' }))
 * - Bezpieczne wstrzyknięcie sformatowanej treści do dedykowanego slotu DOM (Zero-XSS)
 */

export function initCalendar() {
  const box = document.querySelector('#calendar-box');
  if (!box) return;

  const now = new Date();
  const text = now.toLocaleDateString('pl-PL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  });

  const dateEl = document.createElement('p');
  dateEl.textContent = text.charAt(0).toUpperCase() + text.slice(1);
  box.append(dateEl);
}
