/* eslint-disable @next/next/no-img-element */
import Script from 'next/script';

export default function YandexAnalytics() {
  return (
    <>
      <Script id="metrika-counter" strategy="afterInteractive">
        {`(function(m,e,t,r,i,k,a){m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
          m[i].l=1*new Date();
          for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
          k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)})
          (window, document, "script", "https://mc.yandex.ru/metrika/tag.js", "ym");
 
          ym(97850586, "init", {
                defer: true,
                clickmap:true,
                trackLinks:true,
                accurateTrackBounce:true,
                webvisor:true
          });`}
      </Script>
      <noscript>
        <div>
          <img
            alt=""
            src="https://mc.yandex.ru/watch/97850586"
            style={{ position: 'absolute', left: '-9999px' }}
          />
        </div>
      </noscript>
    </>
  );
}
