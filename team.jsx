/* Kalaidoskope — real team data (added one profile at a time) */

const TEAM = [
  {
    id: 'abhijith',
    name: 'Abhijith Shyandilya',
    role: 'Founder · Lead Trainer',
    org: 'CEO & MD, Laukika',
    photo: 'assets/founder/abhijith-option-c.png',
    linkedin: 'https://www.linkedin.com/in/abhijithshyandilya/',
    biz: 'Academy · Talent · Enterprise AI',
    quote: 'Know the brand\'s voice and the customer it serves, then build go-to-market systems that serve, not push.',
    line: 'Marketing and growth leader with 13+ years scaling brands across SaaS, real estate, fintech, healthcare and consumer.',
    bio: 'CEO & MD of Laukika. Previously at Amazon (₹200 Cr+ ad investment), CHLEAR and Odigma. Has taught management and marketing at SJCE, Mysore and Amrita Vishwa Vidyapeetham.',
    teaches: ['GTM strategy', 'Brand positioning', 'Performance marketing', 'AI-enabled workflows'],
    trainer: true,
  },
  {
    id: 'purnima',
    name: 'Purnima Kalia',
    role: 'SEO · GEO · AIO Strategist · Trainer',
    org: 'Laukika Consultancy Solutions',
    photo: 'assets/team/purnima-kalia-studio.png',
    linkedin: 'https://www.linkedin.com/in/purnimakalia/',
    biz: 'Academy',
    quote: 'Whether it\'s Google or an AI answer, being found is the start. Search earns its place when it brings in revenue.',
    line: 'Revenue-focused search strategist across SEO, GEO and AIO, who has helped 50+ brands grow organically across B2B, B2C and D2C.',
    bio: 'Search strategist at Laukika, covering classic SEO alongside Generative Engine Optimisation (GEO) and AI Optimisation (AIO), so brands show up in AI search and answer engines, not just blue links. Previously SEO Executive at MSM Unify, Digital Marketing Manager at Religh Technologies and SEO Manager at Gilead Digital, after three years as Assistant Producer at Zee Media. Grew one B2C platform\'s organic traffic by 240% in 12 months. Digital Marketing from IIM Visakhapatnam and a Master\'s in Journalism.',
    teaches: ['SEO', 'GEO (Generative Engine Optimisation)', 'AIO (AI Optimisation)', 'Keyword & content strategy', 'GA4 & Search Console'],
    trainer: true,
  },
  {
    id: 'santhosh',
    name: 'Santhosh Chandramurthy',
    role: 'Account Manager · Trainer',
    org: 'Laukika Consultancy Solutions',
    photo: 'assets/team/santhosh-c-pressed.png',
    linkedin: 'https://www.linkedin.com/in/santhosh-chandramurthy/',
    biz: 'Academy',
    quote: 'Good teaching turns a campaign into a lesson, and a lesson into results.',
    line: 'Digital marketing strategist and trainer who has spent 4 years teaching students the field, and 6 years running it for brands.',
    bio: 'Account Manager at Laukika. Previously Digital Marketing Manager at ZooZoo POS (Canada) and Dream Buzz Solutions, and a Digital Marketing Trainer at Letspro for nearly four years, designing lessons that took students into marketing careers. MBA in Digital Marketing from JSS Centre for Management Studies.',
    teaches: ['Performance marketing', 'Google Ads', 'Social media marketing', 'Growth strategy'],
    trainer: true,
  },
  {
    id: 'tarun',
    name: 'Tarun Rao',
    role: 'Content Strategist · Trainer',
    org: 'Laukika Consultancy Solutions',
    photo: 'assets/team/tarun-rao-pressed.png',
    linkedin: 'https://www.linkedin.com/in/tarun-rao-8409bb206/',
    biz: 'Academy',
    quote: 'My job is more to think, than to write.',
    line: 'Journalism graduate who "puts your words in order", with research, copy and strategy for brands at Laukika.',
    bio: 'Content Strategist and Senior Copywriter at Laukika since 2023. Before that, three years as Program Communications Officer at Action on Hunger & Poverty Foundation, including communication work that helped a tribal community in Tamil Nadu through COVID with zero deaths.',
    teaches: ['Copywriting', 'Content strategy', 'Research', 'Brand voice'],
    trainer: true,
  },
  {
    id: 'srivas',
    name: 'Srivas S C',
    role: 'Process Associate · Trainer',
    org: 'Laukika Consultancy Solutions',
    photo: 'assets/team/srivas-sc-pressed.png',
    linkedin: 'https://www.linkedin.com/in/srivas-s-c-8008',
    biz: 'Academy',
    quote: 'Anyone can launch an ad. The skill is knowing who it\'s for.',
    line: 'MBA in Digital Marketing, now running paid campaigns and remarketing for Laukika\'s brands every day.',
    bio: 'Process Associate at Laukika, where he grew from intern to management trainee to running live Google Ads, Facebook Ads and remarketing campaigns. MBA in Digital Marketing from JSS Centre for Management Studies and a B.Tech in Electronics & Communication.',
    teaches: ['Google Ads', 'Meta / Facebook Ads', 'Remarketing', 'Campaign operations'],
    trainer: true,
  },
  {
    id: 'devu',
    name: 'Devu Lokesh',
    role: 'SEO Executive · Trainer',
    org: 'Laukika Consultancy Solutions',
    photo: 'assets/team/devu-lokesh-pressed.png',
    linkedin: 'https://www.linkedin.com/in/devulokesh/',
    biz: 'Academy',
    quote: 'Good SEO is mostly unglamorous work: the right keyword, the right tag, done well every time.',
    line: 'SEO executive at Laukika who learned the craft hands-on, from backlinks and meta tags to live client sites.',
    bio: 'SEO Executive at Laukika since February 2025. Before that, Social Media Manager at Postbox and an SEO internship at Team Pumpkin, Bengaluru, working on keyword research, backlinks, alt tags, meta descriptions and site performance for client brands. MBA from JSS Centre for Management Studies and a B.E. in Mechanical Engineering from JSS Science and Technology University.',
    teaches: ['On-page SEO', 'Keyword research', 'Link building', 'Social media management'],
    trainer: true,
  },
];

