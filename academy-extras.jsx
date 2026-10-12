/* Kalaidoskope Academy — extra interactive sections */

/* ---------- 1. Technical diagrams for "What you'll learn" ---------- */
function BlueprintGrid({ id }) {
  return (
    <>
      <defs>
        <pattern id={id + '-s'} width="10" height="10" patternUnits="userSpaceOnUse"><path d="M10 0H0V10" fill="none" stroke="var(--head)" strokeWidth=".3" opacity=".12" /></pattern>
        <pattern id={id + '-l'} width="50" height="50" patternUnits="userSpaceOnUse"><path d="M50 0H0V50" fill="none" stroke="var(--head)" strokeWidth=".5" opacity=".16" /></pattern>
      </defs>
      <rect width="100%" height="100%" fill="var(--surface)" />
      <rect width="100%" height="100%" fill={`url(#${id}-s)`} />
      <rect width="100%" height="100%" fill={`url(#${id}-l)`} />
    </>
  );
}
const dgT = { fontFamily: 'var(--mono)', fill: 'var(--ink-faint)' };
const dgS = { fontFamily: 'var(--serif)', fill: 'var(--head)' };

function DiagramPsychology() {
  // inputs → decision node, with a sigmoid
  const ins = [['need', 60, 150], ['motivation', 52, 215], ['trust', 60, 280], ['social proof', 340, 160], ['friction', 345, 270]];
  const sig = Array.from({ length: 41 }, (_, i) => { const x = i / 40; const y = 1 / (1 + Math.exp(-12 * (x - 0.5))); return `${110 + x * 180},${445 - y * 55}`; }).join(' ');
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet" className="dg">
      <BlueprintGrid id="dg1" />
      <text x="28" y="96" style={{ ...dgT, fontSize: 9, letterSpacing: '.14em' }}>FIG. 01 — THE CUSTOMER DECISION</text>
      {ins.map(([k, x, y], i) => (
        <g key={k}>
          <path d={`M${x} ${y} Q 200 ${y} 200 215`} fill="none" stroke={k === 'friction' ? 'var(--ink-faint)' : 'var(--accent)'} strokeWidth="1" strokeDasharray="3 4" className="dg-flow" style={{ animationDelay: i * 0.3 + 's' }} />
          <circle cx={x} cy={y} r="4.5" fill="var(--surface)" stroke="var(--head)" />
          <text x={x < 200 ? x - 2 : x + 2} y={y - 10} textAnchor={x < 200 ? 'start' : 'end'} style={{ ...dgT, fontSize: 9.5 }}>{k}{k === 'friction' ? ' (−)' : ''}</text>
        </g>
      ))}
      <circle cx="200" cy="215" r="34" fill="var(--surface)" stroke="var(--head)" strokeWidth="1.2" />
      <circle cx="200" cy="215" r="44" fill="none" stroke="var(--accent)" strokeWidth=".8" className="dg-pulse" />
      <text x="200" y="212" textAnchor="middle" style={{ ...dgS, fontSize: 13 }}>decision</text>
      <text x="200" y="227" textAnchor="middle" style={{ ...dgT, fontSize: 8 }}>buy / wait</text>
      <text x="200" y="345" textAnchor="middle" style={{ ...dgS, fontSize: 15, fontStyle: 'italic' }}>P(buy) = σ( w₁·need + w₂·trust</text>
      <text x="200" y="366" textAnchor="middle" style={{ ...dgS, fontSize: 15, fontStyle: 'italic' }}>+ w₃·motivation − friction )</text>
      <line x1="110" y1="445" x2="295" y2="445" stroke="var(--head)" strokeWidth=".6" opacity=".5" />
      <line x1="110" y1="445" x2="110" y2="385" stroke="var(--head)" strokeWidth=".6" opacity=".5" />
      <polyline points={sig} fill="none" stroke="var(--head)" strokeWidth="1.4" className="dg-draw-loop" />
      <text x="300" y="448" style={{ ...dgT, fontSize: 8 }}>intent</text>
    </svg>
  );
}

