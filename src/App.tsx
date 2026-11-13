import { useEffect, useState } from 'react';
import { ArrowDown, ArrowRight, BarChart3, Check, ChevronDown, Cloud, Dumbbell, Globe, History, NotebookPen, Timer, WifiOff } from 'lucide-react';
import { copy, initialLanguage, languageNames, languages, storageKey, type Language } from './translations';

const APP = 'https://dawalberto.github.io/workoutlog/';
const featureIcons = [Dumbbell, Timer, BarChart3, NotebookPen];
const dataIcons = [WifiOff, Cloud, History];
function App() {
 const [language, setLanguage] = useState<Language>(initialLanguage);
 const t = copy[language];
 useEffect(() => {
   document.documentElement.lang = language;
   document.title = `RepNami — ${t.eyebrow}`;
   document.querySelector('meta[name="description"]')?.setAttribute('content', t.description);
 }, [language, t]);
 const changeLanguage = (value: Language) => {
   setLanguage(value);
   try { localStorage.setItem(storageKey, value); } catch { /* Keep the selection for this visit. */ }
 };
 return <div className="site" id="inicio">
  <header className="header"><div className="wrap nav"><a className="brand" href="#inicio" aria-label="RepNami"><img src={`${import.meta.env.BASE_URL}icon.svg`} alt=""/><span>REP<span>NAMI</span></span></a><nav aria-label={t.nav.join(', ')}><a href="#funciones">{t.nav[0]}</a><a href="#como-funciona">{t.nav[1]}</a><a href="#preguntas">{t.nav[2]}</a></nav><div className="nav-actions"><label className="language-selector"><Globe size={17} aria-hidden="true"/><span className="sr-only">{t.language}</span><select value={language} aria-label={t.language} onChange={event => changeLanguage(event.target.value as Language)}>{languages.map(option => <option key={option} value={option} lang={option}>{languageNames[option]}</option>)}</select></label><a className="nav-cta" href={APP}>{t.open} <ArrowRight size={16}/></a></div></div></header>
  <main>
   <section className="hero wrap"><div className="hero-copy"><div className="eyebrow"><span className="dot"/> {t.eyebrow}</div><h1>{t.hero[0]} <em>{t.hero[1]}</em> {t.hero[2]}</h1><p>{t.intro}</p><div className="actions"><a className="button primary" href={APP}>{t.start} <ArrowRight size={19}/></a><a className="button secondary" href="#funciones">{t.discover} <ArrowDown size={16}/></a></div><div className="hero-meta">{t.benefits.map(item=><span key={item}><Check size={15}/> {item}</span>)}</div></div>
   <div className="hero-art" aria-label={t.illustration}><div className="art-orbit orbit-one"/><div className="art-orbit orbit-two"/><div className="art-label">{t.made} <span>↗</span></div><div className="phone"><div className="phone-top"><span>REP<span>NAMI</span></span><span>•••</span></div><div className="phone-title"><small>{t.workout}</small><h3>{t.today}</h3><p>{t.closer}</p></div><div className="phone-card"><div className="card-head"><span>01</span><strong>{t.bench}</strong><span>•••</span></div><div className="card-labels">{t.columns.map(item=><span key={item}>{item}</span>)}<span/></div>{[['1','60 kg','10'],['2','60 kg','10'],['3','60 kg','8']].map((row,i)=><div className="set" key={i}><span>{row[0]}</span><b>{row[1]}</b><b>{row[2]}</b><i className={i<2?'done':''}>{i<2?'✓':''}</i></div>)}</div><div className="timer"><Timer size={18}/><span>{t.rest}</span><strong>01:30</strong></div><div className="phone-bottom">{t.phoneNav.map(item=><span key={item}>{item}</span>)}</div></div><div className="floating-stat"><span>{t.progressLabel}</span><strong>{t.progressLine[0]}<br/>{t.progressLine[1]} <span>↗</span></strong></div></div></section>
   <div className="ticker"><div className="wrap ticker-inner">{t.ticker.map(item=><span key={item}>{item} <b>✳</b></span>)}</div></div>
   <section className="section wrap" id="funciones"><div className="section-heading"><div><div className="eyebrow">{t.toolbox}</div><h2>{t.featuresHeading[0]}<br/><em>{t.featuresHeading[1]}</em></h2></div><p>{t.featuresIntro}</p></div><div className="features">{t.features.map(([title,text],index)=>{const Icon=featureIcons[index]; return <article className="feature" key={index}><div className="feature-top"><div className="feature-icon"><Icon size={23}/></div><span>0{index+1} / 04</span></div><h3>{title}</h3><p>{text}</p></article>})}</div></section>
   <section className="process" id="como-funciona"><div className="wrap process-grid"><div><div className="eyebrow">{t.processEyebrow}</div><h2>{t.processHeading[0]}<br/>{t.processHeading[1]}<br/><em>{t.processHeading[2]}</em></h2><p className="process-intro">{t.processIntro}</p><a className="text-link" href={APP}>{t.open} <ArrowRight size={18}/></a></div><div className="steps">{t.steps.map(([title,text],index)=><div key={index}><span>0{index+1}</span><div><h3>{title}</h3><p>{text}</p></div></div>)}</div></div></section>
   <section className="section wrap ownership"><div className="ownership-copy"><div className="eyebrow">{t.dataEyebrow}</div><h2>{t.dataHeading[0]}<br/><em>{t.dataHeading[1]}</em></h2><p>{t.dataIntro}</p></div><div className="ownership-cards">{t.dataCards.map(([title,text],index)=>{const Icon=dataIcons[index]; return <article key={index}><Icon/><div><h3>{title}</h3><p>{text}</p></div></article>})}</div></section>
   <section className="faq-section" id="preguntas"><div className="wrap faq-grid"><div><div className="eyebrow">{t.faqEyebrow}</div><h2>{t.faqHeading[0]}<br/><em>{t.faqHeading[1]}</em></h2></div><div>{t.questions.map(([q,a],index)=><details key={index}><summary>{q}<ChevronDown size={19}/></summary><p>{a}</p></details>)}</div></div></section>
   <section className="wrap final-cta"><div><div className="eyebrow">{t.finalEyebrow}</div><h2>{t.finalHeading[0]}<br/><em>{t.finalHeading[1]}</em></h2><p>{t.finalText}</p></div><a className="button primary" href={APP}>{t.open} <ArrowRight size={19}/></a></section>
  </main><footer><div className="wrap footer-inner"><a className="brand" href="#inicio" aria-label="RepNami"><img src={`${import.meta.env.BASE_URL}icon.svg`} alt=""/><span>REP<span>NAMI</span></span></a><p>{t.footer}</p><a href={APP}>{t.goApp} ↗</a></div></footer>
 </div>
}
export default App;
