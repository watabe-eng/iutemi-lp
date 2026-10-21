import { useEffect, useRef, useState } from 'react'

const ASSET = (name) => `${import.meta.env.BASE_URL}assets/${name}`
const LINE_URL = 'https://line.me/R/ti/p/@768obrsu'

const concerns = [
  '夜、部屋で1人になると急に寂しくなる…',
  '家族や友人には、気軽に相談できない…',
  'アドバイスより「今日もよう頑張ったな」って言ってほしい',
  'さみしい夜に、誰かの声を聞いてほっとしたい',
  '友達でもAIでもない第三者に意見を聞きたい',
]

const reasons = [
  {
    number: '01',
    title: <>AIにはない<br /><strong>人の温もりがある</strong></>,
    text: '血の通った人間だからこその、心温まる時間を提供します。',
    image: 'reason-warmth.png',
    alt: '相談者に寄り添う大阪のおばちゃん',
    tone: 'peach',
  },
  {
    number: '02',
    title: <>審査を通過した<br /><strong>プロのおばちゃんと話せる</strong></>,
    text: '聞く力、人柄を基準に、審査を通過したプロのおばちゃんだけが担当します。',
    image: 'reason-professionals.png',
    alt: '明るい大阪のおばちゃんたち',
    tone: 'mint',
  },
  {
    number: '03',
    title: <>話したいときに<br /><strong>すぐ話せる</strong></>,
    text: 'スマホから簡単に申し込み。顔出しなしでいつでも。',
    image: 'reason-anytime.png',
    alt: 'スマートフォンでおばちゃんと会話する女性',
    tone: 'yellow',
  },
]

const steps = [
  {
    title: '公式LINEを追加',
    text: '公式LINEを友だち追加して、案内に沿ってスタート。',
    image: 'step-line.png',
  },
  {
    title: '相談内容を選択',
    text: '恋愛、夫婦、仕事、人間関係など、希望するテーマを選びます。',
    image: 'step-topic.png',
  },
  {
    title: '電話で話す',
    text: '夜20時から夜23時の間で好きな時間に。名前や顔を出さずに話せます。',
    image: 'step-call.png',
  },
]

const testimonials = [
  {
    quote: '「よう頑張ったな、の一言で心が温かくなりました。」',
    meta: '看護師 S.Nさん（30）',
    image: 'voice-call.png',
    imageAlt: '利用者の女性',
    body: '一人暮らしで、仕事から帰ると誰とも話さないまま一日が終わることがあります。友達に連絡するのも気が引けて、つい我慢していました。おばちゃんが「今日もよう頑張ったなあ」と話を聞いてくれて、張りつめていた気持ちが少し楽になりました。何かを解決しなくても、誰かと話せるだけで安心できるんだと思いました。',
  },
  {
    quote: '「恋愛のモヤモヤを、一緒に笑い飛ばしてくれました」',
    meta: '事務職 M.Kさん（30）',
    image: 'voice-message.png',
    imageAlt: '利用者の女性',
    body: '友達には何度も相談していて、これ以上話しづらいなと思い利用しました。最初は緊張しましたが、「それはしんどかったなあ」と優しく聞いてくれて安心しました。最後は一緒に笑いながら、自分がどうしたいのかを整理できました。',
  },
]

const faqs = [
  {
    q: 'どんな悩みでも相談できますか？',
    a: '恋愛、夫婦、仕事、家族、人間関係など、身近な悩みを幅広くお話しいただけます。専門的な医療・法律・金融判断が必要な内容には回答できません。',
  },
  {
    q: '本名を伝える必要はありますか？',
    a: 'ニックネームで利用できます。顔出しも必要ありません。',
  },
  {
    q: 'ただ話を聞いてもらうだけでもいいですか？',
    a: 'もちろんです。「アドバイスはいらない」「今日は聞いてほしい」など、最初に希望を伝えられます。',
  },
]

function CTA({ label = 'まずはおばちゃんを見てみる', dark = false }) {
  return (
    <a className={`cta ${dark ? 'cta--dark' : ''}`} href={LINE_URL}>
      <span>{label}</span><span aria-hidden="true">›</span>
    </a>
  )
}

function SectionTitle({ eyebrow, children }) {
  return (
    <header className="section-title">
      {eyebrow && <p>{eyebrow}</p>}
      <h2>{children}</h2>
    </header>
  )
}

