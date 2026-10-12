/* Talent — "It's not just digital" : portfolio vs reality across marketing roles */

const ROLE_FAKES = [
  {
    role: 'Copywriter',
    shows: 'A sharp portfolio of headlines and long-form copy, plus campaigns from a well-known agency.',
    reality: 'The samples were written with ChatGPT, or were the agency team\'s work. On the first brief: no voice, no insight, no idea who the reader is.',
    check: 'A live writing brief for your brand, with no AI. They walk us through why each line works for the reader.',
    sign: 'Strong portfolio, can\'t explain a single choice',
  },
  {
    role: 'Graphic designer',
    shows: 'A beautiful portfolio and expert skills in Photoshop, Illustrator and Figma.',
    reality: 'Every piece was art-directed by someone sitting beside them. The first composition they make alone shows weak visual thinking and hierarchy.',
    check: 'An unguided design problem. We look at layout, hierarchy and concept before polish, and ask them to defend it.',
    sign: 'Great with tools, weak as a visualiser',
  },
  {
    role: 'Performance marketer',
    shows: '"Managed ₹50L+ monthly ad spend." Certified in Google and Meta.',
    reality: 'They executed someone else\'s strategy. Ask why the budget was split that way, or what happens after the click, and the answer is silence.',
    check: 'A broken-funnel scenario: leads but no sales. They have to diagnose it, not just suggest spending more.',
    sign: 'Big numbers, no reasoning',
  },
  {
    role: 'Social media manager',
    shows: 'Accounts with large follower counts and a viral reel or two.',
    reality: 'Followers were boosted or inherited. They post on schedule but can\'t connect content to the customer, the brand or a business goal.',
    check: 'We ask what the content should change in how the customer thinks, and how they would know it worked.',
    sign: 'Vanity metrics, no strategy',
  },
  {
    role: 'SEO specialist',
    shows: '"Ranked 200 keywords on page one." Long lists of backlinks built.',
    reality: 'Rankings for searches nobody buys from. Links from low-quality sites. Traffic up, enquiries flat.',
    check: 'We test search intent: which searches matter to this business, and why.',
    sign: 'Rankings without revenue',
  },
  {
    role: 'Brand / Marketing manager',
    shows: 'Senior titles and famous brand names on the resume.',
    reality: 'They managed agencies and approvals but never built a strategy. Without a big team behind them, they stall.',
    check: 'A positioning and planning exercise for your business: objectives, audience, message, channels.',
    sign: 'Big brand names, small ownership',
  },
];

const WHY_BIG = [
  ['Portfolios are easy to borrow', 'Agency work, team projects and now AI tools make it easy to show work you didn\'t think through yourself.'],
  ['Interviews test confidence, not capability', 'Most interviews ask "have you done X?" A practised candidate always says yes.'],
  ['HR can\'t judge marketing craft', 'Generalist recruiters match keywords. They can\'t tell a strong headline or layout from a weak one.'],
  ['You find out too late', 'The truth shows up in the first brief, the first composition or the first month\'s spend. By then, you\'ve paid for it.'],
];

function RolesReality() {
  const [on, setOn] = useState(0);
  const [flip, setFlip] = useState(false);
  const r = ROLE_FAKES[on];
  const pick = (i) => { setOn(i); setFlip(false); };
  return (
    <section className="section" data-screen-label="Talent · Roles">
      <div className="wrap">
        <div className="split" style={{ alignItems: 'end' }}>
          <div>
            <span className="eyebrow rv">It's not just digital marketing</span>
            <h2 className="h2 duo" style={{ marginTop: 24 }}><Lines className="l1">{['The portfolio looks great.']}</Lines><Lines className="l2">{['Then they join.']}</Lines></h2>
          </div>
          <p className="lede rv d1">Copywriters, designers, social and brand managers all have the same problem. What's in the portfolio isn't always what turns up at work. Pick a role and see.</p>
        </div>

        <div className="rr rv d2">
          <div className="rr-roles">
            {ROLE_FAKES.map((x, i) => (
              <button key={x.role} className={on === i ? 'on' : ''} onClick={() => pick(i)}>
                <span className="num">0{i + 1}</span>{x.role}
              </button>
            ))}
          </div>
          <div className="rr-stage">
            <div className={'rr-card' + (flip ? ' flipped' : '')} key={on}>
              <div className="rr-face front">
                <div className="rr-top"><span className="rr-badge ok">In the interview</span><span className="num">{r.role.toUpperCase()}</span></div>
                <p className="rr-big">{r.shows}</p>
                <div className="rr-fake-ui">
                  <i></i><i></i><i></i>
                  <span>✓ Portfolio</span><span>✓ Tools</span><span>✓ References</span>
                </div>
                <button className="rr-flip" onClick={() => setFlip(true)}>See month one <Arrow /></button>
              </div>
              <div className="rr-face back">
                <div className="rr-top"><span className="rr-badge bad">After joining</span><span className="num">{r.role.toUpperCase()}</span></div>
                <p className="rr-big">{r.reality}</p>
                <div className="rr-sign">⚠ {r.sign}</div>
                <button className="rr-flip ghost" onClick={() => setFlip(false)}>← Back to the interview</button>
              </div>
            </div>
            <div className="rr-check">
              <span className="rr-badge kal">How Kalaidoskope catches it</span>
              <p>{r.check}</p>
            </div>
          </div>
        </div>

        <div className="why-big">
          <div className="why-big-h rv">
            <span className="eyebrow">Why this is a big problem</span>
            <h3 className="h3" style={{ marginTop: 16, fontSize: 'clamp(26px,2.6vw,36px)' }}>Hiring has become a test of presentation, not ability.</h3>
          </div>
          <div className="why-big-grid">
            {WHY_BIG.map(([t, d], i) => (
              <div key={t} className={'rv d' + (i + 1)}>
                <span className="why-n">0{i + 1}</span>
                <h4 className="h4">{t}</h4>
                <p className="small" style={{ fontSize: 15 }}>{d}</p>
              </div>
            ))}
          </div>
          <div className="why-sol rv">
            <div>
              <span className="eyebrow">Why Kalaidoskope is the answer</span>
              <p className="serif" style={{ fontSize: 'clamp(20px,2vw,26px)', color: 'var(--head)', marginTop: 12, lineHeight: 1.35 }}>Marketers screening marketers. Laukika's leadership has briefed, art-directed and reviewed this work for 100+ brands, so we test the thinking behind the portfolio with live briefs, not just the portfolio itself.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { RolesReality });
