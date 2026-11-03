import { readFileSync, statSync } from "node:fs";
import { join } from "node:path";
import { fileURLToPath } from "node:url";
import { runInNewContext } from "node:vm";

const root = fileURLToPath(new URL("../dist/", import.meta.url));
const data = readFileSync(join(root, "data.js"), "utf8");
const { activities, schedule, plans } = runInNewContext(`${data}\n({activities,schedule,plans})`);
const html = readFileSync(join(root, "index.html"), "utf8");
const app = readFileSync(join(root, "app.js"), "utf8");
const fail = message => { throw new Error(message); };

if (activities.length !== 3 || schedule.length !== 10 || plans.length !== 3) fail("Faltan actividades, horarios o planes");
if (new Set(plans.map(plan => plan.id)).size !== plans.length || plans.some(plan => !Number.isInteger(plan.price) || plan.price <= 0)) fail("Planes o precios inválidos");
if (schedule.some(item => !activities.some(activity => activity.id === item.activity) || !/^\d\d:\d\d$/.test(item.time))) fail("Horario inválido");
for (const asset of ["index.html", "styles.css", "data.js", "app.js", "logo.svg", "assets/gimnasio.jpg"]) if (!statSync(join(root, asset)).size) fail(`Falta ${asset}`);
if (!html.includes("DEMO CONCEPTUAL") || !html.includes("no se envía") || !html.includes("noindex,nofollow")) fail("Faltan avisos de demo");
if (!app.includes("event.preventDefault()") || !app.includes("inquiryResult.replaceChildren()")) fail("Falta simulación de consulta");
console.log("OK: actividades, horarios, planes, imagen y consulta simulada");
