/* Kalaidoskope — About (whole-company story, home palette) */

/* Hero: the name explained — one view, many perspectives */
function AboutHero() {
  const [lens, setLens] = useState(0);
  const L = [
    { k: 'The learner', c: 'var(--k-peri)', d: 'needs to understand the customer, not just the tools.' },
    { k: 'The employer', c: 'var(--k-blue)', d: 'needs people who can think, not just a strong portfolio.' },
    { k: 'The team', c: 'var(--k-gold)', d: 'needs time for strategy, not another week of reports.' },
  ];
  useEffect(() => { const t = setInterval(() => setLens((v) => (v + 1) % 3), 3400); return () => clearInterval(t); }, []);
  return (
    <section className="phero ab-hero" data-screen-label="About · Hero">
      <div className="wrap split c" style={{ position: 'relative', zIndex: 2 }}>
        <div>
          <div className="crumb rv"><Link to="/">Home</Link><span>/</span><span>About</span></div>
          <div className="rv d1" style={{ marginTop: 30 }}><span className="eyebrow">About Kalaidoskope</span></div>
          <h1 className="display duo" style={{ margin: '26px 0 26px', fontSize: 'clamp(44px,5.8vw,86px)' }}>
            <Lines className="l1">{['One view of marketing.']}</Lines>
            <Lines className="l2">{['Every perspective', 'that matters.']}</Lines>
          </h1>
          <p className="lede rv d2">A kaleidoscope turns many pieces into one clear picture. We do the same for marketing. We train marketers, place them where they fit and build tools that give teams time back, all from the same understanding of how marketing really works.</p>
          <div className="ab-lens rv d3">
            {L.map((x, i) => (
              <button key={x.k} className={lens === i ? 'on' : ''} onClick={() => setLens(i)} style={{ '--c': x.c }}>
                <i></i><span>{x.k}</span>
              </button>
            ))}
          </div>
          <p key={lens} className="ab-lens-d page-enter"><b>{L[lens].k}</b> {L[lens].d}</p>
        </div>
        <div className="rv d2"><Kaleidoscope segments={12} speed={0.8} /></div>
      </div>
    </section>
  );
}

/* Story — sticky chapters, each with its own visual */
const STORY = [
  { k: 'The practice', t: 'It started at Laukika.', d: 'Laukika Consultancy Solutions has grown 100+ brands across fintech, consumables, technology, real estate and more, from offices in Mysore and Bangalore.', stat: ['100+', 'brands grown'] },
  { k: 'The pattern', t: 'We kept seeing the same gap.', d: 'Portfolios that fell apart on the first brief. Marketers who knew the tools but not the customer. Teams buried in reports and follow-ups.', stat: ['3', 'problems, one root cause'] },
  { k: 'The idea', t: 'Fix the cause, not the symptoms.', d: 'Teach the thinking. Hire for it. Automate everything that gets in its way. Three perspectives, one system: a kaleidoscope.', stat: ['1', 'system'] },
  { k: 'Today', t: 'Three businesses, one view.', d: 'Academy opens its first batch in Mysore on 15 November. Talent screens marketers for brands and agencies. Enterprise AI Tools builds custom tools for marketing teams.', stat: ['15 Nov', 'first Academy batch'] },
];

