import { useEffect, useState } from 'react';

const Preloader = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-navy">
      <div className="text-4xl font-bold text-electric">
        <span className="inline-block animate-logo-spin">AG</span>
      </div>
    </div>
  );
};

export default Preloader;