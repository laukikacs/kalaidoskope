/* Kalaidoskope — Homepage */

/* Hero headline options — what Kalaidoskope actually does: trains, places, automates */
const HERO_COPY = {
  train: { l1: ['Train marketers.'], l2: ['Place talent.', 'Automate the busywork.'] },
  outcomes: { l1: ['Better marketers.'], l2: ['The right hires.', 'Hours back every week.'] },
  everything: { l1: ['Learn marketing, hire marketers'], l2: ['and give your team', 'time back.'] },
};
const HERO_SUB = 'Built by the leadership of Laukika. We train industry-ready marketers, place marketers who can think, and build custom AI tools that give marketing teams their week back.';
const DOORS = [
  { k: 'Academy', t: 'We train', d: 'A 4-month, practitioner-led programme in Mysore. First batch starts 15 November.', to: '/academy' },
  { k: 'Talent', t: 'We place', d: 'Marketers screened for logic and matched to your JD.', to: '/talent' },
  { k: 'Enterprise AI Tools', t: 'We automate', d: 'Custom tools that cut hours lost to reports and follow-ups.', to: '/enterprise' },
];
function HeroDoors() {
  return (
    <div className="doors rv d4">
      {DOORS.map((d, i) => (
        <Link key={d.k} to={d.to} className="door">
          <span className="num">0{i + 1} / {d.k.toUpperCase()}</span>
          <span className="door-t serif">{d.t} <Arrow /></span>
          <span className="door-d">{d.d}</span>
        </Link>
      ))}
    </div>
  );
}

function HeroA({ copy }) {
  const y = useScrollY();
  const c = HERO_COPY[copy] || HERO_COPY.train;
  return (
    <section className="heroA" data-screen-label="Home · Hero A">
      <Arcs className="arcs" count={9} gold={[1, 5]} rotate={y * 0.04}
        style={{ transform: `translateY(-50%) scale(${1 + y * 0.0004})` }} />
      <div className="wrap" style={{ width: '100%' }}>
        <div className="heroA-grid">
          <div className="rv"><span className="eyebrow">Academy · Talent · Enterprise AI Tools</span></div>
          <h1 className="display duo" key={copy}>
            <Lines className="l1">{c.l1}</Lines>
            <Lines className="l2">{c.l2}</Lines>
          </h1>
          <p className="lede rv d2">{HERO_SUB}</p>
          <div className="ctas rv d3">
            <a href="#what" className="btn btn-primary" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.getElementById('what').offsetTop - 40, behavior: 'smooth' }); }}>Explore what we do <Arrow /></a>
            <Link to="/contact" className="btn btn-ghost">Talk to us</Link>
          </div>
        </div>
        <HeroDoors />
      </div>
    </section>
  );
}

function HeroB({ copy }) {
  const c = HERO_COPY[copy] || HERO_COPY.train;
  return (
    <section className="heroB" data-screen-label="Home · Hero B">
      <div>
        <div className="rv"><span className="eyebrow">Academy · Talent · Enterprise AI Tools</span></div>
        <h1 className="display duo" key={copy} style={{ fontSize: 'clamp(40px,5vw,76px)' }}>
          <Lines className="l1">{c.l1}</Lines>
          <Lines className="l2">{c.l2}</Lines>
        </h1>
        <p className="lede rv d2">{HERO_SUB}</p>
        <div className="ctas rv d3">
          <a href="#what" className="btn btn-primary" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: document.getElementById('what').offsetTop - 40, behavior: 'smooth' }); }}>Explore what we do <Arrow /></a>
          <Link to="/contact" className="btn btn-ghost">Talk to us</Link>
        </div>
      </div>
      <div className="rv d2" style={{ position: 'relative' }}>
        <Kaleidoscope />
        <div className="kscope-hint">train · place · automate — one system</div>
      </div>
      <div style={{ gridColumn: '1 / -1' }}><HeroDoors /></div>
    </section>
  );
}