function StoryVisPractice() {
  const cats = ['Fintech', 'FMCG', 'Tech', 'Real estate', 'D2C', 'Education'];
  return (
    <div className="sv sv-practice lk-soft">
      <div className="lk-soft-bars" aria-hidden="true">{LK_SEQ.map((c, i) => <i key={i} style={{ background: c }}></i>)}</div>
      <div className="sv-lk-head"><LaukikaLogo height={26} /><span>since the beginning</span></div>
      <div className="sv-dots">{Array.from({ length: 100 }, (_, i) => <i key={i} style={{ background: LK_SEQ[(i * 7 + Math.floor(i / 20)) % 5], animationDelay: (i % 10) * 0.04 + Math.floor(i / 10) * 0.05 + 's' }}></i>)}</div>
      <div className="sv-chips">{cats.map((c, i) => <span key={c} style={{ animationDelay: 0.6 + i * 0.1 + 's', '--c': LK_SEQ[i % 5] }}><b></b>{c}</span>)}</div>
      <div className="sv-pins"><span><b style={{ color: LK.teal }}>●</b> Mysore</span><span><b style={{ color: LK.blue }}>●</b> Bangalore</span></div>
    </div>
  );
}
function StoryVisPattern() {
  const P = [['Portfolio', 'Borrowed work', '✓', '?'], ['Tools', 'No customer logic', '✓', '?'], ['Week', 'Lost to admin', '40h', '9h']];
  return (
    <div className="sv sv-pattern">
      {P.map(([k, d, x, y], i) => (
        <div key={k} className="sv-sym" style={{ animationDelay: i * 0.18 + 's' }}>
          <span className="sv-sym-n">0{i + 1}</span>
          <div><b>{k}</b><small>{d}</small></div>
          <span className="sv-flip"><em>{x}</em><em>{y}</em></span>
        </div>
      ))}
      <div className="sv-root"><span>Root cause</span><b>Missing marketing logic</b></div>
    </div>
  );
}
function StoryVisIdea() {
  return (
    <div className="sv sv-idea">
      <svg viewBox="-120 -120 240 240" aria-hidden="true">
        <circle r="104" fill="none" stroke="var(--line-strong)" strokeDasharray="2 4" />
        <path d={starPath(96, 0.15)} fill="none" stroke="var(--head)" strokeWidth="1" className="sv-spin" />
        <path d={starPath(84, 0.17)} fill="none" stroke="var(--k-gold)" strokeWidth="1" opacity=".8" className="sv-spin r" />
        <g className="sv-converge"><Triad spread={0.5} size={14} /></g>
        {[['Train', -90], ['Place', 30], ['Automate', 150]].map(([t, a]) => {
          const r = a * Math.PI / 180;
          return <text key={t} x={70 * Math.cos(r)} y={70 * Math.sin(r) + 4} textAnchor="middle" className="sv-lab">{t.toUpperCase()}</text>;
        })}
      </svg>
    </div>
  );
}
function StoryVisToday() {
  const F = [['Academy', 'Batch starts 15 Nov', 'fam-a'], ['Talent', 'Screening now', 'fam-t'], ['Enterprise AI', 'Workflow reviews open', 'fam-e']];
  return (
    <div className="sv sv-today">
      <div className="sv-hub"><img src="assets/logo-mark.png" alt="" /></div>
      {F.map(([k, d, c], i) => (
        <div key={k} className={'sv-biz ' + c} style={{ animationDelay: i * 0.15 + 's' }}>
          <b>{k}</b><small><i></i>{d}</small>
        </div>
      ))}
    </div>
  );
}
const STORY_VIS = [StoryVisPractice, StoryVisPattern, StoryVisIdea, StoryVisToday];

