// ====== AQUÍ EDITAS TÚ. Es el "cerebro" de la web. ======

// 1) Años y convocatorias que se muestran
const ANYOS = [2026, 2025, 2024, 2023, 2022, 2021, 2020, 2019, 2018,];
const CONVOCATORIAS = ["Ordinaria (junio)", "Extraordinaria (julio)", "Modelo"];

// 2) Asignaturas (añade o quita las que quieras)
const ASIGNATURAS = [
  "Lengua Castellana y Literatura II",
  "Lengua Valenciana y Literatura II",
  "Lengua Extranjera (Inglés)",
  "Historia de España",
  "Historia de la Filosofía",
  "Matemáticas II",
  "Física",
  "Química",
  "Dibujo Técnico II",
];

// 3) ENLACES a cada examen. Formato:  "año|convocatoria|asignatura": "https://..."
// Copia los enlaces desde las webs oficiales (UV, UA, UJI, UMH, UPV, Conselleria).
// Si no hay enlace, la web pondrá "No disponible".
const ENLACES = {

// Exámenes de Matemáticas II 
"2026|Ordinaria (junio)|Matemáticas II": "examenes/Matemáticas II/(Ordinaria de 2026).pdf",
"2026|Extraordinaria (julio)|Matemáticas II": "examenes/Matemáticas II/(Extraordinaria de 2026).pdf",
"2025|Ordinaria (junio)|Matemáticas II": "examenes/Matemáticas II/(Ordinaria de 2025).pdf",
"2025|Extraordinaria (julio)|Matemáticas II": "examenes/Matemáticas II/(Ordinaria de 2025).pdf",
"2024|Ordinaria (junio)|Matemáticas II": "examenes/Matemáticas II/(Ordinaria de 2024).pdf",
"2024|Extraordinaria (julio)|Matemáticas II": "examenes/Matemáticas II/(Ordinaria de 2024).pdf",
"2023|Ordinaria (junio)|Matemáticas II": "examenes/Matemáticas II/(Ordinaria de 2023).pdf",
"2023|Extraordinaria (julio)|Matemáticas II": "examenes/Matemáticas II/(Ordinaria de 2023).pdf",

// Exámenes Física
"2026|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2026).pdf",
"2026|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2026).pdf",
//"2026|Modelo|Física": "examenes/Física/(Modelo de 2026).pdf",
"2025|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2025).pdf",
"2025|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2025).pdf",
//"2025|Modelo|Física": "examenes/Física/(Modelo de 2025).pdf",
"2024|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2024).pdf",
"2024|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2024).pdf",
//"2024|Modelo|Física": "examenes/Física/(Modelo de 2024).pdf",
"2023|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2023).pdf",
"2023|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2023).pdf",
//"2023|Modelo|Física": "examenes/Física/(Modelo de 2023).pdf",
"2022|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2022).pdf",
"2022|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2022).pdf",
"2021|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2021).pdf",
"2021|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2021).pdf",
"2020|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2020).pdf",
"2020|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2020).pdf",
"2019|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2019).pdf",
"2019|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2019).pdf",



// Exámenes Lengua y Literatura 
//"2026|Ordinaria (junio)|Lengua Castellana y Literatura II": "examenes/Lengua Castellana y Literatura II/(Ordinaria de 2026).pdf",
//"2026|Extraordinaria (julio)|Lengua Castellana y Literatura II": "examenes/Lengua Castellana y Literatura II/(Extraordinaria de 2026).pdf",
//"2025|Ordinaria (junio)|Lengua Castellana y Literatura II": "examenes/Lengua Castellana y Literatura II/(Ordinaria de 2025).pdf",
//"2025|Extraordinaria (julio)|Lengua Castellana y Literatura II": "examenes/Lengua Castellana y Literatura II/(Extraordinaria de 2025).pdf",
//"2024|Ordinaria (junio)|Lengua Castellana y Literatura II": "examenes/Lengua Castellana y Literatura II/(Ordinaria de 2024).pdf",
//"2024|Extraordinaria (julio)|Lengua Castellana y Literatura II": "examenes/Lengua Castellana y Literatura II/(Extraordinaria de 2024).pdf",
//"2023|Ordinaria (junio)|Lengua Castellana y Literatura II": "examenes/Lengua Castellana y Literatura II/(Ordinaria de 2023).pdf",
//"2023|Extraordinaria (julio)|Lengua Castellana y Literatura II": "examenes/Lengua Castellana y Literatura II/(Extraordinaria de 2023).pdf",
  
};


// 5) Iconos de cada asignatura (cambia los emojis a tu gusto)
const ICONOS = {
  "Lengua Castellana y Literatura II": "📖",
  "Lengua Valenciana y Literatura II": "🍊",
  "Lengua Extranjera (Inglés)": "🌍",
  "Historia de España": "🏰",
  "Historia de la Filosofía": "🤔",
  "Matemáticas II": "📐",
  "Matemáticas Aplicadas a las CCSS II": "📊",
  "Física": "⚛️",
  "Química": "🧪",
  "Biología": "🧬",
  "Geología y Ciencias Ambientales": "🌋",
  "Dibujo Técnico II": "✏️",
  "Historia del Arte": "🎨",
  "Latín II": "🏛️",
  "Griego II": "🏺",
  "Geografía": "🗺️",
  "Empresa y Diseño de Modelos de Negocio": "💼",
  "Economía de la Empresa": "📈"
};

// SOLUCIONES: mismo formato. Solo sale el botón verde si pones la solución aquí.
const SOLUCIONES = {
// Examenes Fisica Solución
"2026|Ordinaria (junio)|Física": "examenes/Física/Soluciones_Fisica_PAU.JN_2026.pdf",
//"2026|Extraordinaria (julio)|Física": "examenes/Física/Soluciones_Fisica_PAU.JL_2026.pdf",
//"2026|Modelo|Física": "examenes/Física/(Modelo de 2026).pdf",
//"2025|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2025).pdf",
//"2025|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2025).pdf",
//"2025|Modelo|Física": "examenes/Física/(Modelo de 2025).pdf",
//"2024|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2024).pdf",
//"2024|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2024).pdf",
//"2024|Modelo|Física": "examenes/Física/(Modelo de 2024).pdf",
//"2023|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2023).pdf",
//"2023|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2023).pdf",
//"2023|Modelo|Física": "examenes/Física/(Modelo de 2023).pdf",
//"2022|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2022).pdf",
//"2022|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2022).pdf",
//"2021|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2021).pdf",
//"2021|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2021).pdf",
//"2020|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2020).pdf",
//"2020|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2020).pdf",
//"2019|Ordinaria (junio)|Física": "examenes/Física/(Ordinaria de 2019).pdf",
//"2019|Extraordinaria (julio)|Física": "examenes/Física/(Extraordinaria de 2019).pdf",
};