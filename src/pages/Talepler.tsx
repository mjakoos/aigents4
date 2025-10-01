import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, Mail, Phone, MessageSquare, Send, Clock, CheckCircle, FileText, Zap, Users, Target } from "lucide-react";
import { Link } from "react-router-dom";

export default function Talepler() {
  const [isLoading, setIsLoading] = useState(true);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    service: '',
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
    // Form submission logic would go here
    setIsSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: '',
        budget: ''
      });
    }, 3000);
  };

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Talepler Yükleniyor...</p>
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
              <Link to="/ai-chat-agent" className="hover:text-cyan-400 transition-colors">AI Chat Agent</Link>
              <Link to="/" className="hover:text-cyan-400 transition-colors">AI Call Agent</Link>
              <Link to="/ai-studio" className="hover:text-cyan-400 transition-colors">AI Studio</Link>
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">Talepler</Badge>
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
                    <Link to="/ai-chat-agent" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Chat Agent</Link>
                    <Link to="/" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Call Agent</Link>
                    <Link to="/ai-studio" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Studio</Link>
                    <Link to="/talepler" className="text-cyan-400 font-medium py-2 px-4 rounded-lg bg-cyan-500/10">Talepler</Link>
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
            Talepler & İletişim
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
            İşletmenizi<br />
            Dönüştürmeye<br />
            Hazır mısınız?
          </h1>

          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            AI çözümlerimizle ilgili sorularınız mı var? Özel taleplerinizi iletin,
            uzman ekibimizle ücretsiz konsültasyon alın.
          </p>
        </div>
      </section>

      {/* Quick Contact Section */}
      <section className="py-8 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-4 mb-12">
            <Card className="bg-slate-800/50 border-slate-700 p-4 text-center hover:bg-slate-700/50 transition-colors">
              <Phone className="w-10 h-10 text-cyan-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Hızlı Görüşme</h3>
              <p className="text-gray-300 text-sm mb-3">Direkt uzmanlarımızla konuşun</p>
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-sm">
                +90 535 640 90 17
              </Button>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-4 text-center hover:bg-slate-700/50 transition-colors">
              <Mail className="w-10 h-10 text-green-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">E-posta Gönder</h3>
              <p className="text-gray-300 text-sm mb-3">Detaylı bilgi için yazın</p>
              <Button className="bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-sm">
                hello@aigents.com
              </Button>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-4 text-center hover:bg-slate-700/50 transition-colors">
              <MessageSquare className="w-10 h-10 text-purple-400 mx-auto mb-3" />
              <h3 className="text-lg font-semibold mb-2">Canlı Destek</h3>
              <p className="text-gray-300 text-sm mb-3">Anında yardım alın</p>
              <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-sm">
                Chat Başlat
              </Button>
            </Card>
          </div>
        </div>
      </section>

      {/* Main Contact Form */}
      <section className="py-12 px-6">
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
                      <option value="">Seçiniz...</option>
                      <option value="ai-call-agent">AI Call Agent</option>
                      <option value="ai-chat-agent">AI Chat Agent</option>
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
                    className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-8 py-3 rounded-full"
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

      {/* Process Section */}
      <section className="py-12 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Talep Sürecimiz
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Talebinizden projenizin teslimına kadar olan süreci şeffaf bir şekilde yönetiyoruz
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">1. Talep Alımı</h3>
              <p className="text-gray-300 text-sm">
                Formunuzu inceleyip 24 saat içinde ilk değerlendirmeyi yapıyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">2. Keşif Görüşmesi</h3>
              <p className="text-gray-300 text-sm">
                Uzman ekibimizle detaylı görüşme yaparak ihtiyaçlarınızı net şekilde belirliyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">3. Özel Teklif</h3>
              <p className="text-gray-300 text-sm">
                Projenize özel, detaylı teklifimizi 48 saat içinde sunuyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">4. Proje Başlatma</h3>
              <p className="text-gray-300 text-sm">
                Teklif onaylandıktan sonra projenizi belirlenen sürede teslim ediyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto max-w-3xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Sık Sorulan Sorular
            </h2>
            <p className="text-gray-300">
              Talep süreci hakkında merak ettiğiniz konular
            </p>
          </div>

          <div className="space-y-4">
            <Card className="bg-slate-800/50 border-slate-700 p-4">
              <h3 className="text-lg font-semibold mb-2">Talep gönderdikten sonra ne kadar sürede dönüş alırım?</h3>
              <p className="text-gray-300 text-sm">
                Taleplerimizi genellikle 24 saat içinde değerlendirip size dönüş yapıyoruz.
                Acil durumlar için telefon numaramızdan direkt ulaşabilirsiniz.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-4">
              <h3 className="text-lg font-semibold mb-2">Konsültasyon ücretsiz mi?</h3>
              <p className="text-gray-300 text-sm">
                Evet, ilk konsültasyon tamamen ücretsizdir. Projenizin kapsamını belirleyip
                size en uygun çözümü öneriyoruz.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-4">
              <h3 className="text-lg font-semibold mb-2">Küçük bütçeli projeler için de hizmet veriyor musunuz?</h3>
              <p className="text-gray-300 text-sm">
                Tabii ki! Her bütçeye uygun çözümlerimiz mevcuttur.
                İhtiyaçlarınıza göre en uygun paketi birlikte belirleyebiliriz.
              </p>
            </Card>

            <Card className="bg-slate-800/50 border-slate-700 p-4">
              <h3 className="text-lg font-semibold mb-2">Proje sonrası destek sağlıyor musunuz?</h3>
              <p className="text-gray-300 text-sm">
                Evet, tüm projelerimizde garanti süresi ve sürekli destek hizmeti sağlıyoruz.
                Ayrıca sistem güncellemeleri ve iyileştirmeler de dahildir.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Info */}
      <section className="py-12 px-6 bg-slate-900/50">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">İletişim Bilgileri</h2>

          <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div>
              <Phone className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Telefon</h3>
              <p className="text-gray-300">+90 555 123 45 67</p>
              <p className="text-sm text-gray-400">Pazartesi - Cuma: 09:00 - 18:00</p>
            </div>

            <div>
              <Mail className="w-8 h-8 text-green-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">E-posta</h3>
              <p className="text-gray-300">hello@aigents.com</p>
              <p className="text-sm text-gray-400">24 saat içinde yanıt</p>
            </div>

            <div>
              <Clock className="w-8 h-8 text-purple-400 mx-auto mb-3" />
              <h3 className="font-semibold mb-2">Çalışma Saatleri</h3>
              <p className="text-gray-300">Hafta içi: 09:00 - 18:00</p>
              <p className="text-sm text-gray-400">Hafta sonu: Acil durumlar</p>
            </div>
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
                <div>Konsültasyon</div>
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
