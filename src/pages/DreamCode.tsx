import Navigation from '@/components/Navigation';
import CodeGenerator from '@/components/CodeGenerator';

const CodeGenie = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CodeGenerator />
      </div>
    </div>
  );
};

export default CodeGenie;