/* ---------- What we do: scroll-driven story ---------- */
const BIZ = [
  { k: 'Talent', to: '/talent', title: 'Build your marketing team with the right capabilities.', body: 'We bring marketing expertise into recruitment, helping organisations define the role they need and find people whose experience fits.', caps: ['Role definition', 'Marketing talent sourcing', 'Capability and fit assessment'], cta: 'Explore Talent' },
  { k: 'Academy', to: '/academy', title: 'Those Who Do, Now Teach.', body: 'Learn how marketing works before learning how AI changes the work. Our four month programme moves from customer and business understanding to strategy, execution and AI enabled workflows.', caps: ['Marketing fundamentals', 'Strategy and execution', 'AI agents and workflows'], cta: 'Explore the Academy' },
  { k: 'Enterprise AI Tools', to: '/enterprise', title: 'Automate the work. Focus on the signals.', body: 'We build AI enabled systems that help marketing teams accelerate recurring work, so they can spend more time on strategy and decisions.', caps: ['Research and data collection', 'Reporting and monitoring', 'Brief and content workflows'], cta: 'Explore Enterprise AI Tools' },
];

function StoryVisual({ p, active }) {
  // p: 0..1 through the section. Star rotates, triangles separate into 3 viewpoints and converge at the end.
  const spreadT = p < 0.12 ? p / 0.12 : p > 0.86 ? 1 - (p - 0.86) / 0.14 : 1;
  const spread = lerp(0.35, 3.2, clamp01(spreadT));
  const rot = p * 120;
  const converged = p > 0.93;
  const labels = ['Train', 'Place', 'Automate'];
  return (
    <div className="story-vis">
      <svg viewBox="-110 -110 220 220" aria-hidden="true">
        <circle r="104" fill="none" style={{ stroke: 'var(--line)' }} strokeDasharray="1 3" />
        <g transform={`rotate(${rot})`}>
          <path d={starPath(100, 0.15)} fill="none" style={{ stroke: 'var(--head)' }} strokeWidth="1" vectorEffect="non-scaling-stroke" />
          <path d={starPath(88, 0.17)} fill="none" style={{ stroke: 'var(--k-gold)' }} strokeWidth="1" vectorEffect="non-scaling-stroke" opacity=".7" />
          <path d={starPath(76, 0.19)} fill="none" style={{ stroke: 'var(--head)' }} strokeWidth="1" vectorEffect="non-scaling-stroke" opacity=".3" />
        </g>
        <g transform={`rotate(${-rot * 0.5})`}>
          <path d={starPath(70, 0.16)} transform="rotate(45)" fill="none" style={{ stroke: 'var(--head)' }} strokeWidth="1" vectorEffect="non-scaling-stroke" opacity=".18" />
        </g>
        <Triad spread={spread} active={converged ? -1 : active} size={converged ? 15 : 13} />
        {[0, 1, 2].map((i) => {
          const a = (-90 + i * 120) * Math.PI / 180;
          const d = 16 * spread + 26;
          const on = active === i && !converged;
          return (
            <text key={i} x={(d * Math.cos(a)).toFixed(1)} y={(d * Math.sin(a) + 3).toFixed(1)} textAnchor="middle"
              style={{ fontFamily: 'var(--mono)', fontSize: 6.2, letterSpacing: '.12em', fill: on ? 'var(--k-gold)' : 'var(--ink-faint)', opacity: spreadT > 0.6 ? 1 : 0, transition: 'opacity .5s, fill .5s', textTransform: 'uppercase' }}>
              {labels[i].toUpperCase()}
            </text>
          );
        })}
      </svg>
      <div className="story-label">{converged ? 'One system' : `0${active + 1} / 03`}</div>
    </div>
  );
}