function DiagramMechanisms() {
  const st = [['impression', 70], ['click', 145], ['visit', 220], ['lead', 290], ['sale', 345]];
  return (
    <svg viewBox="0 -50 400 500" preserveAspectRatio="xMidYMid meet" className="dg">
      <BlueprintGrid id="dg2" />
      <text x="28" y="46" style={{ ...dgT, fontSize: 9, letterSpacing: '.14em' }}>FIG. 02 — WHEN AN AD IS SERVED</text>
      <path id="dg2p" d="M55 190 L360 190" fill="none" stroke="var(--head)" strokeWidth="1" opacity=".35" />
      {st.map(([k, x], i) => {
        const h = 90 - i * 16;
        return (
          <g key={k}>
            <rect x={x - 11} y={190 - h / 2} width="22" height={h} rx="2" fill={i === 4 ? 'var(--head)' : 'var(--surface)'} stroke="var(--head)" strokeWidth="1" />
            <text x={x} y={190 + h / 2 + 16} textAnchor="middle" style={{ ...dgT, fontSize: 8.5 }}>{k}</text>
            {i < 4 && <text x={(x + st[i + 1][1]) / 2} y="132" textAnchor="middle" style={{ ...dgS, fontSize: 11, fontStyle: 'italic', fill: 'var(--accent)' }}>{['CTR', 'LP', 'CVR', 'close'][i]}</text>}
          </g>
        );
      })}
      <circle r="4" fill="var(--accent)"><animateMotion dur="3.6s" repeatCount="indefinite" path="M55 190 L360 190" /></circle>
      <text x="200" y="290" textAnchor="middle" style={{ ...dgS, fontSize: 14.5, fontStyle: 'italic' }}>CTR = clicks ⁄ impressions</text>
      <text x="200" y="312" textAnchor="middle" style={{ ...dgS, fontSize: 14.5, fontStyle: 'italic' }}>CPA = spend ⁄ conversions</text>
      <text x="200" y="334" textAnchor="middle" style={{ ...dgS, fontSize: 14.5, fontStyle: 'italic' }}>message × audience × moment</text>
    </svg>
  );
}

function useTicker(ms = 1400) {
  const [k, setK] = useState(0);
  useEffect(() => { const t = setInterval(() => setK((v) => v + 1), ms); return () => clearInterval(t); }, [ms]);
  return k;
}
function DiagramTools() {
  const k = useTicker(1500);
  const kpi = [['ROAS', (3.8 + ((k * 0.13) % 0.9)).toFixed(1) + '×'], ['CTR', (2.7 + ((k * 0.07) % 0.6)).toFixed(1) + '%'], ['CPA', '₹' + (196 - ((k * 5) % 30))]];
  const line = [62, 58, 66, 61, 74, 70, 83, 79, 92, 101, 97, 112];
  const pts = line.map((v, i) => `${60 + i * 26},${300 - v * 1.3}`).join(' ');
  const bars = [34, 52, 41, 66, 58];
  return (
    <svg viewBox="0 0 400 500" preserveAspectRatio="xMidYMid meet" className="dg">
      <BlueprintGrid id="dg3" />
      <text x="28" y="96" style={{ ...dgT, fontSize: 9, letterSpacing: '.14em' }}>FIG. 03 — READING THE DASHBOARD</text>
      {kpi.map(([lab, v], i) => (
        <g key={lab} transform={`translate(${44 + i * 108} 116)`}>
          <rect width="96" height="50" rx="4" fill="var(--surface)" stroke={i === k % 3 ? 'var(--accent)' : 'var(--line-strong)'} style={{ transition: 'stroke .4s' }} />
          <text x="10" y="18" style={{ ...dgT, fontSize: 8 }}>{lab}</text>
          <text x="10" y="40" style={{ ...dgS, fontSize: 18 }}>{v}</text>
          <text x="86" y="18" textAnchor="end" style={{ ...dgT, fontSize: 8, fill: i === 2 ? 'var(--accent)' : 'var(--head)' }}>{i === 2 ? '▼' : '▲'}</text>
        </g>
      ))}
      <line x1="0" x2="0" y1="180" y2="300" stroke="var(--accent)" strokeWidth="1" strokeDasharray="2 3" className="dg-scan" />
      {[0, 1, 2, 3].map((i) => <line key={i} x1="56" x2="350" y1={300 - i * 40} y2={300 - i * 40} stroke="var(--head)" strokeWidth=".4" opacity=".2" />)}
      <polyline points={`60,300 ${pts} 346,300`} fill="var(--accent)" opacity=".1" />
      <polyline points={pts} fill="none" stroke="var(--head)" strokeWidth="1.6" className="dg-draw-loop" />
      {bars.map((b, i) => <rect key={i} x={70 + i * 56} y={410 - b} width="26" height={b} fill={i === 3 ? 'var(--head)' : 'var(--accent)'} opacity={i === 3 ? 1 : .45} className="dg-bar-loop" style={{ animationDelay: i * 0.25 + 's' }} />)}
      <line x1="56" x2="350" y1="410" y2="410" stroke="var(--head)" strokeWidth=".6" opacity=".4" />
      <text x="200" y="448" textAnchor="middle" style={{ ...dgS, fontSize: 15, fontStyle: 'italic' }}>ROAS = revenue ⁄ ad spend</text>
      <text x="200" y="466" textAnchor="middle" style={{ ...dgT, fontSize: 8 }}>illustrative data</text>
    </svg>
  );
}

