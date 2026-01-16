function toast(msg) {
  const c = document.getElementById("toast-container");
  const el = document.createElement("div");
  el.className = "toast";
  el.innerHTML = `<span style="color:var(--success)">✓</span> ${msg}`;
  c.appendChild(el);
  setTimeout(() => {
    el.style.opacity = "0";
    setTimeout(() => el.remove(), 300);
  }, 2000);
}

/* Diag Data */
function genRid() {
  return "REQ-" + Math.random().toString(36).substr(2, 9).toUpperCase();
}

function copyDiag() {
  const txt = `RID: ${document.getElementById("rid").innerText}\nTime: ${
    document.getElementById("ts").innerText
  }`;
  navigator.clipboard
    .writeText(txt)
    .then(() => toast("Diagnostic copied to clipboard"));
}

/* Terminal Logic */
const seedLines = [
  "[INFO] Detected connection spike on ingress-nginx",
  "[WARN] Upstream backend-api connection timeout (5000ms)",
  "[INFO] Autoscaler: Triggering scale up for deployment/worker-nodes",
  "[INFO] Provisioning new instance (c5.xlarge) in ap-southeast-3a...",
  "[INFO] Waiting for Kubelet readiness probe...",
  "[SUCCESS] Node attached to cluster. Scheduling pods.",
  "[INFO] Traefik: Updating dynamic configuration for weighted load-balancing.",
  "[WARN] Database connection pool at 85% capacity. Throttling reads.",
];
const loopLines = [
  "[INFO] Running database migration check...",
  "[INFO] Cache warm-up initiated for Redis cluster.",
  "[INFO] Pod restart policy: Always. Backoff limit respected.",
  "[INFO] Checking Health Check Endpoint /healthz...",
  "[SUCCESS] Service 'auth-service' reported healthy.",
  "[WAIT] Draining old connections...",
  "[INFO] Re-routing traffic: 10% canary released.",
  "[INFO] Prometheus metrics exporter scraped successfully.",
];

const allLines = [...seedLines, ...loopLines];
const termBody = document.getElementById("termBody");
const typingLine = document.getElementById("typingLine");

let paused = false;
let lineIdx = 0;
let charIdx = 0;
let typeSpeed = 20;
let lineDelay = 600;

function parseLine(txt) {
  // Regex coloring for log levels
  return txt.replace(/\[(INFO|WARN|SUCCESS|WAIT|ERROR)\]/g, (match, p1) => {
    return `[<span class="lvl ${p1}">${p1}</span>]`;
  });
}

function addLine(txt) {
  const div = document.createElement("div");
  div.innerHTML = parseLine(txt);
  div.style.marginBottom = "4px";
  termBody.insertBefore(div, typingLine);
  // Limit lines
  if (termBody.children.length > 50) termBody.removeChild(termBody.firstChild);
  termBody.scrollTop = termBody.scrollHeight;
}

function typeWriter() {
  if (paused) return;
  const line = allLines[lineIdx % allLines.length];

  if (charIdx < line.length) {
    // Typing effect
    const currentText = line.substring(0, charIdx + 1);
    // Simple heuristic for coloring inside typing line is tricky,
    // so we just show plain text while typing, then colorize on finish.
    typingLine.textContent = currentText;
    typingLine.innerHTML += "<span class='cursor'></span>";
    charIdx++;
    setTimeout(typeWriter, typeSpeed);
  } else {
    // Line finished
    addLine(line);
    typingLine.innerHTML = "<span class='cursor'></span>"; // Reset typing line
    charIdx = 0;
    lineIdx++;
    setTimeout(typeWriter, lineDelay);
  }
}

/* Controls */
function togglePause() {
  paused = !paused;
  document.getElementById("pauseBtn").textContent = paused ? "Resume" : "Pause";
  document.getElementById("termMode").textContent = paused ? "PAUSED" : "LIVE";
  document.getElementById("termMode").style.borderColor = paused
    ? "var(--warning)"
    : "";
  if (!paused) typeWriter();
}
function clearTerminal() {
  // Remove all divs except the last one (typingLine)
  while (termBody.children.length > 1) {
    termBody.removeChild(termBody.firstChild);
  }
}
function speedUp() {
  typeSpeed = Math.max(5, typeSpeed - 5);
  lineDelay = Math.max(100, lineDelay - 100);
  toast("Terminal speed increased");
}
function slowDown() {
  typeSpeed += 10;
  lineDelay += 200;
  toast("Terminal speed decreased");
}

/* Init */
(function () {
  document.getElementById("rid").innerText = genRid();
  document.getElementById("ts").innerText = new Date().toLocaleTimeString();
  document.getElementById("ua-short").innerText =
    navigator.userAgent.split(")")[0] + ")";
  document.getElementById("year").innerText = new Date().getFullYear();

  const clock = document.getElementById("clockPill");
  setInterval(() => (clock.innerText = new Date().toLocaleTimeString()), 1000);

  typeWriter();
})();
