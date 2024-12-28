import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { toast } from "@/components/ui/use-toast";

const templates = [
  {
    id: 1,
    name: 'Professional',
    description: 'A clean and modern design perfect for corporate roles',
    thumbnail: '/placeholder.svg',
    features: ['Clean layout', 'Professional fonts', 'Traditional sections']
  },
  {
    id: 2,
    name: 'Creative',
    description: 'Stand out with a unique and bold layout',
    thumbnail: '/placeholder.svg',
    features: ['Unique design', 'Custom sections', 'Portfolio display']
  },
  {
    id: 3,
    name: 'Minimal',
    description: 'Simple and elegant design that focuses on content',
    thumbnail: '/placeholder.svg',
    features: ['Minimalist style', 'Focused content', 'Easy to scan']
  },
];

const TemplateSelection = ({ onNext, formData }) => {
  const handleSelect = (templateId) => {
    console.log('Selected template:', templateId);
    toast({
      title: "Template Selected",
      description: "Your template has been selected. Proceeding to the editor.",
    });
    onNext({ ...formData, templateId });
  };

  return (
    <div className="container mx-auto px-4 py-8 animate-fade-in">
      <div className="text-center mb-8">
        <h2 className="text-3xl font-bold text-gray-900 mb-3">Choose Your Template</h2>
        <p className="text-gray-600">Select a template that best represents your professional style</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <Card 
            key={template.id}
            className="group hover:shadow-lg transition-all duration-300 cursor-pointer"
            onClick={() => handleSelect(template.id)}
          >
            <CardHeader className="space-y-1">
              <CardTitle className="text-2xl">{template.name}</CardTitle>
              <CardDescription>{template.description}</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-[4/5] mb-4 overflow-hidden rounded-md">
                <img
                  src={template.thumbnail}
                  alt={template.name}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <ul className="space-y-2">
                {template.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-sm text-gray-600">
                    <svg
                      className="w-4 h-4 mr-2 text-green-500"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path d="M5 13l4 4L19 7"></path>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default TemplateSelection;