/* Enterprise — week planner + live capability demos */

/* ---------- A marketer's week: before / after ---------- */
const WEEK_DAYS = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'];
// [day, start(hr from 9), len(hr), type, label]
const WEEK_BLOCKS = [
  [0, 0, 2.5, 'rep', 'Pull weekly numbers'], [0, 2.5, 1, 'fol', 'Chase approvals'], [0, 4.5, 2, 'think', 'Campaign strategy'],
  [1, 0, 1.5, 'fol', 'Follow-up emails'], [1, 1.5, 2, 'trk', 'Update task sheet'], [1, 4.5, 2, 'think', 'Creative review'],
  [2, 0, 3, 'rep', 'Client report deck'], [2, 3.5, 1.5, 'doc', 'Write brief'], [2, 5.5, 1.5, 'fol', 'Status calls'],
  [3, 0, 1, 'fol', 'Chase inputs'], [3, 1, 2, 'trk', 'Rebuild checklist'], [3, 4, 2.5, 'think', 'Audience insight'],
  [4, 0, 2, 'rep', 'Monthly report'], [4, 2, 1.5, 'doc', 'Meeting recap'], [4, 4, 1, 'fol', 'Reminders'], [4, 5, 2, 'think', 'Next month plan'],
];
const WK_LABEL = { rep: 'Reporting', fol: 'Following up', trk: 'Task tracking', doc: 'Briefs & docs', think: 'Strategy & thinking' };
function WeekPlanner() {
  const [after, setAfter] = useState(false);
  const ref = useRef(null);
  const fired = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting && !fired.current) { fired.current = true; setTimeout(() => setAfter(true), 2200); } }, { threshold: 0.5 });
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const adminH = WEEK_BLOCKS.filter((b) => b[3] !== 'think').reduce((s, b) => s + b[2], 0);
  const thinkH = WEEK_BLOCKS.filter((b) => b[3] === 'think').reduce((s, b) => s + b[2], 0);
  const saved = Math.round(adminH * 0.7);
  return (
    <div className="wk" ref={ref}>
      <div className="wk-top">
        <div className="mapd-toggle" style={{ marginTop: 0 }}>
          <button className={!after ? 'on' : ''} onClick={() => setAfter(false)}>A marketer's week today</button>
          <button className={after ? 'on' : ''} onClick={() => setAfter(true)}>With your custom tool</button>
          <span className="mapd-thumb" style={{ transform: after ? 'translateX(100%)' : 'none' }}></span>
        </div>
        <div className="wk-stats">
          <div><span className="wk-n">{after ? Math.round(adminH - saved) : adminH}h</span><small>on admin</small></div>
          <div><span className="wk-n gold">{after ? thinkH + saved : thinkH}h</span><small>on thinking</small></div>
        </div>
      </div>
      <div className="wk-cal">
        <div className="wk-hours">{['9', '10', '11', '12', '1', '2', '3', '4'].map((h) => <span key={h}>{h}</span>)}</div>
        {WEEK_DAYS.map((d, di) => (
          <div key={d} className="wk-day">
            <div className="wk-dh">{d}</div>
            <div className="wk-col">
              {WEEK_BLOCKS.filter((b) => b[0] === di).map(([_, s, l, ty, lab], i) => {
                const auto = after && ty !== 'think';
                return (
                  <div key={i} className={'wk-b ' + ty + (auto ? ' auto' : '')} style={{ top: (s / 8) * 100 + '%', height: `calc(${((auto ? l * 0.3 : l) / 8) * 100}% - 3px)`, transitionDelay: (di * 0.05 + i * 0.04) + 's' }}>
                    <span>{auto ? '⚡ automated' : lab}</span>
                  </div>
                );
              })}
              {after && <div className="wk-free" style={{ top: '82%' }}>+ free time</div>}
            </div>
          </div>
        ))}
      </div>
      <div className="wk-legend">
        {Object.entries(WK_LABEL).map(([k, v]) => <span key={k}><i className={'wk-sw ' + k}></i>{v}</span>)}
        <span className="fine" style={{ marginLeft: 'auto' }}>Illustrative week</span>
      </div>
    </div>
  );
}

