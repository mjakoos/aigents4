import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, ArrowRight, Users, Target, Zap, Award, CheckCircle, Globe, Lightbulb, Rocket, TrendingUp, Shield } from "lucide-react";
import { Link } from "react-router-dom";

export default function Agency() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Agency Yükleniyor...</p>
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
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">Agency</Badge>
              <Link to="/ai-chat-agent" className="hover:text-cyan-400 transition-colors">AI Chat Agent</Link>
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
                    <Link to="/agency" className="text-cyan-400 font-medium py-2 px-4 rounded-lg bg-cyan-500/10">Agency</Link>
                    <Link to="/ai-chat-agent" className="text-gray-300 hover:text-cyan-400 transition-colors duration-300 py-2 px-4 rounded-lg hover:bg-white/5">AI Chat Agent</Link>
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
          <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
            AI Agency
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
            Yapay Zeka ile<br />
            İşletmenizi<br />
            Geleceğe Taşıyoruz
          </h1>

          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            AI destekli çözümlerle müşteri deneyimini geliştiriyoruz. Call Agent, Chat Agent ve AI Studio
            hizmetlerimizle işletmenizin dijital dönüşümünde yanınızdayız.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 justify-center">
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

      {/* Stats Section */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-4 gap-6 text-center">
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-cyan-400 mb-2">500+</div>
              <div className="text-gray-300 text-sm">Başarılı Proje</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-green-400 mb-2">98%</div>
              <div className="text-gray-300 text-sm">Müşteri Memnuniyeti</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-purple-400 mb-2">24/7</div>
              <div className="text-gray-300 text-sm">AI Destek</div>
            </div>
            <div className="bg-slate-800/50 rounded-xl p-6 border border-slate-700">
              <div className="text-3xl font-bold text-yellow-400 mb-2">150+</div>
              <div className="text-gray-300 text-sm">Mutlu Müşteri</div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">AI Çözümlerimiz</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              İşletmenizin ihtiyaçlarına özel tasarlanmış yapay zeka çözümleriyle
              müşteri deneyimini yeniden tanımlıyoruz.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* AI Call Agent */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mb-3">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">AI Call Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">
                  Kurumsal düzeyde telefon görüşmeleri yapan AI asistanı. Müşterilerinizle 7/24
                  profesyonel iletişim kurarak işletmenizi temsil eder.
                </p>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    <span className="text-xs">Doğal konuşma yeteneği</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    <span className="text-xs">Randevu yönetimi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-cyan-400" />
                    <span className="text-xs">Müşteri bilgi toplama</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-sm">
                  Detayları İncele
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* AI Chat Agent */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mb-3">
                  <Target className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">AI Chat Agent</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">
                  Akıllı sohbet botları ile web sitenizde anlık müşteri desteği sağlayın.
                  Ziyaretçileri müşteriye dönüştürün.
                </p>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-xs">Anlık yanıt verme</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-xs">Çoklu dil desteği</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-green-400" />
                    <span className="text-xs">Lead toplama</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-green-500 to-teal-500 hover:from-green-600 hover:to-teal-600 text-sm">
                  Detayları İncele
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>

            {/* AI Studio */}
            <Card className="bg-slate-800/50 border-slate-700 hover:bg-slate-700/50 transition-all duration-300 group">
              <CardHeader className="pb-4">
                <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mb-3">
                  <Zap className="w-6 h-6 text-white" />
                </div>
                <CardTitle className="text-xl">AI Studio</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-300 mb-4 text-sm">
                  Yapay zeka ile yaratıcı içerik üretimi. Markanıza özel görseller,
                  videolar ve kampanyalar oluşturun.
                </p>
                <ul className="space-y-1 mb-4">
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-purple-400" />
                    <span className="text-xs">AI görsel üretimi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-purple-400" />
                    <span className="text-xs">Video prodüksiyon</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <CheckCircle className="w-3 h-3 text-purple-400" />
                    <span className="text-xs">Reklam kreatifleri</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-sm">
                  Detayları İncele
                  <ArrowRight className="w-3 h-3 ml-2" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-12 px-6">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Neden AIgents?</h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Yapay zeka teknolojilerinde uzman ekibimiz ve kanıtlanmış çözümlerimizle
              işletmenizin dijital dönüşümünde güvenilir partneriniziz.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Award className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Uzman Ekip</h3>
              <p className="text-gray-300 text-sm">
                Yapay zeka ve teknoloji alanında uzman mühendis ve danışmanlarımızla
                en iyi çözümleri sunuyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Güvenli & Ölçeklenebilir</h3>
              <p className="text-gray-300 text-sm">
                Kurumsal güvenlik standartlarında, işletmenizin büyümesiyle birlikte
                ölçeklenen çözümler geliştiriyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <TrendingUp className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">ROI Odaklı</h3>
              <p className="text-gray-300 text-sm">
                Her projemizde ölçülebilir sonuçlar ve yatırım getirisi sağlayarak
                işletmenizin karlılığını artırıyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">İnovatif Yaklaşım</h3>
              <p className="text-gray-300 text-sm">
                Sektördeki en yeni teknolojileri takip ederek müşterilerimize
                rekabet avantajı sağlayan çözümler sunuyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">Hızlı Entegrasyon</h3>
              <p className="text-gray-300 text-sm">
                Mevcut sistemlerinize kolay entegrasyon ile minimum kesinti
                süresiyle AI çözümlerini hayata geçiriyoruz.
              </p>
            </div>

            <div className="text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Globe className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-lg font-bold mb-2">7/24 Destek</h3>
              <p className="text-gray-300 text-sm">
                Projelerinizde kesintisiz destek sağlayarak AI sistemlerinizin
                sürekli optimal performansta çalışmasını garantiliyoruz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 relative">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            İşinizi Dönüştürmeye Hazır mısınız?
          </h2>
          <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
            AI çözümlerimiz ile müşteri deneyimini geliştirin, operasyonel verimliliği artırın
            ve rekabet avantajı elde edin.
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