/* ---------- 2. Skills grid — icon flies in on hover ---------- */
function SkillIcon({ i }) {
  const s = { fill: 'none', stroke: 'currentColor', strokeWidth: 1.4, vectorEffect: 'non-scaling-stroke' };
  const g = [
    <><circle cx="12" cy="12" r="9" {...s} /><circle cx="12" cy="12" r="5" {...s} /><circle cx="12" cy="12" r="1.5" fill="currentColor" /></>,
    <><circle cx="12" cy="8" r="4" {...s} /><path d="M4 21c1-4.5 4-6.5 8-6.5s7 2 8 6.5" {...s} /></>,
    <><circle cx="12" cy="12" r="9" {...s} /><path d="M15.5 8.5l-2 5-5 2 2-5z" {...s} /></>,
    <><circle cx="4" cy="17" r="2" {...s} /><circle cx="12" cy="9" r="2" {...s} /><circle cx="20" cy="14" r="2" {...s} /><path d="M5.5 15.5L10.5 10.5M13.8 10l4.4 3" {...s} /></>,
    <><path d="M4 5h16v11H9l-5 4z" {...s} /><path d="M8 9h8M8 12h5" {...s} /></>,
    <><circle cx="10.5" cy="10.5" r="6.5" {...s} /><path d="M15.5 15.5L21 21" {...s} /></>,
    <><path d="M6 3h9l4 4v14H6z" {...s} /><path d="M9 11h7M9 14h7M9 17h4" {...s} /></>,
    <><path d={starPath(9, 0.2)} transform="translate(12 12)" {...s} /><circle cx="12" cy="12" r="1.6" fill="currentColor" /></>,
    <><path d="M3.5 17a8.5 8.5 0 0 1 17 0" {...s} /><path d="M12 17l4-5" {...s} /><circle cx="12" cy="17" r="1.4" fill="currentColor" /></>,
    <><path d="M4 10v4h3l6 4V6L7 10z" {...s} /><path d="M16 9a4 4 0 0 1 0 6M18.5 6.5a7.5 7.5 0 0 1 0 11" {...s} /></>,
  ][i];
  return <svg viewBox="0 0 24 24" aria-hidden="true">{g}</svg>;
}
function SkillsGrid({ skills }) {
  const [on, setOn] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setOn((v) => (v + 1) % skills.length), 3200);
    return () => clearInterval(t);
  }, [paused, skills.length]);
  return (
    <div className="sk2" onMouseLeave={() => setPaused(false)}>
      <ul className="sk2-list">
        {skills.map(([t], i) => (
          <li key={t}>
            <button className={on === i ? 'on' : ''} onMouseEnter={() => { setPaused(true); setOn(i); }} onFocus={() => { setPaused(true); setOn(i); }} onClick={() => { setPaused(true); setOn(i); }}>
              <span className="sk2-ico"><SkillIcon i={i} /></span>
              <span className="num">{String(i + 1).padStart(2, '0')}</span>
              <span className="sk2-t">{t}</span>
            </button>
          </li>
        ))}
      </ul>
      <div className="sk2-stage" aria-live="polite">
        <div className="sk2-orbit"></div>
        <div key={on} className="sk2-big"><SkillIcon i={on} /></div>
        <div key={'t' + on} className="sk2-copy">
          <span className="num">SKILL {String(on + 1).padStart(2, '0')} / {skills.length}</span>
          <h3 className="h3">{skills[on][0]}</h3>
          <p className="lede" style={{ fontSize: 17 }}>{skills[on][1]}</p>
        </div>
        <div className="sk2-dots">{skills.map((_, i) => <i key={i} className={i === on ? 'on' : ''} onClick={() => { setPaused(true); setOn(i); }}></i>)}</div>
      </div>
    </div>
  );
}

