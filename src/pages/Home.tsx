import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, Phone, Play, ArrowRight, BarChart3, Users, Globe, MessageCircle, Zap, Clock, Shield, Headphones } from 'lucide-react'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => setIsLoaded(true), 50)
    return () => clearTimeout(timer)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    element?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div className={`min-h-screen bg-slate-950 transition-opacity duration-1000 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}>
      {/* Header */}
      <header className="border-b border-white/10 backdrop-blur-md sticky top-0 z-50 transition-all duration-300">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center space-x-2 group cursor-pointer">
            <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
              <span className="text-white font-bold text-sm">AI</span>
            </div>
            <span className="text-xl font-bold text-white transition-colors duration-300 group-hover:text-cyan-400">AIgents</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Link to="/agency" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">Agency</Link>
            <Link to="/ai-chat-agent" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">AI Chat Agent</Link>
            <Link to="/" className="text-cyan-400 font-medium">AI Call Agent</Link>
            <Link to="/ai-studio" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">AI Studio</Link>
            <Link to="/talepler" className="text-gray-300 hover:text-cyan-400 transition-all duration-300">Talepler</Link>
          </nav>

          <div className="flex items-center space-x-4">
            <Button variant="outline" className="hidden md:flex border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10">
              Müşteri Paneli
            </Button>

            {/* Mobile Menu */}
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="md:hidden">
                  <Menu className="h-6 w-6" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="bg-slate-950 border-white/10">
                <nav className="flex flex-col space-y-4 mt-8">
                  <Link to="/agency" className="text-gray-300 hover:text-cyan-400 py-2 px-4 rounded-lg">Agency</Link>
                  <Link to="/ai-chat-agent" className="text-gray-300 hover:text-cyan-400 py-2 px-4 rounded-lg">AI Chat Agent</Link>
                  <Link to="/" className="text-cyan-400 font-medium py-2 px-4 rounded-lg bg-cyan-500/10">AI Call Agent</Link>
                  <Link to="/ai-studio" className="text-gray-300 hover:text-cyan-400 py-2 px-4 rounded-lg">AI Studio</Link>
                  <Link to="/talepler" className="text-gray-300 hover:text-cyan-400 py-2 px-4 rounded-lg">Talepler</Link>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-12 px-4 text-center relative" id="hero">
          <div className="container mx-auto relative z-10">
            <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
              ⚡ AI Call Agent
            </Badge>

            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              <span className="gradient-text">Yapay Zeka ile</span><br />
              <span className="text-white">Kurumsal Telefon Görüşmeleri</span>
            </h1>

            <p className="text-lg text-gray-300 mb-6 max-w-3xl mx-auto">
              AI destekli Call Agent, arayan müşterilerle sizin adınıza konuşur.
              Kampanya anlatır, randevu alır, 7/24 işletmenizi temsil eder.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 justify-center mb-8">
              <Button onClick={() => scrollToSection('pricing')} className="btn-primary">
                <Play className="mr-2 h-5 w-5" />
                Demo Talep Edin
              </Button>
              <Button variant="outline" className="btn-secondary">
                Görüşme Planlayın
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>

            {/* Compact Dashboard */}
            <div className="max-w-3xl mx-auto">
              <Card className="glass-card p-4 backdrop-blur-md">
                <div className="bg-slate-900/50 rounded-lg p-4 border border-white/10">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <div className="w-8 h-8 bg-cyan-500 rounded-lg flex items-center justify-center">
                        <Phone className="w-4 h-4 text-white" />
                      </div>
                      <div>
                        <h3 className="text-white font-semibold text-sm">AI AGENT</h3>
                        <p className="text-gray-400 text-xs">7/24 Aktif</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-green-400 text-xs">Çevrimiçi</span>
                    </div>
                  </div>
                  <div className="bg-slate-800/50 rounded-lg p-3">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-blue-500/20 rounded-full flex items-center justify-center">
                          <span className="text-blue-400 text-xs font-bold">JL</span>
                        </div>
                        <div>
                          <p className="text-white text-xs">Merhaba, size nasıl yardımcı olabilirim?</p>
                          <p className="text-gray-400 text-xs">Şimdi</p>
                        </div>
                      </div>
                      <Button size="sm" className="bg-green-500 hover:bg-green-600 h-6 text-xs">
                        Yanıtla
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* Partner Logos */}
        <section className="py-6 px-4 border-b border-white/10">
          <div className="container mx-auto">
            <p className="text-center text-cyan-400 mb-4 text-sm">Güçlü Entegrasyonlar</p>
            <div className="flex justify-center items-center gap-6">
              {['make', 'İkas', 'ManyChat', 'shopify'].map((brand) => (
                <div key={brand} className="bg-white/10 px-4 py-2 rounded-lg text-sm">
                  <span className="text-white font-semibold">{brand}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-12 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3">AI Call Agent Özellikleri</h2>
              <p className="text-gray-300 max-w-2xl mx-auto text-sm">
                Yapay zeka destekli çağrı sistemi ile müşteri hizmetlerinizi 7/24 aktif tutun
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { icon: <Phone className="h-6 w-6" />, title: "Akıllı Çağrı Karşılama", desc: "Aramaları karşılar, dinler, doğru yönlendirir" },
                { icon: <Zap className="h-6 w-6" />, title: "Kampanya Bilgilendirme", desc: "Güncel kampanyaları otomatik anlatır" },
                { icon: <BarChart3 className="h-6 w-6" />, title: "CRM Entegrasyonu", desc: "Müşteri bilgilerini otomatik işler" },
                { icon: <Globe className="h-6 w-6" />, title: "Çok Dilli Destek", desc: "Türkçe, İngilizce ve diğer dillerde konuşur" },
                { icon: <Clock className="h-6 w-6" />, title: "7/24 Çalışma", desc: "Kesintisiz müşteri hizmeti sağlar" },
                { icon: <Shield className="h-6 w-6" />, title: "Güvenli Kayıt", desc: "Tüm görüşmeleri güvenli şekilde kaydeder" }
              ].map((feature, i) => (
                <Card key={i} className="glass-card p-4 hover:bg-white/10 transition-colors">
                  <div className="text-cyan-400 mb-2">{feature.icon}</div>
                  <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                  <p className="text-gray-300 text-sm">{feature.desc}</p>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Pricing Section */}
        <section className="py-12 px-4 bg-slate-900/30" id="pricing">
          <div className="container mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3">Fiyatlandırma Planları</h2>
              <p className="text-gray-300 mb-4">Plan seçimi ile 24 saat içinde kullanmaya başlayın</p>
            </div>

            <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {/* Basic Plan */}
              <Card className="glass-card p-6 hover:bg-white/10 transition-all">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">TEMEL PLAN</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-white">$749</span>
                    <span className="text-gray-400 text-sm">/ay</span>
                  </div>
                  <p className="text-gray-300 text-sm">Küçük işletmeler için ideal</p>
                </div>
                <div className="space-y-2 mb-6">
                  {["1 Sesli Agent", "Temel çağrı karşılama", "Türkçe dil desteği", "7/24 çalışma"].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full btn-secondary text-sm">Satış Ekibi ile İletişime Geç</Button>
              </Card>

              {/* Standard Plan */}
              <Card className="glass-card p-6 border-cyan-500/50 hover:bg-white/10 transition-all relative">
                <Badge className="absolute -top-2 left-1/2 transform -translate-x-1/2 bg-cyan-500 text-white text-xs">
                  Popüler ⭐
                </Badge>
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">STANDART PLAN</h3>
                  <div className="mb-2">
                    <span className="text-3xl font-bold text-white">$949</span>
                    <span className="text-gray-400 text-sm">/ay</span>
                  </div>
                  <p className="text-gray-300 text-sm">Orta ölçekli işletmeler</p>
                </div>
                <div className="space-y-2 mb-6">
                  {["3 Sesli Agent", "Çok dilli destek", "Kampanya bilgilendirme", "CRM entegrasyonu"].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full btn-primary text-sm">Satış Ekibi ile İletişime Geç</Button>
              </Card>

              {/* Custom Plan */}
              <Card className="glass-card p-6 hover:bg-white/10 transition-all">
                <div className="mb-4">
                  <h3 className="text-lg font-semibold text-white mb-1">ÖZEL ÇÖZÜM</h3>
                  <div className="mb-2">
                    <span className="text-2xl font-bold text-white">Teklif Alın</span>
                  </div>
                  <p className="text-gray-300 text-sm">Büyük işletmeler için</p>
                </div>
                <div className="space-y-2 mb-6">
                  {["Çoklu Agent", "Özel diyalog akışı", "AI konuşma analizi", "Premium destek"].map((feature) => (
                    <div key={feature} className="flex items-center space-x-2">
                      <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full"></div>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full btn-secondary text-sm">Satış Ekibi ile İletişime Geç</Button>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-12 px-4">
          <div className="container mx-auto max-w-3xl">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-3">Sık Sorulan Sorular</h2>
            </div>

            <Accordion type="single" collapsible className="space-y-3">
              {[
                {
                  question: "AIgents Call Agent nasıl çalışır?",
                  answer: "Call Agent, arayan kişileri sizin adınıza karşılayan yapay zeka sesli asistanıdır. 7/24 aktif çalışır."
                },
                {
                  question: "Hangi dillerde konuşabilir?",
                  answer: "Türkçe, İngilizce, Almanca gibi birçok dili destekler. Müşteriyle kendi dilinde iletişim kurar."
                },
                {
                  question: "Çağrılar kayıt altına alınır mı?",
                  answer: "Evet, tüm çağrılar güvenli şekilde kaydedilir ve yönetim panelinden dinlenebilir."
                }
              ].map((faq, i) => (
                <AccordionItem key={i} value={`item-${i}`} className="glass-card border border-white/10 rounded-lg px-4">
                  <AccordionTrigger className="text-white text-left hover:text-cyan-400 text-sm">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-gray-300 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </section>

        {/* Final CTA */}
        <section className="py-12 px-4 text-center bg-slate-900/30">
          <div className="container mx-auto max-w-3xl">
            <h2 className="text-3xl font-bold text-white mb-4">
              İşinizi AI ile Dönüştürmeye Hazır mısınız?
            </h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <Button className="btn-primary">
                <Users className="mr-2 h-5 w-5" />
                Ücretsiz Randevu
              </Button>
              <Button variant="outline" className="btn-secondary">
                İletişime Geç
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-4">
        <div className="container mx-auto">
          <div className="flex flex-col lg:flex-row items-center justify-between mb-6">
            <div className="flex items-center space-x-2 mb-4 lg:mb-0">
              <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">AI</span>
              </div>
              <span className="text-xl font-bold text-white">AIgents</span>
            </div>
            <nav className="flex flex-wrap justify-center gap-4 text-gray-300 text-sm">
              {['Koşullar', 'Gizlilik', 'Blog', 'İletişim'].map((link) => (
                <a key={link} href="#" className="hover:text-cyan-400">{link}</a>
              ))}
            </nav>
          </div>
          <div className="text-center text-gray-400 text-sm">
            <p>© 2024 AIgents. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
