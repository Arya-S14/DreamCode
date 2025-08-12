import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card } from '@/components/ui/card';
import { Copy, Download, RotateCcw, Sparkles } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const CodeGenerator = () => {
  const [prompt, setPrompt] = useState('');
  const [language, setLanguage] = useState('');
  const [generatedCode, setGeneratedCode] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  const languages = [
    { value: 'python', label: 'Python 🐍' },
    { value: 'javascript', label: 'JavaScript ⚡' },
    { value: 'html', label: 'HTML 🌐' },
    { value: 'css', label: 'CSS 🎨' },
    { value: 'react', label: 'React ⚛️' },
    { value: 'java', label: 'Java ☕' },
    { value: 'cpp', label: 'C++ 🚀' },
    { value: 'c', label: 'C 💻' },
  ];

  const examplePrompts = [
    "Create a red button with text 'Click Me'",
    "Multiply two numbers a=5, b=10",
    "Make a simple calculator function",
    "Create a colorful rainbow div",
    "Write a function to reverse a string"
  ];

    const extractCode = (responseText) => {
    const match = responseText.match(/```(?:\w+)?\n([\s\S]*?)```/);
    if (match && match[1]) return match[1].trim();
    return responseText.trim();
  };

 const generateCode = async () => {
  if (!prompt.trim() || !language) {
    toast({
      title: "Oops! 🙈",
      description: "Please enter a prompt and select a language first!",
      variant: "destructive",
    });
    return;
  }

  setIsLoading(true);

  try {
   const response = await fetch("http://127.0.0.1:5000/api/generate-code", {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify({ prompt, language }),
});


    const data = await response.json();

    if (response.ok) {
      const onlyCode = extractCode(data.code);
        setGeneratedCode(onlyCode);
      toast({
        title: "Magic Complete! ✨",
        description: "Your code has been generated successfully!",
      });
    } else {
      toast({
        title: "Oops!",
        description: "Failed to get code from the server.",
        variant: "destructive",
      });
    }
  } catch (error) {
    console.error(error);
    toast({
      title: "Server Error 😢",
      description: "Could not reach the backend.",
      variant: "destructive",
    });
  }

  setIsLoading(false);
};


  const copyCode = () => {
    navigator.clipboard.writeText(generatedCode);
    toast({
      title: "Copied! 📋",
      description: "Code copied to clipboard!",
    });
  };

  const downloadCode = () => {
    const extension = language === 'python' ? 'py' : language === 'javascript' ? 'js' : language === 'html' ? 'html' : language === 'css' ? 'css' : 'txt';
    const blob = new Blob([generatedCode], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `generated-code.${extension}`;
    a.click();
    URL.revokeObjectURL(url);
    
    toast({
      title: "Downloaded! 💾",
      description: "Your code file has been downloaded!",
    });
  };

  const resetForm = () => {
    setPrompt('');
    setLanguage('');
    setGeneratedCode('');
  };

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      {/* Header */}
      <div className="text-center">
        <h1 className="font-handwritten text-5xl font-bold text-gradient mb-4">
          Code Genie 🧚‍♀️
        </h1>
        <p className="text-lg text-muted-foreground">
          Tell me what you want in plain English, and I'll create magical code for you!
        </p>
      </div>

      {/* Input Section */}
      <Card className="card-float">
        <div className="space-y-6">
          <div>
            <label className="block text-sm font-medium mb-2 flex items-center space-x-2">
              <span className="text-lg">💭</span>
              <span>What do you want to create?</span>
            </label>
            <Textarea
              placeholder="Describe what you want to code in simple words..."
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="input-magical min-h-[100px] resize-none"
            />
            
            {/* Example prompts */}
            <div className="mt-3">
              <p className="text-xs text-muted-foreground mb-2">✨ Try these examples:</p>
              <div className="flex flex-wrap gap-2">
                {examplePrompts.map((example, index) => (
                  <button
                    key={index}
                    onClick={() => setPrompt(example)}
                    className="text-xs px-3 py-1 bg-secondary/50 hover:bg-secondary rounded-full transition-colors"
                  >
                    {example}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2 flex items-center space-x-2">
              <span className="text-lg">🔮</span>
              <span>Pick your magic language</span>
            </label>
            <Select value={language} onValueChange={setLanguage}>
              <SelectTrigger className="input-magical">
                <SelectValue placeholder="Choose a programming language..." />
              </SelectTrigger>
              <SelectContent className="bg-popover border-border">
                {languages.map((lang) => (
                  <SelectItem key={lang.value} value={lang.value}>
                    {lang.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <Button 
            onClick={generateCode}
            disabled={isLoading}
            className="btn-magical w-full text-lg py-6"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5 animate-spin" />
                <span>Creating Magic...</span>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Sparkles className="w-5 h-5" />
                <span>Generate Code Magic!</span>
              </div>
            )}
            <div className="sparkle"></div>
          </Button>
        </div>
      </Card>

      {/* Code Output */}
      {generatedCode && (
        <Card className="card-float">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <h3 className="font-handwritten text-2xl font-bold text-gradient flex items-center space-x-2">
                <span>🎉</span>
                <span>Your Magical Code!</span>
              </h3>
              <div className="flex space-x-2">
                <Button
                  onClick={copyCode}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  <Copy className="w-4 h-4 mr-1" />
                  Copy
                </Button>
                <Button
                  onClick={downloadCode}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  <Download className="w-4 h-4 mr-1" />
                  Download
                </Button>
                <Button
                  onClick={resetForm}
                  variant="outline"
                  size="sm"
                  className="rounded-full"
                >
                  <RotateCcw className="w-4 h-4 mr-1" />
                  Reset
                </Button>
              </div>
            </div>
            
            <div className="code-display">
              <pre className="whitespace-pre-wrap overflow-x-auto">
                <code>{generatedCode}</code>
              </pre>
            </div>
            
            <div className="text-center text-sm text-muted-foreground">
              <span className="inline-flex items-center space-x-1">
                <span>✨</span>
                <span>Magic complete! Your code is ready to use!</span>
                <span>🎀</span>
              </span>
            </div>
          </div>
        </Card>
      )}

      {/* Backend Integration Note */}
      <Card className="card-float bg-accent/20">
        <div className="text-center space-y-3">
          <div className="text-3xl">🔧</div>
          <h3 className="font-handwritten text-xl font-bold text-accent-foreground">
            Ready for Real Magic?
          </h3>
          <p className="text-sm text-accent-foreground">
           We'll Happy to seeing You  Everytime!!
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CodeGenerator;