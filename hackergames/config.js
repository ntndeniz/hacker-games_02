function pad(line) {
  return line;
}

const config = {
  letters: "01",
  fontSize: 14,
  matrixInterval: 33,     // ms
  asciiSpeed: 2,          // çizim hızı (ASCII grafikler)
  textSpeed: 20,          // normal metin yazma hızı
  postLineDelay: 300,     // satır sonrası bekleme süresi (ms)
  countdownStart: 3,      // geri sayım başlangıcı
  messages: [
    pad(`▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄▄\n█░░░░░░░░░░░░ SİSTEMİN ░░░░░░░░░░░░░░█\n█░░░░░░░░░░ ELE GEÇİRİLDİ ░░░░░░░░░░░█\n▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀▀`),
    "→ Bağlantı kuruldu...",
    "🛑 GÜVENLİK DUVARI AŞILDI – Sistem tehlikede!",
    "🔥Hedefe erişim sağlandı!",
    "• Kullanıcı IP: 10.16.0.88",
    "→ Profil: Arif Yarencik",
    "→ Veriler çekiliyor... [tamamlandı]",
    "• Kamera: erişim sağlandı (arka plan izleniyor)",
    "• Mikrofon: kapalı, son 5 saniye dinlendi.",
    "• SSH bağlantısı doğrulandı...", 
    "→Dosyalar .enc formatında şifrelendi.",
    "→Sistemini ele geçirdim! Tüm bilgilerinin yayınlanmasını istemiyorsan sana verdiğim tüm görevleri zamanında tamamla!",
  ]
};
