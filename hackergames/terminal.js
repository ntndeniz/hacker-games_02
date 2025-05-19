// terminal.js
// Terminale metin yazma, geri sayım ve kullanıcı etkileşimiyle tam ekran geçişi
(function () {
  const term = document.getElementById("terminal-output");
  let idx = 0;
  let timestampShown = false;

  function typeLine(text, cb) {
    let pos = 0;
    const isAscii = text.includes("▄▄") || text.includes("██") || text.includes("▀▀");
    const speed = isAscii ? config.asciiSpeed : config.textSpeed;

    if (!timestampShown && !isAscii && !text.startsWith(">")) {
      const now = new Date().toLocaleString("tr-TR");
      term.innerHTML += `<span style='color: yellow;'>[${now}] ${text}</span>\n\n`;
      term.scrollTop = term.scrollHeight;
      playBip();
      timestampShown = true;
      if (cb) setTimeout(cb, config.postLineDelay);
      return;
    }

    if (isAscii) {
      const centeredAscii = `<pre style='margin: 0; padding-left: 60ch; font-family: inherit;'>${text}</pre>`;
      term.innerHTML += centeredAscii + "\n";
      term.scrollTop = term.scrollHeight;
      playBip();
      if (cb) setTimeout(cb, config.postLineDelay);
      return;
    }

    const iv = setInterval(() => {
      const char = text[pos++];
      term.innerHTML += char;
      term.scrollTop = term.scrollHeight;
      if (pos >= text.length) {
        clearInterval(iv);
        term.innerHTML += "\n\n";
        term.scrollTop = term.scrollHeight;
        playBip();
        if (cb) setTimeout(cb, config.postLineDelay);
      }
    }, speed);
  }

  function next() {
    if (idx < config.messages.length) {
      typeLine(config.messages[idx++], next);
    } else {
      countdown(config.countdownStart);
    }
  }

  function countdown(sec) {
    if (sec >= 0) {
      term.innerHTML += `Terminal başlatılıyor: ${sec}...\n`;
      term.scrollTop = term.scrollHeight;
      playBip();
      setTimeout(() => countdown(sec - 1), 1000);
    } else {
      term.innerHTML += "\n> [ENTER] tuşuna basılıyor...\n";
      term.scrollTop = term.scrollHeight;
      setTimeout(() => {
        window.location.href = "terminal.html";
      }, 2000);
    }
  }

  // Tuş engelleyici (devtools vs.)
  document.addEventListener("keydown", function (e) {
    if (
      ["F12"].includes(e.key) ||
      (e.ctrlKey && e.shiftKey && ["I", "C"].includes(e.key)) ||
      (e.ctrlKey && ["U"].includes(e.key))
    ) {
      e.preventDefault();
      alert("🛑 Bu işlem yetkilendirilmedi.");
    }
  });

  // Kullanıcı etkileşimiyle tam ekran başlatıcı
  function startFullscreenOnInteraction() {
    const el = document.documentElement;
    if (el.requestFullscreen) el.requestFullscreen();
    else if (el.webkitRequestFullscreen) el.webkitRequestFullscreen();
    else if (el.msRequestFullscreen) el.msRequestFullscreen();
  }
  document.addEventListener("click", startFullscreenOnInteraction, { once: true });
  document.addEventListener("keydown", startFullscreenOnInteraction, { once: true });

  // Başlat
  next();

  // Uyarı kaldırıcı
  setTimeout(() => {
    const alert = document.getElementById("alert-banner");
    if (alert) alert.remove();
  }, 2000);
})();
