export default function Home() {
  return (
    <main>
      <section className="hero-ref" id="top">
        <div className="hero-ref__scene">
          <div className="hero-ref__glow" aria-hidden="true" />

          <div className="phone-ui" aria-hidden="true">
            <div className="phone-ui__frame" />
            <div className="phone-ui__notch" />
            <div className="phone-ui__status">
              <span>17:20</span>
              <span>▮ LTE ▰</span>
            </div>
          </div>

          <img className="hero-img hero-exposure hero-exposure--left" src="/left-exposion.png" alt="" />
          <img className="hero-img hero-exposure hero-exposure--right" src="/rigth-exposion.png" alt="" />

          <img className="hero-img hero-kolos hero-kolos--left" src="/kolos.png" alt="" />
          <img className="hero-img hero-kolos hero-kolos--right" src="/kolos.png" alt="" />

          <div className="hero-wordmark" aria-label="Твоя Ти">
            <div className="hero-wordmark__top">
              <span>ТВ</span>
              <span className="hero-wordmark__flower-slot">
                <img src="/main-flower.png" alt="" />
              </span>
              <span>Я</span>
            </div>
            <div className="hero-wordmark__bottom">ТИ</div>
          </div>

          <div className="hero-copy">
            <strong>ЦЕ НЕ -</strong>
            <p>
              А ЩО<br />
              ЗАЛИШИТЬСЯ,<br />
              ЯКЩО<br />
              ПРИБРАТИ ВСІ<br />
              ТВОЇ «ТРЕБА»?
            </p>
            <a className="hero-card" href="#manifesto">
              <span>Можливо ти</span>
              <b>УВІЙТИ →</b>
            </a>
          </div>

          <img className="hero-img hero-course" src="/txt-course.png" alt="Курс" />
          <img className="hero-img hero-woman" src="/women.png" alt="Жінка у леопардовій сукні" />

          <img className="hero-img hero-branch" src="/just-tree.png" alt="" />
          <img className="hero-img hero-secondary-flower" src="/sec-flowers.png" alt="" />

          <div className="hero-sparks" aria-hidden="true">
            <span>✦</span><span>✦</span>
          </div>

          <div className="hero-meta" aria-hidden="true">
            <span>PAGE 01</span>
            <span>REAL YOU · REAL COLOR</span>
          </div>
        </div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto-number">01</div>
        <div className="manifesto-main">
          <p className="section-kicker">Твоя Ти Тут</p>
          <h2>Не ставати кимось.<br /><em>Згадати себе.</em></h2>
          <p className="manifesto-lead">
            Цей простір не про те, щоб навчитися бути «правильною». Він про те, щоб нарешті почути,
            яка ти без шуму, ролей і чужих очікувань.
          </p>
        </div>
        <div className="manifesto-mark" aria-hidden="true">ТИ</div>
      </section>

      <section className="editorial-section">
        <article className="editorial-panel panel-cream">
          <span>01 / ВІДЧУТИ</span>
          <h3>Що залишиться, якщо прибрати всі «треба»?</h3>
          <p>Тиша, в якій стає чутно власне бажання.</p>
        </article>
        <article className="editorial-panel panel-image">
          <img src="/women.png" alt="Editorial portrait" />
          <div className="panel-image-shade" />
          <div className="panel-copy">
            <span>02 / ПОБАЧИТИ</span>
            <h3>Себе без фільтрів.</h3>
          </div>
        </article>
        <article className="editorial-panel panel-wine">
          <span>03 / ОБРАТИ</span>
          <h3>Жити по-своєму.</h3>
          <p>Не голосніше. Не правильніше. Чесніше.</p>
        </article>
      </section>

      <section className="quote-section">
        <img className="quote-flower" src="/main-flower.png" alt="" />
        <blockquote>«Усі шукають себе десь. Але твоя Ти — уже Тут.»</blockquote>
        <p>ТВОЯ ТИ ТУТ</p>
      </section>

      <section className="final-section" id="final">
        <p>Тут починається твоє.</p>
        <h2>ТВОЯ <i>ТИ</i></h2>
        <a href="#top">ПОВЕРНУТИСЯ НА ПОЧАТОК ↑</a>
      </section>
    </main>
  );
}
