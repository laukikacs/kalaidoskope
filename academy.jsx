/* Kalaidoskope — Academy (Marketing Acceleration Program) */

const FW = [
  ['Business', 'What does the business need to achieve?', 'Start by understanding the business objective and the role marketing needs to play in reaching it.'],
  ['Market', 'What is happening around the business?', 'Understand the market, competition, opportunities and broader context that influence the brand and its marketing decisions.'],
  ['Customer', 'Who does the business need to reach?', 'Explore the people behind the market, including their needs, motivations, behaviour and decision-making.'],
  ['Strategy', 'What should marketing do?', 'Bring the business objective, market context and customer understanding together to establish a clear marketing direction.'],
  ['Brief', 'What needs to be communicated or delivered?', 'Translate strategic thinking into a clear requirement that can guide creative, content and marketing execution.'],
  ['Execution', 'How does the marketing work come to life?', 'Turn the direction into actual marketing activity and consider how the resulting work can be evaluated and improved.'],
];
const WHY = [
  ['11 years of teaching experience', 'This experience informs how marketing concepts are structured, explained and connected so learners can build their understanding progressively.'],
  ['Learn from marketing practitioners', 'Through Laukika Consultancy Solutions, learners gain exposure to how marketing is planned, executed and evaluated across different business contexts.'],
  ['Build understanding before depending on tools', 'Platforms change. MAP establishes marketing fundamentals before connecting that understanding to digital channels and technology.'],
  ['Apply what you learn', 'Exercises, briefs, assignments and practical marketing situations help learners move from understanding a concept to applying it.'],
  ['Experience a real-world marketing environment', 'The fourth month provides training and hands-on experience, with exposure to marketing environments involving national and international brands.'],
  ['Understand AI as part of modern marketing', 'AI is integrated across research, ideation, content, analysis and workflows — keeping human judgement central.'],
];
const AUD = [
  ['Students', 'Build a broader marketing foundation before entering the industry.', 'If you are exploring marketing as a career, MAP gives you an understanding that goes beyond individual platforms — with real-world exposure and 100% guaranteed placement assistance.', 'Student in a lecture hall, warm cinematic light'],
  ['Entrepreneurs', 'Develop stronger marketing understanding for your business.', 'MAP helps you understand customers, markets, marketing objectives and the role of content, SEO, PPC, digital channels and AI-enabled marketing.', 'Young founder at a workbench, confident portrait'],
  ['Small Business Owners', 'Understand the marketing work your business depends on.', 'Whether you work with an agency, freelancer or internal team, stronger marketing understanding helps you evaluate the work and whether it supports your business.', 'Shop owner in Mysore storefront, golden hour'],
];
const MONTHS = [
  ['Awareness', 'Build the foundation for understanding how brands become relevant.', 'Marketing fundamentals needed to understand a business, its market and its customers.'],
  ['Consideration', 'Understand what influences customer evaluation and choice.', 'Customer journeys, content strategy, marketing strategy, SEO, PPC and marketing briefs.'],
  ['Purchase & Loyalty', 'Explore marketing beyond the point of consideration.', 'Purchase, engagement, digital marketing, retention and loyalty.'],
  ['Training & Hands-on', 'Take your learning into a real-world marketing environment.', 'Exposure to how marketing work operates in practice — with national and international brands.'],
];
const CURR = [
  ['Marketing Foundations', 'Understand the business and market context behind marketing.', ['Business & Market', 'Marketing Fundamentals']],
  ['Customer & Consumer Insight', 'Understand the people behind the market.', ['Customer Profiles', 'Customer Needs', 'Customer Motivations', 'Customer Behaviour', 'Customer Insight']],
  ['Customer Journey & Content', 'Understand how communication needs to change across the customer journey.', ['Awareness', 'Consideration', 'Purchase', 'Loyalty', 'Customer Journeys', 'Content Strategy']],
  ['Marketing Strategy & Planning', 'Turn marketing understanding into a structured direction.', ['Marketing Strategy', 'Positioning', 'Marketing Objectives', 'Messaging', 'Channel Thinking', 'Marketing Briefs']],
  ['Digital Marketing & Performance', 'Understand how digital channels contribute to marketing objectives.', ['SEO', 'PPC', 'Content Marketing', 'Digital Touchpoints', 'Performance Thinking']],
  ['AI-Enabled Marketing & Real-World Practice', 'Understand how AI can support modern marketing work.', ['AI in Marketing', 'AI Workflows', 'AI Agents', 'Human Judgement', 'Real-World Practice']],
];
const SKILLS = [
  ['Marketing thinking', 'Relate marketing decisions to business objectives and customer needs.'],
  ['Customer understanding', 'Interpret needs, motivations and behaviour.'],
  ['Strategic thinking', 'Connect objectives, market context and customers to direction.'],
  ['Customer journey thinking', 'Recognise how requirements change across stages.'],
  ['Content thinking', 'Respond to audience, objective and context.'],
  ['Digital marketing', 'The role of SEO, PPC, content and touchpoints.'],
  ['Brief writing', 'Translate requirements into clear briefs.'],
  ['AI-enabled marketing', 'Use AI appropriately across research to workflows.'],
  ['Marketing evaluation', 'Assess work against its intended objective.'],
  ['Communication', 'Explain decisions and recommendations clearly.'],
];
const COMPARE = [
  ['Learn individual marketing tools', 'Understand marketing before the tools'],
  ['Focus heavily on individual platforms', 'Connect business, customer, strategy and digital marketing'],
  ['Treat concepts as separate subjects', 'Build connected marketing understanding'],
  ['Primarily classroom-based learning', 'Coaching combined with application and hands-on experience'],
  ['Focus on current platform knowledge', 'Build principles that remain relevant as platforms change'],
  ['Treat AI as a standalone topic', 'Integrate AI into modern marketing work'],
  ['Complete with a certificate', 'Learning, experience, certification and placement assistance'],
];
const DETAILS = [
  ['Programme', 'Marketing Acceleration Program'], ['Location', 'Laukika, Mysore'], ['Designed for', 'Students · Entrepreneurs · Small Business Owners'], ['Duration', '4 Months'],
  ['Coaching', '3 Months'], ['Training & hands-on', '1 Month'], ['Classes', 'Weekends only'], ['Learning journey', 'Awareness → Consideration → Purchase & Loyalty'],
  ['Marketing science', 'Customer psychology · Buying behaviour · Search intent · How ads and channels work · Measurement'], ['Applied through', 'SEO · PPC · Content strategy · Social · Analytics · AI workflows (taught with the "why", not just the "how")'], ['Hands-on', 'Live work on Laukika\'s national + international brands'], ['Certification', 'Kalaidoskope Academy Certification'],
  ['Placement', '100% Guaranteed Placement Assistance'], ['Seats', '20 only'], ['First batch', '15 November 2026. Enquiries open'],
];
const ACAD_FAQ = [
  { q: 'Who is the Marketing Acceleration Program designed for?', a: 'MAP is designed for students, entrepreneurs and small business owners. Students build a foundation before entering the industry; entrepreneurs develop stronger understanding of marketing decisions; small business owners better understand customers, digital marketing and the work delivered by agencies or teams.' },
  { q: 'Do I need prior marketing experience to join?', a: '[Sample] No prior marketing experience is required. A graduate degree or current enrolment is recommended for students; entrepreneurs and business owners are welcome from any background. — Awaiting verified eligibility terms.' },
  { q: 'What makes MAP different from a typical marketing programme?', a: 'MAP is broader than learning individual digital platforms. It connects marketing fundamentals, customer understanding, strategy, digital marketing, AI-enabled marketing and practical experience so learners understand how the parts work together.' },
  { q: 'How is the programme structured across the four months?', a: 'MAP combines 3 months of coaching with 1 month of training and hands-on experience. The first three months progress through Awareness, Consideration, Purchase & Loyalty; the fourth moves that learning into a hands-on environment.' },
  { q: 'What happens in the fourth month?', a: 'After three months of coaching, you work hands-on with Laukika\'s set of national and international brands — applying everything you\'ve learned to live marketing work, alongside practitioners.' },
  { q: 'When does the first batch start?', a: 'The first batch begins on 15 November 2026 in Mysore, with weekend-only classes and just 20 seats. Enquire now to speak with a counsellor.' },
  { q: 'How is AI covered in the programme?', a: 'AI is integrated through research, information processing, ideation, content creation, analysis, repetitive tasks and marketing workflows — and introduces AI workflows and agents while keeping human judgement central.' },
  { q: 'Will I receive certification and placement assistance?', a: 'Yes. Learners who successfully complete the programme receive Kalaidoskope Academy certification, and MAP provides 100% guaranteed placement assistance.' },
  { q: 'Are classes on weekends, and where is the programme held?', a: 'Yes. MAP follows a weekend-only class structure and is conducted in Mysore.' },
];

