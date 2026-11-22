/* ===== EDIT YOUR DATA HERE (no redesign needed) ===== */
const EMAIL = "tamilselvant1408@gmail.com";

const skills = {
  "Programming": ["Python","SQL","HTML","CSS","Java","JavaScript"],
  "Generative AI": ["Generative AI","Large Language Models","Prompt Engineering","LangChain","LangGraph","Ollama","AI Agents"],
  "RAG & Vector Databases": ["Retrieval-Augmented Generation","Document Chunking","Embeddings","Semantic Search","Sentence Transformers","FAISS","ChromaDB"],
  "Machine Learning": ["Scikit-learn","Classification","Random Forest","Decision Tree","SVM","XGBoost","Model Evaluation","Feature Engineering","Data Preprocessing"],
  "Deep Learning & NLP": ["TensorFlow","Keras","NLP Fundamentals"],
  "Web Development": ["HTML","CSS","Bootstrap","JavaScript","React","Streamlit","FastAPI"],
  "Databases": ["MySQL","SQLite"],
  "Tools & Platforms": ["Git","GitHub","VS Code","Jupyter Notebook","Google Colab"],
  "Core Concepts": ["Object-Oriented Programming","Data Structures","Software Development Life Cycle","Networking Fundamentals"]
};
const skillIcons = ["💻","🧠","🗂️","📊","🔗","🌐","🗄️","🛠️","📚"];

const certs = [
  {t:"Generative AI",o:"TechPanda",y:"2026"},
  {t:"MongoDB Atlas (NoSQL Database)",o:"MongoDB University",y:"2025"},
  {t:"Cloud Computing",o:"NPTEL / SWAYAM, Government of India",y:"2025"},
  {t:"Introduction to Artificial Intelligence",o:"Infosys Springboard",y:"2023"},
  {t:"Introduction to Deep Learning",o:"Infosys Springboard",y:"2023"}
  /* add url:"..." to any item to show a credential button */
];
const achievements = ["IEEE Published Researcher","IEEE Conference Presenter","AI/ML Research Project","Generative AI Application Development","Internship experience in AI and AI research"];

/* github/demo: leave "" and the button is hidden automatically */
const projects = [
  {
    id:"voxora", tags:["Generative AI"], status:"Research and Development",
    title:"Voxora One – AI-Powered Business Communication Platform",
    category:"Generative AI | Real-Time Communication | R&D",
    overview:"Voxora One is an R&D initiative focused on developing an AI-powered video communication and collaboration platform for companies and professional teams. The concept aims to connect real-time meetings with intelligent business workflows.",
    features:["WebRTC-based video communication","AI-powered meeting transcription","Intelligent meeting summaries","Action-item extraction","Meeting intelligence","Business workflow integration","Team collaboration","Enterprise communication architecture"],
    stack:["WebRTC","React","JavaScript","Python","AI/LLMs","Backend APIs"],
    github:"", demo:"",
    note:"Features listed are proposed capabilities of this R&D concept."
  },
  {
    id:"evalgenius", tags:["Generative AI","RAG"], status:"",
    title:"EvalGenius AI – Rubric-Based Intelligent Education Assessment System",
    category:"Generative AI | RAG | EdTech",
    overview:"An AI-powered educational assessment platform designed to help teachers evaluate descriptive student answers against predefined marking rubrics and provide personalized learning feedback.",
    features:["Teacher and student roles","Study material uploads","Question generation","Marking rubric creation","Student answer submission","RAG-powered contextual retrieval","LangGraph-based evaluation workflow","Criterion-level scoring","Transparent assessment explanations","Learning gap identification","Targeted practice questions","Teacher review and approval","Personalized learning reports"],
    stack:["Python","LLMs","RAG","LangGraph","LangChain","ChromaDB","Streamlit","Ollama"],
    github:"", demo:"",
    note:"Emphasizes transparent rubric-based evaluation with human teacher review; it supports teachers rather than replacing their judgment."
  },
  {
    id:"veritrell", tags:["Generative AI","RAG"], status:"",
    title:"Veritrell AI – EvidentIQ",
    category:"Generative AI | Intelligent Document Processing | Audit Automation",
    overview:"Veritrell AI – EvidentIQ is an intelligent document evidence analysis and audit assurance platform designed to support document verification, evidence extraction, consistency checking, and audit-oriented review through AI-assisted workflows.",
    features:["Business document uploads","Purchase order analysis","Invoice analysis","Expense report analysis","Evidence extraction","Document field validation","Cross-document consistency checks","Missing evidence identification","Discrepancy detection","Rule-based verification","AI-assisted explanations","Structured verification reports"],
    stack:["Python","LLMs","RAG","LangGraph","ChromaDB","SQLite"],
    github:"https://github.com/Tamilselvan-14/Veritrell-AI-EvidentIQ-Intelligent-Evidence-Analysis-and-Audit-Assurance-Platform", demo:""
  },
  {
    id:"phishing", tags:["Machine Learning","Research"], status:"Research Project",
    title:"Adaptive Framework for Phishing Detection in Cloud Environments",
    category:"Machine Learning | Cybersecurity | Research",
    overview:"A research-oriented machine learning framework focused on predicting and detecting phishing attacks in cloud-based environments using multiple supervised learning algorithms. Published in IEEE as “Structuring An Adaptive Framework For Prediction And Detection Of Phishing Attack In Cloud Based Environments”.",
    features:["PhishNot dataset (2022)","Data preprocessing","Exploratory Data Analysis","Feature engineering","Model training","Algorithm comparison: Random Forest, SVM, Decision Tree, XGBoost, Neural Networks","Performance evaluation"],
    stack:["Python","Scikit-learn","Pandas","NumPy","Matplotlib","XGBoost","TensorFlow/Keras"],
    github:"", demo:"", paper:"https://ieeexplore.ieee.org/document/11652226",
    note:"The project report records 98% accuracy for Random Forest in the reported experiment; this is not a claim of universal detection performance."
  }
];

