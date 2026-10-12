/* Kalaidoskope — Homepage v2 narrative
   Hero → The gap (one root cause) → Train · Place · Automate (scroll story) → Powered by Laukika
   → Find your path (chooser) → Approach band → Open now → FAQ → Closing */

/* Override the business story copy to match the narrative order: train → place → automate */
BIZ.splice(0, BIZ.length,
  { k: 'Academy', to: '/academy', title: 'We train marketers who can think, not just click.', body: 'A 4-month programme in Mysore, taught by the leadership of Laukika: customer psychology, marketing mechanisms and tools through live examples, then a month of hands-on work on national and international brands.', caps: ['Starts 15 November', '20 seats · weekends', '100% placement assistance'], cta: 'Explore the Academy' },
  { k: 'Talent', to: '/talent', title: 'We place marketers who match the job.', body: 'Resumes say everyone does everything. We screen and interview for marketing logic, the ability to explain why the work should work, and shortlist only candidates who match your job description.', caps: ['Screened profiles', 'Preliminary interviews', '100% JD match'], cta: 'Explore Talent' },
  { k: 'Enterprise AI Tools', to: '/enterprise', title: 'We build tools that give your team its week back.', body: 'Reporting, follow-ups and tools that see marketing as a flat list eat hours every week. Laukika experts review how your team works, then we build a custom AI tool around it.', caps: ['Auto-reporting', 'Smart follow-ups', 'Campaign task trees'], cta: 'Explore Enterprise AI Tools' },
);