/* Lead-generating enquiry form */
function EnquiryForm({ compact, id = 'enquire' }) {
  const [who, setWho] = useState('Student');
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className="enq" id={id}>
      <span className="num">ENQUIRY RECEIVED</span>
      <h3 className="serif" style={{ color: 'var(--head)', margin: '14px 0 12px' }}>Thank you — a counsellor will call you within one working day.</h3>
      <p className="small">Meanwhile, the brochure has the full four-month breakdown.</p>
      <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-ghost" style={{ marginTop: 22 }}>Download Brochure ↓</a>
    </div>
  );
  return (
    <form className="enq" id={id} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
        <span className="num">FIRST BATCH · 15 NOVEMBER 2026</span>
        <span className="num" style={{ color: 'var(--k-blue)' }}>20 SEATS</span>
      </div>
      <div className="seatbar"><i style={{ width: '35%' }}></i></div>
      <h3 className="serif" style={{ color: 'var(--head)', margin: '22px 0 6px' }}>{compact ? 'Enquire about MAP' : 'Reserve your spot in the first batch'}</h3>
      <p className="small" style={{ marginBottom: 10 }}>Speak to a counsellor — no obligation.</p>
      <div className="row2">
        <input placeholder="Full name" required />
        <input placeholder="Phone / WhatsApp" type="tel" required />
      </div>
      <input placeholder="Email" type="email" required />
      <div style={{ marginTop: 18 }} className="num">I AM A</div>
      <div className="seg">
        {['Student', 'Working professional', 'Entrepreneur', 'Business owner'].map((w) => (
          <button type="button" key={w} className={who === w ? 'on' : ''} onClick={() => setWho(w)}>{w}</button>
        ))}
      </div>
      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>Enquire now <Arrow /></button>
      <p className="fine">Weekend classes in Mysore · 100% placement assistance</p>
    </form>
  );
}

