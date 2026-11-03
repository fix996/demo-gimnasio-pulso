const activityGrid = document.querySelector("#activity-grid");
const dayFilters = document.querySelector("#day-filters");
const scheduleList = document.querySelector("#schedule-list");
const planGrid = document.querySelector("#plan-grid");
const inquiryForm = document.querySelector("#inquiry-form");
const inquiryResult = document.querySelector("#inquiry-result");
const interestField = document.querySelector("#visitor-interest");
let activeDay = "Todos";

const money = amount => new Intl.NumberFormat("es-AR", { style: "currency", currency: "ARS", maximumFractionDigits: 0 }).format(amount);

activityGrid.innerHTML = activities.map(activity => `
  <article class="activity-card">
    <div class="activity-number"><span>${activity.icon} / 03</span><span>${activity.label.toUpperCase()}</span></div>
    <span class="activity-mark" aria-hidden="true">${activity.id === "sala" ? "↗" : activity.id === "funcional" ? "✳" : "◌"}</span>
    <h3>${activity.title}</h3><p>${activity.description}</p>
  </article>`).join("");

planGrid.innerHTML = plans.map((plan, index) => `
  <article class="plan-card ${index === 1 ? "featured" : ""}">
    <span class="plan-kicker">PLAN 0${index + 1} / DEMO</span><h3>${plan.name}</h3><p>${plan.detail}</p>
    <div class="plan-price">${money(plan.price)} <small>/ mes de ejemplo</small></div>
    <ul>${plan.features.map(feature => `<li>${feature}</li>`).join("")}</ul>
    <button type="button" data-plan="${plan.id}">Consultar este plan <span aria-hidden="true">↗</span></button>
  </article>`).join("");

const days = ["Todos", ...new Set(schedule.map(item => item.day))];

function renderDays() {
  dayFilters.innerHTML = days.map(day => `<button type="button" data-day="${day}" aria-pressed="${day === activeDay}">${day}</button>`).join("");
}

function renderSchedule() {
  const visible = activeDay === "Todos" ? schedule : schedule.filter(item => item.day === activeDay);
  scheduleList.innerHTML = visible.map(item => `<div class="schedule-item"><span class="schedule-time">${item.time}</span><span class="schedule-name"><strong>${item.title}</strong><span>${item.day} · Clase de ejemplo</span></span><span class="schedule-duration">${item.duration}</span></div>`).join("");
}

renderDays();
renderSchedule();

dayFilters.addEventListener("click", event => {
  const button = event.target.closest("[data-day]");
  if (!button) return;
  activeDay = button.dataset.day;
  renderDays();
  renderSchedule();
  dayFilters.querySelector(`[data-day="${activeDay}"]`).focus();
});

planGrid.addEventListener("click", event => {
  const button = event.target.closest("[data-plan]");
  if (!button) return;
  const interest = { sala: "Sala de entrenamiento", clases: "Plan de clases", completo: "Pase completo" }[button.dataset.plan];
  if (!interest) return;
  interestField.value = interest;
  document.querySelector("#consulta").scrollIntoView({ behavior: matchMedia("(prefers-reduced-motion: reduce)").matches ? "auto" : "smooth" });
  interestField.focus({ preventScroll: true });
});

inquiryForm.addEventListener("input", () => { inquiryResult.hidden = true; });
inquiryForm.addEventListener("submit", event => {
  event.preventDefault();
  if (!inquiryForm.reportValidity()) return;
  const name = document.querySelector("#visitor-name").value.trim();
  if (name.length < 2) {
    const nameField = document.querySelector("#visitor-name");
    nameField.setCustomValidity("Escribí al menos dos caracteres.");
    nameField.reportValidity();
    nameField.focus();
    return;
  }
  inquiryResult.replaceChildren();
  const heading = document.createElement("strong");
  heading.textContent = "Consulta de ejemplo preparada";
  const summary = document.createElement("p");
  summary.textContent = `${name}: ${interestField.value} · ${document.querySelector("#visitor-time").value.toLowerCase()}.`;
  const note = document.createElement("small");
  note.textContent = "No se envió información. Un gimnasio real confirmaría el plan, el precio y los cupos disponibles.";
  inquiryResult.append(heading, summary, note);
  inquiryResult.hidden = false;
  inquiryResult.focus();
});
document.querySelector("#visitor-name").addEventListener("input", event => event.target.setCustomValidity(""));
