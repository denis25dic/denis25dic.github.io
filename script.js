let menuVisible = false;

// Muestra u oculta el menú responsive
function mostrarOcultarMenu(){
    const nav = document.getElementById("nav");
    menuVisible = !menuVisible;
    nav.classList = menuVisible ? "responsive" : "";
}

function seleccionar(){
    document.getElementById("nav").classList = "";
    menuVisible = false;
}

// Header: sombra/fondo más sólido al hacer scroll
const header = document.getElementById("header");
window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
        header.style.boxShadow = "0 6px 20px rgba(0,0,0,.35)";
    } else {
        header.style.boxShadow = "none";
    }
});

// Resalta el link de navegación activo según la sección visible
const secciones = document.querySelectorAll("section[id]");
const navLinks = document.querySelectorAll(".nav-link");

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            navLinks.forEach(link => {
                link.classList.toggle("active", link.getAttribute("href") === `#${entry.target.id}`);
            });
        }
    });
}, { rootMargin: "-40% 0px -55% 0px" });

secciones.forEach(sec => navObserver.observe(sec));

// Animación de aparición al hacer scroll para elementos .reveal
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
        if (entry.isIntersecting) {
            setTimeout(() => entry.target.classList.add("visible"), i * 60);
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.15 });

document.querySelectorAll(".reveal").forEach(el => revealObserver.observe(el));

