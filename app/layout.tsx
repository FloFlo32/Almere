import type { Metadata } from 'next'
import Script from 'next/script'
import './globals.css'
import { LanguageProvider } from '../lib/LanguageContext'

export const metadata: Metadata = {
  title: 'Sloepverhuur Almere - Het leukste uitje op het water in Almere',
  description: 'Ontdek de veelzijdige stad Almere vanaf het water met een sloep van Sloepverhuur Almere.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="nl">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600;700&family=Comic+Neue:wght@700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <LanguageProvider>
        {children}
        </LanguageProvider>
        <Script
          src="https://yetti.ai/widget/yetti-chat.js"
          data-widget-id="b678ffa6-e107-4eb5-8e39-790dfe4ac111"
          strategy="afterInteractive"
        />
        <Script id="yetti-rental-widget" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: `
(function(){
  'use strict';
  var WIDGET_URL='https://yetti.ai/widget-rental/rwk_PPbJUQ5E0ru88sWq0PZ8Gt21';
  function _yrStyle(){
    if(document.getElementById('_yr_s'))return;
    var s=document.createElement('style');s.id='_yr_s';
    s.textContent='@keyframes _yrIn{from{opacity:0}to{opacity:1}}@keyframes _yrUp{from{opacity:0;transform:translateY(18px) scale(.97)}to{opacity:1;transform:none}}';
    document.head.appendChild(s);
  }
  function openModal(locId){
    if(document.getElementById('_yr_ov'))return;
    _yrStyle();
    var ov=document.createElement('div');
    ov.id='_yr_ov';
    ov.setAttribute('style','position:fixed!important;top:0!important;left:0!important;width:100%!important;height:100%!important;z-index:2147483647!important;background:rgba(2,6,23,0.75);display:flex;align-items:center;justify-content:center;box-sizing:border-box;padding:8px;animation:_yrIn .2s ease;');
    var wrap=document.createElement('div');
    wrap.setAttribute('style','position:relative;width:calc(100vw - 32px);max-width:740px;height:calc(100vh - 48px);max-height:900px;animation:_yrUp .28s cubic-bezier(.22,1,.36,1);');
    var box=document.createElement('div');
    box.setAttribute('style','width:100%;height:100%;border-radius:16px;overflow:hidden;box-shadow:0 48px 120px rgba(0,0,0,0.6);');
    var fr=document.createElement('iframe');
    var _src=new URL(WIDGET_URL);
    if(locId)_src.searchParams.set('location',locId);
    _src.searchParams.set('return_url',location.href);
    fr.src=_src.toString();
    fr.allow='payment';
    fr.setAttribute('style','width:100%;height:100%;border:none;display:block;background:#fff;');
    function close(){
      var o=document.getElementById('_yr_ov');if(!o)return;
      o.style.animation='_yrIn .16s ease reverse forwards';
      setTimeout(function(){if(o&&o.parentNode)o.parentNode.removeChild(o);},160);
    }
    ov.onclick=function(e){if(e.target===ov)close();};
    document.addEventListener('keydown',function esc(e){if(e.key==='Escape'){close();document.removeEventListener('keydown',esc);}});
    window.addEventListener('message',function(e){if(e.data&&e.data.type==='yetti-close-modal')close();});
    box.appendChild(fr);wrap.appendChild(box);ov.appendChild(wrap);document.body.appendChild(ov);
  }
  document.addEventListener('click',function(e){
    var btn=e.target.closest?e.target.closest('[data-yetti-rental]'):null;
    if(btn){e.preventDefault();openModal(btn.getAttribute('data-yetti-rental'));return;}
    var a=e.target.closest?e.target.closest('a[href*="yetti-rental=true"]'):null;
    if(a){e.preventDefault();try{var u=new URL(a.href,location.href);openModal(u.searchParams.get('location')||'');}catch(_){location.href=a.href;}return;}
  },true);
  window.YettiRental={open:openModal};
})();
        `}} />
      </body>
    </html>
  )
}
