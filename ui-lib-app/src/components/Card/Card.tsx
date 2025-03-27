import React, { ReactNode, HTMLAttributes } from 'react';
import './Card.css';

// Define the props for the Card component
interface CardProps extends Omit<HTMLAttributes<HTMLDivElement>, 'title'> {
  className?: string;
  title?: ReactNode;
  subtitle?: ReactNode;
  media?: ReactNode;
  action?: ReactNode;
  children: ReactNode;
  variant?: 'default' | 'outlined' | 'elevated';
}

// Define the props for subcomponents
interface CardSubcomponentProps extends HTMLAttributes<HTMLDivElement> {
  className?: string;
  children: ReactNode;
}

interface CardMediaProps extends CardSubcomponentProps {
  image?: string;
  alt?: string;
}

const Card: React.FC<CardProps> & {
  Header: React.FC<CardSubcomponentProps>;
  Title: React.FC<CardSubcomponentProps>;
  Subtitle: React.FC<CardSubcomponentProps>;
  Content: React.FC<CardSubcomponentProps>;
  Media: React.FC<CardMediaProps>;
  Actions: React.FC<CardSubcomponentProps>;
} = ({
  className = '',
  title,
  subtitle,
  media,
  action,
  children,
  variant = 'default',
  ...rest
}) => {
  const cardClass = `ui-card ui-card-${variant} ${className}`.trim();

  return (
    <div className={cardClass} {...rest}>
      {media && <div className="ui-card-media">{media}</div>}

      {(title || subtitle) && (
        <div className="ui-card-header">
          {title && <div className="ui-card-title">{title}</div>}
          {subtitle && <div className="ui-card-subtitle">{subtitle}</div>}
        </div>
      )}

      <div className="ui-card-content">{children}</div>

      {action && <div className="ui-card-actions">{action}</div>}
    </div>
  );
};

// Define subcomponents with types
Card.Header = ({ className = '', children, ...rest }: CardSubcomponentProps) => (
  <div className={`ui-card-header ${className}`.trim()} {...rest}>
    {children}
  </div>
);

Card.Title = ({ className = '', children, ...rest }: CardSubcomponentProps) => (
  <div className={`ui-card-title ${className}`.trim()} {...rest}>
    {children}
  </div>
);

Card.Subtitle = ({ className = '', children, ...rest }: CardSubcomponentProps) => (
  <div className={`ui-card-subtitle ${className}`.trim()} {...rest}>
    {children}
  </div>
);

Card.Content = ({ className = '', children, ...rest }: CardSubcomponentProps) => (
  <div className={`ui-card-content ${className}`.trim()} {...rest}>
    {children}
  </div>
);

Card.Media = ({
  className = '',
  children,
  image,
  alt = '',
  ...rest
}: CardMediaProps) => (
  <div className={`ui-card-media ${className}`.trim()} {...rest}>
    {image ? <img src={image} alt={alt} /> : children}
  </div>
);

Card.Actions = ({ className = '', children, ...rest }: CardSubcomponentProps) => (
  <div className={`ui-card-actions ${className}`.trim()} {...rest}>
    {children}
  </div>
);

export default Card;