// ================== IDIOMA (ES / EN) ==================
const traducciones = {
    "nav.inicio": ["Inicio", "Home"],
    "nav.sobremi": ["Sobre mí", "About"],
    "nav.skills": ["Skills", "Skills"],
    "nav.curriculum": ["Currículum", "Resume"],
    "nav.portfolio": ["Portfolio", "Portfolio"],

    "hero.kicker": ["// Hola, mi nombre es", "// Hi, my name is"],
    "hero.role": ["Analista de Software", "Software Analyst"],
    "hero.desc": [
        "Construyo software que la gente usa de verdad — sistemas financieros en producción, apps móviles, e-commerce y automatización — y sigo aprendiendo Ciencias de Datos e IA en el camino.",
        "I build software people actually use — financial systems in production, mobile apps, e-commerce and automation — while I keep learning Data Science and AI along the way."
    ],
    "hero.btnCV": ["Ver CV", "View Resume"],
    "hero.btnProy": ["Ver Proyectos", "View Projects"],

    "sobremi.pretitulo": ["Conóceme", "Get to know me"],
    "sobremi.titulo": ["Sobre Mí", "About Me"],
    "sobremi.bio": [
        '<span>Hola, soy Denis Grijalva.</span> Soy apasionado por la tecnología, con sed de aprendizaje. Tengo habilidades sólidas en la resolución de problemas técnicos, liderazgo de equipos y adaptabilidad a nuevos entornos y tecnologías. Además, me comprometo con los más altos estándares éticos, valorando la integridad y la responsabilidad en el manejo de datos y sistemas de información.',
        "<span>Hi, I'm Denis Grijalva.</span> I'm passionate about technology and always eager to learn. I have strong skills in technical problem-solving, team leadership, and adapting to new environments and technologies. I'm also committed to the highest ethical standards, valuing integrity and responsibility in handling data and information systems."
    ],
    "datos.titulo": ["Datos Personales", "Personal Info"],
    "datos.cumple.label": ["Cumpleaños", "Birthday"],
    "datos.cumple.val": ["25 de diciembre", "December 25"],
    "datos.email.label": ["Email", "Email"],
    "datos.dir.label": ["Dirección", "Location"],
    "datos.dir.val": ["Ciudad de Guatemala, Guatemala", "Guatemala City, Guatemala"],
    "datos.cargo.label": ["Cargo", "Role"],
    "datos.cargo.val": ["Desarrollador · Analista de Software", "Developer · Software Analyst"],

    "intereses.titulo": ["Intereses", "Interests"],
    "int.juegos": ["Juegos", "Gaming"],
    "int.redes": ["Redes", "Networking"],
    "int.apps": ["Apps", "Apps"],
    "int.seguridad": ["Seguridad", "Security"],
    "int.metodologia": ["Metodología", "Methodology"],
    "int.espacio": ["Espacio", "Space"],

    "skills.pretitulo": ["Lo que sé hacer", "What I can do"],
    "skill.bd": ["Bases de Datos", "Databases"],
    "skill.datos": ["Datos & Reportería", "Data & Reporting"],
    "skill.ia": ["IA Aplicada", "Applied AI"],
    "skill.otros": ["Otros", "Other"],

    "soft.titulo": ["Habilidades Profesionales", "Professional Skills"],
    "soft1.t": ["Resolución de problemas", "Problem Solving"],
    "soft1.d": ["Analiza, implementa y evoluciona.", "Analyze, implement, and evolve."],
    "soft2.t": ["Trabajo en equipo", "Teamwork"],
    "soft2.d": ["Logros alcanzados juntos son más significativos.", "Achievements reached together mean more."],
    "soft3.t": ["Colaboración", "Collaboration"],
    "soft3.d": ["Creemos juntos algo más grande que la suma de nuestras partes.", "Together we build something bigger than the sum of our parts."],
    "soft4.t": ["Ética profesional", "Professional Ethics"],
    "soft4.d": ["La integridad define nuestro camino.", "Integrity defines our path."],
    "soft5.t": ["Curiosidad constante", "Constant Curiosity"],
    "soft5.d": ["Siempre buscando aprender algo nuevo.", "Always looking to learn something new."],

    "cv.pretitulo": ["Mi trayectoria", "My journey"],
    "cv.titulo": ["Currículum", "Resume"],
    "cv.edu": ["Educación", "Education"],
    "cv.work": ["Experiencia de Trabajo", "Work Experience"],

    "edu1.fecha": ["Actualidad", "Present"],
    "edu1.h": ["Ingeniería en Sistemas (10mo.) & Ciencias de Datos", "Systems Engineering (10th sem.) & Data Science"],
    "edu1.p": ["Formación en desarrollo de software, bases de datos y análisis de datos.", "Training in software development, databases, and data analysis."],
    "edu2.fecha": ["Séptimo semestre", "7th semester"],
    "edu2.h": ["Ingeniería Electrónica", "Electronics Engineering"],
    "edu2.p": ["Base en electrónica, circuitos y sistemas digitales.", "Foundation in electronics, circuits, and digital systems."],
    "edu3.fecha": ["Diversificado", "High School"],
    "edu3.h": ["Perito en Electrónica y Bachiller Industrial", "Electronics Technician & Industrial Diploma"],
    "edu3.p": ["Formación técnica en electrónica industrial.", "Technical training in industrial electronics."],
    "edu4.fecha": ["6 años", "6 years"],
    "edu4.h": ["Roadmap autodidacta", "Self-taught roadmap"],
    "edu4.emp": ["Formación continua", "Continuous learning"],
    "edu4.p": [
        "Fundamentos de programación, lenguajes y POO, bases de datos, desarrollo web/móvil y arquitectura de software.",
        "Programming fundamentals, languages and OOP, databases, web/mobile development, and software architecture."
    ],

    "work1.fecha": ["Octubre 2025 — Actualidad", "October 2025 — Present"],
    "work1.h": ["Analista de Software", "Software Analyst"],
    "work1.p": [
        "Desarrollo de Gestión de Fondos Rotativos y Módulo de Pagos Multiempresa (Django + SQL Server, integrados con un sistema contable legado), con dashboards de trazabilidad, reportería gerencial y flujos multi-rol. También administro la base de datos: consultas avanzadas, respaldos/recuperación y gestión de usuarios y permisos.",
        "Development of Revolving Fund Management and Multi-Company Payments Module (Django + SQL Server, integrated with a legacy accounting system), with traceability dashboards, management reporting, and multi-role workflows. Also handle database administration: advanced queries, backups/restore, and user and permission management."
    ],
    "work2.fecha": ["3+ años de experiencia", "3+ years of experience"],
    "work2.h": ["Desarrollo de Software / DBA", "Software Development / DBA"],
    "work2.p": [
        "Más de 15 proyectos web, móviles, de e-commerce y automatización para clientes en Guatemala, Perú, España, Colombia, Brasil y Argentina.",
        "15+ web, mobile, e-commerce, and automation projects for clients in Guatemala, Peru, Spain, Colombia, Brazil, and Argentina."
    ],
    "work3.fecha": ["Nov 2016 — Ene 2023", "Nov 2016 — Jan 2023"],
    "work3.h": ["Técnico / Líder de Grupo / Gestor de Inventarios", "Technician / Team Lead / Inventory Manager"],
    "work3.p": [
        "Gestión de inventarios, soporte técnico y liderazgo de un grupo de 4 personas.",
        "Inventory management, technical support, and leadership of a 4-person team."
    ],

    "port.pretitulo": ["Mi trabajo", "My work"],
    "port.titulo": ["Portfolio", "Portfolio"],
    "port.nota": [
        "Los dos primeros proyectos tienen capturas reales y código abierto; el resto son mockups ilustrativos del tipo de interfaz, no capturas de sistemas reales, ya que ese código pertenece a clientes/empleadores.",
        "The first two projects are real screenshots of open-source code; the rest are illustrative mockups of each interface type, not real screenshots, since that code belongs to clients/employers."
    ],

    "p1.h": ["Gestión de Fondos Rotativos", "Revolving Fund Management"],
    "p1.p": ["Sistema de caja chica multiempresa integrado con un ERP legado vía stored procedures, con flujo de aprobación en más de 10 estados y trazabilidad completa por fondo.",
             "Multi-company petty cash system integrated with a legacy ERP via stored procedures, with an approval flow spanning 10+ states and full per-fund traceability."],
    "p2.h": ["Módulo de Pagos Multiempresa", "Multi-Company Payments Module"],
    "p2.p": ["Gestión de pagos entre empresas de un mismo grupo, con dashboard gerencial, exportación a PDF/Excel y corte de caja automatizado.",
             "Payment management across companies within the same group, with a management dashboard, PDF/Excel export, and automated cash cutoffs."],
    "p3.h": ["Sistema de Cheques Corporativos", "Corporate Check System"],
    "p3.p": ["Levantamiento de requerimientos con stakeholders para digitalizar la emisión y el control de cheques de la organización.",
             "Requirements gathering with stakeholders to digitize the organization's check issuance and control process."],
    "p4.h": ["Gestión Médica de Pacientes", "Patient Management System"],
    "p4.p": ["Plataforma web para administrar pacientes e historias clínicas de un centro de salud, con control de acceso por rol.",
             "Web platform to manage patients and medical records for a healthcare center, with role-based access control."],
    "p5.h": ["Tablero Power BI — Compras y Stock", "Power BI Dashboard — Purchasing & Stock"],
    "p5.p": ["Tablero de control para monitorear compras y niveles de inventario en tiempo real para un cliente en Argentina.",
             "Control dashboard to monitor purchasing and inventory levels in real time for a client in Argentina."],
    "p6.h": ["App Móvil de Turismo", "Tourism Mobile App"],
    "p6.p": ["Aplicación móvil completa para reservar habitaciones y coordinar traslados de huéspedes de un hotel en Brasilia.",
             "Full mobile app to book rooms and coordinate guest transfers for a hotel in Brasília."],
    "p7.h": ["Tienda Shopify + Dropshipping", "Shopify Store + Dropshipping"],
    "p7.p": ["Configuración de tienda en línea con proveedores dropshipping e integración de pasarela de pagos para una empresa en México.",
             "Online store setup with dropshipping suppliers and payment gateway integration for a company in Mexico."],
    "p8.h": ["Asistente de Voz con IA", "AI Voice Assistant"],
    "p8.p": ["Asistente de voz que integra la API de OpenAI para interpretar comandos y responder en lenguaje natural.",
             "Voice assistant that integrates the OpenAI API to interpret commands and respond in natural language."],
    "p9.h": ["Dashboard Gerencial (Académico)", "Management Dashboard (Academic)"],
    "p9.p": ["Informe ejecutivo interactivo sobre el impacto de la IA en el desempeño estudiantil, construido a partir de un dataset de Kaggle.",
             "Interactive executive report on AI's impact on student performance, built from a Kaggle dataset."],
    "p10.h": ["Centro de Ayuda Interactivo", "Interactive Help Center"],
    "p10.p": ["Portal de ayuda con artículos organizados por categoría para los clientes de un banco en Chile.",
              "Help portal with articles organized by category for a bank's customers in Chile."],
    "p11.h": ["Microblog AOVE", "AOVE Microblog"],
    "p11.p": ["Sitio de comercialización de aceite de oliva virgen extra de alta gama, con enfoque editorial y de marca.",
              "Marketing site for a high-end extra virgin olive oil, with an editorial and branding focus."],
    "p12.h": ["Automatización con Make.com", "Automation with Make.com"],
    "p12.p": ["Flujos de automatización entre aplicaciones para eliminar tareas manuales repetitivas de un equipo.",
              "Automation flows between apps to eliminate a team's repetitive manual tasks."],
    "p13.h": ["Gestión de Denuncias de Bullying", "Bullying Report Management"],
    "p13.p": ["Aplicación para canalizar y dar seguimiento a denuncias de bullying dentro de instituciones educativas.",
              "Application to channel and track bullying reports within educational institutions."],
    "p15.h": ["Mini Fondos Rotativos", "Mini Revolving Funds"],
    "p15.p": ["Versión educativa y pública de un sistema de fondos rotativos: flujo de aprobación de liquidaciones, saldo disponible automático y exportación a Excel/PDF. Datos ficticios.",
              "Public educational version of a revolving-fund system: settlement approval flow, automatic available balance and Excel/PDF export. Fictional data."],
    "p16.h": ["Mini Tesorería", "Mini Treasury"],
    "p16.p": ["Dos módulos de tesorería con datos ficticios: control de cheques por estados y proyección de saldo a 14 días por cuenta bancaria.",
              "Two treasury modules with fictional data: status-based check control and 14-day balance projection per bank account."],
    "p.abierto": ["Código abierto", "Open source"],
    "p.ver": ["Ver código", "View code"],
    "p14.h": ["Backend de Tarifa Dinámica", "Dynamic Pricing Backend"],
    "p14.p": ["Colaboración en el backend de precios dinámicos para un consorcio de transporte en Perú.",
              "Collaboration on the dynamic pricing backend for a transportation consortium in Peru."],

    "footer.rights": ["© 2026 Denis Grijalva. Todos los derechos reservados.", "© 2026 Denis Grijalva. All rights reserved."],
};

