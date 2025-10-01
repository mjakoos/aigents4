import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ChevronRight, Star, Check, ArrowRight, Play, Sparkles, Zap, Camera, Video, Palette, Target, Users, Trophy, Clock, Shield, RefreshCw } from "lucide-react";
import { Link } from "react-router-dom";

export default function AIStudio() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 100);
    return () => clearTimeout(timer);
  }, []);

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
          <p className="text-white text-lg">AI Studio Yükleniyor...</p>
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
              <Badge variant="secondary" className="bg-cyan-500/20 text-cyan-400">AI Studio</Badge>
              <Link to="/talepler" className="hover:text-cyan-400 transition-colors">Talepler</Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Button className="hidden md:flex bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600">
                Müşteri Paneli
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-12 px-6 relative">
        <div className="container mx-auto text-center relative">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-400 border-cyan-500/30">
            AI Studio
          </Badge>

          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-cyan-300 to-blue-400 bg-clip-text text-transparent leading-tight">
            Yapay Zeka ile<br />
            Etkileyici Prodüksiyon<br />
            Keşfedin
          </h1>

          <p className="text-lg text-gray-300 mb-6 max-w-2xl mx-auto">
            Markanız için benzersiz görseller ve dikkat çeken videolar AI gücüyle üretiyoruz.
          </p>

          <Button
            onClick={() => scrollToSection('pricing')}
            className="bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white px-6 py-3 rounded-full"
          >
            AI Gücünü Keşfet
          </Button>
        </div>
      </section>

      {/* Visual Try-On Section */}
      <section className="py-12 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <Badge className="mb-4 bg-purple-500/20 text-purple-400 border-purple-500/30">
                AI Visual Try-On
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                Dijital Deneme Teknolojisi: Visual Try-On
              </h2>

              <p className="text-gray-300 mb-6">
                Kıyafet giydirme, aksesuar ekleme veya ürün yerleştirme gibi ileri seviye dijital deneme teknolojileriyle
                e-ticaret ve moda projelerinizi bir üst seviyeye çıkarın.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Gerçekçi dijital giydirme efekti</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Hızlı ürün varyant görselleştirme</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Check className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Moda ve e-ticaret odaklı çözümler</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="grid grid-cols-2 gap-3">
                <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=300&fit=crop"
                    alt="AI Visual Try-On Example"
                    className="w-full h-32 object-cover"
                  />
                </Card>
                <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                  <img
                    src="https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&h=300&fit=crop"
                    alt="AI Visual Try-On Product"
                    className="w-full h-32 object-cover"
                  />
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Video Production Section */}
      <section className="py-12 px-6 relative">
        <div className="container mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div className="relative order-2 lg:order-1">
              <Card className="bg-slate-800/50 border-slate-700 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1485846234645-a62644f84728?w=500&h=300&fit=crop"
                  alt="AI Video Production"
                  className="w-full h-48 object-cover"
                />
              </Card>
            </div>

            <div className="order-1 lg:order-2">
              <Badge className="mb-4 bg-green-500/20 text-green-400 border-green-500/30">
                AI Video Prodüksiyon
              </Badge>

              <h2 className="text-3xl md:text-4xl font-bold mb-4">
                AI Video Prodüksiyon ile Kampanyalarınızı Hızlandırın
              </h2>

              <p className="text-gray-300 mb-6">
                Yapay zeka destekli video kurgları ile tanıtım, reklam veya sosyal medya kliplerini dakikalar içinde oluşturun.
                İnsan gücüne gerek kalmadan etkileyici videolar hazırlayın.
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center space-x-3">
                  <Video className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Tanıtım & kampanya video kurgularıruyarlatunyarn</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">AI senaryo üretimi</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Zap className="w-4 h-4 text-cyan-400" />
                  <span className="text-sm">Hızlı render & sosyal medya uyumu</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AI Advertisement Creative Section */}
      <section className="py-12 px-6 relative">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <Badge className="mb-4 bg-orange-500/20 text-orange-400 border-orange-500/30">
              AI Reklam Kreatifleri
            </Badge>

            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Satış Odaklı Reklam Görselleri
            </h2>

            <p className="text-gray-300 max-w-2xl mx-auto">
              AI teknolojisiyle tasarlanan dikkat çekici görseller, kampanya bannerları ve sosyal medya kreatifleri.
              Markanıza özel, dönüşüm odaklı içerikler üretin.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=300&h=200&fit=crop"
                alt="AI Advertisement Creative 1"
                className="w-full h-32 object-cover"
              />
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=300&h=200&fit=crop"
                alt="AI Advertisement Creative 2"
                className="w-full h-32 object-cover"
              />
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop"
                alt="AI Advertisement Creative 3"
                className="w-full h-32 object-cover"
              />
            </Card>
            <Card className="bg-slate-800/50 border-slate-700 overflow-hidden group hover:scale-105 transition-transform">
              <img
                src="https://images.unsplash.com/photo-1553028826-f4804151e596?w=300&h=200&fit=crop"
                alt="AI Advertisement Creative 4"
                className="w-full h-32 object-cover"
              />
            </Card>
          </div>

          <div className="text-center mt-8">
            <div className="grid md:grid-cols-3 gap-6 max-w-3xl mx-auto">
              <div className="flex items-center space-x-2">
                <Target className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">Ürün ve hizmete özel tasarım</span>
              </div>
              <div className="flex items-center space-x-2">
                <Users className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">Sosyal medya görsel setleri</span>
              </div>
              <div className="flex items-center space-x-2">
                <RefreshCw className="w-5 h-5 text-cyan-400" />
                <span className="text-sm">Hızlı ve çoklu format desteği</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-12 px-6 bg-slate-900/50">
        <div className="container mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              İşletmeniz İçin Doğru Planı Seçin
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto">
              AI Görsel ve AI Video Planlarımızı inceleyerek size en uygun olanı seçebilirsiniz.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {/* Basic Plan */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <CardHeader className="pb-4">
                <div className="text-sm text-gray-400 uppercase tracking-wider">TEMEL PLAN</div>
                <CardTitle className="text-xl">10 AI Görsel</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">$349</span>
                  <span className="text-gray-400 text-sm">/ Görsel</span>
                </div>
                <p className="text-gray-300 text-sm">Küçük işletmeler, butik e-ticaret mağazaları.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">10 Adet AI Görsel üretimi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Sosyal medya formatları</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">1 revizyon hakkı</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-sm">
                  Satış Ekibi ile İletişime Geç
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Standard Plan */}
            <Card className="bg-slate-800/50 border-cyan-500 p-6 relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                <Badge className="bg-cyan-500 text-white px-3 py-1 text-xs">Popüler ⭐</Badge>
              </div>
              <CardHeader className="pb-4">
                <div className="text-sm text-gray-400 uppercase tracking-wider">STANDART PLAN</div>
                <CardTitle className="text-xl">30 AI Görsel</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">$499</span>
                  <span className="text-gray-400 text-sm">/ Görsel</span>
                </div>
                <p className="text-gray-300 text-sm">E-ticaret mağazaları, sosyal medya içerik üreticileri.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">30 Adet AI Görsel üretimi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">Visual Try-On</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">3 revizyon hakkı</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-sm">
                  Satış Ekibi ile İletişime Geç
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </CardContent>
            </Card>

            {/* Premium Plan */}
            <Card className="bg-slate-800/50 border-slate-700 p-6">
              <CardHeader className="pb-4">
                <div className="text-sm text-gray-400 uppercase tracking-wider">GELİŞMİŞ PLAN</div>
                <CardTitle className="text-xl">Özel Adet AI Görsel</CardTitle>
                <div className="flex items-baseline space-x-2">
                  <span className="text-3xl font-bold">$649</span>
                  <span className="text-gray-400 text-sm">/ Görsel</span>
                </div>
                <p className="text-gray-300 text-sm">Orta ve büyük ölçekli markalar, ajanslar.</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">60 Adet AI Görsel üretimi</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">3D mock-up tasarımları</span>
                  </li>
                  <li className="flex items-center space-x-2">
                    <Check className="w-4 h-4 text-cyan-400" />
                    <span className="text-sm">4 revizyon hakkı</span>
                  </li>
                </ul>
                <Button className="w-full bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-sm">
                  Satış Ekibi ile İletişime Geç
                  <ArrowRight className="w-3 h-3 ml-1" />
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12 px-6 relative">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 text-3xl font-bold mb-4">
            <span>Markanızı Yaratıcı</span>
            <Sparkles className="w-8 h-8 text-cyan-400" />
            <span>AI Çözümleriyle Öne Çıkarın</span>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white px-6 py-3 rounded-full">
              Ücretsiz Randevu
            </Button>
            <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 px-6 py-3 rounded-full">
              İletişime Geç
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
