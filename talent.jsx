/* Kalaidoskope — Talent (lead-generation page) */

const ROLES = ['Copywriter / Content', 'Graphic designer', 'Performance / Paid', 'Social media', 'SEO', 'Brand / Marketing manager', 'Marketing head', 'Other'];

function HiringBriefForm({ id = 'brief', compact }) {
  const [role, setRole] = useState('Performance / Paid media');
  const [eng, setEng] = useState('Permanent');
  const [sent, setSent] = useState(false);
  if (sent) return (
    <div className="enq" id={id}>
      <span className="num">BRIEF RECEIVED</span>
      <h3 className="serif" style={{ color: 'var(--head)', margin: '14px 0 12px' }}>Thank you. We'll call you within one working day to understand the role.</h3>
      <p className="small">Have a job description? Keep it handy — or we'll help you write one.</p>
    </div>
  );
  return (
    <form className="enq" id={id} onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
      <span className="num">SHARE YOUR HIRING NEED</span>
      <h3 className="serif" style={{ color: 'var(--head)', margin: '14px 0 6px' }}>{compact ? 'Start your hire' : 'Get candidates who can think, not just click.'}</h3>
      <p className="small" style={{ marginBottom: 6 }}>Tell us the role. We'll come back with a plan — no obligation.</p>
      <div className="row2">
        <input placeholder="Your name" required />
        <input placeholder="Company / Agency" required />
      </div>
      <div className="row2">
        <input placeholder="Work email" type="email" required />
        <input placeholder="Phone" type="tel" required />
      </div>
      <div style={{ marginTop: 18 }} className="num">ROLE YOU'RE HIRING FOR</div>
      <div className="seg">
        {ROLES.map((r) => <button type="button" key={r} className={role === r ? 'on' : ''} onClick={() => setRole(r)}>{r}</button>)}
      </div>
      <div style={{ marginTop: 14 }} className="num">ENGAGEMENT</div>
      <div className="seg">
        {['Permanent', 'Contract', 'Freelance'].map((r) => <button type="button" key={r} className={eng === r ? 'on' : ''} onClick={() => setEng(r)}>{r}</button>)}
      </div>
      <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 22 }}>Discuss your hiring needs <Arrow /></button>
      <p className="fine">Screened profiles · Preliminary interviews · Shortlists matched to your JD</p>
    </form>
  );
}

