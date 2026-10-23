// Plugin de Figma: Historia de la Ingeniería en Sistemas Computacionales
// Generador cinematográfico interactivo con línea central ininterrumpida y 9 lienzos Full HD (1920x1080)
// Equipo: Yahel, Abril, Alejandro, Tamar

async function main() {
  figma.notify("🚀 Creando Línea del Tiempo ISC con Eje Central y Equipo Completo...");

  await figma.loadFontAsync({ family: "Inter", style: "Regular" });
  await figma.loadFontAsync({ family: "Inter", style: "Medium" });
  await figma.loadFontAsync({ family: "Inter", style: "Semi Bold" });
  await figma.loadFontAsync({ family: "Inter", style: "Bold" });

  function hexToRgb(hex) {
    hex = hex.replace("#", "");
    if (hex.length === 3) hex = hex.split("").map(c => c + c).join("");
    const num = parseInt(hex, 16);
    return {
      r: ((num >> 16) & 255) / 255,
      g: ((num >> 8) & 255) / 255,
      b: (num & 255) / 255
    };
  }

  function solidPaint(hex, opacity = 1) {
    return [{ type: "SOLID", color: hexToRgb(hex), opacity: opacity }];
  }

  function createText(parent, opts) {
    const textNode = figma.createText();
    parent.appendChild(textNode);
    textNode.fontName = { family: "Inter", style: opts.style || "Regular" };
    textNode.characters = opts.text || "";
    textNode.fontSize = opts.size || 14;
    textNode.fills = solidPaint(opts.color || "#FFFFFF", opts.opacity !== undefined ? opts.opacity : 1);
    textNode.x = opts.x || 0;
    textNode.y = opts.y || 0;
    if (opts.width) {
      textNode.textAutoResize = "NONE";
      textNode.resize(opts.width, opts.height || 20);
    }
    if (opts.align) {
      textNode.textAlignHorizontal = opts.align;
    }
    if (opts.lineHeight) {
      textNode.lineHeight = { value: opts.lineHeight, unit: "PIXELS" };
    }
    return textNode;
  }

  const stagesData = [
    {
      id: "01_Etapa_1940_1950",
      title: "1940s-1950s: Early Computing Era",
      subtitle: "Válvulas de vacío, primer hardware programable (Z3), nacimiento del software (Baby), OXO y FORTRAN",
      era: "ETAPA 01 DE 05 • EARLY COMPUTING",
      accentColor: "#C88648",
      bgColor: "#16110a",
      cards: [
        { year: "1941", type: "Primer Hardware", pos: "top", title: "Konrad Zuse y la Z3", desc: "Primera computadora electromecánica binaria programable (64 palabras de 22 bits) en Berlín." },
        { year: "1943", type: "Ingeniería de Sistemas", pos: "bottom", title: "Consolidación en Bell Labs", desc: "Integración de conmutación y transmisión telefónica bajo el concepto de Ingeniería de Sistemas." },
        { year: "1948", type: "Primer Software", pos: "top", title: "Nacimiento del Software (Baby)", desc: "21 de junio: primer programa almacenado en memoria electrónica en la Univ. de Manchester." },
        { year: "1952", type: "Primer Videojuego", pos: "bottom", title: "OXO (Alexander Douglas)", desc: "Tres en raya computarizado sobre la EDSAC; primer juego interactivo humano vs máquina." },
        { year: "1954", type: "Epistemología", pos: "top", title: "Teoría General de Sistemas", desc: "Bertalanffy articula la TGS y Wiener la Cibernética con control por retroalimentación." },
        { year: "1957", type: "Lenguaje Fortran", pos: "bottom", title: "Lenguaje FORTRAN (IBM)", desc: "Primer lenguaje procedural de alto nivel para el IBM 704; computación científica y benchmarks." }
      ]
    },
    {
      id: "02_Etapa_1960_1970",
      title: "1960s-1970s: Semiconductor & Microchip Era",
      subtitle: "Carrera en México (ITESM), ARPANET, mensajería talk, bases relacionales, Lenguaje C y antivirus Reaper",
      era: "ETAPA 02 DE 05 • SEMICONDUCTORES & REDES",
      accentColor: "#4ADE80",
      bgColor: "#0c150f",
      cards: [
        { year: "1967", type: "Hito Nacional", pos: "top", title: "Nacimiento de la Carrera en México", desc: "El ITESM abre la primera carrera de computación en México, validando la disciplina universitaria." },
        { year: "1968", type: "Ing. de Software", pos: "bottom", title: "Conferencia OTAN en Garmisch", desc: "Se formaliza el término 'Crisis del Software' y nace la Ingeniería de Software rigurosa." },
        { year: "1969", type: "Internet", pos: "top", title: "Nacimiento de Internet (ARPANET)", desc: "DARPA crea la red militar de conmutación de paquetes ante amenaza nuclear durante la Guerra Fría." },
        { year: "1970", type: "Mensajería", pos: "bottom", title: "Mensajería Instantánea (talk UNIX)", desc: "Comunicación textual sincrónica multiusuario en terminales de red en los 70s y 80s." },
        { year: "1970", type: "Bases de Datos", pos: "top", title: "Bases de Datos Relacionales (Codd)", desc: "Edgar F. Codd publica el modelo relacional en IBM, base de la estructuración de datos y SQL." },
        { year: "1972", type: "Lenguaje C & Antivirus", pos: "bottom", title: "Lenguaje C & Antivirus Reaper", desc: "Dennis Ritchie crea C; el 9 de febrero Reaper neutraliza a Creeper, naciendo la ciberseguridad." }
      ]
    },
    {
      id: "03_Etapa_1980_1990",
      title: "1980s-1990s: Retro-Tech & PC Revolution",
      subtitle: "Carreras en el TecNM, computadoras personales IBM & Apple, la World Wide Web y POO con Java",
      era: "ETAPA 03 DE 05 • COMPUTACIÓN PERSONAL & WEB",
      accentColor: "#F59E0B",
      bgColor: "#170e04",
      cards: [
        { year: "1981", type: "Educación Pública", pos: "top", title: "Apertura de ISC en TecNM", desc: "1 de enero de 1981: se crean las primeras carreras de computación en los Institutos Tecnológicos." },
        { year: "1981", type: "Hardware Personal", pos: "bottom", title: "Revolución de las Computadoras Personales", desc: "IBM PC y Apple: de minicomputadoras gigantes tamaño lavadora a equipos de escritorio accesibles." },
        { year: "1991", type: "World Wide Web", pos: "top", title: "Creación de la World Wide Web (CERN)", desc: "Tim Berners-Lee libera la WWW (HTML, HTTP, URL), abriendo el campo laboral moderno del ISC." },
        { year: "1995", type: "Paradigma Objetos", pos: "bottom", title: "Java, Máquina Virtual y Patrones GoF", desc: "Sun Microsystems lanza Java ('Write Once, Run Anywhere') y se estandariza el desarrollo POO." }
      ]
    },
    {
      id: "04_Etapa_2000_2010",
      title: "2000s-2010s: Desktop & Connected Era",
      subtitle: "Web 2.0, computación móvil ubicua, consolidación de la nube con AWS, Big Data y ciberseguridad IoT",
      era: "ETAPA 04 DE 05 • NUBE, MOVILIDAD & BIG DATA",
      accentColor: "#0284C7",
      bgColor: "#07111b",
      cards: [
        { year: "2004-07", type: "Web & Móvil", pos: "top", title: "Web 2.0 y Revolución Smartphone", desc: "Interfaces dinámicas asíncronas (AJAX), iPhone y Android; el software se torna continuo y táctil." },
        { year: "2006-10", type: "Cloud Computing", pos: "bottom", title: "Consolidación de AWS & DevOps", desc: "Abstracción del hardware en infraestructura como código (IaC); computación elástica bajo demanda." },
        { year: "2011-15", type: "Big Data", pos: "top", title: "Big Data & Analítica (Hadoop/Spark)", desc: "Procesamiento masivo de petabytes de datos no estructurados; organizaciones guiadas por datos." },
        { year: "2016-19", type: "Ciberseguridad", pos: "bottom", title: "Seguridad por Diseño en IoT", desc: "Protección perimetral ante la interconexión masiva de sensores industriales y domésticos." }
      ]
    },
    {
      id: "05_Etapa_2020_Futuro",
      title: "2020s & Beyond: Modern Era & AI",
      subtitle: "Modelos fundacionales LLMs, sistemas agénticos de Yahel, Edge Computing verde y el Ingeniero Holístico",
      era: "ETAPA 05 DE 05 • INTELIGENCIA ARTIFICIAL & FUTURO",
      accentColor: "#00F5D4",
      bgColor: "#050612",
      cards: [
        { year: "2020-23", type: "Inteligencia Artificial", pos: "top", title: "Disrupción de IA Generativa & LLMs", desc: "Transformers a escala masiva; el ISC muta de codificador sintáctico a arquitecto cognitivo." },
        { year: "2023-26", type: "Hito Yahel", pos: "bottom", title: "Sistemas Agénticos Autónomos (Yahel)", desc: "Aporte de Yahel: orquestación de agentes inteligentes que colaboran con humanos en sistemas complejos." },
        { year: "2024+", type: "Sostenibilidad", pos: "top", title: "Edge Computing & Cómputo Verde", desc: "Inferencia local en el extremo de la red y optimización de huella ecológica hídrica y energética." },
        { year: "Visión", type: "Perfil Holístico", pos: "bottom", title: "El Ingeniero Holístico: TGS Moderna", desc: "Integración armónica de Personas, Datos, Procesos y Tecnologías para resolver problemas humanos." }
      ]
    }
  ];

  let frameX = 0;
  const createdFrames = [];

  for (let sIdx = 0; sIdx < stagesData.length; sIdx++) {
    const s = stagesData[sIdx];
    const frame = figma.createFrame();
    frame.name = s.id;
    frame.resize(1920, 1080);
    frame.x = frameX;
    frame.y = 0;
    frame.fills = solidPaint(s.bgColor);
    frameX += 2100;

    createText(frame, { text: s.era, size: 13, style: "Bold", color: s.accentColor, x: 100, y: 70 });
    createText(frame, { text: s.title, size: 36, style: "Bold", color: "#FFFFFF", x: 100, y: 95 });
    createText(frame, { text: s.subtitle, size: 16, style: "Regular", color: "#94A3B8", x: 100, y: 145, width: 1400 });

    // EJE CENTRAL ININTERRUMPIDO
    const centralLine = figma.createLine();
    frame.appendChild(centralLine);
    centralLine.x = 80;
    centralLine.y = 540;
    centralLine.resize(1760, 0);
    centralLine.strokes = solidPaint(s.accentColor, 0.85);
    centralLine.strokeWeight = 6;

    const cardCount = s.cards.length;
    for (let cIdx = 0; cIdx < cardCount; cIdx++) {
      const card = s.cards[cIdx];
      const posX = 120 + (cIdx * (1680 / cardCount));
      const isTop = card.pos === "top";
      const cardY = isTop ? 220 : 590;

      const conn = figma.createLine();
      frame.appendChild(conn);
      conn.x = posX + 130;
      conn.y = isTop ? 460 : 540;
      conn.rotation = 90;
      conn.resize(isTop ? 80 : 50, 0);
      conn.strokes = solidPaint(card.type.includes("Yahel") ? "#FBBF24" : s.accentColor, 0.5);
      conn.strokeWeight = 2;

      const node = figma.createEllipse();
      frame.appendChild(node);
      node.resize(28, 28);
      node.x = posX + 116;
      node.y = 526;
      node.fills = solidPaint(card.type.includes("Yahel") ? "#FBBF24" : s.accentColor);
      node.strokes = solidPaint("#FFFFFF", 0.9);
      node.strokeWeight = 3;

      const cardFrame = figma.createFrame();
      frame.appendChild(cardFrame);
      cardFrame.name = `Card_${card.year}_${card.title}`;
      cardFrame.resize(260, 230);
      cardFrame.x = posX;
      cardFrame.y = cardY;
      cardFrame.cornerRadius = 16;
      cardFrame.fills = solidPaint(card.type.includes("Yahel") ? "#2B1E06" : "#111827", 0.88);
      cardFrame.strokes = solidPaint(card.type.includes("Yahel") ? "#FBBF24" : s.accentColor, card.type.includes("Yahel") ? 0.9 : 0.4);
      cardFrame.strokeWeight = card.type.includes("Yahel") ? 2 : 1.5;

      createText(cardFrame, { text: card.year, size: 22, style: "Bold", color: card.type.includes("Yahel") ? "#FBBF24" : s.accentColor, x: 20, y: 16 });
      createText(cardFrame, { text: card.type.toUpperCase(), size: 10, style: "Semi Bold", color: "#94A3B8", x: 20, y: 46 });
      createText(cardFrame, { text: card.title, size: 15, style: "Bold", color: "#FFFFFF", x: 20, y: 70, width: 220 });
      createText(cardFrame, { text: card.desc, size: 11, style: "Regular", color: "#CBD5E1", x: 20, y: 120, width: 220, lineHeight: 16 });
    }

    createdFrames.push(frame);
  }

  // LIENZO 06: REFLEXIONES DEL EQUIPO COMPLETO (Yahel, Abril, Alejandro, Tamar)
  const fReflex = figma.createFrame();
  fReflex.name = "06_Reflexiones_Equipo_Completo";
  fReflex.resize(1920, 1080);
  fReflex.x = frameX;
  fReflex.y = 0;
  fReflex.fills = solidPaint("#090714");
  frameX += 2100;

  createText(fReflex, { text: "SECCIÓN OFICIAL DE CIERRE • EQUIPO COMPLETO", size: 13, style: "Bold", color: "#FBBF24", x: 100, y: 70 });
  createText(fReflex, { text: "Reflexiones Personales del Equipo de Investigación", size: 36, style: "Bold", color: "#FFFFFF", x: 100, y: 95 });
  createText(fReflex, { text: "Análisis vivencial de Yahel, Abril, Alejandro y Tamar sobre el rol profesional y el futuro de la ingeniería.", size: 16, style: "Regular", color: "#94A3B8", x: 100, y: 145 });

  const refData = [
    { name: "Yahel", role: "VISIÓN SISTÉMICA & AGENTES IA", color: "#FBBF24", text: "La ISC no consiste en dominar una moda pasajera, sino en modelar la complejidad del mundo real. El valor del ingeniero radica en su visión holística: ser el puente entre hardware, software y personas. Asumo el compromiso de crear tecnología ética, escalable y con profundo propósito humano." },
    { name: "Abril", role: "SOCIO ESTRATÉGICO & INNOVACIÓN", color: "#EC4899", text: "De soporte tradicional a socio estratégico clave de la transformación digital. Hoy se exige diseñar arquitecturas en la nube escalables, integrar ciberseguridad e implementar soluciones con IA, con comunicación asertiva y aprendizaje continuo." },
    { name: "Alejandro", role: "IMPACTO SOCIAL & LLEGADA A MÉXICO", color: "#38BDF8", text: "De técnico de ayuda a pieza clave en la sociedad moderna. La llegada de la computación e ingeniería de sistemas a México representó un hito histórico que democratizó la oportunidad de formarnos para innovar continuamente y aportar valor tangible al desarrollo nacional." },
    { name: "Tamar", role: "EPISTEMOLOGÍA & PROYECCIÓN PROFESIONAL", color: "#A855F7", text: "Conocer la evolución histórica permite comprender cómo cada avance forjó las herramientas que hoy utilizamos cotidianamente. Esto nos ayuda a valorar la verdadera trascendencia de nuestra carrera y a proyectar con rigor cómo la tecnología moldeará nuestro futuro profesional." }
  ];

  for (let rIdx = 0; rIdx < 4; rIdx++) {
    const r = refData[rIdx];
    const rCard = figma.createFrame();
    fReflex.appendChild(rCard);
    rCard.resize(400, 520);
    rCard.x = 100 + (rIdx * 435);
    rCard.y = 230;
    rCard.cornerRadius = 20;
    rCard.fills = solidPaint("#141126", 0.92);
    rCard.strokes = solidPaint(r.color, 0.45);
    rCard.strokeWeight = 1.5;

    createText(rCard, { text: r.name, size: 26, style: "Bold", color: "#FFFFFF", x: 26, y: 26 });
    createText(rCard, { text: r.role, size: 10, style: "Bold", color: r.color, x: 26, y: 64, width: 340 });
    createText(rCard, { text: `“${r.text}”`, size: 13, style: "Regular", color: "#E2E8F0", x: 26, y: 110, width: 348, lineHeight: 22 });
  }

  createdFrames.push(fReflex);

  figma.currentPage.selection = createdFrames;
  figma.viewport.scrollAndZoomIntoView(createdFrames);
  figma.notify("✨ Línea del Tiempo generada con éxito con Eje Central, Hito de Yahel y 4 Reflexiones!");
}

main().catch(err => {
  console.error(err);
  figma.notify("❌ Error al generar: " + err.message);
});
