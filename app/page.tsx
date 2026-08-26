import { heroAssets } from "./heroAssets";

function FlowerMark({ className = "" }: { className?: string }) {
  const petals = Array.from({ length: 12 }, (_, i) => i * 30);
  return (
    <svg className={className} viewBox="0 0 320 320" aria-hidden="true">
      <defs>
        <radialGradient id="petalCream" cx="45%" cy="38%" r="75%">
          <stop offset="0%" stopColor="#fffdf6" />
          <stop offset="50%" stopColor="#f0e4ca" />
          <stop offset="100%" stopColor="#cbb88e" />
        </radialGradient>
        <radialGradient id="petalWarm" cx="48%" cy="42%" r="75%">
          <stop offset="0%" stopColor="#fffaf0" />
          <stop offset="62%" stopColor="#ead9b8" />
          <stop offset="100%" stopColor="#ad9469" />
        </radialGradient>
        <radialGradient id="flowerCore" cx="48%" cy="44%" r="62%">
          <stop offset="0%" stopColor="#0c0b08" />
          <stop offset="45%" stopColor="#272118" />
          <stop offset="100%" stopColor="#776a48" />
        </radialGradient>
        <filter id="flowerSoft" x="-30%" y="-30%" width="160%" height="160%">
          <feDropShadow dx="0" dy="10" stdDeviation="10" floodColor="#160606" floodOpacity=".28" />
        </filter>
      </defs>
      <g filter="url(#flowerSoft)">
        {petals.map((r, i) => (
          <ellipse
            key={r}
            cx="160"
            cy="93"
            rx={i % 2 ? 55 : 48}
            ry={i % 2 ? 91 : 82}
            fill={i % 3 === 0 ? "url(#petalWarm)" : "url(#petalCream)"}
            transform={`rotate(${r} 160 160)`}
            opacity={0.9 - (i % 4) * 0.035}
          />
        ))}
        {Array.from({ length: 8 }, (_, i) => i * 45).map((r, i) => (
          <ellipse
            key={`inner-${r}`}
            cx="160"
            cy="116"
            rx="35"
            ry="60"
            fill="url(#petalCream)"
            transform={`rotate(${r + 12} 160 160)`}
            opacity={0.96 - i * 0.025}
          />
        ))}
        <circle cx="160" cy="160" r="31" fill="url(#flowerCore)" />
        <circle cx="160" cy="160" r="14" fill="#070706" />
        <path d="M220 43 C250 27 274 40 276 63 C277 80 262 94 242 91 C228 88 218 73 220 43Z" fill="#c97e79" />
        <path d="M230 53 C244 42 260 46 263 60 C265 70 256 80 244 78 C235 76 230 67 230 53Z" fill="#e5a6a1" opacity=".9" />
        <path d="M216 78 C246 106 261 142 254 196" fill="none" stroke="#b99b74" strokeWidth="5" strokeLinecap="round" />
        <path d="M222 80 l-28 -22 M227 83 l-15 -37 M230 86 l9 -35" stroke="#b99b74" strokeWidth="2.4" strokeLinecap="round" />
      </g>
    </svg>
  );
}

