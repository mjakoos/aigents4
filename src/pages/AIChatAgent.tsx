import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, MessageCircle, Users, BarChart3, Globe, Bot, Brain, Send, Clock, CheckCircle, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIChatAgent() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: 'ai-chat-agent',
    message: '',
    budget: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);

    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: 'ai-chat-agent',
        message: '',
        budget: ''
      });
    }, 3000);
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">AI Chat Agent Yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
        <div className="container mx-auto px-6 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-xl">AI</span>
              </div>
              <span className="text-2xl font-bold">AIgents</span>
            </div>
            <nav className="hidden md:flex items-center space-x-6">
              <Link to="/agency" className="hover:text-cyan-400 transition-colors">Agency</Link>
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">AI Chat Agent</Badge>
              <Link to="/" className="hover:text-cyan-400 transition-colors">AI Call Agent</Link>
              <Link to="/ai-studio" className="hover:text-cyan-400 transition-colors">AI Studio</Link>
              <Link to="/talepler" className="hover:text-cyan-400 transition-colors">Talepler</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Müşteri Paneli
              </Button>

              <Sheet>
                <SheetTrigger asChild>
                  <Button variant="ghost" size="icon" className="md:hidden hover:bg-white/10 transition-all duration-300">
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent side="right" className="bg-slate-900 border-white/10">
                  <nav className="flex flex-col space-y-4 mt-8">
                    <Link to="/agency" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">Agency</Link>
                    <Link to="/ai-chat-agent" className="text-cyan-400 font-medium py-2 px-4 rounded-lg bg-cyan-500/10">AI Chat Agent</Link>
                    <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Call Agent</Link>
                    <Link to="/ai-studio" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Studio</Link>
                    <Link to="/talepler" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">Talepler</Link>
                    <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 mt-4">
                      Müşteri Paneli
                    </Button>
                  </nav>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 relative">
        <div className="container mx-auto text-center relative">
          <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
            💬 AI Chat Agent
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
            Akıllı Sohbet Botları ile<br />
            Müşteri Deneyimini<br />
            Dönüştürün
          </h1>

          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            7/24 çalışan AI destekli chat botlarımızla web sitenizde anlık müşteri desteği sağlayın.
            Ziyaretçileri müşteriye dönüştürün, sorularını anında yanıtlayın.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              onClick={() => scrollToSection('demo')}
              className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-full"
            >
              Demo Talep Edin
              <MessageCircle className="w-5 h-5 ml-2" />
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-full">
              Görüşme Planlayın
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Chat Demo Section */}
      <section id="demo" className="py-12 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Canlı Chat Demo</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              AI Chat Agent'ın nasıl çalıştığını görün. Aşağıdaki demo ile deneyimleyin.
            </p>
          </div>

          <div className="max-w-2xl mx-auto">
            <Card className="bg-slate-800/50 border-slate-700">
              <CardHeader className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-t-lg py-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AIgents Chat Assistant</CardTitle>
                    <p className="text-sm opacity-90">Çevrimiçi - Hemen yanıtlıyor</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="p-4 max-h-80 overflow-y-auto">
                <div className="space-y-3">
                  <div className="flex justify-start">
                    <div className="bg-slate-700 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Merhaba! AIgents Chat Assistant'a hoş geldiniz. Size nasıl yardımcı olabilirim?</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-cyan-500 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-white">AI Chat Agent hakkında bilgi alabilir miyim?</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-slate-700 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Tabii ki! AI Chat Agent, 7/24 çalışan akıllı sohbet botudur. Müşterilerinizin sorularını anında yanıtlar, lead toplar ve satış sürecini hızlandırır.</p>
                    </div>
                  </div>

                  <div className="flex justify-end">
                    <div className="bg-cyan-500 rounded-lg p-3 max-w-xs">
                      <p className="text-sm text-white">Fiyatlandırma nasıl?</p>
                    </div>
                  </div>

                  <div className="flex justify-start">
                    <div className="bg-slate-700 rounded-lg p-3 max-w-xs">
                      <p className="text-sm">Fiyatlandırmamız işletmenizin ihtiyaçlarına göre değişir. Temel paket 299 TL/ay'dan başlar.</p>
                    </div>
                  </div>
                </div>
              </CardContent>
              <div className="p-3 border-t border-slate-700">
                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Mesajınızı yazın..."
                    className="flex-1 bg-slate-700 border border-slate-600 rounded-lg px-3 py-2 text-white text-sm"
                  />
                  <Button className="bg-cyan-500 hover:bg-cyan-600 p-2">
                    <Send className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-12 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Chat Agent Özellikleri</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Gelişmiş yapay zeka teknolojisiyle donatılmış chat botumuzun sunduğu özellikler
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-slate-800/50 border-slate-700 p-4 hover:bg-slate-700/50 transition-colors">
              <MessageCircle className="w-10 h-10 text-cyan-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Doğal Konuşma</h3>
              <p className="text-gray-300 text-sm">
                GPT teknolojisi ile insan benzeri doğal konuşmalar yaparak müşterilerinizle
                etkileşimde bulunur.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-4 hover:bg-slate-700/50 transition-colors">
              <Clock className="w-10 h-10 text-green-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">7/24 Hizmet</h3>
              <p className="text-gray-300 text-sm">
                Hiç durmadan çalışır. Gece gündüz müşterilerinizin sorularını yanıtlar ve
                destek sağlar.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-4 hover:bg-slate-700/50 transition-colors">
              <Brain className="w-10 h-10 text-purple-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Öğrenen Sistem</h3>
              <p className="text-gray-300 text-sm">
                Her etkileşimden öğrenir ve zamanla daha iyi yanıtlar vermeye başlar.
                Sürekli kendini geliştirir.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-4 hover:bg-slate-700/50 transition-colors">
              <Globe className="w-10 h-10 text-blue-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Çoklu Dil</h3>
              <p className="text-gray-300 text-sm">
                Türkçe, İngilizce ve diğer dillerde destek sağlar. Global müşterilere
                hizmet verebilirsiniz.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-4 hover:bg-slate-700/50 transition-colors">
              <Users className="w-10 h-10 text-yellow-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Lead Toplama</h3>
              <p className="text-gray-300 text-sm">
                Ziyaretçilerin iletişim bilgilerini toplar ve potansiyel müşterileri
                satış ekibinize yönlendirir.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-4 hover:bg-slate-700/50 transition-colors">
              <BarChart3 className="w-10 h-10 text-red-400 mb-3" />
              <h3 className="text-lg font-bold mb-2">Detaylı Analitik</h3>
              <p className="text-gray-300 text-sm">
                Müşteri etkileşimlerini analiz eder ve size detaylı raporlar sunar.
                İyileştirme fırsatlarını görün.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 px-6 bg-slate-900/50">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Özel Talep Formu
            </h2>
            <p className="text-gray-300">
              Projenizin detaylarını paylaşın, size özel çözümünüzü hazırlayalım
            </p>
          </div>

          {isSubmitted ? (
            <Card className="bg-green-500/10 border-green-500/30 p-8 text-center">
              <CheckCircle className="w-12 h-12 text-green-400 mx-auto mb-4" />
              <h3 className="text-xl font-bold text-green-400 mb-3">Talebiniz Alındı!</h3>
              <p className="text-gray-300">
                Uzman ekibimiz en kısa sürede sizinle iletişime geçecek.
                Genellikle 24 saat içinde dönüş yapıyoruz.
              </p>
            </Card>
          ) : (
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Ad Soyad *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white text-sm"
                      placeholder="Adınız ve soyadınız"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">E-posta *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white text-sm"
                      placeholder="ornek@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefon</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white text-sm"
                      placeholder="+90 555 123 45 67"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">İlgilendiğiniz Hizmet *</label>
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white text-sm"
                    >
                      <option value="ai-chat-agent">AI Chat Agent</option>
                      <option value="ai-call-agent">AI Call Agent</option>
                      <option value="ai-studio">AI Studio</option>
                      <option value="custom-ai">Özel AI Çözümü</option>
                      <option value="consultation">Konsültasyon</option>
                      <option value="other">Diğer</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Mesajınız *</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded-lg focus:ring-2 focus:ring-cyan-400 focus:border-transparent text-white resize-none text-sm"
                    placeholder="Projeniz hakkında detayları, beklentilerinizi ve özel gereksinimlerinizi paylaşın..."
                  />
                </div>

                <div className="text-center">
                  <Button
                    type="submit"
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 px-8 py-3 rounded-full"
                  >
                    Talep Gönder
                    <Send className="w-4 h-4 ml-2" />
                  </Button>
                  <p className="text-xs text-gray-400 mt-3">
                    * Zorunlu alanlar. Talebiniz gizli tutulur ve 3. şahıslarla paylaşılmaz.
                  </p>
                </div>
              </form>
            </Card>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 text-3xl font-bold mb-4">
            <span>Müşteri Deneyimini</span>
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <span>AI ile Dönüştürün</span>
          </div>

          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            Hemen başlayın ve AI Chat Agent ile müşteri memnuniyetinizi artırın
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-full">
              Demo Talep Edin
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-full">
              Görüşme Planlayın
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 py-8 px-6 border-t border-slate-800">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 mb-6">
            <div>
              <div className="flex items-center space-x-2 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center">
                  <span className="text-white font-bold">AI</span>
                </div>
                <span className="text-xl font-bold">AIgents</span>
              </div>
              <p className="text-gray-400 text-sm">
                Yapay zeka destekli çözümlerle işletmenizi geleceğe taşıyın.
              </p>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Hizmetler</h3>
              <div className="space-y-1 text-gray-400 text-sm">
                <div>AI Call Agent</div>
                <div>AI Chat Agent</div>
                <div>AI Studio</div>
                <div>Agency</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Şirket</h3>
              <div className="space-y-1 text-gray-400 text-sm">
                <div>Hakkımızda</div>
                <div>İletişim</div>
                <div>Blog</div>
                <div>Kariyer</div>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-3">Destek</h3>
              <div className="space-y-1 text-gray-400 text-sm">
                <div>Yardım Merkezi</div>
                <div>Gizlilik</div>
                <div>Şartlar</div>
                <div>SSS</div>
              </div>
            </div>
          </div>

          <div className="border-t border-slate-800 pt-6 text-center text-gray-400 text-sm">
            <p>&copy; 2024 AIgents. Tüm hakları saklıdır.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