/* ===== RENDERING ===== */
const $ = s => document.querySelector(s);
const esc = s => String(s).replace(/[&<>"]/g, c => ({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));

$("#skillGrid").innerHTML = Object.entries(skills).map(([k,v],i) =>
  `<div class="card rev"><div class="ico">${skillIcons[i]}</div><h3>${k}</h3><div class="chips">${v.map(x=>`<span class="chip">${x}</span>`).join("")}</div></div>`).join("");

$("#certGrid").innerHTML = certs.map(c =>
  `<div class="card rev"><div class="ico">🎓</div><h3>${c.t}</h3><p>${c.o}</p><div class="meta">${c.y}</div>${c.url?`<a class="btn" href="${esc(c.url)}" target="_blank" rel="noopener">View Credential</a>`:""}</div>`).join("");
$("#ach").innerHTML = achievements.map(a => `<span class="chip">🏆 ${a}</span>`).join("");

const filterNames = ["All Projects","Generative AI","RAG","Machine Learning","Research"];
let active = "All Projects";
function drawProjects(){
  $("#filters").innerHTML = filterNames.map(f => `<button class="f ${f===active?"on":""}" data-f="${f}">${f}</button>`).join("");
  const list = projects.filter(p => active==="All Projects" || p.tags.includes(active));
  $("#projGrid").innerHTML = list.map(p => `
    <article class="card proj rev in" data-id="${p.id}" tabindex="0">
      <div class="cat">${p.category}</div>
      <h3>${p.title}</h3>
      <p>${p.overview.slice(0,170)}…</p>
      <div class="chips">${p.stack.slice(0,5).map(s=>`<span class="chip">${s}</span>`).join("")}</div>
      <div class="more">${p.status?`<span class="st">${p.status}</span> `:""}View details →</div>
    </article>`).join("");
}
$("#filters").addEventListener("click", e => { const b = e.target.closest(".f"); if(b){ active = b.dataset.f; drawProjects(); }});
drawProjects();

/* Project modal */
const modal = $("#modal"), mbox = $("#mbox");
function openProject(id){
  const p = projects.find(x => x.id===id); if(!p) return;
  const btns = [
    p.github && `<a class="btn p" href="${esc(p.github)}" target="_blank" rel="noopener">View GitHub Repository ↗</a>`,
    p.demo && `<a class="btn" href="${esc(p.demo)}" target="_blank" rel="noopener">Live Demo ↗</a>`,
    p.paper && `<a class="btn" href="${esc(p.paper)}" target="_blank" rel="noopener">Read IEEE Publication ↗</a>`
  ].filter(Boolean).join("");
  mbox.innerHTML = `<button class="ic x" id="close" aria-label="Close">✕</button>
    <div class="eyebrow">${p.category}</div><h3>${p.title}</h3>${p.status?`<span class="st">${p.status}</span>`:""}
    <h5>OVERVIEW</h5><p>${p.overview}</p>
    <h5>${p.id==="voxora"?"PROPOSED CAPABILITIES":"KEY FEATURES"}</h5><ul>${p.features.map(f=>`<li>${f}</li>`).join("")}</ul>
    <h5>TECHNOLOGY STACK</h5><div class="chips">${p.stack.map(s=>`<span class="chip">${s}</span>`).join("")}</div>
    ${p.note?`<h5>NOTE</h5><p>${p.note}</p>`:""}
    ${btns?`<div class="row" style="margin-top:24px">${btns}</div>`:""}`;
  modal.classList.add("open"); document.body.style.overflow="hidden"; $("#close").focus();
}
function closeModal(){ modal.classList.remove("open"); document.body.style.overflow=""; }
$("#projGrid").addEventListener("click", e => { const c = e.target.closest(".proj"); if(c) openProject(c.dataset.id); });
$("#projGrid").addEventListener("keydown", e => { if(e.key==="Enter"){ const c = e.target.closest(".proj"); if(c) openProject(c.dataset.id); }});
modal.addEventListener("click", e => { if(e.target===modal || e.target.id==="close") closeModal(); });
document.addEventListener("keydown", e => { if(e.key==="Escape") closeModal(); });

/* Theme */
const root = document.documentElement, tbtn = $("#theme");
const saved = (()=>{ try{ return localStorage.getItem("theme"); }catch(e){ return null; }})();
if(saved){ root.dataset.theme = saved; }
const syncIcon = () => tbtn.textContent = root.dataset.theme==="dark" ? "☾" : "☀";
syncIcon();
tbtn.onclick = () => { root.dataset.theme = root.dataset.theme==="dark" ? "light" : "dark"; try{ localStorage.setItem("theme", root.dataset.theme); }catch(e){} syncIcon(); };

/* Mobile menu */
$("#burger").onclick = () => $("#links").classList.toggle("open");
$("#links").addEventListener("click", e => { if(e.target.tagName==="A") $("#links").classList.remove("open"); });

/* Scroll progress, back-to-top, active nav */
const navLinks = [...document.querySelectorAll(".links a")];
const secs = navLinks.map(a => document.querySelector(a.getAttribute("href")));
addEventListener("scroll", () => {
  const h = document.documentElement;
  $("#bar").style.width = (h.scrollTop / (h.scrollHeight - h.clientHeight) * 100) + "%";
  $("#top").classList.toggle("show", h.scrollTop > 600);
  let cur = 0; secs.forEach((s,i) => { if(s && s.getBoundingClientRect().top < 140) cur = i; });
  navLinks.forEach((a,i) => a.classList.toggle("on", i===cur));
}, {passive:true});
$("#top").onclick = () => scrollTo({top:0, behavior:"smooth"});

/* Reveal on scroll */
const io = new IntersectionObserver(es => es.forEach(e => { if(e.isIntersecting){ e.target.classList.add("in"); io.unobserve(e.target); }}), {threshold:.12});
document.querySelectorAll(".rev").forEach(el => io.observe(el));

/* Contact form: validates, then opens the visitor's email app (mailto). No fake success message. */
const form = $("#form");
form.addEventListener("submit", e => {
  e.preventDefault();
  const f = {n:$("#fn"), e:$("#fe"), s:$("#fs"), m:$("#fm")};
  const rules = [
    [f.n, v => v.trim().length>=2, "Please enter your full name."],
    [f.e, v => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), "Please enter a valid email address."],
    [f.s, v => v.trim().length>=3, "Please enter a subject."],
    [f.m, v => v.trim().length>=10, "Message should be at least 10 characters."]
  ];
  let ok = true;
  rules.forEach(([el, test, msg]) => { const good = test(el.value); el.parentElement.querySelector(".err").textContent = good ? "" : msg; if(!good) ok = false; });
  const note = $("#fnote");
  if(!ok){ note.textContent = ""; return; }
  const body = `${f.m.value}\n\n— ${f.n.value} (${f.e.value})`;
  location.href = `mailto:${EMAIL}?subject=${encodeURIComponent(f.s.value)}&body=${encodeURIComponent(body)}`;
  note.style.color = "var(--mute)";
  note.textContent = "Your email app should open with the message ready to send. If nothing opens, email me directly at " + EMAIL + ".";
});
