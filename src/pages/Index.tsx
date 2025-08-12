import Navigation from '@/components/Navigation';
import FeatureCard from '@/components/FeatureCard';
import { Button } from '@/components/ui/button';
import { Sparkles, Heart } from 'lucide-react';

const Index = () => {
  const features = [
    {
      title: "Dream Code",
      description: "Turn your ideas into beautiful code with just a few words! Ask me to create buttons, functions, or anything you can imagine.",
      icon: "🧚‍♀️",
      gradient: "bg-gradient-to-br from-pink-50 to-purple-50",
      link: "/DreamCode"
    },
    {
      title: "Fun Math",
      description: "Make math magical! Create calculators, solve equations, and build number games with colorful code.",
      icon: "🧮",
      gradient: "bg-gradient-to-br from-blue-50 to-cyan-50",
      link: "/DreamCode"
    },
    {
      title: "Design Magic",
      description: "Paint the web with colors! Learn to create beautiful buttons, cards, and layouts that sparkle.",
      icon: "🎨",
      gradient: "bg-gradient-to-br from-green-50 to-teal-50",
      link: "/DreamCode"
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            {/* Floating decorations */}
            <div className="absolute top-10 left-10 text-4xl animate-float">🌟</div>
            <div className="absolute top-20 right-20 text-3xl animate-bounce-gentle">🦄</div>
            <div className="absolute bottom-20 left-20 text-5xl animate-float" style={{animationDelay: '1s'}}>💖</div>
            <div className="absolute bottom-10 right-10 text-4xl animate-bounce-gentle" style={{animationDelay: '2s'}}>🌈</div>
            
            <div className="text-8xl mb-6 animate-bounce-gentle">🌸</div>
            <h1 className="font-handwritten text-6xl md:text-8xl font-bold text-gradient mb-6">
              Let's Play with Code!
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
              Welcome to the most magical place where kids learn to code! 
              Turn your wildest ideas into amazing programs with just your words. ✨
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                className="btn-magical text-lg px-8 py-6"
                onClick={() => window.location.href = '/DreamCode'}
              >
                <Sparkles className="w-5 h-5 mr-2" />
                Start Creating Magic
              </Button>
              <Button 
                variant="outline" 
                className="rounded-full px-8 py-6 text-lg border-2 hover:scale-105 transition-transform"
                onClick={() => window.location.href = '/about'}
              >
                <Heart className="w-5 h-5 mr-2" />
                Learn More
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">8+</div>
                <div className="text-sm text-muted-foreground">Programming Languages</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">∞</div>
                <div className="text-sm text-muted-foreground">Possibilities</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-primary">100%</div>
                <div className="text-sm text-muted-foreground">Fun Guaranteed</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-handwritten text-5xl font-bold text-gradient mb-4">
              Choose Your Adventure
            </h2>
            <p className="text-xl text-muted-foreground">
              Pick what you want to create today! 🌟
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="animate-float" style={{animationDelay: `${index * 0.5}s`}}>
                <FeatureCard {...feature} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="card-float bg-gradient-to-br from-primary/10 to-accent/10">
            <div className="text-6xl mb-6 animate-bounce-gentle">🚀</div>
            <h2 className="font-handwritten text-4xl font-bold text-gradient mb-6">
              Ready to Become a Code Wizard?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Join thousands of kids who are already creating amazing things with code! 
              No experience needed - just bring your imagination! 🎭
            </p>
            <Button 
              className="btn-magical text-xl px-12 py-8"
              onClick={() => window.location.href = '/code-genie'}
            >
              <Sparkles className="w-6 h-6 mr-3" />
              Start Your Coding Journey
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border/50 bg-card/30">
        <div className="max-w-7xl mx-auto">
          <div className="text-center">
            <div className="flex justify-center items-center space-x-2 mb-4">
              <div className="text-3xl animate-bounce-gentle">🌸</div>
              <span className="font-handwritten text-2xl font-bold text-gradient">CodeMagic</span>
            </div>
            <p className="text-muted-foreground mb-4">
              Making coding magical for kids everywhere! ✨
            </p>
            <div className="flex justify-center space-x-6 text-2xl">
              <span className="animate-bounce-gentle cursor-pointer">💖</span>
              <span className="animate-bounce-gentle cursor-pointer" style={{animationDelay: '0.5s'}}>🌟</span>
              <span className="animate-bounce-gentle cursor-pointer" style={{animationDelay: '1s'}}>🦄</span>
              <span className="animate-bounce-gentle cursor-pointer" style={{animationDelay: '1.5s'}}>🌈</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
