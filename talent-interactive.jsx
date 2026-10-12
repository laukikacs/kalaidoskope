/* Talent — interactive sections */

/* ---------- 1. Spot the marketer (interview simulator) ---------- */
const SIM_QS = [
  {
    q: 'A real estate campaign is getting plenty of leads, but very few site visits. What would you do?',
    tool: "I'd increase the Meta budget and test new ad creatives to bring in more leads.",
    logic: "I'd check lead quality first: who is enquiring, what the ad promised, how fast sales calls back. More leads won't fix a mismatch between the ad and the buyer.",
    why: 'More spend multiplies the problem. Reasoning about the buyer finds it.',
  },
  {
    q: 'Why did you choose Google Search for this brand?',
    tool: "Google Ads gives the best ROI, and I'm certified in it.",
    logic: "Buyers here already search with intent, like 'flats near X'. Search catches them while they're considering; social would be for awareness.",
    why: 'One answer is about the platform. The other is about the customer.',
  },
  {
    q: 'SEO traffic doubled, but enquiries did not move. Is that a good result?',
    tool: "Yes. Traffic doubled, so SEO is working. I'd report it as a win.",
    logic: "Not yet. I'd check which pages grew and whether those searchers are buyers. Traffic only matters if it's the right intent.",
    why: 'Activity is not outcome. A marketer connects the two.',
  },
];
function InterviewSim({ toBrief }) {
  const [qi, setQi] = useState(0);
  const [pick, setPick] = useState(null);
  const [score, setScore] = useState(0);
  const [done, setDone] = useState(false);
  const q = SIM_QS[qi];
  const flip = qi % 2 === 1; // vary the order
  const opts = flip ? [['logic', q.logic], ['tool', q.tool]] : [['tool', q.tool], ['logic', q.logic]];
  const choose = (k) => { if (pick) return; setPick(k); if (k === 'logic') setScore((s) => s + 1); };
  const next = () => { if (qi === SIM_QS.length - 1) { setDone(true); return; } setQi(qi + 1); setPick(null); };
  const reset = () => { setQi(0); setPick(null); setScore(0); setDone(false); };
  return (
    <section className="section alt" data-screen-label="Talent · Interview sim">
      <div className="wrap">
        <div className="split" style={{ alignItems: 'end' }}>
          <div>
            <span className="eyebrow rv">Try it yourself</span>
            <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Two candidates.']}</Lines><Lines className="l2">{['Same resume. Spot the marketer.']}</Lines></h2>
          </div>
          <p className="lede rv d1">Both candidates list Google Ads, Meta and SEO. Only one can explain why the work should work. This is what our preliminary interviews look for.</p>
        </div>
        <div className="sim rv d2">
          {done ? (
            <div className="sim-end">
              <span className="num">RESULT</span>
              <div className="sim-score">{score}<small>/{SIM_QS.length}</small></div>
              <h3 className="h3">You spotted {score === SIM_QS.length ? 'every' : score} marketer{score === 1 ? '' : 's'}.</h3>
              <p className="lede" style={{ fontSize: 17, margin: '10px auto 26px', maxWidth: '46ch' }}>Now picture doing this for every applicant, for every role. That's what Kalaidoskope does before you meet anyone.</p>
              <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
                <a href="#brief" onClick={toBrief} className="btn btn-primary">Let us screen for you <Arrow /></a>
                <button className="btn btn-ghost" onClick={reset}>Try again</button>
              </div>
            </div>
          ) : (
            <>
              <div className="sim-top">
                <span className="num">QUESTION {qi + 1} / {SIM_QS.length}</span>
                <div className="sim-prog">{SIM_QS.map((_, i) => <i key={i} className={i < qi || (i === qi && pick) ? 'on' : ''}></i>)}</div>
              </div>
              <p key={qi} className="sim-q page-enter">"{q.q}"</p>
              <div className="sim-opts">
                {opts.map(([k, txt], i) => {
                  const state = !pick ? '' : k === 'logic' ? ' right' : ' wrong';
                  return (
                    <button key={qi + k} className={'sim-opt' + state + (pick === k ? ' picked' : '')} onClick={() => choose(k)} disabled={!!pick}>
                      <span className="sim-who">Candidate {i === 0 ? 'A' : 'B'}</span>
                      <span className="sim-txt">{txt}</span>
                      {pick && <span className="sim-verdict">{k === 'logic' ? '✓ Thinks like a marketer' : '✕ Knows the tool, not the why'}</span>}
                    </button>
                  );
                })}
              </div>
              <div className="sim-foot">
                <span className="sim-why">{pick ? q.why : 'Pick the answer you would hire.'}</span>
                {pick && <button className="btn btn-primary" onClick={next}>{qi === SIM_QS.length - 1 ? 'See result' : 'Next question'} <Arrow /></button>}
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

/* ---------- 2. Iceberg — scroll below the resume ---------- */
const ICE_TOP = [['Google Ads', 38, 30], ['Meta', 54, 22], ['SEO', 47, 40], ['Backlinks', 62, 36], ['Posting', 40, 48], ['Canva', 56, 47]];
const ICE_DEEP = [
  ['Who the customer is', 'and what they need'],
  ['The business objective', 'what marketing must achieve'],
  ['The buyer journey', 'awareness → consideration → purchase'],
  ['What happens when an ad is served', 'and after the click'],
  ['Why the set-up will work', 'before it goes live'],
];
function Iceberg() {
  const ref = useRef(null);
  const p = useSectionProgress(ref);
  const dive = clamp01((p - 0.08) / 0.75);
  const shown = Math.floor(dive * (ICE_DEEP.length + 0.6));
  return (
    <section ref={ref} className="ice-sec" data-screen-label="Talent · Iceberg">
      <div className="ice-sticky">
        <div className="ice-scene" style={{ transform: `translateY(${-dive * 40}%)` }}>
          <div className="ice-sky">
            <div className="wrap ice-head">
              <span className="eyebrow">What we screen for</span>
              <h2 className="h2"><span className="l1x">A resume shows the tip.</span><b>We check what's underneath.</b></h2>
            </div>
          </div>
          <div className="ice-water"></div>
          <div className="ice-berg top"></div>
          <div className="ice-berg deep"></div>
          <div className="ice-line"><span>THE RESUME</span><span>WHAT YOU'RE REALLY HIRING</span></div>
          <div className="ice-tip">{ICE_TOP.map(([t, x, y], i) => <span key={t} className="ice-chip" style={{ left: (x - 30) * 2.4 + '%', top: 18 + (y - 22) * 2.4 + '%', animationDelay: i * 0.3 + 's' }}>{t}</span>)}</div>
          <div className="ice-deep-list">
            {ICE_DEEP.map(([t, s], i) => (
              <div key={t} className={'ice-deep' + (i < shown ? ' on' : '')} style={{ transitionDelay: (i * 0.04) + 's' }}>
                <span className="ice-deep-n">0{i + 1}</span>
                <div><div className="ice-deep-t">{t}</div><div className="ice-deep-s">{s}</div></div>
              </div>
            ))}
          </div>
        </div>
        <div className="ice-hint" style={{ opacity: dive > 0.05 ? 0 : 1 }}>Scroll to dive below the resume ↓</div>
      </div>
    </section>
  );
}

/* ---------- 3. Screening funnel (dot grid) ---------- */
const FUNNEL = [
  ['Applications', 120, 'Every profile that comes in for your role, from job portals, referrals and our marketing networks.'],
  ['Screened against your JD', 36, 'Marketers read each profile against the role, the capability it needs and your business context.'],
  ['Preliminary interviews', 12, 'Candidates reason through real situations, like the ones you just tried. Tool-talk alone does not get through.'],
  ['Your shortlist', 4, 'Only candidates who match your job description. You meet them for final interviews.'],
];
function seeded(n) {
  const a = Array.from({ length: n }, (_, i) => i);
  let s = 7;
  for (let i = n - 1; i > 0; i--) { s = (s * 9301 + 49297) % 233280; const j = Math.floor((s / 233280) * (i + 1)); [a[i], a[j]] = [a[j], a[i]]; }
  return a;
}
const FUNNEL_ORDER = seeded(120);
function ScreenFunnel() {
  const [st, setSt] = useState(0);
  const [auto, setAuto] = useState(true);
  const ref = useRef(null);
  useEffect(() => {
    if (!auto) return;
    let t;
    const io = new IntersectionObserver(([e]) => {
      clearInterval(t);
      if (e.isIntersecting) t = setInterval(() => setSt((s) => (s + 1) % FUNNEL.length), 2600);
    }, { threshold: 0.4 });
    ref.current && io.observe(ref.current);
    return () => { io.disconnect(); clearInterval(t); };
  }, [auto]);
  const keep = new Set(FUNNEL_ORDER.slice(0, FUNNEL[st][1]));
  return (
    <section id="screen" className="section" data-screen-label="Talent · Funnel" ref={ref}>
      <div className="wrap">
        <div className="split" style={{ alignItems: 'end' }}>
          <div>
            <span className="eyebrow rv">How we screen</span>
            <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['120 applications in.']}</Lines><Lines className="l2">{['The right few out.']}</Lines></h2>
          </div>
          <p className="lede rv d1">Marketers screening marketers, backed by the leadership of Laukika, who have spent years hiring and working with marketing talent.</p>
        </div>
        <div className="fun rv d2" onMouseEnter={() => setAuto(false)}>
          <div className="fun-grid">
            {Array.from({ length: 120 }, (_, i) => <i key={i} className={keep.has(i) ? (st === 3 ? 'star' : 'on') : ''}></i>)}
          </div>
          <div className="fun-side">
            <div className="fun-count"><span key={st} className="page-enter">{FUNNEL[st][1]}</span><small>{st === 3 ? 'shortlisted' : 'candidates'}</small></div>
            <div className="fun-steps">
              {FUNNEL.map(([t, n, d], i) => (
                <button key={t} className={'fun-step' + (i === st ? ' on' : '') + (i < st ? ' past' : '')} onClick={() => { setAuto(false); setSt(i); }}>
                  <span className="num">STEP 0{i + 1}</span>
                  <span className="fun-t">{t}</span>
                  {i === st && <span className="fun-d">{d}</span>}
                </button>
              ))}
            </div>
          </div>
        </div>
        <p className="fine rv" style={{ marginTop: 14 }}>Illustrative numbers. Every role is different.</p>
      </div>
    </section>
  );
}

/* ---------- 4. JD match ring ---------- */
const JD_F = [
  ['Role', 'The responsibilities and expectations of the position'],
  ['Capability', 'The marketing skills, and the logic, the work needs'],
  ['Experience', "The candidate's relevant background"],
  ['Context', 'The business and team they will join'],
  ['Fit', 'How they align with your job description'],
];
function JDMatch() {
  const [on, setOn] = useState([true, true, false, false, false]);
  const n = on.filter(Boolean).length;
  const pct = n * 20;
  const C = 2 * Math.PI * 80;
  const toggle = (i) => setOn((a) => a.map((v, j) => (j === i ? !v : v)));
  return (
    <section className="section alt" data-screen-label="Talent · JD match">
      <div className="wrap split c">
        <div className="jd-ring-wrap rv">
          <svg viewBox="0 0 200 200" className="jd-ring">
            <circle cx="100" cy="100" r="80" fill="none" stroke="var(--line)" strokeWidth="10" />
            <circle cx="100" cy="100" r="80" fill="none" stroke={pct === 100 ? 'var(--k-blue)' : 'var(--accent)'} strokeWidth="10" strokeLinecap="round"
              strokeDasharray={C} strokeDashoffset={C * (1 - pct / 100)} transform="rotate(-90 100 100)" style={{ transition: 'stroke-dashoffset .8s cubic-bezier(.2,.7,.1,1), stroke .4s' }} />
            {JD_F.map((_, i) => {
              const a = (-90 + i * 72) * Math.PI / 180;
              return <circle key={i} cx={100 + 96 * Math.cos(a)} cy={100 + 96 * Math.sin(a)} r="4" fill={on[i] ? 'var(--k-blue)' : 'var(--bg)'} stroke="var(--k-blue)" style={{ transition: 'fill .3s' }} />;
            })}
          </svg>
          <div className="jd-center">
            <div className="jd-pct">{pct}<small>%</small></div>
            <div className="jd-lab">{pct === 100 ? 'JD match: shortlisted' : 'JD match'}</div>
          </div>
        </div>
        <div className="stack">
          <span className="eyebrow rv">Beyond the resume</span>
          <h2 className="h2 duo"><Lines className="l1">{['Five checks.']}</Lines><Lines className="l2">{['Only 100% gets through.']}</Lines></h2>
          <p className="rv d1" style={{ color: 'var(--ink-soft)' }}>Tap each check. A candidate reaches your shortlist only when all five line up with your job description.</p>
          <div className="jd-list rv d2">
            {JD_F.map(([k, d], i) => (
              <button key={k} className={'jd-item' + (on[i] ? ' on' : '')} onClick={() => toggle(i)}>
                <span className="jd-box">{on[i] ? '✓' : ''}</span>
                <span className="jd-k">{k}</span>
                <span className="jd-d">{d}</span>
              </button>
            ))}
          </div>
          <div className="chips rv d3" style={{ marginTop: 18 }}>{['Performance / Paid', 'SEO', 'Content', 'Social', 'Brand managers', 'Marketing heads', 'Permanent · Contract · Freelance'].map((c) => <span key={c} className="chip">{c}</span>)}</div>
        </div>
      </div>
    </section>
  );
}

/* ---------- 5. Cost of a wrong hire ---------- */
function WrongHireCost({ toBrief }) {
  const [sal, setSal] = useState(60000);
  const [months, setMonths] = useState(5);
  const [ad, setAd] = useState(200000);
  const fmt = (v) => '₹' + Math.round(v).toLocaleString('en-IN');
  const salary = sal * months;
  const waste = ad * months * 0.3;
  const rehire = sal * 1.5;
  const total = salary + waste + rehire;
  const parts = [['Salary paid', salary], ['Ad budget misspent', waste], ['Re-hiring time & effort', rehire]];
  return (
    <section className="section" data-screen-label="Talent · Cost">
      <div className="wrap">
        <span className="eyebrow rv">What a wrong hire costs</span>
        <h2 className="h2 duo" style={{ marginTop: 24, marginBottom: 44 }}><Lines className="l1">{['A wrong marketing hire']}</Lines><Lines className="l2">{['costs more than a salary.']}</Lines></h2>
        <div className="calc rv d1">
          <div className="calc-in">
            <span className="num">YOUR NUMBERS</span>
            {[
              ['Monthly salary of the role', sal, setSal, 20000, 300000, 5000, fmt(sal)],
              ['Months before you realise it isn\'t working', months, setMonths, 1, 12, 1, months + ' mo'],
              ['Monthly ad budget they manage', ad, setAd, 0, 2000000, 25000, fmt(ad)],
            ].map(([l, v, set, mn, mx, s, disp]) => (
              <label key={l} className="calc-row">
                <span className="calc-l">{l}</span><span className="calc-v">{disp}</span>
                <input type="range" min={mn} max={mx} step={s} value={v} onChange={(e) => set(+e.target.value)} />
              </label>
            ))}
          </div>
          <div className="calc-out">
            <div><span className="num">ESTIMATED COST</span><div className="calc-big">{fmt(total)}</div></div>
            <div className="cost-bars">
              {parts.map(([k, v]) => (
                <div key={k}><div className="cost-k"><span>{k}</span><span>{fmt(v)}</span></div><div className="cost-bar"><i style={{ width: (v / total) * 100 + '%' }}></i></div></div>
              ))}
            </div>
            <a href="#brief" onClick={toBrief} className="btn" style={{ background: '#fff', color: 'var(--k-blue)', alignSelf: 'flex-start' }}>Hire right the first time <Arrow /></a>
            <p className="fine" style={{ color: 'rgba(255,255,255,.6)', margin: 0 }}>Illustrative. Assumes ~30% of ad spend is misdirected and ~1.5 months of salary in re-hiring effort.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { InterviewSim, Iceberg, ScreenFunnel, JDMatch, WrongHireCost });