/* ---------- Live capability demos ---------- */
function useStep(n, ms, run = true) {
  const [s, setS] = useState(0);
  useEffect(() => { if (!run) return; setS(0); const t = setInterval(() => setS((v) => (v + 1) % n), ms); return () => clearInterval(t); }, [n, ms, run]);
  return s;
}
function DemoReport() {
  const s = useStep(5, 900);
  const src = ['Meta Ads', 'Google Ads', 'GA4', 'CRM'];
  return (
    <div className="dm dm-report">
      <div className="dm-srcs">{src.map((x, i) => <div key={x} className={'dm-src' + (s > i ? ' sent' : '')}>{x}</div>)}</div>
      <div className="dm-pipe">{src.map((_, i) => <i key={i} className={s > i ? 'go' : ''} style={{ animationDelay: i * 0.1 + 's' }}></i>)}</div>
      <div className="dm-doc">
        <div className="dm-doc-h">Weekly client report · auto</div>
        <div className="dm-kpis">{[['Leads', '412'], ['CPL', '₹186'], ['ROAS', '4.1×']].map(([k, v], i) => <div key={k} className={s > i + 1 ? 'on' : ''}><small>{k}</small><b>{v}</b></div>)}</div>
        <div className="dm-bars">{[40, 62, 48, 75, 66, 88].map((h, i) => <i key={i} style={{ height: s >= 4 ? h + '%' : '6%' }}></i>)}</div>
        <div className={'dm-sent' + (s >= 4 ? ' on' : '')}>✓ Sent to client · Mon 9:00</div>
      </div>
    </div>
  );
}
function DemoFollow() {
  const s = useStep(5, 1100);
  const msgs = [['bot', 'Hi Priya, the Diwali creatives are waiting on your approval (due today).'], ['bot', 'Reminder sent to Arjun: landing page copy is 1 day overdue.'], ['user', 'Approved ✅'], ['bot', 'Great. Moved "Diwali creatives" to Ready to launch and notified the media team.']];
  return (
    <div className="dm dm-chat">
      <div className="dm-chat-h"><span className="dm-dot"></span>Follow-up assistant</div>
      {msgs.slice(0, s).map(([w, m], i) => <div key={i} className={'dm-msg ' + w}>{m}</div>)}
      {s < 4 && <div className="dm-typing"><i></i><i></i><i></i></div>}
    </div>
  );
}
function DemoTree() {
  const s = useStep(7, 650);
  const nodes = [[0, 'New launch campaign'], [1, 'Strategy & brief'], [1, 'Creative'], [2, 'Ad variants × 6'], [2, 'Landing page'], [1, 'Email drip · 4 steps'], [1, 'Reporting · auto']];
  return (
    <div className="dm dm-tree">
      <div className="dm-tree-btn">＋ Create from "Launch" template</div>
      <ul>{nodes.map(([d, t], i) => <li key={i} className={s >= i ? 'on' : ''} style={{ paddingLeft: d * 22 + 'px' }}><span className="dm-tc">{d === 0 ? '▾' : d === 1 ? '▸' : '•'}</span>{t}{i === 5 && <em>drip</em>}</li>)}</ul>
      <div className="dm-cap">{s >= 6 ? '21 tasks, 4 owners, dependencies set: 1 click' : 'Building task tree…'}</div>
    </div>
  );
}
function DemoDrip() {
  const s = useStep(5, 1000);
  const st = [['Day 0', 'Welcome'], ['Day 3', 'Walkthrough'], ['Day 7', 'Site visit invite'], ['Day 14', 'Offer']];
  return (
    <div className="dm dm-drip">
      <div className="dm-drip-line"><i style={{ width: Math.min(s, 4) / 4 * 100 + '%' }}></i></div>
      <div className="dm-drip-steps">{st.map(([d, t], i) => (
        <div key={d} className={s > i ? 'on' : ''}><span className="dm-drip-dot">{s > i ? '✓' : i + 1}</span><b>{d}</b><small>{t}</small><em>{s > i ? ['62% open', '41% open', '18 visits', '6 bookings'][i] : 'scheduled'}</em></div>
      ))}</div>
      <div className="dm-cap">Every email, WhatsApp or ad sequence tracked as one timeline</div>
    </div>
  );
}
function DemoBrief() {
  const full = 'Objective: drive site visits for Phase 2 among families upgrading within 10km. Insight: buyers fear hidden costs. Message: "One price. Every detail." Channels: Search, Meta, portals.';
  const s = useStep(full.length / 4 + 8, 70);
  return (
    <div className="dm dm-brief">
      <div className="dm-doc-h">Creative brief · first draft</div>
      <div className="dm-brief-from">From: last 3 meetings, CRM notes, past campaign</div>
      <p>{full.slice(0, s * 4)}<span className="dm-caret"></span></p>
    </div>
  );
}
function DemoAlert() {
  const s = useStep(4, 1300);
  const al = [['warn', 'Spend spike', 'Meta CPL up 38% since 6am, ad set "Family 2BHK"'], ['info', 'Lead quality drop', '42% of today\'s leads outside target area'], ['ok', 'Competitor move', 'New project launched 3km away, price 8% lower']];
  return (
    <div className="dm dm-alert">
      <div className="dm-chat-h"><span className="dm-dot"></span>Monitoring · live</div>
      {al.slice(0, s).map(([k, t, d], i) => <div key={i} className={'dm-al ' + k}><b>{t}</b><span>{d}</span></div>)}
      {s === 0 && <div className="dm-cap">Watching your campaigns…</div>}
    </div>
  );
}
const CAPS = [
  ['Auto-reporting', 'Ad, analytics and CRM data in a client-ready report, sent on schedule.', 9, DemoReport],
  ['Smart follow-ups', 'Chases approvals and inputs for you, then moves the task forward.', 7, DemoFollow],
  ['Campaign task trees', 'Parent tasks, child tasks and dependencies from one template.', 5, DemoTree],
  ['Drip tracking', 'Sequences shown as timelines with results, not piles of tasks.', 3, DemoDrip],
  ['Briefs & recaps', 'First drafts written from what is already in your system.', 4, DemoBrief],
  ['Monitoring & alerts', 'Flags spend spikes, lead quality and competitor moves.', 3, DemoAlert],
];
function CapDemos() {
  const [on, setOn] = useState(0);
  const [picked, setPicked] = useState([true, true, false, false, false, false]);
  const D = CAPS[on][3];
  const hrs = CAPS.reduce((s, c, i) => s + (picked[i] ? c[2] : 0), 0);
  return (
    <div className="cd">
      <div className="cd-list">
        {CAPS.map(([t, d, h], i) => (
          <div key={t} className={'cd-item' + (on === i ? ' on' : '')} onMouseEnter={() => setOn(i)} onClick={() => setOn(i)}>
            <button className={'cd-pick' + (picked[i] ? ' yes' : '')} onClick={(e) => { e.stopPropagation(); setPicked((p) => p.map((v, j) => (j === i ? !v : v))); }} aria-label={'Add ' + t}>{picked[i] ? '✓' : '+'}</button>
            <div className="cd-txt"><div className="cd-t">{t}</div><div className="cd-d">{d}</div></div>
            <span className="cd-h">~{h}h<small>/wk</small></span>
          </div>
        ))}
        <div className="cd-total">
          <div><span className="num">YOUR TOOL SAVES</span><div className="cd-big">~{hrs}h <small>per person / week</small></div></div>
          <a href="#audit" onClick={(e) => { e.preventDefault(); const el = document.getElementById('audit'); el && window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' }); }} className="btn btn-primary">Build my tool <Arrow /></a>
        </div>
      </div>
      <div className="cd-stage">
        <div className="cd-chrome"><i></i><i></i><i></i><span>{CAPS[on][0]}</span></div>
        <div className="cd-screen" key={on}><D /></div>
      </div>
    </div>
  );
}

Object.assign(window, { WeekPlanner, CapDemos });