function App() {
  const heroCtaRef = useRef(null)
  const closingCtaRef = useRef(null)
  const [showFloatingCta, setShowFloatingCta] = useState(false)

  useEffect(() => {
    let animationFrame

    const updateFloatingCta = () => {
      cancelAnimationFrame(animationFrame)
      animationFrame = requestAnimationFrame(() => {
        const heroCta = heroCtaRef.current
        const closingCta = closingCtaRef.current
        if (!heroCta || !closingCta) return

        const heroRect = heroCta.getBoundingClientRect()
        const closingRect = closingCta.getBoundingClientRect()
        const closingIsVisible = closingRect.top < window.innerHeight && closingRect.bottom > 0

        setShowFloatingCta(heroRect.bottom <= 0 && !closingIsVisible)
      })
    }

    updateFloatingCta()
    window.addEventListener('scroll', updateFloatingCta, { passive: true })
    window.addEventListener('resize', updateFloatingCta)

    return () => {
      cancelAnimationFrame(animationFrame)
      window.removeEventListener('scroll', updateFloatingCta)
      window.removeEventListener('resize', updateFloatingCta)
    }
  }, [])

  return (
    <div className="site-shell">
      <main className="lp">
        <section className="hero" aria-labelledby="hero-title">
          <h1 id="hero-title" className="sr-only">大阪のおばちゃんに匿名で電話相談できるサービス「イウテミ」</h1>
          <img src={ASSET('hero.png')} alt="誰にも言えへんその話、大阪のおばちゃんにイウテミ" />
          <div ref={heroCtaRef} className="hero__cta"><CTA /></div>
        </section>

        <section className="concerns section">
          <SectionTitle eyebrow="こんな気持ち">1人で抱えていませんか？</SectionTitle>
          <ul className="concern-list">
            {concerns.map((concern) => <li key={concern}><span>✓</span>{concern}</li>)}
          </ul>
        </section>

        <section className="intro section">
          <img className="brand-ribbon" src={ASSET('brand-ribbon.png')} alt="そんな時は、大阪のおばちゃんにイウテミ" />
          <p className="lead">大阪のおばちゃんに、<br /><strong>気軽に相談できる通話サービス。</strong></p>
          <img className="intro-image" src={ASSET('intro.png')} alt="電話で明るく話す大阪のおばちゃん" />
        </section>

        <section className="reasons" aria-labelledby="reasons-title">
          <SectionTitle eyebrow="イウテミが選ばれる"><span id="reasons-title"><em>3</em>つの理由</span></SectionTitle>
          {reasons.map((reason) => (
            <article className={`reason reason--${reason.tone}`} key={reason.number}>
              <p className="reason__number">{reason.number}</p>
              <h3>{reason.title}</h3>
              <p>{reason.text}</p>
              <img src={ASSET(reason.image)} alt={reason.alt} />
            </article>
          ))}
        </section>

        <section className="flow section" id="flow">
          <SectionTitle>利用の流れ</SectionTitle>
          <ol className="steps">
            {steps.map((step, index) => (
              <li key={step.title}>
                <span className="step-number">{index + 1}</span>
                <img src={ASSET(step.image)} alt="" />
                <div><h3>{step.title}</h3><p>{step.text}</p></div>
              </li>
            ))}
          </ol>
        </section>

        <section className="comparison section">
          <SectionTitle eyebrow="＼相談先のいいとこどり！／">比べてわかるイウテミ</SectionTitle>
          <div className="table-wrap">
            <table>
              <thead><tr><th>比較</th><th className="is-iutemi">イウテミ</th><th>家族や親友</th><th>AI</th></tr></thead>
              <tbody>
                <tr><th>人の温もり</th><td className="is-iutemi">◎</td><td>◎</td><td>×</td></tr>
                <tr><th>好きな時に相談</th><td className="is-iutemi">○</td><td>△</td><td>◎</td></tr>
                <tr><th>なんでも相談</th><td className="is-iutemi">◎</td><td>△</td><td>○</td></tr>
                <tr><th>アドバイスの質</th><td className="is-iutemi">完全審査制</td><td>△</td><td>△</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <section className="voices section">
          <SectionTitle>利用者の声</SectionTitle>
          <div className="voice-list">
            {testimonials.map((voice) => (
              <article className="voice-card" key={voice.meta}>
                <div className="voice-card__head">
                  <img
                    src={ASSET(voice.image)}
                    alt={voice.imageAlt}
                    width="84"
                    height="84"
                    loading="lazy"
                    decoding="async"
                  />
                  <div><h3>{voice.quote}</h3><p>{voice.meta}</p></div>
                </div>
                <p>{voice.body}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="faq section">
          <SectionTitle>よくある質問</SectionTitle>
          <div className="faq-list">
            {faqs.map((faq) => (
              <details key={faq.q} open>
                <summary><span>Q</span>{faq.q}</summary>
                <p><span>A</span>{faq.a}</p>
              </details>
            ))}
          </div>
        </section>

        <section className="closing" aria-label="お申し込み案内">
          <a ref={closingCtaRef} href={LINE_URL} aria-label="LINEでおばちゃんを見てみる">
            <img src={ASSET('closing-offer.png')} alt="その悩み、おばちゃんにイウテミ。期間限定半額980円" />
          </a>
        </section>
      </main>
      <div className={`floating-cta ${showFloatingCta ? 'is-visible' : ''}`} aria-hidden={!showFloatingCta}>
        <CTA />
      </div>
    </div>
  )
}

export default App
