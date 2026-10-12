/* Kalaidoskope — About, Talent, Enterprise, Contact */

/* ================= ABOUT ================= */
function AboutPage({ imgs = {} }) {
  const y = useScrollY();
  return (
    <main className="page-enter">
      <PageHero crumb="About" eyebrow="About Kalaidoskope" l1={['We train, place']} l2={['and empower', 'marketers.']}
        lede="Kalaidoskope brings together marketing education, talent recruitment and enterprise AI systems. We help people develop practical marketing capability, organisations find the right talent and teams reduce time spent on repetitive work." />

      <section className="section tight" data-screen-label="About · Verticals">
        <div className="wrap">
          <p className="lede rv" style={{ maxWidth: '40ch', fontFamily: 'var(--serif)', fontSize: 'clamp(24px,2.4vw,34px)', color: 'var(--head)', lineHeight: 1.3 }}>
            Our three connected verticals — <span className="gold">Academy</span>, <span className="gold">Talent</span> and <span className="gold">Enterprise AI Tools</span> — support this ambition.
          </p>
        </div>
      </section>

      <section className="section alt" data-screen-label="About · Laukika">
        <div className="wrap split c">
          <div className="rv" style={{ position: 'relative' }}>
            <Ph label="Laukika team at work — strategy wall, warm cinematic light" src={imgs.laukika} className="arch" style={{ aspectRatio: '4/5', maxWidth: 480 }} />
            <div style={{ position: 'absolute', right: '6%', bottom: '8%', width: 120, height: 120, borderRadius: '50%', border: '1px solid var(--k-gold)', display: 'grid', placeItems: 'center', background: 'var(--bg)' }}>
              <span className="serif" style={{ color: 'var(--head)', fontSize: 15, textAlign: 'center', lineHeight: 1.2 }}>Powered by<br /><b>Laukika</b></span>
            </div>
          </div>
          <div className="stack">
            <span className="eyebrow rv">Our foundation</span>
            <h2 className="h2 duo"><Lines className="l1">{['Powered by']}</Lines><Lines className="l2">{['Laukika.']}</Lines></h2>
            <p className="lede rv d1">Kalaidoskope draws on the practical marketing experience of Laukika Consultancy Solutions across fintech, consumables, technology and other business categories.</p>
            <p className="rv d2" style={{ color: 'var(--ink-soft)' }}>That experience helps us understand where marketing teams spend their time, what capabilities the work requires and which recurring tasks can benefit from automation. We bring that understanding into how we teach, recruit and build AI systems.</p>
            <div className="chips rv d3">{['Fintech', 'Consumables', 'Technology', 'Other categories'].map((c) => <span className="chip" key={c}>{c}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="section" data-screen-label="About · Mission & Vision">
        <div className="wrap">
          <div className="split" style={{ gap: 0 }}>
            {[
              { k: 'Our mission', t: 'To make marketing clearer to learn and more effective to practise.', b: 'We aim to develop capable marketers, connect them with organisations where their skills fit, and help teams automate repetitive tasks so they can give more attention to strategy and decisions.' },
              { k: 'Our vision', t: 'To give marketing teams more time for work that creates business value.', b: 'We see competent people, thoughtful recruitment and practical AI systems working together to make this possible. Our ambition is to help marketing demonstrate its contribution to business growth and be recognised as an investment.' },
            ].map((m, i) => (
              <div key={i} className={'rv d' + (i + 1)} style={{ padding: i ? '0 0 0 clamp(30px,5vw,80px)' : '0 clamp(30px,5vw,80px) 0 0', borderLeft: i ? '1px solid var(--line)' : 0 }}>
                <svg width="38" height="38" viewBox="-20 -20 40 40" style={{ marginBottom: 26 }}><path d={starPath(18, 0.18)} fill="none" stroke="var(--k-gold)" strokeWidth="1" /></svg>
                <span className="eyebrow">{m.k}</span>
                <h3 className="h3" style={{ margin: '20px 0 20px', fontSize: 'clamp(26px,2.6vw,38px)' }}>{m.t}</h3>
                <p style={{ color: 'var(--ink-soft)' }}>{m.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="band" data-screen-label="About · Belief">
        <StarPattern id="aboutpat" />
        <div className="wrap section" style={{ position: 'relative', zIndex: 2 }}>
          <div className="split c">
            <h2 className="h2" style={{ color: '#fff' }}><span style={{ color: 'var(--k-gold)', display: 'block' }}>Better marketing begins</span><b>with better thinking.</b></h2>
            <div className="stack">
              <p className="lede">We believe AI should amplify marketing thinking. Understanding the customer, market, business and strategy remains essential to deciding what to do and how to execute it.</p>
              <p className="lede">Our approach starts with those decisions, with a clear understanding of <b>what to automate and what should remain human.</b></p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" data-screen-label="About · Learn Build Automate">
        <div className="wrap">
          <span className="eyebrow rv">Three verticals</span>
          <h2 className="h2 duo" style={{ marginTop: 24, marginBottom: 56 }}><Lines className="l1">{['Learn.']}</Lines><Lines className="l2">{['Build. Automate.']}</Lines></h2>
          <div className="cards3">
            {[
              { k: 'Kalaidoskope Academy', t: 'Those Who Do, Now Teach.', b: 'Our four-month programme progresses from marketing fundamentals to AI-enabled execution. Participants learn to understand businesses and customers, develop strategies and briefs, and build AI agents and marketing workflows.', to: '/academy', v: 'Learn' },
              { k: 'Kalaidoskope Talent', t: 'Marketing recruitment with marketing expertise.', b: 'We help organisations identify the capabilities they need and find people suited to those roles. Our approach considers capability, experience, business context and fit, looking beyond the resume.', to: '/talent', v: 'Build' },
              { k: 'Enterprise AI Tools', t: 'Automate the work. Focus on the signals.', b: 'We are building systems to automate or accelerate research, reporting, brief creation, documentation and content workflows for marketing teams across organisations.', to: '/enterprise', v: 'Automate' },
            ].map((c, i) => (
              <Link key={i} to={c.to} className={'card rv d' + (i + 1)}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span className="num">0{i + 1} / {c.v.toUpperCase()}</span>
                  <svg width="22" height="22" viewBox="-12 -12 24 24"><polygon points={triPts(0, 1, 9, i * 120)} fill={i === 1 ? 'var(--k-gold)' : 'none'} stroke="var(--k-gold)" strokeWidth="1" /></svg>
                </div>
                <span className="small" style={{ marginTop: 20 }}>{c.k}</span>
                <h3 className="h3">{c.t}</h3>
                <p className="small" style={{ fontSize: 15.5 }}>{c.b}</p>
                <span className="link" style={{ marginTop: 'auto', alignSelf: 'flex-start' }}>Explore <Arrow /></span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="section alt" data-screen-label="About · People">
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 20, flexWrap: 'wrap' }}>
            <div>
              <span className="eyebrow rv">The people behind Kalaidoskope</span>
              <h2 className="h2" style={{ marginTop: 24 }}><Lines>{['Practitioners first.']}</Lines></h2>
            </div>
            <Sample>Sample team — awaiting approved bios</Sample>
          </div>
          <div className="cards3" style={{ marginTop: 56, gridTemplateColumns: 'repeat(4,1fr)' }}>
            {[['Ananya Rao', 'Founder & Director'], ['Vikram Shetty', 'Head, Academy'], ['Meera Iyer', 'Lead, Talent'], ['Karthik Nair', 'AI Systems Lead']].map(([n, r], i) => (
              <div key={i} className={'rv d' + (i + 1)}>
                <Ph label="Portrait, moody, warm key light" src={imgs.team && imgs.team[i]} className="arch" style={{ aspectRatio: '3/4' }} />
                <h4 className="h4" style={{ marginTop: 18 }}>{n}</h4>
                <p className="small">{r}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Closing eyebrow="Find your next step" l1="Find your next step" l2="with Kalaidoskope." lede="Explore marketing education, discuss your hiring needs or enquire about AI systems for your team." cta="Get in touch" />
    </main>
  );
}

/* ================= CONTACT ================= */
function ContactPage() {
  const [topic, setTopic] = useState('Academy');
  const [sent, setSent] = useState(false);
  const field = { width: '100%', height: 54, border: 0, borderBottom: '1px solid var(--line-strong)', background: 'transparent', font: 'inherit', fontSize: 17, color: 'var(--ink)', padding: '0 2px', outline: 'none' };
  return (
    <main className="page-enter">
      <section className="phero" data-screen-label="Contact">
        <Arcs className="arcs" />
        <div className="wrap split" style={{ position: 'relative', zIndex: 2 }}>
          <div>
            <div className="crumb rv"><Link to="/">Home</Link><span>/</span><span>Get in touch</span></div>
            <h1 className="display duo" style={{ margin: '30px 0', fontSize: 'clamp(44px,5.4vw,80px)' }}><Lines className="l1">{['Start a']}</Lines><Lines className="l2">{['conversation.']}</Lines></h1>
            <p className="lede rv d1">Explore marketing education, discuss your hiring needs or enquire about AI systems for your team.</p>
            <div className="rv d2" style={{ marginTop: 40, color: 'var(--ink-soft)', fontSize: 15 }}>
              <div>hello@kalaidoskope.com</div><div style={{ marginTop: 6 }}>Mysore · Bengaluru <Sample>Sample</Sample></div>
            </div>
          </div>
          <div className="rv d2">
            {sent ? <div className="card" style={{ padding: 48 }}><h3 className="h3">Thank you.</h3><p className="small">A member of the Kalaidoskope team will be in touch shortly.</p></div> :
              <form onSubmit={(e) => { e.preventDefault(); setSent(true); }} className="stack" style={{ background: 'var(--surface)', border: '1px solid var(--line)', borderRadius: 6, padding: 'clamp(28px,4vw,48px)' }}>
                <span className="num">I'M INTERESTED IN</span>
                <div className="chips" style={{ margin: '4px 0 8px' }}>
                  {['Academy', 'Talent', 'Enterprise AI Tools', 'Something else'].map((t) => (
                    <button type="button" key={t} className="chip" onClick={() => setTopic(t)} style={topic === t ? { background: 'var(--k-blue)', color: '#fff', borderColor: 'var(--k-blue)' } : {}}>{t}</button>
                  ))}
                </div>
                <input style={field} placeholder="Full name" required />
                <input style={field} type="email" placeholder="Email" required />
                <input style={field} placeholder={topic === 'Talent' ? 'Company & role you are hiring for' : 'Phone (optional)'} />
                <textarea style={{ ...field, height: 110, paddingTop: 14, resize: 'none' }} placeholder="How can we help?"></textarea>
                <button className="btn btn-primary" style={{ marginTop: 10 }}>Send message <Arrow /></button>
              </form>}
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { ContactPage });