/* The bloated resume — switch role; every claim ticks until you ask "why" */
const RESUMES = [
  { role: 'Copywriter', claims: [
    ['Award-winning campaign copy', 'Portfolio of headlines from a top agency.', 'Which line did you write? Who was the reader, and what were they meant to feel?'],
    ['Long-form & SEO content', 'Blogs, landing pages, ebooks.', 'Without ChatGPT, how would you open this page for a nervous first-time buyer?'],
    ['Brand voice expert', 'Worked on 20+ brands.', 'How does this brand sound different from its competitor, and why?'],
    ['Social captions', 'Viral posts and reels scripts.', 'What should this caption change in what the customer does next?'],
  ]},
  { role: 'Graphic Designer', claims: [
    ['Photoshop · Illustrator · Figma', 'Expert in all major tools.', 'Tools aside: how did you decide what the eye sees first?'],
    ['Stunning portfolio', 'Ads, packaging, social creatives.', 'Who art-directed these? Show us a composition you made from a blank page.'],
    ['Brand identity', 'Logos and style guides.', 'Why this typeface and colour for this audience?'],
    ['Campaign creatives', 'Hundreds of ad variants.', 'Which variant would you test first, and what would it tell you?'],
  ]},
  { role: 'Digital Marketing Executive', claims: [
    ['Google Ads campaigns', 'Can set up campaigns, ad groups and bids.', 'Why this audience? What happens after the click? What should the landing page do?'],
    ['Meta advertising', 'Can launch ads and boost posts.', 'Which stage of the customer journey is this ad for, and how will we know it worked?'],
    ['SEO & backlinks', 'Can build links and run audits.', 'Which searches matter to the business, and what is the searcher actually trying to do?'],
    ['Analytics & reporting', 'Can export dashboards.', 'What do these numbers say about the business, and what do we do next?'],
  ]},
  { role: 'Social Media Manager', claims: [
    ['Grew accounts to 100K+', 'Large follower counts.', 'How many of those followers ever bought anything? How do you know?'],
    ['Content calendar', 'Posts daily across platforms.', 'What is each post meant to do for the brand, beyond filling the calendar?'],
    ['Viral reels', 'Millions of views.', 'Was it the right audience? What happened to sales that week?'],
    ['Community management', 'Replies to comments and DMs.', 'A customer complains publicly. What do you say, and why?'],
  ]},
  { role: 'Brand Manager', claims: [
    ['Big-brand experience', 'Worked with leading FMCG names.', 'What did you decide, versus what the agency or your boss decided?'],
    ['Launched 5 products', 'Go-to-market for new SKUs.', 'Walk us through the positioning for one. Why that customer and that message?'],
    ['Agency management', 'Managed creative and media agencies.', 'How did you judge whether the agency\'s work was right for the brief?'],
    ['Budget ownership', 'Managed crores in spend.', 'How did you split it, and what would you cut first?'],
  ]},
];
function ResumeTest() {
  const [ri, setRi] = useState(0);
  const [ask, setAsk] = useState(false);
  const [hov, setHov] = useState(0);
  const R = RESUMES[ri];
  return (
    <div className="resume-wrap">
      <div className="resume-tabs">
        {RESUMES.map((r, i) => <button key={r.role} className={ri === i ? 'on' : ''} onClick={() => { setRi(i); setAsk(false); setHov(0); }}>{r.role}</button>)}
      </div>
      <div className="resume" key={ri}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 12 }}>
          <div>
            <div className="num">CANDIDATE RESUME</div>
            <div className="serif" style={{ fontSize: 24, color: 'var(--head)', marginTop: 4 }}>{R.role}</div>
          </div>
          <button className={'ask-btn' + (ask ? ' on' : '')} onClick={() => setAsk(!ask)}>{ask ? 'Reset' : 'Ask "why?"'}</button>
        </div>
        <div className="claims">
          {R.claims.map(([k, can, why], i) => (
            <div key={k} className={'claim' + (hov === i ? ' hov' : '')} onMouseEnter={() => setHov(i)} onClick={() => setHov(i)}>
              <span className={'tick' + (ask ? ' x' : '')}>{ask ? '?' : '✓'}</span>
              <div style={{ flex: 1 }}>
                <div className="claim-k">{k}</div>
                <div className="claim-v">{ask && hov === i ? why : can}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="resume-foot">{ask ? 'The work is listed. The thinking behind it often isn\'t.' : 'Every box ticked. Click "Ask why?"'}</div>
      </div>
    </div>
  );
}

const TALENT_FAQ = [
  { q: 'How is Kalaidoskope Talent different from a regular recruitment agency?', a: 'Most recruiters match keywords on a resume to keywords in a job description. We are marketers first. Backed by the leadership of Laukika, we screen and interview candidates on marketing logic — whether they understand the business, the customer and why the work they do should work — not just the tools they list.' },
  { q: 'What do you mean by "marketing logic"?', a: "It's the reasoning behind the execution. Anyone can learn to set up a Google Ads or Meta campaign. Marketing logic is knowing who the ad is for, what happens when it is served to a customer, what should happen after the click, and how that connects to what the business needs. Candidates who have it make better decisions without being told every step." },
  { q: 'Why do so many marketing hires not work out?', a: 'Resumes have become lists of platforms and tasks. In interviews, candidates say they "do everything" — but once they join, many can operate the tools without being able to reason about how a campaign should be set up or why it will work. Brands and agencies end up re-briefing, redoing work and re-hiring. Our screening is designed to catch that gap before you hire.' },
  { q: 'How do you screen candidates?', a: 'We source candidates for your role, screen their profiles against the responsibilities, capability and business context, and then conduct preliminary interviews that test how they think — asking them to walk through real marketing situations, not just list what they have done. Only candidates who clear this are shortlisted.' },
  { q: 'What happens in a preliminary interview?', a: 'We go beyond the resume. Candidates are asked to explain the reasoning behind their work: how they would approach a brief, what happens between a customer seeing an ad and buying, how they would judge whether activity is working. We assess capability, experience, context and fit against your requirement.' },
  { q: 'What does a "100% match to the job description" mean?', a: 'Every candidate we put forward has been screened and interviewed against your job description — the role, the capabilities it needs and the business they will join. We do not send long lists of loosely related profiles; we bring forward candidates who meet the requirement.' },
  { q: "We don't have a clear job description. Can you still help?", a: 'Yes. Role definition is part of what we do. Many founders and marketing heads know they need to hire but not exactly what capability the role demands. We help you define it first, then search against it.' },
  { q: 'Which marketing roles do you hire for?', a: 'We hire across marketing functions and seniority levels: copywriters and content writers, graphic designers, performance and paid media, SEO, social media, brand and marketing managers, and marketing heads.' },
  { q: 'Do you support contract and freelance hiring?', a: 'Yes. We work with founders, business owners, HR leaders, CMOs and marketing heads seeking permanent hires as well as talent for contract and freelance requirements.' },
  { q: 'We are an agency. Can you help us hire?', a: 'Absolutely. Agencies feel the cost of a wrong hire fastest — in client work, retention and team time. We help agencies find people who can reason about a brief, not just execute a task list.' },
  { q: 'How do we get started?', a: 'Share your hiring need using the form on this page. We will call you to understand the role, your business and your team, and then begin sourcing and screening.' },
];

function TalentPage({ imgs = {} }) {
  const y = useScrollY();
  const dark = document.documentElement.dataset.theme === 'indigo';
  const toBrief = (e) => { e.preventDefault(); const el = document.getElementById('brief'); el && window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' }); };
  return (
    <main className="page-enter">
      {/* HERO + FORM */}
      <section className="phero" data-screen-label="Talent · Hero" style={{ paddingBottom: 'clamp(60px,7vw,110px)' }}>
        <Arcs className="arcs" rotate={y * 0.03} />
        <div className="wrap split t-hero" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <div className="crumb rv"><Link to="/">Home</Link><span>/</span><span>Talent</span></div>
            <div style={{ marginTop: 30, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }} className="rv d1">
              <SubBrand name="Talent" dark={dark} />
              <span style={{ width: 1, height: 24, background: 'var(--line-strong)' }}></span>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>by <LaukikaLogo height={20} dark={dark} /></span>
            </div>
            <h1 className="display duo" style={{ margin: '28px 0 26px', fontSize: 'clamp(42px,5.4vw,80px)' }}>
              <Lines className="l1">{['Resumes say they do everything.']}</Lines>
              <Lines className="l2">{['We check if they', 'can think.']}</Lines>
            </h1>
            <p className="lede rv d2">Copywriters with borrowed portfolios. Designers who can use every tool but can't visualise. Performance marketers who can't explain why a campaign should work. Kalaidoskope screens and interviews for real marketing ability, and shortlists only candidates who match your job description.</p>
            <div className="rv d3" style={{ marginTop: 32, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#brief" onClick={toBrief} className="btn btn-primary">Discuss your hiring needs <Arrow /></a>
              <a href="#screen" onClick={(e) => { e.preventDefault(); const el = document.getElementById('screen'); el && window.scrollTo({ top: el.offsetTop - 60, behavior: 'smooth' }); }} className="btn btn-ghost">How we screen</a>
            </div>
          </div>
          <div className="rv d2"><HiringBriefForm /></div>
        </div>
        <div className="wrap" style={{ position: 'relative', zIndex: 2 }}>
          <div className="highlights t-hl rv">
            {[['Screened', 'Every profile reviewed against the role'], ['Interviewed', 'Preliminary interviews on marketing logic'], ['100% JD match', 'Only candidates who meet the requirement'], ['All levels', 'Permanent · Contract · Freelance']].map(([v, k]) => (
              <div key={v}><span className="v">{v}</span><span className="k">{k}</span></div>
            ))}
          </div>
        </div>
      </section>

      <TeamScenario toBrief={toBrief} />
      <ScreenFunnel />
      <RolesReality />

      {/* THE PROBLEM — resume test */}
      <section className="section" data-screen-label="Talent · Problem">
        <div className="wrap split c">
          <div className="stack">
            <span className="eyebrow rv">The resume test</span>
            <h2 className="h2 duo"><Lines className="l1">{['They can set it up.']}</Lines><Lines className="l2">{["Can they say why", "it'll work?"]}</Lines></h2>
            <p className="lede rv d1">Resumes list every platform and every skill. In interviews, everyone does everything. Then they join, and can't explain why the work should work.</p>
            <p className="rv d2 small" style={{ fontSize: 15 }}>Click <b>Ask "why?"</b> on the resume →</p>
          </div>
          <div className="rv d2"><ResumeTest /></div>
        </div>
      </section>

      <InterviewSim toBrief={toBrief} />
      <Iceberg />
      <JDMatch />
      <WrongHireCost toBrief={toBrief} />

      <FaqSection items={TALENT_FAQ} l1="Hiring questions," l2="answered." sub="Everything brands and agencies ask us before they share a role." />

      {/* FINAL FORM */}
      <section className="section alt" data-screen-label="Talent · Final enquiry" style={{ overflow: 'hidden', position: 'relative' }}>
        <Arcs count={6} gold={[1, 4]} rotate={45 + y * 0.02} style={{ position: 'absolute', left: '-20%', top: '50%', width: 'min(110vw,1200px)', aspectRatio: '1', transform: 'translateY(-50%)', opacity: 0.35 }} />
        <div className="wrap split c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="stack">
            <span className="eyebrow rv">Focus on your business</span>
            <h2 className="h2 duo"><Lines className="l1">{['Stop hiring resumes.']}</Lines><Lines className="l2">{['Start hiring marketers.']}</Lines></h2>
            <p className="lede rv d1">Tell us the role you're hiring for and the capabilities your team needs. We'll screen, interview and bring you candidates who match.</p>
          </div>
          <div className="rv d2"><HiringBriefForm compact id="brief-2" /></div>
        </div>
      </section>

      <div className={'sticky-cta' + (y > 1100 ? ' show' : '')}>
        <span>Hiring a marketer? <b>Get a screened shortlist.</b></span>
        <a href="#brief" onClick={toBrief} className="btn btn-gold">Discuss your hiring needs</a>
      </div>
    </main>
  );
}

Object.assign(window, { TalentPage });