function AboutStory() {
  const ref = useRef(null);
  const p = useSectionProgress(ref);
  const [manual, setManual] = useState(null);
  const auto = Math.min(STORY.length - 1, Math.floor(p * STORY.length));
  useEffect(() => { setManual(null); }, [auto]);
  const on = manual ?? auto;
  const S = STORY[on];
  const V = STORY_VIS[on];
  const jump = (i) => {
    const el = ref.current; if (!el) return;
    const total = el.offsetHeight - window.innerHeight;
    window.scrollTo({ top: el.offsetTop + total * ((i + 0.5) / STORY.length), behavior: 'smooth' });
  };
  return (
    <section ref={ref} className="ab-story" data-screen-label="About · Story">
      <div className="ab-story-sticky">
        <div className="wrap" style={{ width: '100%' }}>
          <div className="st-head">
            <div>
              <span className="eyebrow">Our story</span>
              <h2 className="h2 duo" style={{ marginTop: 16 }}><span className="l1">Born inside a marketing practice.</span><span className="l2">Built to fix what we saw.</span></h2>
            </div>
            <div className="st-rail">
              {STORY.map((x, i) => (
                <button key={x.k} className={(i === on ? 'on ' : '') + (i < on ? 'past' : '')} onClick={() => jump(i)}>
                  <span className="st-rail-bar"><i style={{ ...(i === 0 ? { background: `linear-gradient(90deg, ${LK_SEQ.join(',')})` } : {}), width: i < on ? '100%' : i === on ? (((p * STORY.length) % 1) * 100 || 100) + '%' : '0%' }}></i></span>
                  <span className="st-rail-k"><b>0{i + 1}</b>{x.k}</span>
                </button>
              ))}
            </div>
          </div>
          <div className="st-body">
            <div className="st-vis" key={'v' + on}><V /></div>
            <div className="st-copy" key={'c' + on}>
              <span className="num">CHAPTER 0{on + 1} / 0{STORY.length} · {S.k.toUpperCase()}</span>
              <h3 className="st-t">{S.t}</h3>
              <p className="lede">{S.d}</p>
              <div className="st-stat"><span>{S.stat[0]}</span><small>{S.stat[1]}</small></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* Three businesses, each in its own colour */
function AboutFamily() {
  const F = [
    { k: 'Academy', v: 'Train', t: 'Those who do, now teach.', d: 'A 4-month, practitioner-led marketing programme in Mysore. Customer psychology, marketing mechanisms and tools through live examples, then a hands-on month on Laukika brands.', to: '/academy', cls: 'fam-a', cta: 'Explore the Academy' },
    { k: 'Talent', v: 'Place', t: 'Marketers screening marketers.', d: 'We screen and interview copywriters, designers, performance, social and brand marketers for real ability, and shortlist only those who match your JD.', to: '/talent', cls: 'fam-t', cta: 'Explore Talent' },
    { k: 'Enterprise AI Tools', v: 'Automate', t: 'Your team works its own way.', d: 'Laukika experts review how your marketing team works, then we build a custom AI tool for reporting, follow-ups, task trees and more.', to: '/enterprise', cls: 'fam-e', cta: 'Explore Enterprise AI' },
  ];
  return (
    <section className="section" data-screen-label="About · Family">
      <div className="wrap">
        <span className="eyebrow rv">One company, three businesses</span>
        <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Train. Place. Automate.']}</Lines><Lines className="l2">{['Each with its own colour.']}</Lines></h2>
        <div className="fam">
          {F.map((x, i) => (
            <Link key={x.k} to={x.to} className={'fam-card rv d' + (i + 1) + ' ' + x.cls}>
              <div className="fam-top"><span className="fam-v">{x.v}</span><span className="num">0{i + 1}</span></div>
              <div className="fam-name"><img src="assets/logo-mark.png" alt="" /><span>{x.k}</span></div>
              <h3 className="h3">{x.t}</h3>
              <p className="small">{x.d}</p>
              <span className="fam-cta">{x.cta} <Arrow /></span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Beliefs — interactive */
const BELIEFS = [
  ['Thinking before tools', 'Tools change every year. Understanding the customer, the business and why the work should work does not.'],
  ['Reasoning over resumes', 'A portfolio shows what someone produced. We care about whether they can explain it, and do it again on their own.'],
  ['Practice over theory', 'Everything we teach, screen for or automate comes from live work on real brands at Laukika.'],
  ['Automate the admin, not the judgement', 'AI should take reports and follow-ups off a marketer\'s plate. Decisions stay human.'],
];
function AboutBeliefs() {
  const [on, setOn] = useState(0);
  return (
    <section className="band" data-screen-label="About · Beliefs">
      <StarPattern id="abpat" />
      <div className="wrap section" style={{ position: 'relative', zIndex: 2 }}>
        <div className="ab-bel">
          <div>
            <span className="eyebrow">What we believe</span>
            <h2 className="h2" style={{ marginTop: 24, color: '#fff' }}><span style={{ color: 'var(--k-gold)', display: 'block' }}>Better marketing begins</span><b>with better thinking.</b></h2>
            <div key={on} className="ab-bel-big page-enter">
              <span className="num" style={{ color: 'var(--k-gold)' }}>0{on + 1} / 04</span>
              <p>{BELIEFS[on][1]}</p>
            </div>
          </div>
          <div className="ab-bel-list">
            {BELIEFS.map(([t], i) => (
              <button key={t} className={on === i ? 'on' : ''} onMouseEnter={() => setOn(i)} onClick={() => setOn(i)}>
                <span className="num">0{i + 1}</span><span>{t}</span><Arrow />
              </button>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* Mission & vision */
function AboutMV() {
  return (
    <section className="section alt" data-screen-label="About · Mission & Vision">
      <div className="wrap">
        <div className="mv">
          {[
            ['Our mission', 'To make marketing clearer to learn and more effective to practise.', 'We develop capable marketers, connect them with organisations where their skills fit, and help teams automate repetitive work so they can focus on strategy and decisions.'],
            ['Our vision', 'To give marketing teams more time for work that creates business value.', 'Competent people, thoughtful hiring and practical AI tools working together, so marketing is seen as an investment, not a cost.'],
          ].map(([k, t, d], i) => (
            <div key={k} className={'mv-card rv d' + (i + 1)}>
              {i === 0 ? (
                <div className="mv-vis">
                  {['Learn', 'Practise', 'Place'].map((x, j) => <React.Fragment key={x}><span className="mv-node" style={{ animationDelay: j * 0.3 + 's' }}>{x}</span>{j < 2 && <span className="mv-link"><i style={{ animationDelay: j * 0.3 + 0.2 + 's' }}></i></span>}</React.Fragment>)}
                </div>
              ) : (
                <div className="mv-vis bars">
                  <div><small>Today</small><span className="mv-bar"><i className="adm" style={{ width: '70%' }}></i><i className="val" style={{ width: '30%' }}></i></span></div>
                  <div><small>With Kalaidoskope</small><span className="mv-bar"><i className="adm" style={{ width: '25%' }}></i><i className="val grow" style={{ width: '75%' }}></i></span></div>
                  <div className="mv-key"><span><i className="adm"></i>Admin</span><span><i className="val"></i>Value-creating work</span></div>
                </div>
              )}
              <span className="eyebrow">{k}</span>
              <h3 className="h3" style={{ fontSize: 'clamp(26px,2.6vw,38px)' }}>{t}</h3>
              <p style={{ color: 'var(--ink-soft)' }}>{d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Laukika */
function AboutLaukika() {
  return (
    <section className="section" data-screen-label="About · Laukika">
      <div className="wrap split c">
        <div className="stack">
          <span className="eyebrow rv">Powered by Laukika</span>
          <h2 className="h2 duo"><Lines className="l1">{['The practice behind']}</Lines><Lines className="l2">{['everything we do.']}</Lines></h2>
          <p className="lede rv d1">Laukika's leadership designs the Academy curriculum, screens Talent candidates and reviews workflows for Enterprise AI Tools. Academy learners spend their hands-on month on Laukika's national and international brands.</p>
          <div className="rv d2"><PoweredByLaukika label="Powered by" /></div>
        </div>
        <div className="ab-lk rv d2">
          {[['100+', 'brands grown'], ['B2B · B2C · D2C', 'and local markets'], ['Mysore', 'office and Academy home'], ['Bangalore', 'office']].map(([v, k]) => (
            <div key={v}><div className="ab-lk-v">{v}</div><div className="small">{k}</div></div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* Founder — from LinkedIn profile */
const FOUNDER_HATS = [
  ['Practitioner', 'CEO & MD of Laukika since 2021. Leads marketing strategy, go-to-market and growth for global and Indian brands, delivering 140%+ year-on-year growth through full-funnel and lifecycle strategies.', 'Laukika'],
  ['Hirer', 'Has built and led cross-functional marketing teams of 50+ across strategy, performance, content, creative and analytics, and knows exactly what separates a strong resume from a strong marketer.', 'Kalaidoskope Talent'],
  ['Teacher', 'Has taught management and marketing at SJCE, Mysore and Amrita Vishwa Vidyapeetham, and designed graduate MBA curriculum at the University of Findlay, always teaching the why before the how.', 'Kalaidoskope Academy'],
  ['Builder', 'Built repeatable marketing systems combining SEO, AIO, AEO, AI-enabled workflows and performance dashboards, and saw how much time teams lose without them.', 'Enterprise AI Tools'],
];
const FOUNDER_BRANDS_A = ['Zee5', 'Mondelez', 'Mamaearth', 'Tata Consumer (TCPL)', 'Probe42', 'Blenders Pride', 'Lifestyle', 'BPL'];
const FOUNDER_BRANDS_B = ['Assetz Property', 'Bhartiya City', 'Coolpad', 'UMBRO', 'Smartron', 'Zopo Mobile', 'DropKaffe', 'Covo'];
const FOUNDER_CAREER = [
  ['2015', 'KMB Group', 'Digital Marketing Manager'],
  ['2015', 'Odigma', 'Key Account Manager'],
  ['2017', 'Dr. Wiesner', 'Senior Marketing Consultant'],
  ['2018', 'CHLEAR', 'Head, Strategy & Business'],
  ['2020', 'Amazon', 'Advertising Account Manager'],
  ['2021', 'Laukika', 'CEO & MD'],
  ['2026', 'Kalaidoskope', 'Founder'],
];
function AboutFounder() {
  const [on, setOn] = useState(0);
  return (
    <section className="section fd-sec" data-screen-label="About · Founder">
      <div className="wrap">
        <span className="eyebrow rv">The founder</span>
        <div className="fd">
          <div className="fd-left rv">
            <div className="fd-photo">
              <div className="fd-img arch"><img src="assets/founder/abhijith-option-c.png" alt="Abhijith Shyandilya" /></div>
              <div className="fd-ring"></div>
              <div className="fd-badge"><img src="assets/logo-mark.png" alt="" /></div>
            </div>
            <div className="fd-id">
              <h3 className="fd-name">Abhijith Shyandilya</h3>
              <p className="fd-role">Founder, Kalaidoskope · CEO & MD, Laukika</p>
              <p className="fd-edu"><b style={{ color: 'var(--head)', fontWeight: 500 }}>Taught at SJCE, Mysore · Amrita Vishwa Vidyapeetham</b><br />MBA, University of Findlay (USA) · PGDM, BNB Institute of Management Sciences · BSc, NIE Science College</p>
              <a href="https://www.linkedin.com/in/abhijithshyandilya/" target="_blank" rel="noopener" className="fd-li">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z"/></svg>
                Connect on LinkedIn
              </a>
            </div>
          </div>
          <div className="fd-right">
            <p className="fd-title rv">Marketing and growth leader. 13+ years scaling SaaS, real estate, lifestyle, higher education, healthcare, fintech and consumer brands.</p>
            <blockquote className="fd-quote rv d1">
              <span className="fd-qm">"</span>
              Across agency, marketplace and in-house roles, I've seen the same thing: marketing works when people understand the business behind it. Kalaidoskope is built to teach that thinking, hire for it and give teams the time to use it.
            </blockquote>
            <div className="fd-facts rv d2">
              {[['13+', 'years in marketing & growth'], ['₹200 Cr+', 'ad investment led at Amazon'], ['50+', 'person marketing teams built'], ['140%+', 'YoY growth delivered']].map(([v, k]) => (
                <div key={k}><span>{v}</span><small>{k}</small></div>
              ))}
            </div>
            <div className="fd-hats rv d2">
              <span className="num">FOUR SIDES OF MARKETING, ONE PERSON</span>
              <div className="fd-hat-tabs">
                {FOUNDER_HATS.map(([k], i) => <button key={k} className={on === i ? 'on' : ''} onMouseEnter={() => setOn(i)} onClick={() => setOn(i)}><span>0{i + 1}</span>{k}</button>)}
              </div>
              <div className="fd-hat-body" key={on}>
                <p>{FOUNDER_HATS[on][1]}</p>
                <span className="fd-arrow">→ became <b>{FOUNDER_HATS[on][2]}</b></span>
              </div>
            </div>
          </div>
        </div>

        <div className="fd-brands2 rv">
          <div className="fd-brands2-head">
            <span className="num">BRANDS ACCELERATED</span>
            <p>Hands-on across fintech, FMCG, media, D2C, real estate and technology. Proof that we've solved these problems for real brands.</p>
          </div>
          <div className="fd-marquee">
            {[0, 1].map((row) => (
              <div key={row} className={'fd-track' + (row ? ' rev' : '')}>
                {[...Array(2)].flatMap((_, k) => (row === 0 ? FOUNDER_BRANDS_A : FOUNDER_BRANDS_B).map((n, i) => <span key={k + '-' + i} className="fd-brand">{n}</span>))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function AboutPeople({ imgs = {} }) {
  return (
    <section className="section alt" data-screen-label="About · People">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 20, flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow rv">The people behind Kalaidoskope</span>
            <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Practitioners first.']}</Lines><Lines className="l2">{['Teachers second.']}</Lines></h2>
          </div>
        </div>
        <TeamGrid />
      </div>
    </section>
  );
}

function AboutPage({ imgs = {} }) {
  return (
    <main className="page-enter">
      <AboutHero />
      <AboutStory />
      <AboutFamily />
      <AboutBeliefs />
      <AboutMV />
      <AboutFounder />
      <AboutLaukika />
      <AboutPeople imgs={imgs} />
      <Closing eyebrow="Find your next step" l1="Learn it. Hire for it." l2="Give your team time for it." lede="Join the Academy, discuss your hiring needs or book a workflow review for your team." cta="Get in touch" />
    </main>
  );
}

Object.assign(window, { AboutPage });
