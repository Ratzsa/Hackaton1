var q=document.getElementById('q'),w=q.width=window.innerWidth,h=q.height=window.innerHeight,p=Array(256).join(1).split(''),c=q.getContext("2d"),m=Math;setInterval(function(){c.fillStyle="rgba(0,0,0,0.05)";c.fillRect(0,0,w,h);c.fillStyle="rgba(0,255,0,1)";p=p.map(function(v,i){r=m.random();c.fillText(String.fromCharCode(m.floor(2720+r*33)),i*10,v);v+=10; return v>768+r*1e4?0:v})},33)

document.getElementById('mybutton').addEventListener("click", function() {
  if (document.body.classList.contains('bling')) {
    document.body.classList.remove('bling');
  } else {
    document.body.classList.add('bling');
  }
});

// --- Init extra funktioner i modalinnehåll (t.ex. bildvisning) ---
  function initModalContentEnhancements(container) {
    // 1) Thumbnail → stor bild
    // Stödjer både exakt id #thumbs och generellt [data-large-src]
    const thumbs = container.querySelectorAll('img#thumbs, img[data-large-src]');
    const big = container.querySelector('#imgstor');

    // Om det finns en stor bild, koppla klick-logik
    if (big) {
      // Stäng stor bild vid klick
      big.addEventListener('click', () => {
        big.removeAttribute('src');
        big.style.display = 'none';
        big.setAttribute('aria-hidden', 'true');
      });
    }

    thumbs.forEach(img => {
      img.style.cursor = 'pointer';
      img.addEventListener('click', () => {
        if (!big) return;
        const src = img.getAttribute('data-large-src') || img.getAttribute('src');
        big.setAttribute('src', src);
        big.style.display = 'block';
        big.removeAttribute('aria-hidden');
      });
    });
  }