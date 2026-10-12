/* Kalaidoskope — Enterprise AI Tools (custom tools, coming soon + consultation) */

const TIME_SINKS = [
  ['Reporting', 'Pulling numbers from ad platforms, analytics and CRM into slides every week.', 9],
  ['Following up', 'Chasing approvals, feedback and status across email, chat and calls.', 7],
  ['Task tracking', 'Re-creating campaign checklists by hand because tools treat everything as one flat task.', 5],
  ['Briefs & documentation', 'Writing the same briefs, recaps and handovers from scratch.', 4],
];

/* A marketing campaign as a real task tree (parent → child → grandchild + drips) */
const TREE = {
  t: 'Project launch campaign', c: [
    { t: 'Strategy & brief', c: [{ t: 'Audience & positioning' }, { t: 'Channel plan' }, { t: 'Client approval', wait: true }] },
    { t: 'Creative', c: [{ t: 'Key visual' }, { t: 'Ad variants ×6', c: [{ t: 'Meta' }, { t: 'Google' }, { t: 'Portals' }] }, { t: 'Landing page' }] },
    { t: 'Email drip', drip: true, c: [{ t: 'Day 0 · Welcome' }, { t: 'Day 3 · Walkthrough' }, { t: 'Day 7 · Site visit invite' }, { t: 'Day 14 · Offer' }] },
    { t: 'Reporting', c: [{ t: 'Weekly dashboard', auto: true }, { t: 'Client report', auto: true }] },
  ],
};

function TreeNode({ n, depth = 0, path = '0', open, toggle }) {
  const has = n.c && n.c.length;
  const isOpen = open[path] !== false;
  return (
    <li className={'tn d' + depth}>
      <div className="tn-row" onClick={() => has && toggle(path)}>
        <span className={'tn-caret' + (has ? '' : ' leaf') + (isOpen ? ' open' : '')}>{has ? '▸' : '·'}</span>
        <span className="tn-t">{n.t}</span>
        {n.drip && <span className="tn-pill drip">drip</span>}
        {n.wait && <span className="tn-pill wait">auto follow-up</span>}
        {n.auto && <span className="tn-pill auto">auto-generated</span>}
        {has && <span className="tn-count">{n.c.length}</span>}
      </div>
      {has && isOpen && <ul>{n.c.map((ch, i) => <TreeNode key={i} n={ch} depth={depth + 1} path={path + '.' + i} open={open} toggle={toggle} />)}</ul>}
    </li>
  );
}

function FlatVsTree() {
  const [open, setOpen] = useState({});
  const toggle = (p) => setOpen((o) => ({ ...o, [p]: o[p] === false ? true : false }));
  return (
    <div className="fvt">
      <div className="fvt-col flat">
        <div className="fvt-h"><span className="num">GENERIC PROJECT TOOL</span><span className="fvt-sub">Everything is one flat list</span></div>
        <ul className="flat-list">
          {['Launch campaign', 'Make ads', 'Ads again (Google)', 'Send emails??', 'Follow up with client', 'Follow up again', 'Report', 'Update report', 'Where is the brief?'].map((x, i) => (
            <li key={i} style={{ transform: `rotate(${[0, -0.6, 0.8, -0.4, 0.5, -0.8, 0.3, -0.5, 0.7][i]}deg)` }}><span className="chk"></span>{x}</li>
          ))}
        </ul>
        <div className="fvt-note">No parent/child tasks. No drips. No idea what's blocked.</div>
      </div>
      <div className="fvt-col tree">
        <div className="fvt-h"><span className="num">BUILT FOR HOW YOU WORK</span><span className="fvt-sub">Campaigns as trees, drips as sequences</span></div>
        <ul className="tree-root"><TreeNode n={TREE} open={open} toggle={toggle} /></ul>
        <div className="fvt-note">Click a branch to fold it. Follow-ups and reports run on their own.</div>
      </div>
    </div>
  );
}

function TimeCalc() {
  const [people, setPeople] = useState(6);
  const [hrs, setHrs] = useState(10);
  const [rate, setRate] = useState(600);
  const saved = Math.round(people * hrs * 0.6);
  const monthly = saved * 4.3 * rate;
  const fmt = (n) => '₹' + Math.round(n).toLocaleString('en-IN');
  return (
    <div className="calc">
      <div className="calc-in">
        <span className="num">ESTIMATE YOUR SAVINGS</span>
        {[
          ['People in your marketing team', people, setPeople, 1, 40, 1, ''],
          ['Hours each spends weekly on reporting, follow-ups & admin', hrs, setHrs, 2, 25, 1, ' h'],
          ['Average cost per hour', rate, setRate, 200, 3000, 50, ''],
        ].map(([l, v, set, mn, mx, st, u], i) => (
          <label key={l} className="calc-row">
            <span className="calc-l">{l}</span>
            <span className="calc-v">{i === 2 ? fmt(v) : v + u}</span>
            <input type="range" min={mn} max={mx} step={st} value={v} onChange={(e) => set(+e.target.value)} />
          </label>
        ))}
      </div>
      <div className="calc-out">
        <div><span className="num">HOURS BACK / WEEK</span><div className="calc-big">{saved}<small>h</small></div></div>
        <div><span className="num">VALUE / MONTH</span><div className="calc-big">{fmt(monthly)}</div></div>
        <p className="fine" style={{ color: 'rgba(255,255,255,.6)' }}>Illustrative — assumes ~60% of that time can be automated. Your audit gives the real number.</p>
      </div>
    </div>
  );
}

