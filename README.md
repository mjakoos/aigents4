# AIgents - Bolt.new Version

Bu proje, bolt.new platformu için optimize edilmiş AIgents web sitesidir. Vite + React + TypeScript + Tailwind CSS kullanarak geliştirilmiştir.

## 🚀 Özellikler

- ⚡ **Vite** - Hızlı geliştirme ortamı
- ⚛️ **React 18** - Modern React özellikleri
- 🔷 **TypeScript** - Tip güvenliği
- 🎨 **Tailwind CSS** - Utility-first CSS framework
- 🧩 **shadcn/ui** - Modern UI bileşenleri
- 📱 **Responsive Design** - Tüm cihazlara uyumlu
- 🎭 **Animations** - Smooth geçişler ve animasyonlar
- 🔄 **React Router** - SPA routing

## 📦 Kurulum

```bash
# Bağımlılıkları yükle
npm install
# veya
yarn install

# Geliştirme sunucusunu başlat
npm run dev
# veya
yarn dev

# Production build
npm run build
# veya
yarn build
```

## 📁 Proje Yapısı

```
bolt-aigents/
├── public/                 # Statik dosyalar
├── src/
│   ├── components/        # React bileşenleri
│   │   └── ui/           # shadcn/ui bileşenleri
│   ├── lib/              # Utility fonksiyonları
│   ├── pages/            # Sayfa bileşenleri
│   ├── App.tsx           # Ana uygulama bileşeni
│   ├── main.tsx          # Uygulama giriş noktası
│   └── index.css         # Global stiller
├── package.json
├── vite.config.ts        # Vite konfigürasyonu
├── tailwind.config.js    # Tailwind CSS konfigürasyonu
└── tsconfig.json         # TypeScript konfigürasyonu
```

## 🎯 Sayfalar

- **Ana Sayfa (/)** - AI Call Agent tanıtımı
- **Agency (/agency)** - Kurumsal hizmetler
- **AI Chat Agent (/ai-chat-agent)** - Sohbet botu çözümleri
- **AI Studio (/ai-studio)** - Görsel ve video prodüksiyon
- **Talepler (/talepler)** - İletişim ve talep formu

## 🔧 Kullanılan Teknolojiler

- **Framework:** React 18.2.0
- **Build Tool:** Vite 4.4.5
- **Language:** TypeScript 5.0.2
- **Styling:** Tailwind CSS 3.3.3
- **UI Components:** Radix UI + shadcn/ui
- **Icons:** Lucide React
- **Routing:** React Router DOM 6.8.1

## ⚙️ Konfigürasyon

### Tailwind CSS
Özel animasyonlar ve tema renkleri ile konfigüre edilmiştir:
- Gradient text utility
- Glass effect kartlar
- Custom animations (fade-in-up, float, pulse-glow)
- Dark mode optimizasyonu

### TypeScript
Strict mode aktif, path mapping ile `@/*` alias'ları destekleniyor.

### Vite
React plugin ve path alias'ları ile konfigüre edilmiş.

## 🎨 Tasarım Sistemi

- **Ana Renkler:** Cyan, Blue, Purple gradientleri
- **Typography:** Modern, bold fontlar
- **Components:** Glassmorphism efektli kartlar
- **Animations:** Smooth hover efektleri ve page transitions
- **Responsive:** Mobile-first yaklaşım

## 📱 Mobile Optimizasyonu

- Responsive grid sistemler
- Mobile navigation menu
- Touch-friendly button sizes
- Optimized loading states

## 🚀 Deployment

Bu proje bolt.new üzerinde çalışacak şekilde optimize edilmiştir. Vite'ın hızlı build süreci ve hot reload özelliği ile geliştirme deneyimi maksimize edilmiştir.

## 📄 Lisans

Bu proje AIgents şirketi tarafından geliştirilmiştir.
