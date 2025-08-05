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

  // Mock function - in real app, this would call your backend
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
    
    // Simulate API call
    setTimeout(() => {
      // Mock generated code based on language and prompt
      let mockCode = '';
      
      if (language === 'python') {
        mockCode = `# ${prompt}\ndef example_function():\n    # Generated Python code\n    result = 5 * 10\n    return result\n\nprint(example_function())`;
      } else if (language === 'javascript') {
        mockCode = `// ${prompt}\nfunction exampleFunction() {\n    // Generated JavaScript code\n    const result = 5 * 10;\n    return result;\n}\n\nconsole.log(exampleFunction());`;
      } else if (language === 'html') {
        mockCode = `<!-- ${prompt} -->\n<button style="background-color: red; color: white; padding: 10px 20px; border: none; border-radius: 5px;">\n    Click Me\n</button>`;
      } else if (language === 'css') {
        mockCode = `/* ${prompt} */\n.my-button {\n    background-color: red;\n    color: white;\n    padding: 10px 20px;\n    border: none;\n    border-radius: 5px;\n    cursor: pointer;\n}`;
      } else {
        mockCode = `// ${prompt}\n// Generated ${language} code\nint main() {\n    int result = 5 * 10;\n    return 0;\n}`;
      }
      
      setGeneratedCode(mockCode);
      setIsLoading(false);
      
      toast({
        title: "Magic Complete! ✨",
        description: "Your code has been generated successfully!",
      });
    }, 2000);
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
            This demo shows mock code generation. To connect with OpenAI's API, you'll need to set up the backend as described in the documentation!
          </p>
        </div>
      </Card>
    </div>
  );
};

export default CodeGenerator;