function EnterprisePage() {
  const [done, setDone] = useState(false);
  const [teamType, setTeamType] = useState('Agency');
  const y = useScrollY();
  const toForm = (e) => { e.preventDefault(); const el = document.getElementById('audit'); el && window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 110, behavior: 'smooth' }); };
  return (
    <main className="page-enter">
      {/* HERO */}
      <section className="phero" style={{ minHeight: '92vh', display: 'flex', alignItems: 'center' }} data-screen-label="Enterprise · Hero">
        <div className="wrap split c" style={{ width: '100%' }}>
          <div>
            <div className="crumb rv"><Link to="/">Home</Link><span>/</span><span>Enterprise AI Tools</span></div>
            <div className="rv d1" style={{ marginTop: 30 }}><span className="soon-badge"><i></i>Custom AI tools for marketing teams</span></div>
            <h1 className="display duo" style={{ margin: '28px 0', fontSize: 'clamp(42px,5.6vw,84px)' }}>
              <Lines className="l1">{['Your team works its own way.']}</Lines>
              <Lines className="l2">{['Your tools', 'should too.']}</Lines>
            </h1>
            <p className="lede rv d2">Marketing teams lose hours every week to reporting, follow-ups and project tools that don't understand marketing work. Our experts at Laukika review how your team actually works — then we build a custom AI tool that gives that time back.</p>
            <div className="rv d3" style={{ marginTop: 34, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <a href="#audit" onClick={toForm} className="btn btn-primary">Book a workflow review <Arrow /></a>
              <a href="#calc" onClick={(e) => { e.preventDefault(); const el = document.getElementById('calc'); el && window.scrollTo({ top: el.offsetTop - 80, behavior: 'smooth' }); }} className="btn btn-ghost">Estimate your savings</a>
            </div>
          </div>
          <div className="rv d2"><Kaleidoscope segments={10} speed={0.7} /></div>
        </div>
      </section>

      {/* WHERE TIME GOES */}
      <section className="section alt" data-screen-label="Enterprise · Week">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'end' }}>
            <div>
              <span className="eyebrow rv">Where the week goes</span>
              <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Marketers are hired to think.']}</Lines><Lines className="l2">{['They spend the week on admin.']}</Lines></h2>
            </div>
            <p className="lede rv d1">Look at a typical marketer's week. Reports, follow-ups and task sheets crowd out the work that actually moves the business. Flip the switch to see what a custom tool gives back.</p>
          </div>
          <div className="rv d2"><WeekPlanner /></div>
        </div>
      </section>

      {/* FLAT VS TREE */}
      <section className="section" data-screen-label="Enterprise · Task trees">
        <div className="wrap">
          <span className="eyebrow rv">Why generic tools fall short</span>
          <h2 className="h2 duo" style={{ marginTop: 24, maxWidth: 1000 }}><Lines className="l1">{['Marketing work is a tree.']}</Lines><Lines className="l2">{['Most tools see a list.']}</Lines></h2>
          <p className="lede rv d1" style={{ marginTop: 22 }}>One campaign is dozens of connected tasks: parent tasks, child tasks, approvals, ad variants per channel, email drips on a schedule. Most project management tools don't understand that — so teams track it in their heads, in spreadsheets and in follow-up messages.</p>
          <div className="rv d2"><FlatVsTree /></div>
        </div>
      </section>

      {/* HOW WE BUILD */}
      <section className="band" data-screen-label="Enterprise · How we build">
        <StarPattern id="entpat" />
        <div className="wrap section" style={{ position: 'relative', zIndex: 2 }}>
          <div className="split c">
            <div>
              <span className="eyebrow">Custom, not off-the-shelf</span>
              <h2 className="h2" style={{ marginTop: 24, color: '#fff' }}><span style={{ color: 'var(--k-gold)', display: 'block' }}>Every business is different.</span><b>So every tool we build is too.</b></h2>
              <p className="lede" style={{ marginTop: 24 }}>An agency, a real estate developer and a D2C brand don't run marketing the same way. Our experts at <b>Laukika</b> — who run marketing for national and international brands every day — review your workflow first, then we build around it.</p>
              <div style={{ marginTop: 30, display: 'inline-flex', alignItems: 'center', gap: 14, padding: '10px 18px', border: '1px solid rgba(255,255,255,.2)', borderRadius: 999 }}>
                <small style={{ fontSize: 11, letterSpacing: '.16em', textTransform: 'uppercase', color: 'rgba(255,255,255,.6)' }}>Workflow review by</small>
                <LaukikaLogo dark height={22} />
              </div>
            </div>
            <ol className="pl-steps">
              {[
                ['Review', 'Laukika experts sit with your team and map how work really moves — tasks, approvals, reports, follow-ups.'],
                ['Design', 'We identify what can be automated and design a tool around your task trees, drips and reporting.'],
                ['Build', 'A custom AI tool: auto-reports, automatic follow-ups, campaign templates with parent and child tasks.'],
                ['Refine', 'We measure the hours saved and keep tuning it as your team and clients change.'],
              ].map(([t, b], i) => (
                <li key={t} className={'rv d' + (i + 1)}>
                  <span className="pl-node" style={i === 3 ? { background: 'var(--k-gold)', color: 'var(--k-indigo)', borderColor: 'var(--k-gold)' } : {}}>0{i + 1}</span>
                  <div><h3 className="h3" style={{ color: '#fff' }}>{t}</h3><p>{b}</p></div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      {/* WHAT IT CAN DO */}
      <section className="section" data-screen-label="Enterprise · Capabilities">
        <div className="wrap">
          <div className="split" style={{ alignItems: 'end' }}>
            <div>
              <span className="eyebrow rv">What a custom tool takes off your plate</span>
              <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['Pick what to automate.']}</Lines><Lines className="l2">{['Watch it work.']}</Lines></h2>
            </div>
            <p className="lede rv d1">Hover a capability to see it running. Tap + to add it to your tool and see the hours it gives back. Every tool is built around your team's workflow.</p>
          </div>
          <div className="rv d2"><CapDemos /></div>
          <div className="split rv" style={{ marginTop: 40, gap: 24 }}>
            <div className="card"><span className="num">AUTOMATED</span><h3 className="h3">The repeatable parts.</h3><p className="small">Collection, compilation, follow-ups, monitoring and first drafts.</p></div>
            <div className="card" style={{ borderColor: 'var(--k-gold)' }}><span className="num">HUMAN</span><h3 className="h3">The judgment and decisions.</h3><p className="small">What it means, what to do next and what should remain human.</p></div>
          </div>
        </div>
      </section>

      {/* CALCULATOR */}
      <section id="calc" className="section alt" data-screen-label="Enterprise · Calculator">
        <div className="wrap">
          <span className="eyebrow rv">Time is money</span>
          <h2 className="h2 duo" style={{ marginTop: 24, marginBottom: 48 }}><Lines className="l1">{['How much is admin']}</Lines><Lines className="l2">{['costing your team?']}</Lines></h2>
          <div className="rv d1"><TimeCalc /></div>
        </div>
      </section>

      {/* FORM */}
      <section id="audit" className="section" data-screen-label="Enterprise · Review form" style={{ overflow: 'hidden', position: 'relative' }}>
        <Arcs count={6} gold={[1, 4]} rotate={45 + y * 0.02} style={{ position: 'absolute', left: '-20%', top: '50%', width: 'min(110vw,1200px)', aspectRatio: '1', transform: 'translateY(-50%)', opacity: 0.4 }} />
        <div className="wrap split c" style={{ position: 'relative', zIndex: 2 }}>
          <div className="stack">
            <span className="eyebrow rv">Start with a review</span>
            <h2 className="h2 duo"><Lines className="l1">{['Show us how your team works.']}</Lines><Lines className="l2">{["We'll show you the hours you could save."]}</Lines></h2>
            <p className="lede rv d1">Book a workflow review with our Laukika experts. We'll map where your team's time goes and what a custom tool could take off its plate — no obligation.</p>
          </div>
          <div className="rv d2">
            {done ? (
              <div className="enq"><span className="num">REQUEST RECEIVED</span><h3 className="serif" style={{ color: 'var(--head)', margin: '14px 0 10px' }}>Thank you — we'll be in touch to schedule your review.</h3></div>
            ) : (
              <form className="enq" onSubmit={(e) => { e.preventDefault(); setDone(true); }}>
                <span className="num">BOOK A WORKFLOW REVIEW</span>
                <h3 className="serif" style={{ color: 'var(--head)', margin: '14px 0 6px' }}>Get your time back.</h3>
                <div className="row2"><input placeholder="Your name" required /><input placeholder="Company" required /></div>
                <div className="row2"><input placeholder="Work email" type="email" required /><input placeholder="Phone" type="tel" /></div>
                <div style={{ marginTop: 18 }} className="num">YOUR TEAM IS A</div>
                <div className="seg">{['Agency', 'In-house team', 'SME / startup', 'Enterprise'].map((t) => <button type="button" key={t} className={teamType === t ? 'on' : ''} onClick={() => setTeamType(t)}>{t}</button>)}</div>
                <input placeholder="Biggest time drain? (e.g. weekly client reports)" />
                <button className="btn btn-primary" style={{ width: '100%', justifyContent: 'center', marginTop: 20 }}>Book a workflow review <Arrow /></button>
                <p className="fine">Reviewed by Laukika's marketing experts</p>
              </form>
            )}
          </div>
        </div>
      </section>
    </main>
  );
}

Object.assign(window, { EnterprisePage });
