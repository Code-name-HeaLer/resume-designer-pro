import { useState } from 'react';
import html2pdf from 'html2pdf.js';

const ResumeEditor = ({ formData }) => {
  const [isEditing, setIsEditing] = useState(true);

  const handleDownload = () => {
    const element = document.getElementById('resume-preview');
    const opt = {
      margin: 1,
      filename: 'resume.pdf',
      image: { type: 'jpeg', quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' }
    };

    html2pdf().set(opt).from(element).save();
  };

  return (
    <div className="flex flex-col lg:flex-row gap-6 animate-fade-in">
      {/* Editor Section */}
      <div className={`lg:w-1/2 bg-white rounded-lg shadow p-6 ${isEditing ? '' : 'hidden lg:block'}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Edit Resume</h2>
          <button
            onClick={() => setIsEditing(!isEditing)}
            className="lg:hidden px-4 py-2 text-sm text-primary-600 hover:text-primary-700"
          >
            {isEditing ? 'Preview' : 'Edit'}
          </button>
        </div>

        <form className="space-y-6">
          {/* Personal Information */}
          <section>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Personal Information</h3>
            <div className="grid grid-cols-1 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Full Name</label>
                <p className="mt-1 text-sm text-gray-900">{formData.firstName} {formData.lastName}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <p className="mt-1 text-sm text-gray-900">{formData.email}</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <p className="mt-1 text-sm text-gray-900">{formData.phone}</p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-lg font-medium text-gray-900 mb-4">Education</h3>
            <div>
              <label className="block text-sm font-medium text-gray-700">College</label>
              <p className="mt-1 text-sm text-gray-900">{formData.college}</p>
            </div>
          </section>
        </form>
      </div>

      {/* Preview Section */}
      <div className={`lg:w-1/2 bg-white rounded-lg shadow p-6 ${isEditing ? 'hidden lg:block' : ''}`}>
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold text-gray-900">Preview</h2>
          <div className="flex gap-4">
            <button
              onClick={() => setIsEditing(!isEditing)}
              className="lg:hidden px-4 py-2 text-sm text-primary-600 hover:text-primary-700"
            >
              {isEditing ? 'Preview' : 'Edit'}
            </button>
            <button
              onClick={handleDownload}
              className="px-4 py-2 text-sm font-medium text-white bg-primary-600 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
            >
              Download PDF
            </button>
          </div>
        </div>

        <div id="resume-preview" className="bg-white p-8 shadow-inner min-h-[842px] w-full">
          {/* Resume Preview Content */}
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{formData.firstName} {formData.lastName}</h1>
          <div className="text-sm text-gray-600 mb-8">
            <p>{formData.email} | {formData.phone}</p>
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-gray-900 mb-2">Education</h2>
            <div className="ml-4">
              <p className="font-medium">{formData.college}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeEditor;