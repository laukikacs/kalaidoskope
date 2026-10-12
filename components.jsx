/* Kalaidoskope — shared components */
const { useState, useEffect, useRef, useCallback, useMemo } = React;

/* ---------- geometry helpers ---------- */
// Four-point concave star (the brand's directional form). p = pinch (smaller = deeper curves)
function starPath(r, p = 0.2) {
  const k = r * p;
  return `M0 ${-r} C0 ${-k} ${k} 0 ${r} 0 C${k} 0 0 ${k} 0 ${r} C0 ${k} ${-k} 0 ${-r} 0 C${-k} 0 0 ${-k} 0 ${-r}Z`;
}
function triPts(cx, cy, s, rot = 0) {
  const pts = [];
  for (let i = 0; i < 3; i++) {
    const a = (rot - 90 + i * 120) * Math.PI / 180;
    pts.push((cx + s * Math.cos(a)).toFixed(2) + ',' + (cy + s * Math.sin(a)).toFixed(2));
  }
  return pts.join(' ');
}
const lerp = (a, b, t) => a + (b - a) * t;
const clamp01 = (v) => Math.max(0, Math.min(1, v));
const reducedMotion = () => window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/* ---------- hooks ---------- */
function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => { cancelAnimationFrame(raf); raf = requestAnimationFrame(() => setY(window.scrollY)); };
    window.addEventListener('scroll', on, { passive: true });
    on();
    return () => { window.removeEventListener('scroll', on); cancelAnimationFrame(raf); };
  }, []);
  return y;
}
// progress 0..1 of an element scrolling through the viewport (0 = top hits viewport top, 1 = bottom hits viewport bottom)
function useSectionProgress(ref) {
  const [p, setP] = useState(0);
  useEffect(() => {
    let raf = 0;
    const on = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const el = ref.current; if (!el) return;
        const r = el.getBoundingClientRect();
        const total = r.height - window.innerHeight;
        setP(total > 0 ? clamp01(-r.top / total) : 0);
      });
    };
    window.addEventListener('scroll', on, { passive: true });
    window.addEventListener('resize', on);
    on();
    return () => { window.removeEventListener('scroll', on); window.removeEventListener('resize', on); cancelAnimationFrame(raf); };
  }, []);
  return p;
}

/* ---------- routing ---------- */
function go(path) {
  if (location.hash !== '#' + path) location.hash = path;
  window.scrollTo({ top: 0, behavior: 'instant' });
}
function Link({ to, className, children, onClick, ...rest }) {
  return <a href={'#' + to} className={className} onClick={(e) => { e.preventDefault(); onClick && onClick(); go(to); }} {...rest}>{children}</a>;
}

/* ---------- brand atoms ---------- */
function Logo({ dark, height = 30 }) {
  return <img src={dark ? 'assets/logo-full-white.png' : 'assets/logo-full.png'} alt="kalaidoskope" style={{ height, width: 'auto' }} />;
}
function Wordmark({ size = 28, color }) {
  return (
    <span className="serif" style={{ fontSize: size, color: color || 'var(--head)', letterSpacing: '.005em' }}>
      kal<span style={{ color: 'var(--k-gold)' }}>ai</span>doskope
    </span>
  );
}
function Arrow() { return <span className="arr">→</span>; }

/* Big cropped arcs — nested concave stars, blue + gold hairlines, scroll-rotating */
function Arcs({ className, count = 7, gold = [1, 4], rotate = 0, style, strokeW = 1, spread = 0.045, color }) {
  const rings = [];
  for (let i = 0; i < count; i++) {
    const r = 100 - i * (100 * spread);
    rings.push(
      <path key={i} d={starPath(r, 0.16 + i * 0.012)} fill="none"
        stroke={gold.includes(i) ? 'var(--k-gold)' : (color || 'var(--head)')}
        strokeWidth={strokeW} vectorEffect="non-scaling-stroke" opacity={gold.includes(i) ? 0.9 : 0.55 - i * 0.03} />
    );
  }
  return (
    <svg className={className} style={{ ...style, transform: (style && style.transform ? style.transform + ' ' : '') + `rotate(${rotate}deg)` }} viewBox="-102 -102 204 204" aria-hidden="true">
      {rings}
    </svg>
  );
}

/* The three converging triangles (logo core) */
function Triad({ spread = 1, active = -1, size = 13, rot = 0, outline = false }) {
  return (
    <g transform={`rotate(${rot})`}>
      {[0, 1, 2].map((i) => {
        const a = (-90 + i * 120) * Math.PI / 180;
        const d = 16 * spread;
        const on = active === i;
        return (
          <g key={i} style={{ transition: 'transform .9s cubic-bezier(.2,.7,.1,1)' }} transform={`translate(${(d * Math.cos(a)).toFixed(2)} ${(d * Math.sin(a)).toFixed(2)}) scale(${on ? 1.35 : 1})`}>
            <polygon points={triPts(0, 0, size, i * 120)}
              style={{ fill: on ? 'var(--k-gold)' : (outline ? 'none' : 'var(--k-blue)'), stroke: 'var(--k-gold)', strokeWidth: 1.2, transition: 'fill .6s' }}
              vectorEffect="non-scaling-stroke" />
          </g>
        );
      })}
    </g>
  );
}

/* Star pattern from the guidelines — grid of small outlined stars */
function StarPattern({ id = 'sp', color = '#fff', gold = 'var(--k-gold)', size = 64 }) {
  return (
    <svg className="pattern" aria-hidden="true" width="100%" height="100%">
      <defs>
        <pattern id={id} width={size} height={size} patternUnits="userSpaceOnUse">
          <path d={starPath(size * 0.32, 0.18)} transform={`translate(${size / 2} ${size / 2})`} fill="none" stroke={color} strokeWidth="1" />
          <circle cx="0" cy="0" r="1.6" fill={gold} />
          <circle cx={size} cy="0" r="1.6" fill={gold} />
          <circle cx="0" cy={size} r="1.6" fill={gold} />
          <circle cx={size} cy={size} r="1.6" fill={gold} />
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill={`url(#${id})`} />
    </svg>
  );
}

