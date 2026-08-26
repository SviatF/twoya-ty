import Image from "next/image";

const petals = [
  { x: 46, y: 9, r: -25, s: 1.0 },
  { x: 51, y: 8, r: 8, s: 0.86 },
  { x: 49, y: 12, r: 35, s: 0.8 },
  { x: 44, y: 13, r: -58, s: 0.72 },
  { x: 53, y: 12, r: 62, s: 0.68 },
];

function FlowerMark() {
  return (
    <span className="flower-mark" aria-label="о">
      <span className="flower-core" />
      {petals.map((petal, index) => (
        <span
          className="flower-petal"
          key={index}
          style={{
            left: `${petal.x}%`,
            top: `${petal.y}%`,
            transform: `translate(-50%, -50%) rotate(${petal.r}deg) scale(${petal.s})`,
          }}
        />
      ))}
    </span>
  );
}

function Botanical({ side, variant }: { side: "left" | "right"; variant?: "front" | "back" }) {
  return (
    <div className={`botanical botanical-${side} botanical-${variant ?? "back"}`} aria-hidden="true">
      <span className="stem" />
      {Array.from({ length: 8 }).map((_, i) => (
        <span className={`leaf leaf-${i + 1}`} key={i} />
      ))}
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="mobile-reference" aria-hidden="true">
          <Image
            src="/reference.webp"
            alt=""
            fill
            priority
            sizes="100vw"
            className="mobile-reference-image"
          />
        </div>

        <div className="desktop-art" aria-hidden="true">
          <div className="wine-glow" />
          <Botanical side="left" />
          <Botanical side="right" />

          <div className="hero-word hero-word-top">
            ТВ<FlowerMark />Я
          </div>
          <div className="hero-word hero-word-bottom">ТИ</div>

          <div className="scribble">Тут</div>
          <div className="butterfly butterfly-one">✦</div>
          <div className="butterfly butterfly-two">✦</div>

          <div className="reference-poster">
            <Image
              src="/reference.webp"
              alt="Референсний образ проєкту «Твоя Ти Тут»"
              fill
              priority
              sizes="(min-width: 768px) 42vw, 100vw"
              className="reference-poster-image"
            />
          </div>

          <Botanical side="left" variant="front" />
          <Botanical side="right" variant="front" />
        </div>

        <div className="hero-ui">
          <p className="eyebrow">Твоя Ти Тут</p>
          <h1>
            Це не курс.
            <span>Це повернення до себе.</span>
          </h1>
          <p className="hero-copy">
            А що залишиться, якщо прибрати всі твої «треба»?
          </p>
          <a className="hero-cta" href="#manifesto">
            Увійти
            <span aria-hidden="true">→</span>
          </a>
        </div>

        <a className="mobile-hotspot" href="#manifesto" aria-label="Перейти далі" />
      </section>

      <section className="manifesto" id="manifesto">
        <div className="section-index">01</div>
        <div className="manifesto-copy">
          <p className="kicker">Не ставати кимось. Згадати себе.</p>
          <h2>
            Твоя справжня
            <em> уже тут.</em>
          </h2>
          <p>
            Простір, у якому можна перестати відповідати чужим очікуванням і знову почути власний голос.
          </p>
        </div>
        <div className="manifesto-orbit" aria-hidden="true">
          <span>ТВОЯ</span>
          <i>ТИ</i>
        </div>
      </section>

      <section className="editorial-grid">
        <article className="editorial-card card-light">
          <span className="card-number">I</span>
          <p className="card-label">Відчути</p>
          <h3>Де закінчуються правила і починаєшся ти?</h3>
          <p>Без поспіху. Без ролей. Без необхідності комусь щось доводити.</p>
        </article>
        <article className="editorial-card card-photo">
          <Image src="/reference.webp" alt="Editorial mood проєкту" fill sizes="50vw" className="card-image" />
          <div className="card-photo-overlay" />
          <div className="card-photo-copy">
            <span>II</span>
            <h3>Побачити себе без фільтрів</h3>
          </div>
        </article>
        <article className="editorial-card card-wine">
          <span className="card-number">III</span>
          <p className="card-label">Обрати</p>
          <h3>Жити не «правильно», а по-своєму.</h3>
          <a href="#final">Продовжити →</a>
        </article>
      </section>

      <section className="quote-section">
        <div className="quote-flower" aria-hidden="true"><FlowerMark /></div>
        <blockquote>«Усі шукають себе десь. Але твоя Ти — уже Тут.»</blockquote>
        <p>Твоя Ти Тут</p>
      </section>

      <section className="final" id="final">
        <div className="final-topline">Тут починається твоє.</div>
        <h2>ТВОЯ <span>ТИ</span></h2>
        <p>Коли готова прибрати зайве — залишиться найважливіше.</p>
        <a href="#top" className="final-cta">Повернутися до себе <span>↗</span></a>
      </section>
    </main>
  );
}
