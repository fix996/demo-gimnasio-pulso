const activities = [
  { id: "sala", title: "Sala de entrenamiento", label: "A tu ritmo", description: "Un espacio para fuerza, máquinas y ejercicios libres. Elegí una rutina que se adapte a vos.", icon: "01" },
  { id: "funcional", title: "Entrenamiento funcional", label: "En grupo", description: "Circuitos guiados para moverte, ganar fuerza y compartir el entrenamiento.", icon: "02" },
  { id: "movilidad", title: "Movilidad y estiramiento", label: "Bajá un cambio", description: "Una clase tranquila para trabajar movimiento y flexibilidad con acompañamiento.", icon: "03" },
];
const schedule = [
  { day: "Lunes", time: "08:00", title: "Funcional", duration: "50 min", activity: "funcional" },
  { day: "Lunes", time: "18:30", title: "Movilidad", duration: "45 min", activity: "movilidad" },
  { day: "Martes", time: "09:00", title: "Movilidad", duration: "45 min", activity: "movilidad" },
  { day: "Martes", time: "19:00", title: "Funcional", duration: "50 min", activity: "funcional" },
  { day: "Miércoles", time: "08:00", title: "Funcional", duration: "50 min", activity: "funcional" },
  { day: "Miércoles", time: "18:30", title: "Movilidad", duration: "45 min", activity: "movilidad" },
  { day: "Jueves", time: "09:00", title: "Movilidad", duration: "45 min", activity: "movilidad" },
  { day: "Jueves", time: "19:00", title: "Funcional", duration: "50 min", activity: "funcional" },
  { day: "Viernes", time: "08:00", title: "Funcional", duration: "50 min", activity: "funcional" },
  { day: "Viernes", time: "18:00", title: "Funcional", duration: "50 min", activity: "funcional" },
];
const plans = [
  { id: "sala", name: "Sala libre", price: 29000, detail: "Entrená en sala durante el horario de apertura.", features: ["Acceso a sala", "Rutina de inicio", "Consultas al equipo"] },
  { id: "clases", name: "Clases", price: 36000, detail: "Sumate a las clases grupales del calendario.", features: ["Funcional y movilidad", "Reserva de lugar a confirmar", "Opciones de mañana y tarde"] },
  { id: "completo", name: "Pase completo", price: 43000, detail: "Combiná la sala con las clases grupales.", features: ["Acceso a sala", "Clases grupales", "Rutina de inicio"] },
];
