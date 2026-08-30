# CS TAKİP — Mobil Offline Sürüm

Bu sürüm GitHub Pages üzerinde **PWA** olarak çalışır.

## Özellik
- iPhone/Android ana ekrana uygulama olarak eklenebilir.
- İlk çevrimiçi açılıştan sonra uygulama kabuğu cihazda önbelleğe alınır.
- Daha önce kullanılan CDN kütüphaneleri de Service Worker tarafından önbelleğe alınır.
- Site, iş, takvim ve kayıt verileri tarayıcıdaki yerel depolama/IndexedDB mekanizmalarıyla tutulur.
- İnternet kesildiğinde kayıtlı yerel verilerle çalışmaya devam eder.

## GitHub Pages
Dosyaları `cs-takip` deposunun köküne yükleyin:
- index.html
- manifest.json
- sw.js
- icon.svg

GitHub Pages adresi:
https://cihansarper1-a11y.github.io/cs-takip/

## iPhone
1. Chrome veya Safari ile siteyi bir kez çevrimiçi açın.
2. Tarayıcı menüsünden **Ana Ekrana Ekle** seçeneğini kullanın.
3. Ana ekrandaki CS TAKİP simgesinden açın.
4. Daha sonra internet olmadan kullanılabilir.

Not: İlk kurulum ve ilk kütüphane önbelleklemesi için en az bir kez internet gerekir.
