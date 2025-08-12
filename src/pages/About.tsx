import Navigation from '@/components/Navigation';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Heart, Sparkles, Code2, Users } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Code2 className="w-8 h-8" />,
      title: "Natural Language Programming",
      description: "Just describe what you want in plain English, and watch the magic happen! No complex syntax to memorize."
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "8+ Programming Languages",
      description: "From Python to React, HTML to Java - we support all the popular languages kids want to learn!"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Kid-Friendly Interface",
      description: "Beautiful, colorful, and intuitive design that makes learning to code feel like playing a game."
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Safe & Secure",
      description: "Built with security in mind. All API calls are handled securely through our backend."
    }
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Header */}
        <div className="text-center mb-16">
          <div className="text-6xl mb-6 animate-bounce-gentle">🌟</div>
          <h1 className="font-handwritten text-5xl md:text-7xl font-bold text-gradient mb-6">
            About Dream Code
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            We believe every child has the potential to be a coding wizard! 
            Our mission is to make programming accessible, fun, and magical for kids everywhere. ✨
          </p>
        </div>

        {/* Story Section */}
        <Card className="card-float mb-16">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="font-handwritten text-3xl font-bold text-gradient mb-4">
                Our Story 📖
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                DreamCode was born from a simple idea: what if learning to code was as easy as having a conversation? 
                We wanted to remove the barriers that make programming seem scary or difficult for kids.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Using the power of AI and beautiful design, we've created a platform where children can turn their 
                wildest ideas into real code using just their words. No complex syntax, no confusing errors - just pure magic! 🪄
              </p>
            </div>
            <div className="text-center">
              <div className="text-8xl animate-float">🧚‍♀️</div>
            </div>
          </div>
        </Card>

        {/* Features Grid */}
        <div className="mb-16">
          <h2 className="font-handwritten text-4xl font-bold text-gradient text-center mb-12">
            What Makes Us Special? 💖
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="card-float text-center">
                <div className="text-primary mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="font-handwritten text-xl font-bold text-gradient mb-3">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </Card>
            ))}
          </div>
        </div>

        {/* Tech Stack */}
        <Card className="card-float mb-16">
          <div className="text-center">
            <h2 className="font-handwritten text-3xl font-bold text-gradient mb-6">
              Built with Love & Modern Tech 🚀
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="text-4xl mb-2">⚛️</div>
                <div className="text-sm font-medium">React</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🎨</div>
                <div className="text-sm font-medium">Tailwind CSS</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">🤖</div>
                <div className="text-sm font-medium">OpenAI API</div>
              </div>
              <div className="text-center">
                <div className="text-4xl mb-2">💻</div>
                <div className="text-sm font-medium">TypeScript</div>
              </div>
            </div>
          </div>
        </Card>

        

        {/* Call to Action */}
        <div className="text-center">
          <h2 className="font-handwritten text-4xl font-bold text-gradient mb-6">
            Join the Coding Adventure! 🌈
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Ready to turn your imagination into code? Let's create something amazing together!
          </p>
          <Button 
            className="btn-magical text-lg px-8 py-6"
            onClick={() => window.location.href = '/code-genie'}
          >
            <Heart className="w-5 h-5 mr-2" />
            Start Creating Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;