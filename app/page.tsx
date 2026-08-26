"use client";

import { useEffect, useMemo, useState } from "react";

type HeroAssets = Record<string, string>;

const PARTS = Array.from(
  { length: 10 },
  (_, i) => `/hero-data/part-${String(i + 1).padStart(2, "0")}.txt`,
);

function extractAsset(raw: string, key: string) {
  const escaped = key.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
  const match = raw.match(new RegExp(`\\"${escaped}\\"\\s*:\\s*\\"([^\\"]+)\\"`));
  return match?.[1] ?? "";
}

export default function Home() {
  const [rawAssets, setRawAssets] = useState("");

  useEffect(() => {
    let cancelled = false;

    Promise.all(
      PARTS.map(async (url) => {
        const response = await fetch(url, { cache: "force-cache" });
        if (!response.ok) throw new Error(`Failed to load ${url}`);
        return response.text();
      }),
    )
      .then((parts) => {
        if (!cancelled) setRawAssets(parts.join(""));
      })
      .catch((error) => {
        console.error("Hero assets failed to load", error);
        if (!cancelled) setRawAssets("");
      });

    return () => {
      cancelled = true;
    };
  }, []);

  const media = useMemo<HeroAssets>(() => {
    if (!rawAssets) return {};

    const woman = extractAsset(rawAssets, "woman");
    const flowerMain = extractAsset(rawAssets, "flowerMain");
    const leftLeaves = extractAsset(rawAssets, "leftLeaves");
    const rightBotanical = extractAsset(rawAssets, "rightBotanical");

    return {
      woman,
      flowerMain,
      leftLeaves,
      rightBotanical: rightBotanical || leftLeaves,
      foregroundBranch: extractAsset(rawAssets, "foregroundBranch") || leftLeaves,
      driedFlorals: extractAsset(rawAssets, "driedFlorals") || leftLeaves,
      flowerBottom: extractAsset(rawAssets, "flowerBottom") || flowerMain,
      script: extractAsset(rawAssets, "script"),
    };
  }, [rawAssets]);

  const loaded = Boolean(media.woman || media.flowerMain || media.leftLeaves);
  const rightIsFallback = Boolean(media.rightBotanical && !extractAsset(rawAssets, "rightBotanical"));
  const driedIsFallback = Boolean(media.driedFlorals && !extractAsset(rawAssets, "driedFlorals"));
  const foregroundIsFallback = Boolean(media.foregroundBranch && !extractAsset(rawAssets, "foregroundBranch"));

  return (
    <main>
      <section className={`hero ${loaded ? "hero-ready" : ""}`} id="top">
        <div className="phone-shell" aria-hidden="true">
          <div className="phone-status">
            <span>17:20</span>
            <span className="phone-notch" />
            <span>▮ LTE ▰</span>
          </div>
        </div>

        <div className="hero-backdrop" aria-hidden="true" />

        {media.driedFlorals && (
          <img
            className="asset asset-dried"
            src={media.driedFlorals}
            alt=""
            style={
              driedIsFallback
                ? { filter: "sepia(.72) saturate(.25) brightness(1.28)", opacity: 0.42 }
                : undefined
            }
          />
        )}

        {media.leftLeaves && <img className="asset asset-left" src={media.leftLeaves} alt="" />}

        {media.rightBotanical && (
          <img
            className="asset asset-right"
            src={media.rightBotanical}
            alt=""
            style={rightIsFallback ? { transform: "scaleX(-1)" } : undefined}
          />
        )}

        <div className="hero-title" aria-label="Твоя Ти">
          <div className="title-line title-line-one">
            <span>ТВ</span>
            <span className="title-flower-slot">
              {media.flowerMain && <img src={media.flowerMain} alt="" />}
            </span>
            <span>Я</span>
          </div>
          <div className="title-line title-line-two">ТИ</div>
        </div>

        {media.script ? (
          <img className="asset asset-script" src={media.script} alt="" />
        ) : (
          <div
            className="asset-script script-fallback"
            aria-hidden="true"
            style={{
              position: "absolute",
              zIndex: 9,
              left: "47%",
              top: "35%",
              fontFamily: '"Mrs Saint Delafield", cursive',
              fontSize: "clamp(6rem, 12vw, 13rem)",
              lineHeight: 0.7,
              color: "rgba(255,255,255,.95)",
              transform: "rotate(-10deg)",
              pointerEvents: "none",
            }}
          >
            Тут
          </div>
        )}

        <div className="hero-copy-block">
          <strong>ЦЕ НЕ -</strong>
          <p>
            А ЩО<br />
            ЗАЛИШИТЬСЯ,<br />
            ЯКЩО<br />
            ПРИБРАТИ ВСІ<br />
            ТВОЇ «ТРЕБА»?
          </p>
          <a href="#manifesto" className="hero-mini-card">
            <span>Можливо ти</span>
            <b>УВІЙТИ →</b>
          </a>
        </div>

        {media.woman && (
          <img className="asset asset-woman" src={media.woman} alt="Жінка у леопардовій сукні" />
        )}

        {media.foregroundBranch && (
          <img
            className="asset asset-foreground"
            src={media.foregroundBranch}
            alt=""
            style={foregroundIsFallback ? { opacity: 0.72, transform: "rotate(72deg) scale(.75)" } : undefined}
          />
        )}

        {media.flowerBottom && (
          <img className="asset asset-bottom-flower" src={media.flowerBottom} alt="" />
        )}

        <div className="hero-butterflies" aria-hidden="true">
          <span>✦</span>
          <span>✦</span>
        </div>
        <div className="hero-bottom-meta">
          <span>PAGE 01</span>
          <span>REAL YOU · REAL COLOR</span>
        </div>
      </section>

      <section className="manifesto" id="manifesto">
        <div className="manifesto-number">01</div>
        <div className="manifesto-main">
          <p className="section-kicker">Твоя Ти Тут</p>
          <h2>
            Не ставати кимось.<br />
            <em>Згадати себе.</em>
          </h2>
          <p className="manifesto-lead">
            Цей простір не про те, щоб навчитися бути «правильною». Він про те, щоб нарешті почути,
            яка ти без шуму, ролей і чужих очікувань.
          </p>
        </div>
        <div className="manifesto-mark" aria-hidden="true">
          ТИ
        </div>
      </section>

      <section className="editorial-section">
        <article className="editorial-panel panel-cream">
          <span>01 / ВІДЧУТИ</span>
          <h3>Що залишиться, якщо прибрати всі «треба»?</h3>
          <p>Тиша, в якій стає чутно власне бажання.</p>
        </article>
        <article className="editorial-panel panel-image">
          {media.woman && <img src={media.woman} alt="Editorial portrait" />}
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
        {media.flowerMain && <img className="quote-flower" src={media.flowerMain} alt="" />}
        <blockquote>«Усі шукають себе десь. Але твоя Ти — уже Тут.»</blockquote>
        <p>ТВОЯ ТИ ТУТ</p>
      </section>

      <section className="final-section" id="final">
        <p>Тут починається твоє.</p>
        <h2>
          ТВОЯ <i>ТИ</i>
        </h2>
        <a href="#top">ПОВЕРНУТИСЯ ДО СЕБЕ ↗</a>
      </section>
    </main>
  );
}