let idiomaActual = "es";

function cambiarIdioma(){
    idiomaActual = idiomaActual === "es" ? "en" : "es";
    const idx = idiomaActual === "es" ? 0 : 1;
    document.documentElement.lang = idiomaActual;
    document.getElementById("langToggle").textContent = idiomaActual === "es" ? "ES / EN" : "EN / ES";
    document.querySelectorAll("[data-i18n]").forEach(el => {
        const key = el.getAttribute("data-i18n");
        const par = traducciones[key];
        if (!par) return;
        if (key === "sobremi.bio") {
            el.innerHTML = par[idx];
        } else {
            el.textContent = par[idx];
        }
    });
    // frases de Intereses (guardadas en data-nota / data-nota-en)
    document.querySelectorAll(".interes[data-nota-en]").forEach(el => {
        if (idiomaActual === "en") {
            if (!el.dataset.notaEs) el.dataset.notaEs = el.getAttribute("data-nota");
            el.setAttribute("data-nota", el.getAttribute("data-nota-en"));
        } else if (el.dataset.notaEs) {
            el.setAttribute("data-nota", el.dataset.notaEs);
        }
    });
}

// ================== CONTADOR DE VISITAS (sin necesidad de cuenta) ==================
// Usa la API pública y gratuita countapi.xyz. Si el servicio no responde, falla en silencio.
(function contarVisita(){
    const el = document.getElementById("contadorVisitas");
    if (!el) return;
    fetch("https://api.countapi.xyz/hit/denis25dic.github.io/visitas")
        .then(r => r.json())
        .then(data => {
            const texto = idiomaActual === "en" ? `Visit #${data.value}` : `Visita n.º ${data.value}`;
            el.textContent = texto;
        })
        .catch(() => { /* servicio no disponible: no mostramos nada */ });
})();

// ================== CORREO OFUSCADO (mitiga scraping automático de bots) ==================
// El correo se arma en el navegador en vez de aparecer directo en el HTML.
// Nota: esto no detiene a un humano decidido, pero sí bloquea a la gran mayoría
// de bots de spam que solo buscan el patrón texto@texto.com en el código fuente.
(function pintarCorreo(){
    const usuario = "denis25dic";
    const dominio = "gmail.com";
    const correo = usuario + "@" + dominio;

    document.querySelectorAll(".email-link").forEach(a => {
        a.setAttribute("href", "mailto:" + correo);
    });
    document.querySelectorAll(".email-text").forEach(span => {
        span.textContent = correo;
    });
})();