function StageJourney() {
  const [on, setOn] = useState(0);
  const [paused, setPaused] = useState(false);
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setOn((v) => (v + 1) % 5), 3800);
    return () => clearInterval(t);
  }, [paused]);
  const S = [
    ['Awareness', 'Month 01', 'How does a customer first notice a brand?', 'The psychology of attention and relevance — understanding a business, its market and the people it needs to reach.'],
    ['Consideration', 'Month 02', 'What makes them weigh it up?', 'Customer journeys, content strategy, positioning, SEO, PPC and writing briefs — the mechanisms that shape evaluation.'],
    ['Purchase', 'Month 03', 'What tips them into acting?', 'Conversion, engagement and digital channels — how marketing supports the moment of decision.'],
    ['Loyalty', 'Month 03', 'Why do they come back?', 'Retention, relationships and long-term relevance — marketing beyond the first sale.'],
    ['Hands-on', 'Month 04', 'Now do it for real.', 'Work on Laukika\'s national and international brands — applying every stage to live marketing work.'],
  ];
  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="stages" style={{ gridTemplateColumns: 'repeat(5,1fr)' }}>
        <div className="track"><i style={{ width: `${(on / 4) * 100}%` }}></i></div>
        {S.map(([k, m], i) => (
          <button key={k} className={'stage-c' + (i <= on ? ' on' : '')} onClick={() => setOn(i)} onMouseEnter={() => setOn(i)} style={{ textAlign: 'left' }}>
            <div className="node" style={{ ...(i === 4 ? { borderRadius: 4, transform: 'rotate(45deg)' } : {}), ...(i === 4 && i <= on ? { background: `linear-gradient(135deg, ${LK_SEQ.join(',')})`, borderColor: 'transparent' } : {}) }}><span style={i === 4 ? { transform: 'rotate(-45deg)' } : {}}>0{i + 1}</span></div>
            <div className="num" style={{ marginTop: 20 }}>{m.toUpperCase()}</div>
            <div className="serif" style={{ fontSize: 'clamp(22px,2vw,28px)', color: i === on ? 'var(--head)' : 'var(--ink-faint)', marginTop: 4, transition: 'color .4s' }}>{k}</div>
          </button>
        ))}
      </div>
      <div className="split c" style={{ marginTop: 56, gap: 40 }}>
        <h3 key={on} className="h2 page-enter" style={{ fontSize: 'clamp(30px,3.4vw,48px)' }}>{S[on][2]}</h3>
        <p key={'p' + on} className="lede page-enter">{S[on][3]}</p>
      </div>
    </div>
  );
}

