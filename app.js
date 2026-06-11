:root {
  --bg: #edf4ff;
  --surface: #ffffff;
  --surface-2: #f6f9ff;
  --primary: #1f6feb;
  --primary-dark: #0f4cb8;
  --text: #10233b;
  --muted: #66778f;
  --success: #0e9f6e;
  --warning: #f59e0b;
  --danger: #dc2626;
  --border: #d8e2ef;
  --shadow: 0 20px 60px rgba(16, 35, 59, 0.16);
  --radius: 24px;
}
* { box-sizing: border-box; }
html, body { margin: 0; padding: 0; }
body {
  font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
  background:
    radial-gradient(circle at top left, #d7e7ff 0%, rgba(215,231,255,0.3) 24%, transparent 45%),
    linear-gradient(180deg, #e9f1ff 0%, #f7faff 40%, #edf4ff 100%);
  color: var(--text);
  min-height: 100vh;
}
.page {
  min-height: 100vh;
  display: grid;
  grid-template-columns: 1fr minmax(340px, 460px) 1fr;
  gap: 28px;
  align-items: center;
  padding: 28px;
}
.side-panel { max-width: 440px; color: var(--text); }
.side-panel h1 { margin: 0 0 12px; font-size: 40px; line-height: 1.05; }
.side-panel p { margin: 0 0 14px; color: var(--muted); font-size: 16px; line-height: 1.6; }
.feature-list { display: grid; gap: 12px; margin-top: 20px; }
.feature-item {
  background: rgba(255,255,255,0.78);
  border: 1px solid rgba(216,226,239,0.85);
  padding: 14px 16px;
  border-radius: 18px;
  box-shadow: 0 10px 24px rgba(16,35,59,0.06);
}
.feature-item strong { display: block; margin-bottom: 4px; }
.phone-shell {
  width: 100%;
  min-height: 900px;
  background: #0d1525;
  border-radius: 38px;
  padding: 14px;
  position: relative;
  box-shadow: var(--shadow);
}
.notch {
  width: 38%;
  max-width: 160px;
  height: 24px;
  background: #0d1525;
  border-radius: 0 0 18px 18px;
  position: absolute;
  left: 50%;
  top: 0;
  transform: translateX(-50%);
  z-index: 5;
}
.phone-screen {
  min-height: 872px;
  border-radius: 28px;
  overflow: hidden;
  position: relative;
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #eaf1ff 0%, #f7fbff 26%, #f4f7fb 100%);
}
.topbar {
  padding: 18px 20px 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: rgba(255,255,255,0.35);
  backdrop-filter: blur(10px);
  gap: 10px;
}
.brand { font-weight: 800; font-size: 20px; letter-spacing: .2px; }
.badge {
  font-size: 12px;
  padding: 8px 12px;
  border-radius: 999px;
  background: rgba(31,111,235,0.12);
  color: var(--primary-dark);
  font-weight: 700;
  white-space: nowrap;
}
.screen {
  display: none;
  padding: 14px 16px 96px;
  animation: fadeIn .22s ease;
  overflow-y: auto;
  flex: 1;
}
.screen.active { display: block; }
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(8px); }
  to { opacity: 1; transform: translateY(0); }
}
.card {
  background: var(--surface);
  border: 1px solid rgba(216,226,239,0.85);
  border-radius: var(--radius);
  padding: 18px;
  box-shadow: 0 12px 30px rgba(16,35,59,0.08);
  margin-bottom: 14px;
}
.hero {
  background: linear-gradient(135deg, #1f6feb 0%, #458cff 100%);
  color: #fff;
  border: none;
}
.hero h1, .hero h2, .hero h3, .hero p, .hero .tiny { color: #fff; }
h1, h2, h3, p { margin: 0; }
h1 { font-size: 28px; line-height: 1.12; }
h2 { font-size: 22px; margin-bottom: 8px; }
h3 { font-size: 16px; margin-bottom: 8px; }
.muted { color: var(--muted); }
.tiny { font-size: 12px; }
.space-8 { height: 8px; }
.space-12 { height: 12px; }
.space-16 { height: 16px; }
.label { display: block; margin-bottom: 8px; font-size: 13px; font-weight: 800; }
.input, .textarea {
  width: 100%;
  border: 1.5px solid var(--border);
  border-radius: 16px;
  padding: 14px;
  font-size: 15px;
  background: #fff;
  color: var(--text);
  outline: none;
  transition: border .18s ease, box-shadow .18s ease;
}
.input:focus, .textarea:focus {
  border-color: var(--primary);
  box-shadow: 0 0 0 4px rgba(31,111,235,0.12);
}
.btn {
  width: 100%;
  border: none;
  border-radius: 18px;
  padding: 14px 16px;
  font-size: 15px;
  font-weight: 800;
  cursor: pointer;
  transition: transform .12s ease, opacity .12s ease;
}
.btn:active { transform: scale(0.99); }
.btn-primary { background: var(--primary); color: #fff; }
.btn-secondary { background: #eaf1ff; color: var(--primary-dark); }
.btn-danger { background: #fee2e2; color: #991b1b; }
.btn-inline { width: auto; padding: 11px 14px; border-radius: 14px; font-size: 14px; }
.row { display: flex; gap: 12px; }
.row > * { flex: 1; }
.grid-2 { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.metric {
  background: var(--surface-2);
  border-radius: 18px;
  padding: 14px;
  border: 1px solid rgba(31,111,235,0.08);
}
.metric .value { font-size: 22px; font-weight: 900; margin-top: 4px; }
.pill {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(255,255,255,0.18);
  color: #fff;
  border-radius: 999px;
  padding: 8px 12px;
  font-weight: 700;
  font-size: 12px;
}
.quick-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.quick-card {
  border-radius: 20px;
  padding: 16px;
  background: #fff;
  border: 1px solid var(--border);
  box-shadow: 0 10px 24px rgba(16,35,59,0.06);
  cursor: pointer;
}
.quick-card strong { display: block; margin-bottom: 6px; }
.admin-banner { background: linear-gradient(135deg, #fff7e8 0%, #fff 100%); border-color: #f3d7a5; }
.tag-row { display: flex; flex-wrap: wrap; gap: 8px; }
.tag {
  padding: 10px 12px;
  border-radius: 999px;
  background: #f3f7fd;
  color: var(--text);
  font-size: 13px;
  font-weight: 700;
  border: 1px solid var(--border);
  cursor: pointer;
}
.tag.active { background: rgba(31,111,235,0.14); color: var(--primary-dark); border-color: rgba(31,111,235,0.35); }
.schedule-grid { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 12px; }
.schedule-box {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 12px;
}
.data-list { display: grid; gap: 10px; }
.list-item {
  background: #fff;
  border: 1px solid var(--border);
  border-radius: 18px;
  padding: 14px;
  display: grid;
  gap: 10px;
}
.list-header { display: flex; justify-content: space-between; gap: 8px; align-items: start; }
.role-chip, .status-chip {
  display: inline-flex;
  align-items: center;
  border-radius: 999px;
  padding: 6px 10px;
  font-size: 12px;
  font-weight: 800;
}
.role-admin { background: #efe7ff; color: #6b21a8; }
.role-employee { background: #eaf1ff; color: #1d4ed8; }
.status-pending { background: #fef3c7; color: #92400e; }
.status-approved { background: #dcfce7; color: #166534; }
.status-rejected { background: #fee2e2; color: #991b1b; }
.action-row { display: flex; flex-wrap: wrap; gap: 8px; }
.bottom-nav {
  position: absolute;
  left: 14px;
  right: 14px;
  bottom: 14px;
  background: rgba(255,255,255,0.94);
  backdrop-filter: blur(18px);
  border: 1px solid rgba(216,226,239,0.9);
  box-shadow: 0 12px 28px rgba(16,35,59,0.12);
  border-radius: 22px;
  display: none;
  grid-template-columns: repeat(4, 1fr);
  padding: 8px;
  gap: 6px;
  z-index: 10;
}
.bottom-nav.show { display: grid; }
.nav-btn {
  border: none;
  background: transparent;
  border-radius: 16px;
  padding: 10px 6px;
  font-size: 12px;
  font-weight: 800;
  color: var(--muted);
  cursor: pointer;
}
.nav-btn.active { background: #eaf1ff; color: var(--primary-dark); }
.toast {
  position: absolute;
  left: 50%;
  bottom: 92px;
  transform: translateX(-50%) translateY(20px);
  background: #10233b;
  color: #fff;
  padding: 14px 16px;
  border-radius: 16px;
  font-size: 14px;
  font-weight: 700;
  opacity: 0;
  pointer-events: none;
  transition: all .18s ease;
  box-shadow: var(--shadow);
  z-index: 20;
  white-space: nowrap;
}
.toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
.help-link { color: var(--primary-dark); font-size: 14px; font-weight: 700; text-decoration: none; }
.section-title { display: flex; justify-content: space-between; align-items: center; gap: 10px; margin-bottom: 12px; }
.login-demo {
  background: rgba(255,255,255,0.14);
  border: 1px solid rgba(255,255,255,0.22);
  border-radius: 18px;
  padding: 14px;
  margin-top: 14px;
}
.empty-state {
  text-align: center;
  padding: 18px;
  color: var(--muted);
  border: 1px dashed var(--border);
  border-radius: 18px;
  background: rgba(255,255,255,0.65);
}
@media (max-width: 1100px) {
  .page { grid-template-columns: 1fr; justify-items: center; }
  .side-panel { max-width: 720px; text-align: center; }
  .feature-list { grid-template-columns: repeat(2, minmax(0, 1fr)); }
}
@media (max-width: 680px) {
  .page { padding: 0; gap: 0; }
  .side-panel { display: none; }
  .phone-shell { width: 100%; max-width: none; border-radius: 0; padding: 0; min-height: 100vh; }
  .notch { display: none; }
  .phone-screen { min-height: 100vh; border-radius: 0; }
  .grid-2, .quick-grid, .schedule-grid, .row { grid-template-columns: 1fr; flex-direction: column; }
  .toast { width: calc(100% - 30px); white-space: normal; text-align: center; }
}
