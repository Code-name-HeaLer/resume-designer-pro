import { useState } from 'react';
import PersonalInfo from './form-sections/PersonalInfo';
import EducationInfo from './form-sections/EducationInfo';
import SocialProfiles from './form-sections/SocialProfiles';
import LocationPreferences from './form-sections/LocationPreferences';

const BasicInfo = ({ onNext }) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    college: '',
    specialization: '',
    course: '',
    branch: '',
    passoutYear: '',
    cgpa: '',
    gender: '',
    genderOther: '',
    githubProfile: '',
    linkedinProfile: '',
    dateOfBirth: '',
    preferredCountry: '',
    preferredState: '',
    preferredCity: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.firstName) newErrors.firstName = 'First name is required';
    if (!formData.lastName) newErrors.lastName = 'Last name is required';
    if (!formData.college) newErrors.college = 'College name is required';
    if (!formData.specialization) newErrors.specialization = 'Specialization is required';
    if (!formData.course) newErrors.course = 'Course is required';
    if (!formData.branch) newErrors.branch = 'Branch is required';
    if (!formData.passoutYear) newErrors.passoutYear = 'Pass-out year is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    if (!formData.preferredCountry) newErrors.preferredCountry = 'Preferred country is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
  };

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-8">
        <PersonalInfo formData={formData} handleChange={handleChange} errors={errors} />
        <EducationInfo formData={formData} handleChange={handleChange} errors={errors} />
        <SocialProfiles formData={formData} handleChange={handleChange} />
        <LocationPreferences formData={formData} handleChange={handleChange} />

        <div className="flex justify-end pt-6">
          <button
            type="submit"
            className="px-6 py-2 bg-primary-600 text-white rounded-md hover:bg-primary-700 
                     focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
          >
            Next Step
          </button>
        </div>
      </form>
    </div>
  );
};

export default BasicInfo;