/* ---------- Living kaleidoscope (hero B + accents) ---------- */
function Kaleidoscope({ segments = 12, interactive = true, className = 'kscope', speed = 1 }) {
  const seedRef = useRef(null);
  const wrapRef = useRef(null);
  const outerRef = useRef(null);
  const coreRef = useRef(null);
  const ptr = useRef({ x: 0, y: 0, tx: 0, ty: 0 });
  const uid = useMemo(() => 'k' + Math.random().toString(36).slice(2, 7), []);
  const wedge = 360 / segments;

  // seed shards that live inside one wedge
  const shards = useMemo(() => ([
    { r: 30, a: 0.35, s: 9, c: 'var(--k-blue)', o: 1, sp: 0.6 },
    { r: 52, a: 0.62, s: 7, c: 'var(--k-gold)', o: 1, sp: -0.45 },
    { r: 70, a: 0.3, s: 11, c: 'var(--k-peri)', o: 0.75, sp: 0.35 },
    { r: 84, a: 0.7, s: 5, c: 'var(--k-gold)', o: 0.9, sp: 0.8 },
    { r: 44, a: 0.15, s: 4, c: 'var(--k-indigo)', o: 0.9, sp: -0.7 },
    { r: 62, a: 0.9, s: 6, c: 'none', o: 1, sp: 0.5, stroke: true },
    { r: 92, a: 0.45, s: 8, c: 'var(--k-mist)', o: 1, sp: -0.3 },
  ]), []);

  useEffect(() => {
    let raf, t0 = performance.now();
    const still = reducedMotion();
    const tick = (now) => {
      const t = (now - t0) / 1000 * speed;
      const P = ptr.current;
      P.x += (P.tx - P.x) * 0.05; P.y += (P.ty - P.y) * 0.05;
      const seed = seedRef.current;
      if (seed) {
        const kids = seed.children;
        for (let i = 0; i < shards.length; i++) {
          const sh = shards[i];
          const ang = (sh.a + 0.18 * Math.sin(t * 0.4 * sh.sp + i) + P.x * 0.25) * wedge * Math.PI / 180;
          const rad = sh.r * (1 + 0.08 * Math.sin(t * 0.3 + i * 1.7) + P.y * 0.12);
          const x = rad * Math.cos(ang), y = rad * Math.sin(ang);
          const rot = t * 20 * sh.sp + P.x * 60;
          kids[i] && kids[i].setAttribute('transform', `translate(${x.toFixed(2)} ${y.toFixed(2)}) rotate(${rot.toFixed(1)})`);
        }
      }
      if (outerRef.current) outerRef.current.setAttribute('transform', `rotate(${(t * 3 + P.x * 8).toFixed(2)})`);
      if (coreRef.current) coreRef.current.setAttribute('transform', `rotate(${(-t * 6).toFixed(2)})`);
      if (!still) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    const onMove = (e) => {
      if (!interactive || !wrapRef.current) return;
      const r = wrapRef.current.getBoundingClientRect();
      ptr.current.tx = ((e.clientX - r.left) / r.width - 0.5) * 2;
      ptr.current.ty = ((e.clientY - r.top) / r.height - 0.5) * 2;
    };
    window.addEventListener('pointermove', onMove);
    return () => { cancelAnimationFrame(raf); window.removeEventListener('pointermove', onMove); };
  }, [segments, speed]);

  const a = wedge * Math.PI / 180;
  const R = 110;
  const uses = [];
  for (let i = 0; i < segments; i++) {
    const mirror = i % 2 === 1;
    uses.push(<use key={i} href={`#${uid}-w`} transform={mirror ? `rotate(${(i + 1) * wedge}) scale(1 -1)` : `rotate(${i * wedge})`} />);
  }

  return (
    <div className={className} ref={wrapRef}>
      <div className="ring"></div><div className="ring r2"></div>
      <svg viewBox="-104 -104 208 208" aria-hidden="true">
        <defs>
          <clipPath id={`${uid}-c`}><polygon points={`0,0 ${R},0 ${(R * Math.cos(a)).toFixed(2)},${(R * Math.sin(a)).toFixed(2)}`} /></clipPath>
          <clipPath id={`${uid}-o`}><circle r="96" /></clipPath>
          <g id={`${uid}-w`} clipPath={`url(#${uid}-c)`}>
            <g ref={seedRef}>
              {shards.map((sh, i) => (
                <polygon key={i} points={triPts(0, 0, sh.s)} opacity={sh.o}
                  style={{ fill: sh.c, stroke: sh.stroke ? 'var(--k-gold)' : 'none', strokeWidth: 0.6 }} />
              ))}
            </g>
          </g>
        </defs>
        <g clipPath={`url(#${uid}-o)`}>{uses}</g>
        <g ref={outerRef}>
          <path d={starPath(103, 0.14)} fill="none" style={{ stroke: 'var(--head)' }} strokeWidth="0.5" opacity=".5" />
          <path d={starPath(103, 0.14)} fill="none" style={{ stroke: 'var(--k-gold)' }} strokeWidth="0.5" opacity=".7" transform="rotate(45) scale(.92)" />
        </g>
        <circle r="24" style={{ fill: 'var(--bg)' }} opacity=".92" />
        <path d={starPath(22, 0.16)} style={{ fill: 'none', stroke: 'var(--head)' }} strokeWidth="0.8" />
        <g ref={coreRef}><Triad spread={0.28} size={4.4} /></g>
      </svg>
    </div>
  );
}

/* ---------- Laukika co-brand elements ---------- */
const LK = { green: '#79A342', blue: '#265CAB', teal: '#00A99D', orange: '#F04D2B', indigo: '#403F99' };
const LK_SEQ = [LK.green, LK.blue, LK.teal, LK.indigo, LK.orange];
// The Laukika "bars" — angled parallelograms from the KIK icon
function LaukikaBars({ h = 18, colors = [LK.green, LK.blue, LK.teal], style }) {
  return <span className="lk-bars" style={style} aria-hidden="true">{colors.map((c, i) => <i key={i} style={{ background: c, height: h + (i === 1 ? 6 : 0) }}></i>)}</span>;
}
function LaukikaStrip({ style }) {
  return <div className="lk-strip" style={style} aria-hidden="true">{LK_SEQ.map((c) => <i key={c} style={{ background: c }}></i>)}</div>;
}
function LaukikaLogo({ height = 26, dark }) {
  return <img src={dark ? 'assets/laukika/laukika-logo-02.png' : 'assets/laukika/laukika-logo.png'} alt="Laukika" style={{ height, width: 'auto' }} />;
}
function PoweredByLaukika({ dark, label = 'Powered by' }) {
  return (
    <a className="lk-lockup" href="https://www.laukika.com" target="_blank" rel="noopener">
      <small>{label}</small><span className="sep"></span><LaukikaLogo height={24} dark={dark} />
    </a>
  );
}
// "kalaidoskope Academy" sub-brand lockup — keeps the gold "ai" in the master logo
function SubBrand({ name, dark }) {
  return <span className="kal-sub"><Logo dark={dark} height={26} /><span><b>{name}</b></span></span>;
}

/* ---------- image placeholder (swap for generated imagery later) ---------- */
function Ph({ label, className = '', style, src, alt, children }) {
  if (src) return <div className={'ph ' + className} style={style}><img src={src} alt={alt || label} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />{children}</div>;
  return (
    <div className={'ph ' + className} style={style}>
      {children}
      <div className="ph-label"><b>IMG</b> · {label}</div>
    </div>
  );
}
function Sample({ children = 'Sample content' }) { return <span className="sample-tag">◇ {children}</span>; }

/* ---------- reveal on scroll ---------- */
function useReveal(dep) {
  useEffect(() => {
    const els = document.querySelectorAll('.rv:not(.in), .mask-line:not(.in), .rv-group:not(.in)');
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -6% 0px' });
    els.forEach((el) => io.observe(el));
    // safety: anything already in the first viewport reveals even if IO misfires
    const t = setTimeout(() => {
      document.querySelectorAll('.rv:not(.in), .mask-line:not(.in)').forEach((el) => {
        if (el.getBoundingClientRect().top < window.innerHeight * 1.1) el.classList.add('in');
      });
    }, 1400);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [dep]);
}
function Lines({ children, as: Tag = 'span', className = '' }) {
  // children: array of strings / nodes, each becomes a masked line
  const arr = Array.isArray(children) ? children : [children];
  return <>{arr.map((c, i) => <span key={i} className={'mask-line ' + className}><span style={{ transitionDelay: i * 0.09 + 's' }}>{c}</span></span>)}</>;
}

/* ---------- Nav ---------- */
const NAV = [
  { to: '/', label: 'Home' },
  { to: '/academy', label: 'Academy' },
  { to: '/talent', label: 'Talent' },
  { to: '/enterprise', label: 'Enterprise AI Tools' },
  { to: '/about', label: 'About' },
];
function Nav({ route, dark }) {
  const y = useScrollY();
  const [open, setOpen] = useState(false);
  useEffect(() => setOpen(false), [route]);
  return (
    <>
      <header className={'nav' + (y > 30 || open ? ' scrolled' : '')}>
        <div className="wrap nav-in">
          <Link to="/" className="nav-logo" aria-label="Kalaidoskope home"><Logo dark={dark} height={y > 30 ? 26 : 30} /></Link>
          <nav className="nav-links">
            {NAV.map((n) => <Link key={n.to} to={n.to} className={route === n.to ? 'on' : ''}>{n.label}</Link>)}
          </nav>
          <div className="nav-right">
            <button className="nav-search" aria-label="Search">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="7" cy="7" r="5" /><path d="M11 11l3.5 3.5" /></svg>
            </button>
            <Link to="/contact" className="btn btn-primary">Talk to us <Arrow /></Link>
            <button className={'burger' + (open ? ' open' : '')} onClick={() => setOpen(!open)} aria-label="Menu"><span></span><span></span></button>
          </div>
        </div>
      </header>
      <div className={'mnav' + (open ? ' open' : '')}>
        {NAV.map((n) => <Link key={n.to} to={n.to}>{n.label}</Link>)}
        <Link to="/contact" className="btn btn-primary">Talk to us <Arrow /></Link>
      </div>
    </>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  const [sent, setSent] = useState(false);
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <img src="assets/logo-full-white.png" alt="kalaidoskope" style={{ height: 30, width: 'auto' }} />
            <p style={{ marginTop: 22, maxWidth: 340 }}>We train marketers, place marketing talent and build AI tools that give marketing teams time back. Powered by Laukika Consultancy Solutions.</p>
            {sent ? <p style={{ marginTop: 26, color: 'var(--k-gold)' }}>Thank you — we'll be in touch.</p> :
              <form className="footer-sign" onSubmit={(e) => { e.preventDefault(); setSent(true); }}>
                <input type="email" placeholder="Your email for updates" required />
                <button className="btn btn-gold" style={{ height: 46 }}>Join</button>
              </form>}
          </div>
          <div>
            <h5>Businesses</h5>
            <ul><li><Link to="/talent">Kalaidoskope Talent</Link></li><li><Link to="/academy">Kalaidoskope Academy</Link></li><li><Link to="/enterprise">Enterprise AI Tools</Link></li></ul>
          </div>
          <div>
            <h5>Company</h5>
            <ul><li><Link to="/about">About</Link></li><li><Link to="/academy">Marketing Acceleration Program</Link></li><li><Link to="/contact">Get in touch</Link></li></ul>
          </div>
          <div>
            <h5>Connect</h5>
            <ul><li><a href="#">LinkedIn</a></li><li><a href="#">Instagram</a></li><li><a href="#">hello@kalaidoskope.com</a></li></ul>
          </div>
        </div>
        <div className="footer-big">LEARN <span>·</span> BUILD <span>·</span> AUTOMATE</div>
        <div className="footer-bot"><span>© Kalaidoskope 2026</span><span>Privacy Policy · Terms</span></div>
      </div>
    </footer>
  );
}

/* ---------- Page hero for inner pages ---------- */
function PageHero({ crumb, eyebrow, l1, l2, lede, children, arcs = true, sub }) {
  const y = useScrollY();
  const dark = document.documentElement.dataset.theme === 'indigo';
  return (
    <section className="phero">
      {arcs && <Arcs className="arcs" rotate={y * 0.03} />}
      <div className="wrap">
        <div className="phero-in">
          <div className="crumb rv"><Link to="/">Home</Link><span>/</span><span>{crumb}</span></div>
          {sub && <div style={{ marginTop: 30, display: 'flex', alignItems: 'center', gap: 20, flexWrap: 'wrap' }} className="rv d1"><SubBrand name={sub} dark={dark} /><span style={{ width: 1, height: 24, background: 'var(--line-strong)' }}></span><span style={{ display: 'inline-flex', alignItems: 'center', gap: 10, fontSize: 12, letterSpacing: '.14em', textTransform: 'uppercase', color: 'var(--ink-faint)' }}>by <LaukikaLogo height={20} dark={dark} /></span></div>}
          <div style={{ marginTop: sub ? 26 : 34 }} className="rv d1"><span className="eyebrow">{eyebrow}</span></div>
          <h1 className="display duo">
            <Lines className="l1">{l1}</Lines>
            <Lines className="l2">{l2}</Lines>
          </h1>
          {lede && <p className="lede rv d2">{lede}</p>}
          {children}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
function Faq({ items }) {
  const [open, setOpen] = useState(0);
  return (
    <div className="faq">
      {items.map((it, i) => (
        <div key={i} className={'faq-item' + (open === i ? ' open' : '')}>
          <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)}>
            <span className="num">{String(i + 1).padStart(2, '0')}</span><span>{it.q}</span><span className="pm"></span>
          </button>
          <div className="faq-a"><div><p>{it.a}</p></div></div>
        </div>
      ))}
    </div>
  );
}

Object.assign(window, {
  starPath, triPts, lerp, clamp01, useScrollY, useSectionProgress, go, Link, Logo, Wordmark, Arrow,
  Arcs, Triad, StarPattern, Kaleidoscope, LK, LK_SEQ, LaukikaBars, LaukikaStrip, LaukikaLogo, PoweredByLaukika, SubBrand, Ph, Sample, useReveal, Lines, Nav, Footer, PageHero, Faq,
});
