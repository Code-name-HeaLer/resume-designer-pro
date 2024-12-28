export const Steps = ({ steps, currentStep }) => {
  return (
    <div className="flex items-center justify-center">
      {steps.map((step, index) => (
        <div key={step.id} className="flex items-center">
          <div className={`flex items-center justify-center w-8 h-8 rounded-full border-2 
            ${currentStep >= step.id ? 'border-primary-600 bg-primary-600 text-white' : 'border-gray-300 text-gray-500'}`}>
            {step.id}
          </div>
          <div className={`ml-2 text-sm ${currentStep >= step.id ? 'text-primary-600 font-medium' : 'text-gray-500'}`}>
            {step.name}
          </div>
          {index < steps.length - 1 && (
            <div className={`w-20 h-0.5 mx-2 ${currentStep > step.id ? 'bg-primary-600' : 'bg-gray-300'}`} />
          )}
        </div>
      ))}
    </div>
  );
};