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
            About CodeMagic
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
                CodeMagic was born from a simple idea: what if learning to code was as easy as having a conversation? 
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

        {/* Backend Integration Guide */}
        <Card className="card-float bg-gradient-to-br from-accent/20 to-primary/10">
          <div className="text-center">
            <div className="text-5xl mb-4">🔧</div>
            <h2 className="font-handwritten text-3xl font-bold text-gradient mb-4">
              Ready to Add Real Magic?
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              This frontend is ready to connect with a Node.js backend using OpenAI's API. 
              Here's what you need to complete the magic:
            </p>
            
            <div className="text-left max-w-2xl mx-auto space-y-4 mb-6">
              <div className="flex items-start space-x-3">
                <span className="text-lg">1️⃣</span>
                <span className="text-sm">Set up a Node.js + Express backend with CORS enabled</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg">2️⃣</span>
                <span className="text-sm">Create an endpoint <code className="bg-muted px-1 rounded">/api/generate-code</code> that accepts prompt + language</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg">3️⃣</span>
                <span className="text-sm">Add your OpenAI API key securely to environment variables</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg">4️⃣</span>
                <span className="text-sm">Extract code blocks from OpenAI responses using regex</span>
              </div>
              <div className="flex items-start space-x-3">
                <span className="text-lg">5️⃣</span>
                <span className="text-sm">Update the API URL in CodeGenerator.tsx</span>
              </div>
            </div>

            <Button 
              className="btn-magical"
              onClick={() => window.location.href = '/code-genie'}
            >
              <Sparkles className="w-5 h-5 mr-2" />
              Try the Demo Version
            </Button>
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