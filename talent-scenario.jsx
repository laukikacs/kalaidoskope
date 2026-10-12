/* Talent — "Building a marketing team" scenario (real-estate example) */

const RE_TEAM = [
  ['Marketing Head', 'Owns the launch plan, budget and channel mix'],
  ['Performance Marketer', 'Meta, Google and property-portal leads'],
  ['Content & Social', 'Site visits, walkthroughs, project stories'],
  ['SEO & Website', 'Project pages, local search, enquiry forms'],
];

const RE_STAGES = [
  {
    k: 'Define the roles',
    diy: ['Copies job descriptions from the internet', '"Digital marketer" asked to do ads, SEO, content and CRM at once', 'No clarity on what a real estate launch actually needs'],
    kal: ['We map the roles to your launch plan and sales cycle', 'Separate capabilities: lead generation, content, search, strategy', 'A JD for each role that reflects real estate marketing'],
  },
  {
    k: 'Find candidates',
    diy: ['Hundreds of applications from a job portal', 'Resumes listing every tool ever used', 'HR can\'t tell good marketing experience from buzzwords'],
    kal: ['We source from marketing networks, not just portals', 'Profiles read by marketers, against your JD', 'Only relevant experience goes forward'],
  },
  {
    k: 'Screen & interview',
    diy: ['Interviews test tools: "Do you know Meta Ads?" — "Yes"', 'No one asks about cost per site visit, lead quality or the buyer journey', 'Confident talkers get through'],
    kal: ['Preliminary interviews on marketing logic', '"Leads are coming in but site visits aren\'t — why?"', 'Candidates must reason about the buyer, not just the platform'],
  },
  {
    k: 'Hire',
    diy: ['Decision made on gut feel and salary', 'Team members hired one by one, with overlapping skills', 'Weeks of founder and HR time spent'],
    kal: ['A shortlist that matches each JD', 'Roles that fit together as a team', 'You meet only final candidates'],
  },
  {
    k: 'First 90 days',
    diy: ['Ad budget spent on clicks that never visit the site', 'Leads not followed up; sales blames marketing', 'Back to hiring within 6 months'],
    kal: ['People who understand why a campaign should work', 'Marketing tied to enquiries, site visits and bookings', 'A team that grows with your next project'],
  },
];

function TeamScenario({ toBrief }) {
  const [mode, setMode] = useState('diy');
  const [stage, setStage] = useState(0);
  const [auto, setAuto] = useState(true);
  useEffect(() => {
    if (!auto) return;
    const t = setInterval(() => setStage((s) => (s + 1) % RE_STAGES.length), 3600);
    return () => clearInterval(t);
  }, [auto]);
  const isK = mode === 'kal';
  const st = RE_STAGES[stage];
  return (
    <section className="section" data-screen-label="Talent · Scenario">
      <div className="wrap">
        <div className="split" style={{ alignItems: 'end' }}>
          <div>
            <span className="eyebrow rv">A real scenario</span>
            <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['A real estate company is']}</Lines><Lines className="l2">{['building its marketing team.']}</Lines></h2>
          </div>
          <p className="lede rv d1">A new project launches in six months. They need a Marketing Head, a performance marketer, a content lead and someone for SEO and the website. Here's how it usually goes — and how it goes with Kalaidoskope.</p>
        </div>

        <div className="sc-team rv d1">
          <span className="num">THE TEAM THEY NEED</span>
          <div className="sc-team-row">
            {RE_TEAM.map(([r, d], i) => (
              <div key={r} className={'sc-role' + (isK ? ' ok' : '')} style={{ transitionDelay: i * 0.08 + 's' }}>
                <span className="sc-seat">{isK ? '✓' : '?'}</span>
                <div><div className="sc-role-t">{r}</div><div className="sc-role-d">{d}</div></div>
              </div>
            ))}
          </div>
        </div>

        <div className="sc-board rv d2" onMouseEnter={() => setAuto(false)}>
          <div className="sc-top">
            <div className="mapd-toggle" style={{ marginTop: 0 }}>
              <button className={!isK ? 'on' : ''} onClick={() => setMode('diy')}>Hiring on their own</button>
              <button className={isK ? 'on' : ''} onClick={() => setMode('kal')}>With Kalaidoskope</button>
              <span className="mapd-thumb" style={{ transform: isK ? 'translateX(100%)' : 'none' }}></span>
            </div>
            <div className="sc-meter">
              <span className="num">{isK ? 'OUTCOME' : 'RISK'}</span>
              <div className="sc-meter-bar"><i style={{ width: isK ? '18%' : `${40 + stage * 14}%`, background: isK ? 'var(--k-blue)' : '#C2410C' }}></i></div>
              <span className="sc-meter-v">{isK ? 'Right team, first time' : ['Unclear roles', 'Noise', 'Wrong signals', 'Mis-hire', 'Re-hiring'][stage]}</span>
            </div>
          </div>

          <div className="sc-steps">
            <div className="sc-track"><i style={{ width: `${(stage / (RE_STAGES.length - 1)) * 100}%`, background: isK ? 'var(--k-blue)' : '#C2410C' }}></i></div>
            {RE_STAGES.map((s, i) => (
              <button key={s.k} className={'sc-step' + (i === stage ? ' on' : '') + (i < stage ? ' past' : '')} onClick={() => { setAuto(false); setStage(i); }} style={{ '--c': isK ? 'var(--k-blue)' : '#C2410C' }}>
                <span className="sc-dot">{i + 1}</span>
                <span className="sc-step-t">{s.k}</span>
              </button>
            ))}
          </div>

          <div className="sc-detail">
            <div className={'sc-col diy' + (!isK ? ' focus' : '')}>
              <span className="sc-tag">On their own</span>
              <ul key={'d' + stage}>{st.diy.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
            <div className={'sc-col kal' + (isK ? ' focus' : '')}>
              <span className="sc-tag">With Kalaidoskope</span>
              <ul key={'k' + stage}>{st.kal.map((x) => <li key={x}>{x}</li>)}</ul>
            </div>
          </div>
        </div>

        <div className="sc-foot rv">
          <p className="serif" style={{ fontSize: 'clamp(20px,1.8vw,26px)', color: 'var(--head)', maxWidth: '36ch' }}>Building a team for your business? We'll map the roles before we start the search.</p>
          <a href="#brief" onClick={toBrief} className="btn btn-primary">Plan your marketing team <Arrow /></a>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { TeamScenario });
