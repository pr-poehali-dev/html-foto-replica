import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-muted to-background">
      <header className="bg-muted/50 border-b-2 border-border">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <div className="text-sm font-medium text-foreground">pikanso</div>
          <nav className="flex gap-6 items-center">
            <a href="#" className="text-foreground font-semibold hover:text-primary transition-colors border-b-4 border-foreground pb-1">
              Главная
            </a>
            <a href="#" className="text-foreground font-semibold hover:text-primary transition-colors pb-1">
              Инструкции
            </a>
            <a href="#" className="text-foreground font-semibold hover:text-primary transition-colors pb-1">
              Видеоуроки
            </a>
            <a href="#" className="text-foreground font-semibold hover:text-primary transition-colors pb-1">
              Помощь
            </a>
          </nav>
          <Button className="bg-secondary text-secondary-foreground hover:bg-secondary/90 font-bold px-6 py-2 rounded-md flex items-center gap-2">
            <Icon name="Menu" size={20} />
            Увеличить шрифт
          </Button>
        </div>
      </header>

      <section className="container mx-auto px-4 py-16 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold leading-tight">
            Цифровой мир <span className="text-primary">для всех возрастов!</span>
          </h1>
          <p className="text-foreground/80 text-lg leading-relaxed">
            Понятные инструкции по сервисам Яндекса для старшего поколения. Освойте технологии легко и быстро с Pikanso.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold px-8 py-6 text-lg rounded-lg flex items-center gap-2 shadow-lg hover:shadow-xl transition-all hover:scale-105">
              <Icon name="Play" size={24} />
              Начать обучение
            </Button>
            <Button variant="outline" className="bg-secondary hover:bg-secondary/90 text-secondary-foreground border-2 border-secondary-foreground font-bold px-8 py-6 text-lg rounded-lg flex items-center gap-2 shadow-md hover:shadow-lg transition-all hover:scale-105">
              <Icon name="HelpCircle" size={24} />
              Получить помощь
            </Button>
          </div>
        </div>
        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl overflow-hidden border-8 border-blue-400 rotate-2 hover:rotate-0 transition-transform duration-300">
            <img 
              src="https://cdn.poehali.dev/files/5a5e1f6b-d0c2-4d61-9bd8-359b70a3fbf3.png" 
              alt="Обучение цифровым технологиям" 
              className="w-full h-auto"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 bg-blue-500 text-white px-6 py-3 rounded-xl font-bold text-lg shadow-lg">
            738.67 × 448.94
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-4">С чего начать?</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="bg-white border-4 border-secondary hover:border-primary transition-all duration-300 p-8 text-center hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Icon name="ShoppingCart" size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Как заказать такси?</h3>
          </Card>

          <Card className="bg-white border-4 border-secondary hover:border-primary transition-all duration-300 p-8 text-center hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Icon name="ShoppingBag" size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Как заказать продукты?</h3>
          </Card>

          <Card className="bg-white border-4 border-secondary hover:border-primary transition-all duration-300 p-8 text-center hover:shadow-xl hover:-translate-y-2 cursor-pointer">
            <div className="bg-primary/10 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Icon name="CloudRain" size={40} className="text-primary" />
            </div>
            <h3 className="text-xl font-bold mb-2">Как узнать прогноз погоды?</h3>
          </Card>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16 bg-gradient-to-r from-muted to-background rounded-3xl my-8">
        <h2 className="text-4xl font-bold text-center mb-4">Популярные видео уроки</h2>
        <div className="w-24 h-1 bg-secondary mx-auto mb-12"></div>
        
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 flex items-center justify-center h-32 shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
              <div className="text-4xl font-bold text-white">🌤️ Яндекс Погода</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
              <div className="text-6xl mb-4">🗺️</div>
              <p className="font-bold text-2xl">Яндекс Карты</p>
            </div>
          </div>

          <Card className="bg-gradient-to-br from-gray-800 to-black text-white p-6 space-y-4 hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
            <div className="bg-blue-500 rounded-full w-16 h-16 flex items-center justify-center mx-auto text-3xl">
              ✓
            </div>
            <h3 className="text-xl font-bold text-center">Как скачать приложение Яндекс Лавка?</h3>
            <p className="text-sm text-gray-300">Яндекс Лавка — заказ п...</p>
            <div className="flex items-center justify-center gap-2 text-xs">
              <span>⭐⭐⭐⭐⭐ 133 тыс.</span>
              <span>📱 Mirkorobil...</span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-xs mt-4">
              <div className="bg-blue-600 rounded p-2 text-center">
                <div className="font-bold">Скидка</div>
                <div>до 30% на первый заказ</div>
              </div>
              <div className="bg-blue-600 rounded p-2 text-center">
                <div className="font-bold">Доставка</div>
                <div>от 15 минут</div>
              </div>
            </div>
            <div className="bg-orange-500 rounded p-2 text-center font-bold">
              Принимаем оплату картой и наличными
            </div>
          </Card>

          <div className="space-y-8">
            <div className="bg-gradient-to-br from-red-500 to-orange-500 rounded-2xl p-8 flex items-center justify-center h-32 shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
              <div className="text-4xl font-bold text-white">🛒 Яндекс Маркет</div>
            </div>

            <div className="bg-white rounded-2xl p-6 text-center shadow-lg hover:shadow-2xl transition-all hover:scale-105 cursor-pointer">
              <div className="text-6xl mb-4">🛍️</div>
              <p className="font-bold text-2xl">Яндекс Лавка</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-muted/70 border-t-2 border-border mt-16 py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-foreground/60 text-sm">
            © 2024 Pikanso. Образовательная платформа по цифровым сервисам для старшего поколения.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;