function AcademyHeroVisual({ img }) {
  const y = useScrollY();
  return (
    <div style={{ position: 'relative', width: '100%', maxWidth: 520, justifySelf: 'end' }}>
      <div style={{ position: 'absolute', inset: '-6% -6% auto auto', width: '100%', aspectRatio: '4/5', borderRadius: '999px 999px 8px 8px', border: '1.5px solid var(--accent)', transform: `translateY(${y * -0.04}px)` }}></div>
      <Ph label="Learners in a Mysore classroom — cinematic, warm, 4:5" src={img} className="arch" style={{ aspectRatio: '4/5', position: 'relative' }} />
      <div style={{ position: 'absolute', left: '-14%', bottom: '10%', background: 'var(--k-blue)', color: '#fff', borderRadius: 6, padding: '20px 24px', boxShadow: '0 30px 60px -30px rgba(24,26,83,.6)' }}>
        <div className="num" style={{ color: 'var(--accent)' }}>NEXT INTAKE</div>
        <div className="serif" style={{ fontSize: 30, lineHeight: 1.1, marginTop: 6 }}>20 seats only</div>
        <div style={{ fontSize: 13, opacity: .7, marginTop: 4 }}>Seats filling soon</div>
      </div>
    </div>
  );
}

function FrameworkRail() {
  const ref = useRef(null);
  const p = useSectionProgress(ref);
  const active = Math.min(5, Math.floor(p * 6.2));
  return (
    <section ref={ref} style={{ height: '300vh', position: 'relative' }} data-screen-label="Academy · Framework">
      <div style={{ position: 'sticky', top: 0, height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div className="wrap" style={{ width: '100%' }}>
          <div className="split" style={{ alignItems: 'end', gap: 40 }}>
            <div>
              <span className="eyebrow">The Kalaidoskope Marketing Framework</span>
              <h2 className="h2 duo" style={{ marginTop: 22 }}><span className="l1">A structured way to think</span><span className="l2">before choosing the tools.</span></h2>
            </div>
            <p className="lede">Instead of immediately choosing a platform or tactic, the framework establishes the questions that need to be understood first.</p>
          </div>
          <div className="framework">
            <div style={{ position: 'absolute', top: -1, left: 0, height: 2, background: 'var(--accent)', width: `${((active + 1) / 6) * 100}%`, transition: 'width .6s cubic-bezier(.2,.7,.1,1)' }}></div>
            {FW.map(([k, q, b], i) => (
              <div key={k} className={'fw' + (i <= active ? ' on' : '')} style={{ opacity: i <= active ? 1 : 0.3 }}>
                <span className="num">0{i + 1}</span>
                <h3 className="h4" style={{ fontSize: 26 }}>{k}</h3>
                <p style={{ fontFamily: 'var(--serif)', color: 'var(--head)', fontSize: 16.5, lineHeight: 1.35, marginBottom: 10 }}>{q}</p>
                <p className="small" style={{ fontSize: 14, maxHeight: i === active ? 200 : 0, overflow: 'hidden', transition: 'max-height .6s' }}>{b}</p>
              </div>
            ))}
          </div>
          <p className="num" style={{ marginTop: 40, letterSpacing: '.18em' }}>BUSINESS → MARKET → CUSTOMER → STRATEGY → BRIEF → EXECUTION</p>
        </div>
      </div>
    </section>
  );
}

function AcademyPage({ imgs = {} }) {
  const [openC, setOpenC] = useState(0);
  const y = useScrollY();
  return (
    <main className="page-enter">
      {/* HERO — lead generation first */}
      <section className="phero" data-screen-label="Academy · Hero" style={{ paddingBottom: 'clamp(60px,6vw,90px)' }}>
        <Arcs className="arcs" rotate={y * 0.03} />
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="split" style={{ alignItems: 'center', gridTemplateColumns: '1.15fr .85fr' }}>
            <div>
              <div className="crumb rv"><Link to="/">Home</Link><span>/</span><span>Academy</span></div>
              <div className="rv d1" style={{ marginTop: 30 }}><SubBrand name="Academy" dark={document.documentElement.dataset.theme === 'indigo'} /></div>
              <div className="rv d1" style={{ marginTop: 22 }}><span className="first-badge"><i></i>India's first practitioner-led programme · Mysore batch starts 15 November</span></div>
              <h1 className="display duo" style={{ margin: '26px 0 26px', fontSize: 'clamp(44px,6vw,88px)' }}>
                <Lines className="l1">{['Those who do,']}</Lines>
                <Lines className="l2">{['now teach.']}</Lines>
              </h1>
              <p className="serif rv d2" style={{ fontSize: 'clamp(20px,1.8vw,26px)', color: 'var(--head)', marginBottom: 16 }}>The Marketing Acceleration Program — taught by the leadership of Laukika.</p>
              <p className="lede rv d2">Learn the psychology of the customer, the mechanisms of marketing and the tools that run it — through live examples. Then spend a month working on Laukika's national and international brands.</p>
              <div className="rv d3" style={{ marginTop: 30, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="#enquire" className="btn btn-primary" onClick={(e) => { e.preventDefault(); const el = document.getElementById('enquire'); el && window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' }); }}>Enquire now <Arrow /></a>
                <a href="#" onClick={(e) => e.preventDefault()} className="btn btn-ghost">Download Brochure ↓</a>
              </div>
              <div className="rv d4" style={{ marginTop: 34 }}><PoweredByLaukika dark={document.documentElement.dataset.theme === 'indigo'} label="Taught by the leadership of" /></div>
            </div>
            <div className="rv d2"><EnquiryForm /></div>
          </div>
          <div className="highlights rv">
            {[['15 Nov', 'First batch begins'], ['20 seats', 'Limited, small cohort'], ['Weekends', 'Weekend-only classes'], ["India's first", 'Practitioner-led programme'], ['3 months', 'Rigorous coaching'], ['+1 month', 'Hands-on on Laukika brands'], ['National +', 'International brand exposure'], ['100%', 'Placement assistance']].map(([v, k], i) => (
              <div key={i}><span className="v">{v}</span><span className="k">{k}</span></div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY LAUKIKA LEADERSHIP */}
      <section className="section alt" data-screen-label="Academy · Laukika">
        <div className="wrap">
          <div className="split c">
            <div>
              <span className="eyebrow rv">Why this programme exists</span>
              <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Built by people who hire']}</Lines><Lines className="l2">{['marketers every day.']}</Lines></h2>
            </div>
            <div className="stack">
              <div className="rv" style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 6 }}><LaukikaLogo height={40} dark={document.documentElement.dataset.theme === 'indigo'} /></div>
              <p className="lede rv">MAP is designed by the leadership of <a href="https://www.laukika.com" target="_blank" rel="noopener" style={{ color: 'var(--head)', borderBottom: '1px solid var(--k-peri)' }}>Laukika</a> — a marketing consultancy working across fintech, consumables and technology brands.</p>
              <p className="rv d1" style={{ color: 'var(--ink-soft)' }}>They know what it takes to find the right marketing talent, where marketers lose time, and what a new marketer needs to know to be useful from day one. That's exactly what we teach.</p>
            </div>
          </div>
          <div className="pillars">
            {[
              ['01', 'We know what the industry hires for.', 'Years of recruiting marketing talent tells us which capabilities actually matter — and which are noise.'],
              ['02', 'We know where marketers waste time.', 'So we teach the thinking first, and the tools that remove repetitive work — including AI — second.'],
              ['03', 'We know what "industry ready" means.', "Which is why the final month isn't a classroom. It's live work on real brands."],
            ].map(([n, t, b], i) => (
              <div key={n} className={'rv d' + (i + 1)}>
                <span className="num">{n}</span>
                <div className="big">{t}</div>
                <p className="small" style={{ fontSize: 15.5 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHAT YOU LEARN — three pillars */}
      <section className="section" data-screen-label="Academy · What you learn">
        <div className="wrap">
          <span className="eyebrow rv">What you'll learn</span>
          <h2 className="h2 duo" style={{ marginTop: 24, maxWidth: 900 }}><Lines className="l1">{['Psychology. Mechanisms. Tools.']}</Lines><Lines className="l2">{['All through live examples.']}</Lines></h2>
          <div className="cards3" style={{ marginTop: 60 }}>
            {[
              ['Psychology of the customer', 'Why people notice, compare, buy and return. Needs, motivations, behaviour and decision-making.', 'Learner annotating a customer journey wall'],
              ['Marketing mechanisms', 'Positioning, messaging, content, channels, SEO, PPC and briefs — how marketing actually moves people.', 'Workshop — strategy board, sticky notes'],
              ['Tools, through live examples', "Marketing, analytics and AI tools shown on real campaigns — not slides. Taught by people who use them daily.", 'Trainer demonstrating a live dashboard'],
            ].map(([t, b, img], i) => (
              <div key={t} className={'rv d' + (i + 1)}>
                <div className="dg-frame" style={{ aspectRatio: '4/5', marginBottom: 26 }}>{[<DiagramPsychology />, <DiagramMechanisms />, <DiagramTools />][i]}</div>
                <span className="num">0{i + 1}</span>
                <h3 className="h3" style={{ margin: '12px 0' }}>{t}</h3>
                <p className="small" style={{ fontSize: 15.5 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER STAGE JOURNEY */}
      <section className="section alt" data-screen-label="Academy · Customer journey">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'end' }}>
            <div>
              <span className="eyebrow rv">How the programme is structured</span>
              <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Follow the customer,']}</Lines><Lines className="l2">{['stage by stage.']}</Lines></h2>
            </div>
            <p className="lede rv d1">Three rigorous months move through every stage a customer goes through — awareness, consideration, purchase and loyalty. Month four puts it to work.</p>
          </div>
          <div className="rv d2"><StageJourney /></div>
        </div>
      </section>

      {/* HANDS-ON ON LAUKIKA BRANDS */}
      <section className="band" data-screen-label="Academy · Hands-on">
        <StarPattern id="acadpat" />
        <LaukikaStrip style={{ position: 'absolute', left: 0, right: 0, top: 0, zIndex: 3 }} />
        <div className="wrap section" style={{ position: 'relative', zIndex: 2 }}>
          <div className="split c">
            <div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 18, marginBottom: 26 }}><LaukikaLogo dark height={36} /><span style={{ width: 1, height: 26, background: 'rgba(255,255,255,.3)' }}></span><span className="eyebrow" style={{ margin: 0 }}>Month 04 · Hands-on</span></div>
              <h2 className="h2" style={{ marginTop: 24, color: '#fff' }}><span style={{ color: '#C9CCF5', display: 'block' }}>Graduate with real work</span><b>on real brands.</b></h2>
              <p className="lede" style={{ marginTop: 26 }}>After three months of coaching, you'll work on <b>Laukika's portfolio of national and international brands</b> — applying what you've learned to live briefs, alongside the people who run them.</p>
              <p className="lede" style={{ marginTop: 16 }}>You leave with hands-on experience, a portfolio of real work, Kalaidoskope Academy certification — and <b>100% placement assistance</b>.</p>
            </div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1, background: 'rgba(255,255,255,.16)', border: '1px solid rgba(255,255,255,.16)' }}>
              {[['Live briefs', 'On Laukika brands'], ['National +', 'International exposure'], ['Portfolio', 'Of real work'], ['100%', 'Placement assistance']].map(([a, b]) => (
                <div key={a} style={{ background: 'var(--band)', padding: '34px 28px' }}>
                  <div className="serif" style={{ fontSize: 30, color: '#fff' }}>{a}</div>
                  <div style={{ fontSize: 14, color: 'rgba(255,255,255,.7)', marginTop: 6 }}>{b}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* WHO */}
      <section className="section" data-screen-label="Academy · Who">
        <div className="wrap">
          <span className="eyebrow rv">Who is MAP for?</span>
          <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['One programme designed for']}</Lines><Lines className="l2">{['three kinds of learner.']}</Lines></h2>
          <div className="cards3" style={{ marginTop: 60 }}>
            {AUD.map(([k, t, b, img], i) => (
              <div key={k} className={'card rv d' + (i + 1)}>
                <span className="num">0{i + 1} / {k.toUpperCase()}</span>
                <h3 className="h3" style={{ margin: '6px 0' }}>{t}</h3>
                <p className="small" style={{ fontSize: 15.5 }}>{b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CURRICULUM */}
      <section className="section" data-screen-label="Academy · Curriculum">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'end', marginBottom: 56 }}>
            <div>
              <span className="eyebrow rv">What will you learn?</span>
              <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Six connected']}</Lines><Lines className="l2">{['learning areas.']}</Lines></h2>
            </div>
            <p className="lede rv d1">The curriculum groups related subjects together so that learners understand the relationship between different parts of marketing rather than isolated modules.</p>
          </div>
          <div className="curric">
            {CURR.map(([t, s, cov], i) => (
              <div key={t} className={'cur' + (openC === i ? ' open' : '')} onClick={() => setOpenC(openC === i ? -1 : i)}>
                <span className="num" style={{ paddingTop: 8 }}>0{i + 1}</span>
                <h3 className="h3" style={{ color: openC === i ? 'var(--head)' : 'var(--head)' }}>{t}</h3>
                <div>
                  <p style={{ color: 'var(--ink-soft)' }}>{s}</p>
                  <div className="cov"><div><div className="chips" style={{ margin: '18px 0 4px' }}>{cov.map((c) => <span key={c} className="chip">{c}</span>)}</div></div></div>
                </div>
                <span className="faq-q" style={{ padding: 0, justifyContent: 'flex-end' }}><span className="pm" style={{ marginTop: 10 }}></span></span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SKILLS */}
      <section className="section alt" data-screen-label="Academy · Skills">
        <div className="wrap">
          <span className="eyebrow rv">Skills you will carry along</span>
          <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Capabilities that last']}</Lines><Lines className="l2">{['beyond the programme.']}</Lines></h2>
          <SkillsGrid skills={SKILLS} />
        </div>
      </section>

      {/* COMPARE */}
      <section className="section" data-screen-label="Academy · Compare">
        <div className="wrap">
          <span className="eyebrow rv">What makes MAP different?</span>
          <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Most courses teach buttons.']}</Lines><Lines className="l2">{['MAP teaches the system.']}</Lines></h2>
          <MapDifferent rows={COMPARE} />
          <p className="lede rv" style={{ marginTop: 40, maxWidth: '62ch' }}>The aim is not simply to know more tools. It is to understand <b style={{ color: 'var(--head)', fontWeight: 500 }}>why a tool or channel is being used, what it is expected to achieve and how it fits within the wider marketing objective.</b></p>
        </div>
      </section>

      {/* TRAINERS + WHERE WE TEACH */}
      <section className="section alt" data-screen-label="Academy · Trainers">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <span className="eyebrow rv">Meet the trainers</span>
              <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Learn from people who']}</Lines><Lines className="l2">{['practise and teach.']}</Lines></h2>
            </div>
            <p className="lede rv d1" style={{ maxWidth: '44ch' }}>Every trainer works on live brands at Laukika. You learn from people doing the work this week, not people who did it years ago.</p>
          </div>
          <TrainersGrid />

          <div className="tch-band rv" style={{ marginTop: 100 }}>
            <div className="tch-copy">
              <span className="eyebrow">Where we also teach</span>
              <h3 className="h3" style={{ marginTop: 18 }}>Teaching MBA students at Amrita Vishwa Vidyapeetham.</h3>
              <p className="small" style={{ fontSize: 16, marginTop: 12, maxWidth: '52ch' }}>Kalaidoskope is contracted to teach marketing to MBA students at Amrita. Our trainers teach at university level, and the Kalaidoskope programme goes further, built for people who want to do the work, not just learn it.</p>
              <p className="tch-who">Taught by <b>Abhijith Shyandilya</b> and <b>Santhosh Chandramurthy</b></p>
            </div>
            <div className="tch-logo"><img src="assets/partners/amrita-logo.png" alt="Amrita Vishwa Vidyapeetham" /></div>
          </div>
        </div>
      </section>

      {/* CERTIFICATE */}
      <section className="section" data-screen-label="Academy · Certification">
        <div className="wrap split c">
          <div className="rv"><Certificate /></div>
          <div className="stack">
            <span className="eyebrow rv">Get certified</span>
            <h2 className="h2 duo"><Lines className="l1">{['Trained at Kalaidoskope.']}</Lines><Lines className="l2">{['Honed at Laukika.']}</Lines></h2>
            <p className="lede rv d1">Your certificate records more than attendance. It names the brands you worked on during your hands-on month with Laukika, so employers can see real experience, not just a course.</p>
            <div className="chips rv d2">{['Kalaidoskope Academy certification', 'Laukika hands-on experience', 'Brands you worked on'].map((c) => <span key={c} className="chip">{c}</span>)}</div>
          </div>
        </div>
      </section>

      {/* PLACEMENT */}
      <PlacementBand onEnquire={(e) => { e.preventDefault(); const el = document.getElementById('enquire'); el && window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' }); }} />

      <section className="section alt" data-screen-label="Academy · Mysore & details">
        <div className="wrap">
          <div className="split c">
            <div className="stack">
              <span className="eyebrow rv">First batch in the palace city</span>
              <h2 className="h2 duo"><Lines className="l1">{['Industry-ready marketing,']}</Lines><Lines className="l2">{['now in Mysore.']}</Lines></h2>
              <p className="lede rv d1">India's first practitioner-led marketing programme starts in the palace city of Mysore. Live brand work and placement assistance, without moving to a metro to learn from the industry.</p>
              <p className="num rv d2" style={{ letterSpacing: '.18em' }}>MYSORE · WEEKEND-ONLY · 4 MONTHS</p>
              <div className="rv d3" style={{ display: 'flex', alignItems: 'center', gap: 14, color: 'var(--ink-soft)', fontSize: 15 }}><LaukikaLogo height={22} /><span>Classes held at <b style={{ color: 'var(--head)', fontWeight: 500 }}>Laukika, Mysore</b></span></div>
              <div className="rv d3"><a href="https://www.google.com/maps/search/?api=1&query=Laukika+Consultancy+Solutions+Private+Limited+Mysore" target="_blank" rel="noopener" className="link">Get directions <Arrow /></a></div>
            </div>
            <div className="rv d2" style={{ display: 'grid' }}><MysoreMap /></div>
          </div>

          <div style={{ marginTop: 110 }}>
            <span className="eyebrow rv">Programme details</span>
            <h2 className="h3 rv d1" style={{ margin: '20px 0 40px', fontSize: 'clamp(28px,3vw,40px)' }}>Everything you need to know, at a glance.</h2>
            <dl className="details rv d2" style={{ margin: 0 }}>
              {DETAILS.map(([k, v]) => <div key={k}><dt>{k}</dt><dd style={k === 'Placement' || k === 'Seats' ? { color: 'var(--head)', fontWeight: 500 } : {}}>{v}</dd></div>)}
            </dl>
          </div>
        </div>
      </section>

      <FaqSection items={ACAD_FAQ} l1="Have a question" l2="before you enrol?" sub="Start here — or speak directly with a counsellor." />

      <section className="section" data-screen-label="Academy · Final enquiry" style={{ overflow: 'hidden', position: 'relative' }}>
        <Arcs count={6} gold={[1, 4]} rotate={45 + y * 0.02} style={{ position: 'absolute', left: '-20%', top: '50%', width: 'min(110vw,1200px)', aspectRatio: '1', transform: 'translateY(-50%)', opacity: 0.4 }} />
        <div className="wrap split c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="stack">
            <span className="first-badge rv"><i></i>15 November batch · 20 seats</span>
            <h2 className="h2 duo"><Lines className="l1">{['Ready to become']}</Lines><Lines className="l2">{['industry ready?']}</Lines></h2>
            <p className="lede rv d1">Three rigorous months of weekend coaching. One month on Laukika's national and international brands. 100% placement assistance. Seats are limited — enquire today and a counsellor will call you back.</p>
            <div className="rv d2"><a href="#" onClick={(e) => e.preventDefault()} className="link">Or download the brochure ↓</a></div>
          </div>
          <div className="rv d2"><EnquiryForm compact id="enquire-2" /></div>
        </div>
      </section>

      <div className={'sticky-cta' + (y > 1100 ? ' show' : '')}>
        <span>Starts 15 Nov · Mysore · <b>20 seats only</b></span>
        <a href="#enquire" onClick={(e) => { e.preventDefault(); const el = document.getElementById('enquire'); el && window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' }); }} className="btn btn-gold">Enquire now</a>
      </div>
    </main>
  );
}

Object.assign(window, { AcademyPage });