function LeafCluster({ side }: { side: "left" | "right" }) {
  const mirror = side === "right" ? -1 : 1;
  return (
    <svg className={`botanical botanical-${side}`} viewBox="0 0 420 760" aria-hidden="true">
      <defs>
        <linearGradient id={`leaf-${side}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#617e3d" />
          <stop offset="38%" stopColor="#31592f" />
          <stop offset="100%" stopColor="#102f20" />
        </linearGradient>
        <linearGradient id={`leaf2-${side}`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#89a75e" />
          <stop offset="55%" stopColor="#3e6e40" />
          <stop offset="100%" stopColor="#163827" />
        </linearGradient>
        <filter id={`leafShadow-${side}`} x="-30%" y="-20%" width="170%" height="160%">
          <feDropShadow dx={side === "left" ? 9 : -9} dy="16" stdDeviation="12" floodColor="#06140c" floodOpacity=".42" />
        </filter>
      </defs>
      <g transform={`translate(${side === "right" ? 420 : 0} 0) scale(${mirror} 1)`} filter={`url(#leafShadow-${side})`}>
        <path d="M92 730 C100 600 112 430 170 220" fill="none" stroke="#213c29" strokeWidth="10" strokeLinecap="round" />
        <path d="M139 728 C154 594 174 472 248 324" fill="none" stroke="#35563a" strokeWidth="7" strokeLinecap="round" />
        <path d="M77 645 C9 584 -1 493 21 418 C87 429 134 489 131 560 C128 601 110 630 77 645Z" fill={`url(#leaf-${side})`} />
        <path d="M118 543 C45 485 44 378 80 300 C153 324 196 398 182 473 C174 511 151 533 118 543Z" fill={`url(#leaf2-${side})`} />
        <path d="M153 426 C84 347 99 246 145 180 C213 219 245 300 216 366 C201 400 180 418 153 426Z" fill={`url(#leaf-${side})`} />
        <path d="M191 326 C149 242 181 153 237 99 C291 150 305 235 266 287 C247 311 220 323 191 326Z" fill={`url(#leaf2-${side})`} />
        <path d="M226 227 C206 147 249 75 307 39 C350 98 348 169 308 207 C286 228 255 235 226 227Z" fill={`url(#leaf-${side})`} />
        <path d="M160 572 C213 502 297 488 359 522 C340 598 274 645 206 627 C175 619 159 596 160 572Z" fill={`url(#leaf2-${side})`} />
        <path d="M203 466 C249 396 328 376 389 403 C377 474 319 522 254 511 C224 506 207 489 203 466Z" fill={`url(#leaf-${side})`} />
        <path d="M245 362 C285 300 354 279 410 302 C397 363 347 403 293 393 C267 388 251 377 245 362Z" fill={`url(#leaf2-${side})`} />
        {[['77','645','50','508'],['118','543','111','358'],['153','426','169','238'],['191','326','244','148'],['226','227','306','83'],['160','572','319','548'],['203','466','354','424'],['245','362','382','320']].map((v,i)=>(
          <path key={i} d={`M${v[0]} ${v[1]} C${v[2]} ${v[3]} ${v[2]} ${v[3]} ${v[2]} ${v[3]}`} stroke="rgba(213,229,186,.22)" strokeWidth="2.2" fill="none" />
        ))}
      </g>
    </svg>
  );
}

function Pampas() {
  return (
    <svg className="botanical-pampas" viewBox="0 0 520 700" aria-hidden="true">
      <defs>
        <linearGradient id="pampasG" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f5e5d0" />
          <stop offset="50%" stopColor="#d9bca3" />
          <stop offset="100%" stopColor="#a98970" />
        </linearGradient>
        <filter id="pampasShadow" x="-30%" y="-20%" width="160%" height="160%">
          <feDropShadow dx="0" dy="14" stdDeviation="12" floodColor="#1e0909" floodOpacity=".25" />
        </filter>
      </defs>
      <g filter="url(#pampasShadow)">
        {[70,120,170,220,270,320,370,420].map((x,i)=>(
          <g key={x} transform={`rotate(${(i-3.5)*6} ${x} 650)`}>
            <path d={`M${x} 670 C${x-10} 520 ${x-18} 355 ${x+5} ${155 + (i%3)*24}`} fill="none" stroke="#9b806c" strokeWidth="4" strokeLinecap="round" />
            <ellipse cx={x+5} cy={150 + (i%3)*24} rx={24 + (i%2)*5} ry={110 + (i%3)*15} fill="url(#pampasG)" opacity={0.72 + (i%3)*0.08} transform={`rotate(${(i%2?-8:8)} ${x+5} ${150+(i%3)*24})`} />
          </g>
        ))}
        {Array.from({length:18},(_,i)=><circle key={i} cx={330+(i%5)*26} cy={300+Math.floor(i/5)*35} r={6+(i%3)} fill="#eadbc8" opacity=".8" />)}
      </g>
    </svg>
  );
}

function ForegroundBranch() {
  return (
    <svg className="foreground-branch-svg" viewBox="0 0 760 330" aria-hidden="true">
      <path d="M35 300 C190 260 260 180 420 150 C545 126 612 70 735 40" fill="none" stroke="#386036" strokeWidth="8" strokeLinecap="round" />
      <path d="M180 245 C208 211 239 192 271 178 M313 178 C345 139 374 123 409 112 M480 126 C514 91 550 75 586 68" fill="none" stroke="#4d7542" strokeWidth="5" strokeLinecap="round" />
      {[{x:128,y:264,r:-35},{x:184,y:237,r:25},{x:232,y:207,r:-18},{x:281,y:180,r:33},{x:342,y:151,r:-28},{x:401,y:124,r:22},{x:460,y:127,r:-26},{x:523,y:95,r:28},{x:584,y:70,r:-24},{x:645,y:56,r:20}].map((l,i)=>(
        <ellipse key={i} cx={l.x} cy={l.y} rx="28" ry="15" fill={i%2?"#5f8b43":"#79a84d"} transform={`rotate(${l.r} ${l.x} ${l.y})`} />
      ))}
    </svg>
  );
}

export default function Home() {
  const woman = heroAssets.woman;

  return (
    <main>
      <section className="hero hero-ready hero-v2" id="top">
        <div className="phone-shell" aria-hidden="true">
          <div className="phone-status"><span>17:20</span><span className="phone-notch" /><span>▮ LTE ▰</span></div>
        </div>

        <div className="hero-backdrop" aria-hidden="true" />
        <Pampas />
        <LeafCluster side="left" />
        <LeafCluster side="right" />

        <div className="hero-title hero-title-v2" aria-label="Твоя Ти">
          <div className="title-line title-line-one title-wordmark">
            <span>ТВ</span>
            <span className="flower-wordmark"><FlowerMark className="hero-flower-mark" /></span>
            <span>Я</span>
          </div>
          <div className="title-line title-line-two">ТИ</div>
        </div>

        <div className="hero-script-v2" aria-hidden="true">Тут</div>

        <div className="hero-copy-block">
          <strong>ЦЕ НЕ -</strong>
          <p>А ЩО<br />ЗАЛИШИТЬСЯ,<br />ЯКЩО<br />ПРИБРАТИ ВСІ<br />ТВОЇ «ТРЕБА»?</p>
          <a href="#manifesto" className="hero-mini-card"><span>Можливо ти</span><b>УВІЙТИ →</b></a>
        </div>

        <img className="asset asset-woman hero-woman-v2" src={woman} alt="Жінка у леопардовій сукні" />
        <ForegroundBranch />
        <FlowerMark className="bottom-flower-v2" />

        <div className="hero-butterflies" aria-hidden="true"><span>✦</span><span>✦</span></div>
        <div className="hero-bottom-meta"><span>PAGE 01</span><span>REAL YOU · REAL COLOR</span></div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto-number">01</div>
        <div className="manifesto-main">
          <p className="section-kicker">Твоя Ти Тут</p>
          <h2>Не ставати кимось.<br /><em>Згадати себе.</em></h2>
          <p className="manifesto-lead">Цей простір не про те, щоб навчитися бути «правильною». Він про те, щоб нарешті почути, яка ти без шуму, ролей і чужих очікувань.</p>
        </div>
        <div className="manifesto-mark" aria-hidden="true">ТИ</div>
      </section>

      <section className="editorial-section">
        <article className="editorial-panel panel-cream"><span>01 / ВІДЧУТИ</span><h3>Що залишиться, якщо прибрати всі «треба»?</h3><p>Тиша, в якій стає чутно власне бажання.</p></article>
        <article className="editorial-panel panel-image"><img src={woman} alt="Editorial portrait" /><div className="panel-image-shade" /><div className="panel-copy"><span>02 / ПОБАЧИТИ</span><h3>Себе без фільтрів.</h3></div></article>
        <article className="editorial-panel panel-wine"><span>03 / ОБРАТИ</span><h3>Жити по-своєму.</h3><p>Не голосніше. Не правильніше. Чесніше.</p></article>
      </section>

      <section className="quote-section"><FlowerMark className="quote-flower-v2" /><blockquote>«Усі шукають себе десь. Але твоя Ти — уже Тут.»</blockquote><p>ТВОЯ ТИ ТУТ</p></section>

      <section className="final-section" id="final"><p>Тут починається твоє.</p><h2>ТВОЯ <i>ТИ</i></h2><a href="#top">ПОВЕРНУТИСЯ ДО СЕБЕ ↗</a></section>
    </main>
  );
}