/* ---------- The gap: one root cause, three symptoms ---------- */
const GAP = [
  { who: 'Learners', k: 'Learn buttons, not marketing', d: 'Courses teach Google Ads, Meta and SEO as separate tools. Few teach the customer, the business or why a campaign should work.', fix: 'Academy', to: '/academy', ang: -90 },
  { who: 'Businesses', k: 'Hire resumes, not marketers', d: 'Those learners write resumes that list every platform. In interviews they do everything. After joining, they cannot reason about the work.', fix: 'Talent', to: '/talent', ang: 30 },
  { who: 'Marketing teams', k: 'Drown in admin, not strategy', d: 'Teams end up re-checking work, chasing follow-ups and building reports by hand, using tools that do not understand marketing.', fix: 'Enterprise AI', to: '/enterprise', ang: 150 },
];
function TheGap() {
  const [on, setOn] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setOn((v) => (v + 1) % 3), 3800);
    return () => clearInterval(t);
  }, [auto]);
  const g = GAP[on];
  const R = 150;
  return (
    <section className="section" data-screen-label="Home · The gap">
      <div className="wrap">
        <div className="split" style={{ alignItems: 'end' }}>
          <div>
            <span className="eyebrow rv">Why Kalaidoskope exists</span>
            <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Marketing has a thinking gap.']}</Lines><Lines className="l2">{['It shows up three ways.']}</Lines></h2>
          </div>
          <p className="lede rv d1">Too many people learn marketing as a set of tools. The result is a cycle that hurts learners, the businesses that hire them and the teams that work with them.</p>
        </div>
        <div className="gap rv d2" onMouseEnter={() => setAuto(false)}>
          <div className="gap-vis">
            <svg viewBox="-200 -200 400 400" aria-hidden="true">
              <circle r={R} fill="none" stroke="var(--line-strong)" strokeDasharray="2 5" />
              {GAP.map((x, i) => { const a = x.ang * Math.PI / 180; return <line key={'s' + i} x1={84 * Math.cos(a)} y1={84 * Math.sin(a)} x2={(R - 24) * Math.cos(a)} y2={(R - 24) * Math.sin(a)} stroke={on === i ? 'var(--k-blue)' : 'var(--line-strong)'} strokeWidth={on === i ? 1.5 : 1} strokeDasharray={on === i ? '0' : '3 4'} style={{ transition: 'all .5s' }} />; })}
              <circle r={R} fill="none" stroke="var(--k-gold)" strokeWidth="1.5" strokeDasharray={`${(2 * Math.PI * R) / 3} ${2 * Math.PI * R}`}
                transform={`rotate(${GAP[on].ang - 60})`} style={{ transition: 'transform .9s cubic-bezier(.2,.7,.1,1)' }} />
              {GAP.map((x, i) => {
                const a = x.ang * Math.PI / 180;
                return (
                  <g key={i} transform={`translate(${R * Math.cos(a)} ${R * Math.sin(a)})`} style={{ cursor: 'pointer' }} onClick={() => { setAuto(false); setOn(i); }}>
                    <circle r={on === i ? 30 : 22} fill={on === i ? 'var(--k-blue)' : 'var(--surface)'} stroke="var(--k-blue)" style={{ transition: 'all .5s' }} />
                    <text y="5" textAnchor="middle" style={{ fontFamily: 'var(--mono)', fontSize: 13, fill: on === i ? '#fff' : 'var(--head)' }}>0{i + 1}</text>
                    <text y={Math.sin(a) > 0.3 ? 50 : -42} textAnchor="middle" style={{ fontFamily: 'var(--sans)', fontSize: 12.5, letterSpacing: '.04em', fill: on === i ? 'var(--head)' : 'var(--ink-faint)', fontWeight: on === i ? 600 : 400 }}>{x.who}</text>
                  </g>
                );
              })}
              <circle r="82" fill="var(--surface)" stroke="var(--line-strong)" />
              <circle r="74" fill="none" stroke="var(--k-gold)" strokeWidth=".8" opacity=".7" />
              <text y="-26" textAnchor="middle" style={{ fontFamily: 'var(--mono)', fontSize: 9.5, letterSpacing: '.18em', fill: 'var(--k-gold)' }}>ROOT CAUSE</text>
              <text y="2" textAnchor="middle" style={{ fontFamily: 'var(--serif)', fontSize: 19, fill: 'var(--head)' }}>Missing</text>
              <text y="26" textAnchor="middle" style={{ fontFamily: 'var(--serif)', fontSize: 19, fill: 'var(--head)', fontWeight: 700 }}>marketing logic</text>
            </svg>
          </div>
          <div className="gap-copy">
            <div className="gap-tabs">
              {GAP.map((x, i) => <button key={x.who} className={on === i ? 'on' : ''} onClick={() => { setAuto(false); setOn(i); }}>{x.who}</button>)}
            </div>
            <div key={on} className="page-enter">
              <span className="num">SYMPTOM 0{on + 1}</span>
              <h3 className="h2" style={{ fontSize: 'clamp(30px,3.2vw,46px)', margin: '14px 0 16px' }}>{g.k}.</h3>
              <p className="lede">{g.d}</p>
              <div className="gap-fix">
                <span>Fixed by</span>
                <Link to={g.to} className="link">Kalaidoskope {g.fix} <Arrow /></Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Powered by Laukika ---------- */
function LaukikaBand() {
  return (
    <section className="section tight lk-home" data-screen-label="Home · Laukika">
      <div className="wrap">
        <div className="lk-home-grid">
          <div className="rv">
            <span className="eyebrow">The people behind it</span>
            <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginTop: 22 }}><LaukikaLogo height={44} /></div>
            <p className="lede" style={{ marginTop: 20 }}>Kalaidoskope is built by the leadership of <a href="https://www.laukika.com" target="_blank" rel="noopener" style={{ color: 'var(--head)', borderBottom: '1px solid var(--k-gold)' }}>Laukika</a>, a marketing consultancy in Mysore and Bangalore. They hire marketers, run campaigns and see every day where teams lose time.</p>
          </div>
          <div className="lk-stats">
            {[['100+', 'brands grown across B2B, B2C, D2C and local markets'], ['Fintech · FMCG · Tech', 'and more categories of hands-on experience'], ['Mysore + Bangalore', 'offices, where Academy learners do their hands-on month']].map(([v, k], i) => (
              <div key={v} className={'rv d' + (i + 1)}><div className="lk-v">{v}</div><div className="small">{k}</div></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Find your path ---------- */
const PATHS = [
  { who: "I'm a student", need: 'I want a marketing career, not just a certificate.', to: '/academy', go: 'Academy', cta: 'Enquire about the 15 Nov batch', pts: ['4 months · weekends · Mysore', 'Hands-on on Laukika brands', '100% placement assistance'] },
  { who: "I'm an entrepreneur", need: 'I want to understand the marketing my business depends on.', to: '/academy', go: 'Academy', cta: 'Speak to a counsellor', pts: ['Customer psychology & strategy', 'Judge your agency\'s work', 'Weekend-only classes'] },
  { who: "I'm hiring marketers", need: 'I need people who can think, not just set up ads.', to: '/talent', go: 'Talent', cta: 'Discuss your hiring needs', pts: ['Screened against your JD', 'Interviewed for marketing logic', 'Permanent · contract · freelance'] },
  { who: 'I run a marketing team', need: 'My team loses its week to reports and follow-ups.', to: '/enterprise', go: 'Enterprise AI Tools', cta: 'Book a workflow review', pts: ['Workflow review by Laukika', 'Custom AI tool for your process', 'Hours back every week'] },
];
function FindPath() {
  const [on, setOn] = useState(0);
  const p = PATHS[on];
  return (
    <section className="section alt" data-screen-label="Home · Find your path">
      <div className="wrap">
        <span className="eyebrow rv">Find your path</span>
        <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Tell us who you are.']}</Lines><Lines className="l2">{["We'll show you where to start."]}</Lines></h2>
        <div className="path rv d1">
          <div className="path-who">
            {PATHS.map((x, i) => (
              <button key={x.who} className={on === i ? 'on' : ''} onClick={() => setOn(i)} onMouseEnter={() => setOn(i)}>
                <span>{x.who}</span><Arrow />
              </button>
            ))}
          </div>
          <div className="path-card" key={on}>
            <span className="num">KALAIDOSKOPE {p.go.toUpperCase()}</span>
            <p className="path-need">"{p.need}"</p>
            <ul>{p.pts.map((x) => <li key={x}>{x}</li>)}</ul>
            <Link to={p.to} className="btn btn-primary">{p.cta} <Arrow /></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Open now — the hook ---------- */
function useCountdown(target) {
  const [now, setNow] = useState(Date.now());
  useEffect(() => { const t = setInterval(() => setNow(Date.now()), 1000); return () => clearInterval(t); }, []);
  const d = Math.max(0, target - now);
  return { days: Math.floor(d / 864e5), hrs: Math.floor(d / 36e5) % 24, mins: Math.floor(d / 6e4) % 60, secs: Math.floor(d / 1e3) % 60 };
}
function OpenNow() {
  const c = useCountdown(new Date('2026-11-15T09:30:00+05:30').getTime());
  const seatsLeft = 13;
  return (
    <section className="hook" data-screen-label="Home · Open now">
      <div className="hook-arcs"><Arcs count={7} gold={[0, 2, 5]} color="#fff" rotate={20} style={{ width: '100%', height: '100%' }} /></div>
      <div className="wrap hook-grid">
        <div className="hook-left">
          <span className="hook-live"><i></i>Enquiries open · First batch in the palace city of Mysore</span>
          <h2 className="hook-h">
            <span className="mask-line"><span>India's first</span></span>
            <span className="mask-line"><span><b>practitioner-led</b></span></span>
            <span className="mask-line"><span>marketing programme.</span></span>
          </h2>
          <p className="hook-sub">The first batch begins in the palace city of Mysore. Three months of weekend coaching. One month on Laukika's national and international brands. 100% placement assistance.</p>
          <div className="hook-count">
            {[['days', c.days], ['hrs', c.hrs], ['min', c.mins], ['sec', c.secs]].map(([k, v]) => (
              <div key={k}><span>{String(v).padStart(2, '0')}</span><small>{k}</small></div>
            ))}
            <div className="hook-count-l">until the batch starts<br />15 November</div>
          </div>
        </div>
        <div className="hook-card">
          <div className="hook-card-top"><span className="num">MARKETING ACCELERATION PROGRAM</span><span className="hook-seats">{seatsLeft} of 20 seats left</span></div>
          <div className="seatbar" style={{ background: 'rgba(255,255,255,.18)' }}><i style={{ width: ((20 - seatsLeft) / 20) * 100 + '%', background: 'var(--k-gold)' }}></i></div>
          <ul className="hook-list">
            {['Customer psychology, marketing mechanisms & tools', 'Live examples from Laukika practitioners', 'Hands-on month on real brands', 'Kalaidoskope certification + placement assistance'].map((x) => <li key={x}>{x}</li>)}
          </ul>
          <Link to="/academy" className="hook-cta">
            <span>Reserve your seat</span>
            <span className="hook-cta-arr">→</span>
          </Link>
          <div className="hook-alt">
            <Link to="/talent">Hiring marketers? <b>Get a screened shortlist →</b></Link>
            <Link to="/enterprise">Losing hours to admin? <b>Book a workflow review →</b></Link>
          </div>
        </div>
      </div>
    </section>
  );
}

const HOME_FAQ2 = [
  { q: 'What is Kalaidoskope?', a: 'Kalaidoskope trains people to be industry-ready marketers (Academy), places the right marketers in the right roles (Talent), and builds custom AI tools that save marketing teams time and money (Enterprise AI Tools). It is built by the leadership of Laukika Consultancy Solutions.' },
  { q: 'What makes the Academy different from other marketing courses?', a: 'We teach the thinking before the tools: customer psychology, marketing mechanisms and strategy, through live examples. After three months of weekend coaching, learners spend a month working hands-on on Laukika\'s national and international brands, with 100% placement assistance.' },
  { q: 'When and where does the Academy start?', a: 'The first batch starts on 15 November 2026 in Mysore, with weekend-only classes and 20 seats.' },
  { q: 'How does Kalaidoskope Talent screen candidates?', a: 'Marketers screen every profile against your job description and run preliminary interviews that test marketing logic, whether a candidate can explain why the work should work. You receive only candidates who match your JD.' },
  { q: 'What kind of AI tools do you build?', a: 'Custom tools around how your team works: auto-reporting, automatic follow-ups, campaign task trees with parent and child tasks, drip tracking, and first drafts of briefs and recaps. It starts with a workflow review by Laukika experts.' },
  { q: 'Who is Laukika?', a: 'Laukika Consultancy Solutions is a marketing consultancy with offices in Mysore and Bangalore that has grown 100+ brands across categories. Its leadership designs the Academy curriculum, screens Talent candidates and reviews workflows for Enterprise AI Tools.' },
];

function HomePage({ hero, copy, imgs }) {
  return (
    <main className="page-enter">
      {hero === 'kaleidoscope' ? <HeroB copy={copy} /> : <HeroA copy={copy} />}
      <TheGap />
      <WhatWeDo />
      <LaukikaBand />
      <FindPath />
      <Approach />
      <OpenNow />
      <FaqSection items={HOME_FAQ2} />
      <Closing eyebrow="What does your marketing need next?" l1="Train. Place. Automate." l2="Start where you are." lede="Become an industry-ready marketer, hire people who can think, or give your team its week back." cta="Start a conversation" />
    </main>
  );
}

Object.assign(window, { HomePage });
