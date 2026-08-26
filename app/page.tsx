import Image from "next/image";

const petals = [
  { x: 50, y: 20, r: -8, s: 1.0 },
  { x: 63, y: 30, r: 42, s: .92 },
  { x: 61, y: 51, r: 81, s: .84 },
  { x: 48, y: 61, r: 155, s: .86 },
  { x: 35, y: 48, r: 216, s: .88 },
  { x: 36, y: 29, r: 286, s: .82 },
];

function FlowerMark() {
  return (
    <span className="flower-mark" aria-label="о">
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
      <span className="flower-core" />
    </span>
  );
}

function Botanical({ side, variant }: { side: "left" | "right"; variant?: "front" | "back" }) {
  return (
    <div className={`botanical botanical-${side} botanical-${variant ?? "back"}`} aria-hidden="true">
      <span className="stem" />
      {Array.from({ length: 9 }).map((_, i) => (
        <span className={`leaf leaf-${i + 1}`} key={i} />
      ))}
    </div>
  );
}

function DeviceChrome() {
  return (
    <div className="device-chrome" aria-hidden="true">
      <div className="status-time">17:20</div>
      <div className="notch" />
      <div className="status-icons">▮ LTE ▰</div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <DeviceChrome />
        <div className="hero-art" aria-hidden="true">
          <div className="wine-glow" />
          <Botanical side="left" />
          <Botanical side="right" />

          <div className="hero-word hero-word-top">
            ТВ<FlowerMark />Я
          </div>
          <div className="hero-word hero-word-bottom">ТИ</div>
          <div className="scribble">Тут</div>

          <div className="mini-flower mini-flower-top"><FlowerMark /></div>
          <div className="mini-flower mini-flower-bottom"><FlowerMark /></div>

          <div className="model-wrap">
            <Image
              src="/model.svg"
              alt=""
              fill
              priority
              sizes="(max-width: 720px) 86vw, 43vw"
              className="model-image"
            />
          </div>

          <div className="butterfly butterfly-one">✦</div>
          <div className="butterfly butterfly-two">✦</div>

          <Botanical side="left" variant="front" />
          <Botanical side="right" variant="front" />
        </div>

        <div className="hero-ui">
          <p className="eyebrow">Твоя Ти Тут</p>
          <h1>
            Це не —
            <span>курс</span>
          </h1>
          <p className="hero-copy">А що залишиться, якщо прибрати всі твої «треба»?</p>
          <a className="hero-cta" href="#manifesto">
            <span>Можливо ти</span>
            <b>Увійти →</b>
          </a>
        </div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="section-index">01</div>
        <div className="manifesto-copy">
          <p className="kicker">Не ставати кимось. Згадати себе.</p>
          <h2>
            Твоя справжня
            <em> уже тут.</em>
          </h2>
          <p>Простір, у якому можна перестати відповідати чужим очікуванням і знову почути власний голос.</p>
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
          <Image src="/model.svg" alt="Editorial mood проєкту" fill sizes="50vw" className="card-image" />
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