function LinkedInIcon({ size = 14 }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3zM9 9h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C20.6 8.65 21 11.2 21 14.5V21h-4v-5.8c0-1.4-.03-3.2-1.95-3.2-1.95 0-2.25 1.52-2.25 3.1V21H9z" /></svg>;
}

/* Academy — trainer cards */
function TrainerCard({ p, i }) {
  return (
    <article className={'tr-card rv d' + (i + 1)}>
      <div className="tr-photo"><img src={p.photo} alt={p.name} /></div>
      <div className="tr-body">
        <span className="num">{p.role.toUpperCase()}</span>
        <h3 className="h3">{p.name}</h3>
        <p className="tr-org">{p.org}</p>
        {p.quote && <p className="tr-quote">"{p.quote}"</p>}
        <p className="small" style={{ fontSize: 15 }}>{p.bio}</p>
        <div className="tr-teaches">
          <span>Teaches</span>
          <div className="chips" style={{ margin: 0 }}>{p.teaches.map((t) => <span key={t} className="chip">{t}</span>)}</div>
        </div>
        <a className="tr-li" href={p.linkedin} target="_blank" rel="noopener"><LinkedInIcon /> LinkedIn</a>
      </div>
    </article>
  );
}
function TrainersGrid() {
  const list = TEAM.filter((p) => p.trainer);
  return <div className="tr-grid">{list.map((p, i) => <TrainerCard key={p.id} p={p} i={i} />)}</div>;
}

/* About — team cards (founder is featured separately above) */
function TeamGrid({ slots = 4 }) {
  const list = TEAM.filter((p) => p.id !== 'abhijith');
  const empty = Math.max(0, slots - list.length);
  return (
    <div className="ab-team">
      {list.map((p, i) => (
        <article key={p.id} className={'tm-card rv d' + (i + 1)}>
          <div className="tm-photo arch"><img src={p.photo} alt={p.name} /></div>
          <div className="ab-person-tag">{p.biz}</div>
          <h4 className="h4" style={{ marginTop: 16 }}>{p.name}</h4>
          <p className="small">{p.role}</p>
          <p className="tm-line">{p.line}</p>
          <a className="tm-li" href={p.linkedin} target="_blank" rel="noopener" aria-label={p.name + ' on LinkedIn'}><LinkedInIcon size={13} /></a>
        </article>
      ))}
      {Array.from({ length: empty }, (_, i) => (
        <div key={'e' + i} className={'tm-empty rv d' + ((list.length + i) % 4 + 1)}>
          <div className="tm-photo arch tm-ph"><svg viewBox="-20 -20 40 40" width="40" height="40"><path d={starPath(16, 0.18)} fill="none" stroke="var(--line-strong)" /></svg></div>
          <h4 className="h4" style={{ marginTop: 16, color: 'var(--ink-faint)' }}>Team member</h4>
          <p className="small">Profile coming soon</p>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, { TEAM, TrainersGrid, TeamGrid, LinkedInIcon });