function WhatWeDo() {
  const ref = useRef(null);
  const p = useSectionProgress(ref);
  const [active, setActive] = useState(0);
  const stepRefs = useRef([]);
  useEffect(() => {
    const io = new IntersectionObserver((es) => {
      es.forEach((e) => { if (e.isIntersecting) setActive(+e.target.dataset.i); });
    }, { rootMargin: '-45% 0px -45% 0px' });
    stepRefs.current.forEach((el) => el && io.observe(el));
    return () => io.disconnect();
  }, []);
  return (
    <section id="what" className="story" data-screen-label="Home · What we do">
      <div className="wrap" style={{ paddingTop: 'clamp(90px,10vw,150px)' }}>
        <div style={{ maxWidth: 820 }}>
          <span className="eyebrow rv">What we do</span>
          <h2 className="h2 duo" style={{ marginTop: 24 }}>
            <Lines className="l1">{['One root cause.']}</Lines>
            <Lines className="l2">{['Three ways we fix it.']}</Lines>
          </h2>
          <p className="lede rv d2" style={{ marginTop: 26 }}>Train marketers who think. Place them where they fit. Automate the admin that wastes their week.</p>
        </div>
      </div>
      <div className="wrap" ref={ref}>
        <div className="story-grid">
          <div className="story-sticky"><StoryVisual p={p} active={active} /></div>
          <div className="story-steps">
            {BIZ.map((b, i) => (
              <div key={i} data-i={i} ref={(el) => (stepRefs.current[i] = el)} className={'story-step' + (active === i ? ' on' : '')}>
                <span className="num">0{i + 1} / {b.k.toUpperCase()}</span>
                <h3 className="h2" style={{ fontSize: 'clamp(30px,3.4vw,46px)' }}>{b.title}</h3>
                <p className="lede">{b.body}</p>
                <div className="chips">{b.caps.map((c) => <span key={c} className="chip">{c}</span>)}</div>
                <div><Link to={b.to} className="link">{b.cta} <Arrow /></Link></div>
              </div>
            ))}
            <div style={{ paddingBottom: '10vh' }}>
              <Link to="/about" className="btn btn-ghost">About Kalaidoskope <Arrow /></Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- Who it's for ---------- */
const WHO = [
  { k: 'Individuals', t: 'For people learning to do marketing in an AI enabled world.', b: 'Students, marketers, managers, entrepreneurs and consultants need more than familiarity with AI tools. They need to understand the customer, the business and the strategy behind the work, then know where AI can help.', off: 'Academy', to: '/academy', img: 'Learner at a desk, warm window light, notebook + laptop' },
  { k: 'Organisations', t: 'For businesses building marketing teams.', b: 'Founders, HR leaders and marketing heads often know they need to hire, but first need clarity on the capability the role demands. We bring practical marketing understanding to that decision and the search that follows.', off: 'Talent', to: '/talent', img: 'Founder in conversation, two people, editorial portrait' },
  { k: 'Marketing Teams', t: 'For teams with more work than time.', b: 'Agencies, SMEs and lean marketing teams spend hours on research, reporting, monitoring and documentation. We focus on systems that accelerate this work while keeping people responsible for judgment and decisions.', off: 'Enterprise AI Tools', to: '/enterprise', img: 'Small team around a screen, dashboards, dusk' },
];
function WhoFor({ imgs }) {
  return (
    <section className="section alt" data-screen-label="Home · Who it's for">
      <div className="wrap">
        <div className="split c">
          <div>
            <span className="eyebrow rv">Who is Kalaidoskope for?</span>
            <h2 className="h2 duo" style={{ marginTop: 24 }}>
              <Lines className="l1">{['Different roles.']}</Lines>
              <Lines className="l2">{['A shared need to', 'work differently.']}</Lines>
            </h2>
          </div>
        </div>
        <div className="who-grid">
          {WHO.map((w, i) => (
            <div key={i} className={'who rv d' + (i + 1)}>
              <Ph className="who-ph" label={w.img} src={imgs && imgs[i]} style={{ aspectRatio: '4/3', borderRadius: '200px 200px 0 0', marginBottom: 10 }} />
              <span className="num">0{i + 1} / {w.k.toUpperCase()}</span>
              <h3 className="h3">{w.t}</h3>
              <p className="small" style={{ fontSize: 15.5 }}>{w.b}</p>
              <div className="tag">Relevant offering — <Link to={w.to}>{w.off}</Link></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Why this approach (blue band) ---------- */
function Approach() {
  const ref = useRef(null);
  const p = useSectionProgress(ref);
  return (
    <section className="band approach" ref={ref} data-screen-label="Home · Approach">
      <div style={{ position: 'relative', overflow: 'hidden' }}>
        <StarPattern id="bandpat" />
        <Arcs count={6} gold={[1, 4]} color="#fff" rotate={p * 60}
          style={{ position: 'absolute', right: '-18vw', top: '50%', width: '56vw', maxWidth: 820, aspectRatio: '1', transform: 'translateY(-50%)', opacity: 0.35 }} />
        <div className="wrap approach-in" style={{ position: 'relative', zIndex: 2, width: '100%' }}>
          <div className="approach-grid">
            <div>
            <span className="eyebrow">Why this approach</span>
            <h2 className="h2" style={{ marginTop: 24, color: '#fff' }}>
              <span style={{ color: 'var(--k-gold)', display: 'block' }}>AI first starts with</span>
              <b>marketing thinking.</b>
            </h2>
            </div>
            <div>
            <p className="lede">Knowing how to use AI is useful. Knowing <b>what needs to be done, why it matters and what can be automated</b> is what makes it valuable to a marketing organisation.</p>
            <p className="lede" style={{ marginTop: 18 }}>That's why we teach the thinking before the tools, hire for reasoning over resumes, and only automate once we understand how your team works.</p>
            </div>
          </div>
          <div className="triad">
              {[['Train', 'Thinking before tools.'], ['Place', 'Reasoning over resumes.'], ['Automate', 'Your process, not a template.']].map(([w, s], i) => {
                const on = true;
                return (
                  <div key={w} style={{ opacity: on ? 1 : 0.25, transform: on ? 'none' : 'translateY(14px)', transition: 'all .8s cubic-bezier(.2,.7,.1,1)' }}>
                    <div className="n">0{i + 1}</div>
                    <div className="w">{w}</div>
                    <div className="s">{s}</div>
                  </div>
                );
              })}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- What's next rail ---------- */
const NEXT = [
  { k: 'Academy Programme', t: 'Learn marketing from those who do it.', b: 'Our first batch starts 15 November in Mysore — weekend classes, 20 seats, a month of hands-on work on Laukika brands and 100% placement assistance.', cta: 'Enquire about the Academy', to: '/academy' },
  { k: 'Agency AI Product', t: 'Make recurring agency work easier to manage.', b: "We're developing an AI enabled product focused on the operational work marketing agencies handle every day.", cta: 'Join the product waitlist', to: '/enterprise' },
  { k: 'Talent', t: 'Tell us the marketing capability you need.', b: 'Hiring for a marketing role or building a team? Share what the business needs and start a conversation with us.', cta: 'Reach out to Talent', to: '/talent' },
  { k: 'The Bigger Picture', t: 'Build the AI First Marketing Organisation.', b: 'Skills, people and systems work best when they are built around the same understanding of marketing.', cta: 'Talk to Kalaidoskope', to: '/contact' },
];
function NextRail() {
  const [on, setOn] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setOn((v) => (v + 1) % 4), 4200);
    return () => clearInterval(t);
  }, [paused]);
  return (
    <section className="section" data-screen-label="Home · What's next">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 40, flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow rv">What's next at Kalaidoskope</span>
            <h2 className="h2 duo" style={{ marginTop: 24 }}>
              <Lines className="l1">{['Three ways to get']}</Lines>
              <Lines className="l2">{['involved as we build.']}</Lines>
            </h2>
          </div>
        </div>
        <div className="rail" onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
          <div className="rail-progress" style={{ width: `${(on + 1) * 25}%` }}></div>
          {NEXT.map((n, i) => (
            <div key={i} className={'rail-item' + (on === i ? ' on' : '')} onMouseEnter={() => setOn(i)} onClick={() => setOn(i)}>
              <span className="dot"></span>
              <span className="num">0{i + 1} / {n.k.toUpperCase()}</span>
              <div className="body">
                <h3 className="h4" style={{ fontSize: 24, marginBottom: 14 }}>{n.t}</h3>
                <p className="small" style={{ fontSize: 15.5 }}>{n.b}</p>
              </div>
              <div className="cta"><Link to={n.to} className="link">{n.cta} <Arrow /></Link></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Case studies (sample) ---------- */
function Cases({ imgs }) {
  return (
    <section className="section alt" data-screen-label="Home · Case studies">
      <div className="wrap">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 30, flexWrap: 'wrap' }}>
          <div>
            <span className="eyebrow rv">See the work in practice</span>
            <h2 className="h2" style={{ marginTop: 24 }}><Lines>{['Case studies']}</Lines></h2>
            <p className="lede rv d1" style={{ marginTop: 18 }}>Explore the marketing challenges, decisions and workflows behind our approach.</p>
          </div>
          <a href="#" className="link rv" onClick={(e) => e.preventDefault()}>View all case studies <Arrow /></a>
        </div>
        <div className="cases">
          {[
            { t: 'Defining a first marketing hire for a fintech scale-up', d: 'How a role brief was rebuilt around capability rather than job title — and what changed in the shortlist.', tag: 'Talent', img: 'Fintech office, cinematic, blue hour' },
            { t: 'Cutting weekly reporting time for a lean agency team', d: 'Mapping the recurring research and reporting work, and which parts could be automated without losing judgment.', tag: 'Enterprise AI', img: 'Agency workspace, screens, warm light' },
          ].map((c, i) => (
            <div key={i} className={'case rv d' + (i + 1)}>
              <Ph label={c.img} src={imgs && imgs[i]} />
              <div className="meta"><Sample /><span>{c.tag}</span></div>
              <h3 className="h3">{c.t}</h3>
              <p className="small" style={{ fontSize: 15.5 }}>{c.d}</p>
              <div><span className="link">Read the case study <Arrow /></span></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const HOME_FAQ = [
  { q: 'What does "AI First Marketing" mean at Kalaidoskope?', a: 'It means understanding the customer, market, business and strategy first, then using AI where it can improve how marketing work is done. Human judgment remains central to the decisions.' },
  { q: 'Who is the Academy programme for?', a: 'The Academy is relevant to students, marketing professionals, managers, entrepreneurs and consultants who want to develop practical marketing capability and learn how AI can support execution.' },
  { q: 'What does Kalaidoskope Talent help organisations with?', a: 'We help organisations clarify the marketing role and capabilities they need, then source and assess talent against that context.' },
  { q: 'What kind of work can Enterprise AI Tools support?', a: 'Our focus includes recurring marketing work such as research, data collection, reporting, monitoring, briefs, documentation and content workflows. The right application depends on the team and its process.' },
  { q: 'How can I get started?', a: 'Join the Academy or agency product waitlist if those offerings are relevant to you. For marketing hiring or a broader conversation, contact the Kalaidoskope team.' },
];

function FaqSection({ items = HOME_FAQ, l1 = 'Questions &', l2 = 'answers.', sub = 'A few things to know before you get started.' }) {
  return (
    <section className="section" data-screen-label="FAQ">
      <div className="wrap faq-grid">
        <div>
          <span className="eyebrow rv">FAQs</span>
          <h2 className="h2 duo" style={{ marginTop: 24 }}>
            <Lines className="l1">{[l1]}</Lines>
            <Lines className="l2">{[l2]}</Lines>
          </h2>
          <p className="lede rv d1" style={{ marginTop: 22 }}>{sub}</p>
        </div>
        <div className="rv d1"><Faq items={items} /></div>
      </div>
    </section>
  );
}

function Closing({ eyebrow = 'What does your marketing organisation need next?', l1 = 'Learn the work. Build the team.', l2 = 'Automate the repeatable parts.', lede = 'Develop AI first capability. Find the right marketing talent. Build systems that give your team more room to think and act.', cta = 'Start a conversation', to = '/contact', children }) {
  const ref = useRef(null);
  const y = useScrollY();
  return (
    <section className="closing section" ref={ref} style={{ overflow: 'hidden' }} data-screen-label="Closing">
      <Arcs count={6} gold={[0, 3]} rotate={45 + y * 0.02} style={{ position: 'absolute', left: '50%', top: '50%', width: 'min(140vw,1500px)', aspectRatio: '1', transform: 'translate(-50%,-50%)', opacity: 0.45 }} />
      <div className="wrap inner">
        <span className="eyebrow rv">{eyebrow}</span>
        <h2 className="h2 duo">
          <Lines className="l1">{[l1]}</Lines>
          <Lines className="l2">{[l2]}</Lines>
        </h2>
        <p className="lede rv d1">{lede}</p>
        <div className="rv d2" style={{ display: 'flex', gap: 14, justifyContent: 'center', flexWrap: 'wrap' }}>
          <Link to={to} className="btn btn-primary">{cta} <Arrow /></Link>
          {children}
        </div>
      </div>
    </section>
  );
}

function HomePage({ hero, copy, imgs }) {
  return (
    <main className="page-enter">
      {hero === 'kaleidoscope' ? <HeroB copy={copy} /> : <HeroA copy={copy} />}
      <WhatWeDo />
      <WhoFor imgs={imgs && imgs.who} />
      <Approach />
      <NextRail />
      <Cases imgs={imgs && imgs.cases} />
      <FaqSection />
      <Closing />
    </main>
  );
}

Object.assign(window, { HomePage, FaqSection, Closing, HeroA, HeroB, WhatWeDo, Approach, BIZ });