/* ---------- 3. What makes MAP different — interactive ---------- */
const MAP_TOOLS = [['Google Ads', 8, 18, -6], ['Meta Ads', 70, 10, 5], ['SEO', 30, 62, 4], ['Canva', 84, 58, -4], ['Instagram', 52, 32, -3], ['Analytics', 10, 80, 6], ['ChatGPT', 62, 80, -5], ['Email', 40, 8, 3]];
const MAP_CORE = ['Business', 'Market', 'Customer', 'Strategy', 'Brief', 'Execution'];
function MapDifferent({ rows }) {
  const [mode, setMode] = useState('typical');
  const ref = useRef(null);
  const fired = useRef(false);
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting && !fired.current) { fired.current = true; setTimeout(() => setMode('map'), 1600); }
    }, { threshold: 0.45 });
    ref.current && io.observe(ref.current);
    return () => io.disconnect();
  }, []);
  const isMap = mode === 'map';
  // MAP layout: core flow across, tools fan out under Execution
  const corePos = (i) => ({ left: 3 + i * 16.2, top: 26 }); // card width 13% → last card ends at 97%
  const toolPos = (i) => ({ left: 10 + i * 11.4, top: 76 });
  return (
    <div ref={ref}>
      <div className="mapd-toggle" role="tablist">
        <button className={!isMap ? 'on' : ''} onClick={() => setMode('typical')}>Typical marketing course</button>
        <button className={isMap ? 'on' : ''} onClick={() => setMode('map')}>The MAP way</button>
        <span className="mapd-thumb" style={{ transform: isMap ? 'translateX(100%)' : 'none' }}></span>
      </div>
      <div className={'mapd-stage' + (isMap ? ' is-map' : '')}>
        <svg className="mapd-lines" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          {MAP_CORE.slice(0, -1).map((_, i) => (
            <line key={i} x1={corePos(i).left + 13} y1="30" x2={corePos(i + 1).left} y2="30" stroke="var(--head)" strokeWidth="1" vectorEffect="non-scaling-stroke" style={{ opacity: isMap ? 0.6 : 0, transition: `opacity .6s ${0.4 + i * 0.1}s` }} />
          ))}
          {MAP_TOOLS.map((_, i) => (
            <line key={'t' + i} x1={corePos(5).left + 6.5} y1="36" x2={toolPos(i).left + 4} y2="72" stroke="var(--accent)" strokeWidth="1" strokeDasharray="3 3" vectorEffect="non-scaling-stroke" style={{ opacity: isMap ? 0.55 : 0, transition: `opacity .6s ${0.9 + i * 0.05}s` }} />
          ))}
        </svg>
        {MAP_CORE.map((c, i) => (
          <div key={c} className="mapd-core" style={{ left: corePos(i).left + '%', top: corePos(i).top + '%', opacity: isMap ? 1 : 0, transform: isMap ? 'none' : 'translateY(20px) scale(.8)', transitionDelay: isMap ? i * 0.08 + 's' : '0s' }}>
            <span className="num">0{i + 1}</span>{c}
          </div>
        ))}
        {MAP_TOOLS.map(([t, x, y, r], i) => {
          const p = isMap ? toolPos(i) : { left: x, top: y };
          return <div key={t} className="mapd-tool" style={{ left: p.left + '%', top: p.top + '%', transform: `rotate(${isMap ? 0 : r}deg)`, transitionDelay: isMap ? 0.3 + i * 0.04 + 's' : '0s' }}>{t}</div>;
        })}
        <div className="mapd-caption">{isMap ? 'Tools sit inside a system: business → customer → strategy → brief → execution.' : 'Tools learnt in isolation. No idea why, when or for whom.'}</div>
      </div>
      <div className="mapd-rows">
        {rows.map(([a, b], i) => (
          <div key={a} className="mapd-row rv">
            <span className="num">0{i + 1}</span>
            <span className={'mapd-a' + (isMap ? ' off' : '')}>{a}</span>
            <span className="mapd-arrow">→</span>
            <span className={'mapd-b' + (isMap ? ' on' : '')}>{b}</span>
          </div>
        ))}
      </div>
    </div>
  );
}

