import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: string;
  gradient: string;
  link: string;
  children?: ReactNode;
}

const FeatureCard = ({ title, description, icon, gradient, link }: FeatureCardProps) => {
  return (
    <Link to={link} className="block group">
      <div className={`card-float group-hover:scale-105 transition-all duration-500 ${gradient}`}>
        <div className="text-center">
          <div className="text-6xl mb-4 animate-float">
            {icon}
          </div>
          <h3 className="font-handwritten text-2xl font-bold mb-3 text-gradient">
            {title}
          </h3>
          <p className="text-muted-foreground leading-relaxed">
            {description}
          </p>
          <div className="mt-4 inline-flex items-center space-x-2 text-primary font-medium">
            <span>Let's Play</span>
            <span className="text-xl animate-bounce">✨</span>
          </div>
        </div>
        <div className="sparkle"></div>
      </div>
    </Link>
  );
};

export default FeatureCard;