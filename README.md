# Hacker Terminal Simülasyonu 🖥️

Gerçekçi bir hacker deneyimi sunan interaktif terminal simülasyonu. Kullanıcılar, çeşitli siber güvenlik görevlerini belirli bir süre içinde tamamlamaya çalışırken, veri sızıntılarını önlemeye çalışır.

## 🎯 Özellikler

- **7 Farklı Görev**: Her biri gerçek dünya senaryolarına dayalı
- **Süre Sınırı**: 10 dakika içinde tamamlanması gereken görevler
- **Veri Koruma**: 5 kritik veri türü (WhatsApp, Instagram, Galeri, Rehber, Banka)
- **İpucu Sistemi**: Her görev için kullanılabilir ipuçları
- **Gerçekçi Arayüz**: Terminal benzeri kullanıcı arayüzü
- **Özel Efektler**: Matrix tarzı animasyonlar ve terminal efektleri

## 🎮 Oynanış

1. Terminal ekranında verilen görevleri dikkatlice okuyun
2. Doğru komutları kullanarak görevleri tamamlayın
3. Gerektiğinde `ipucu` komutunu kullanın (Dikkat: Her 2 ipucu 1 veri kaybına neden olur)
4. Yanlış komutlardan kaçının (Her yanlış komut 1 veri sızıntısına neden olur)
5. Tüm görevleri veriler sızmadan ve süre dolmadan tamamlamaya çalışın

## ⌨️ Temel Komutlar

| Komut | Açıklama |
|-------|----------|
| `ipucu` | Mevcut görev için ipucu gösterir |
| `görevi tekrar et` | Aktif görevi tekrar görüntüler |
| `Tab` | Komut önerilerini listeler |
| `↑/↓` | Komut geçmişinde gezinir |
| `Ctrl + G` | Aktif görevi otomatik doldurur |

## 🛠️ Teknik Özellikler

- **Frontend**: HTML5, CSS3, JavaScript
- **Yazı Tipi**: Fira Code (monospace)
- **İkonlar**: Font Awesome
- **Özellikler**:
- Responsive tasarım
  - Otomatik komut tamamlama
  - Nano editör simülasyonu
  - Parola kırma animasyonu
  - Matrix arka plan efekti

## 📥 Kurulum

1. Repoyu klonlayın:
   ```bash
   git clone https://github.com/kullaniciadi/hacker-terminal.git
   ```
2. Proje dizinine gidin:
   ```bash
   cd hacker-terminal
   ```
3. `index.html` dosyasını modern bir web tarayıcısında açın
4. Tam ekran (F11) modunda oynamanız önerilir

## 📊 Oyun Mekanikleri

- **Süre**: 10 dakika
- **Başlangıç Veri Sayısı**: 5
- **Veri Kaybı Koşulları**:
  - Her yanlış komut: -1 veri
  - Her 2 ipucu kullanımı: -1 veri
- **Oyun Sonu Koşulları**:
  - Tüm verilerin sızması
  - Sürenin dolması
  - Tüm görevlerin başarıyla tamamlanması

## ⚠️ Yasal Uyarı

Bu simülasyon yalnızca eğitim amaçlıdır. Gerçek sistemler üzerinde izinsiz penetrasyon testleri veya sızma girişimleri yasalara aykırıdır.

## 🔄 Güncellemeler

- İpucu sistemi güncellendi (Her 2 ipucu kullanımı 1 veri sızıntısına neden olur)
- Ctrl + G ile görev otomatik doldurma özelliği eklendi
- 5. görev yeniden düzenlendi ve iyileştirildi
- Görev ilerleme çubuğu 0'dan başlayacak şekilde düzeltildi