/* ---------- 4. Certificate ---------- */
function Certificate() {
  return (
    <div className="cert">
      <div className="cert-frame">
        <div className="cert-top"><img src="assets/logo-full.png" alt="kalaidoskope" className="cert-logo" /></div>
        <div className="cert-kicker">Certificate of Completion</div>
        <div className="cert-name">Learner Name</div>
        <div className="cert-body">has successfully completed the</div>
        <div className="cert-prog">Marketing Acceleration Program</div>
        <div className="cert-body">Kalaidoskope Academy · Mysore · 2026</div>
        <div className="cert-rule"></div>
        <div className="cert-line">Trained at <b>Kalaidoskope</b> · Honed at <b>Laukika</b></div>
        <div className="cert-body">Hands-on experience working on <b>[Brand A]</b> · <b>[Brand B]</b></div>
        <div className="cert-foot">
          <div className="cert-sig"><span></span>Programme Director<br />Kalaidoskope Academy</div>
          <div className="cert-seal"><img src="assets/logo-mark.png" alt="" /></div>
          <div className="cert-sig r"><img src="assets/laukika/laukika-logo.png" alt="Laukika" /><span></span>Hands-on Partner<br />Laukika Consultancy Solutions</div>
        </div>
      </div>
    </div>
  );
}

/* ---------- 5. Placement band ---------- */
function CountUp({ to = 100, dur = 1600 }) {
  const [v, setV] = useState(0);
  const ref = useRef(null);
  useEffect(() => {
    let raf;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const t0 = performance.now();
      const tick = (now) => { const p = Math.min(1, (now - t0) / dur); setV(Math.round(to * (1 - Math.pow(1 - p, 3)))); if (p < 1) raf = requestAnimationFrame(tick); };
      raf = requestAnimationFrame(tick);
    }, { threshold: 0.4 });
    ref.current && io.observe(ref.current);
    const fb = setTimeout(() => setV((x) => (x === 0 ? to : x)), 4000);
    return () => { io.disconnect(); cancelAnimationFrame(raf); clearTimeout(fb); };
  }, []);
  return <span ref={ref}>{v}</span>;
}
function PlacementBand({ onEnquire }) {
  const steps = [
    ['Learning', 'Three months of coaching, then a month of hands-on work on Laukika brands. You leave with a portfolio of real work.'],
    ['Preparation', 'Resume and portfolio reviews, and mock interviews that test the marketing logic employers want.'],
    ['Opportunity', 'Introductions to hiring brands and agencies through the Kalaidoskope Talent and Laukika networks.'],
  ];
  return (
    <section className="band placement" data-screen-label="Academy · Placement">
      <StarPattern id="placepat" />
      <div className="wrap section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="placement-grid">
          <div>
            <span className="eyebrow">Placement</span>
            <div className="big100"><CountUp /><span>%</span></div>
            <div className="serif" style={{ fontSize: 'clamp(26px,2.8vw,40px)', color: '#fff', lineHeight: 1.15, marginTop: 6 }}>Guaranteed placement assistance.</div>
            <p style={{ color: 'rgba(255,255,255,.72)', marginTop: 18, maxWidth: 440 }}>Every learner who completes MAP gets placement support, from building a portfolio to introductions to hiring brands and agencies.</p>
            <a href="#enquire" onClick={onEnquire} className="btn" style={{ background: '#fff', color: 'var(--k-blue)', marginTop: 30 }}>Enquire now <Arrow /></a>
          </div>
          <ol className="pl-steps">
            {steps.map(([t, b], i) => (
              <li key={t} className={'rv d' + (i + 1)}>
                <span className="pl-node">0{i + 1}</span>
                <div><h3 className="h3" style={{ color: '#fff' }}>{t}</h3><p>{b}</p></div>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}

/* ---------- 6. Mysore map ---------- */
function MysoreMap() {
  return (
    <div className="mys-map arch">
      <iframe title="Laukika, Mysore" loading="lazy" referrerPolicy="no-referrer-when-downgrade"
        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3184.8380442523044!2d76.59414502039381!3d12.287988778786962!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baf654e4a07b301%3A0x4d61744bc9aef2a9!2sLaukika%20Consultancy%20Solutions%20Private%20Limited!5e0!3m2!1sen!2sin!4v1730458224534!5m2!1sen!2sin"></iframe>
      <div className="mys-pin"><LaukikaLogo height={18} /><span>Laukika · Mysore</span></div>
    </div>
  );
}

Object.assign(window, { DiagramPsychology, DiagramMechanisms, DiagramTools, SkillsGrid, MapDifferent, Certificate, PlacementBand, MysoreMap });
