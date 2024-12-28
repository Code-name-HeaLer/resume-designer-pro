import { useState } from 'react';
import BasicInfo from '../components/BasicInfo';
import TemplateSelection from '../components/TemplateSelection';
import ResumeEditor from '../components/ResumeEditor';
import { Steps } from '../components/Steps';

const Index = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({});

  const steps = [
    { id: 1, name: 'Basic Information' },
    { id: 2, name: 'Template Selection' },
    { id: 3, name: 'Resume Editor' },
  ];

  const handleNext = (data) => {
    setFormData(prev => ({ ...prev, ...data }));
    setCurrentStep(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-primary-600">ResumeBuilder</h1>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <Steps steps={steps} currentStep={currentStep} />
        
        <div className="mt-8 animate-fade-in">
          {currentStep === 1 && <BasicInfo onNext={handleNext} />}
          {currentStep === 2 && <TemplateSelection onNext={handleNext} formData={formData} />}
          {currentStep === 3 && <ResumeEditor formData={formData} />}
        </div>
      </main>
    </div>
  );
};

export default Index;