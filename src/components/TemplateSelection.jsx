const templates = [
  {
    id: 1,
    name: 'Professional',
    description: 'Clean and modern design perfect for any industry',
    thumbnail: 'https://via.placeholder.com/300x400?text=Professional',
  },
  {
    id: 2,
    name: 'Creative',
    description: 'Stand out with a unique and bold layout',
    thumbnail: 'https://via.placeholder.com/300x400?text=Creative',
  },
  {
    id: 3,
    name: 'Minimal',
    description: 'Simple and elegant design that focuses on content',
    thumbnail: 'https://via.placeholder.com/300x400?text=Minimal',
  },
];

const TemplateSelection = ({ onNext, formData }) => {
  const handleSelect = (templateId) => {
    onNext({ ...formData, templateId });
  };

  return (
    <div className="max-w-7xl mx-auto animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Choose Your Template</h2>
      
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {templates.map((template) => (
          <div
            key={template.id}
            className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 overflow-hidden cursor-pointer"
            onClick={() => handleSelect(template.id)}
          >
            <img
              src={template.thumbnail}
              alt={template.name}
              className="w-full h-48 object-cover"
            />
            <div className="p-4">
              <h3 className="text-lg font-medium text-gray-900">{template.name}</h3>
              <p className="mt-1 text-sm text-gray-500">{template.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelection;