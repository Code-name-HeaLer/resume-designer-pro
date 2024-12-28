import { useState } from 'react';
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Select } from "./ui/select";

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
    preferredCountries: [],
    preferredStates: [],
    preferredCities: [],
    dateOfBirth: '',
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
    if (!formData.passoutYear) newErrors.passoutYear = 'Pass-out year is required';
    if (!formData.gender) newErrors.gender = 'Gender is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onNext(formData);
    }
  };

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: currentYear - 1990 + 6 }, (_, i) => 1990 + i);

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 animate-fade-in">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Basic Information</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="firstName">First Name</Label>
            <Input
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              className={`w-full ${errors.firstName ? 'border-red-500' : ''}`}
              placeholder="Enter your first name"
            />
            {errors.firstName && <p className="text-sm text-red-500">{errors.firstName}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="lastName">Last Name</Label>
            <Input
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              className={`w-full ${errors.lastName ? 'border-red-500' : ''}`}
              placeholder="Enter your last name"
            />
            {errors.lastName && <p className="text-sm text-red-500">{errors.lastName}</p>}
          </div>
        </div>

        {/* Education Information */}
        <div className="space-y-2">
          <Label htmlFor="college">College Name</Label>
          <Input
            id="college"
            name="college"
            value={formData.college}
            onChange={handleChange}
            className={`w-full ${errors.college ? 'border-red-500' : ''}`}
            placeholder="Enter your college name"
          />
          {errors.college && <p className="text-sm text-red-500">{errors.college}</p>}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="specialization">Specialization</Label>
            <select
              id="specialization"
              name="specialization"
              value={formData.specialization}
              onChange={handleChange}
              className={`w-full rounded-md border ${errors.specialization ? 'border-red-500' : 'border-gray-300'} 
                         bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 
                         focus:outline-none focus:ring-1 focus:ring-primary-500`}
            >
              <option value="">Select Specialization</option>
              <option value="undergraduate">Undergraduate</option>
              <option value="postgraduate">Postgraduate</option>
            </select>
            {errors.specialization && <p className="text-sm text-red-500">{errors.specialization}</p>}
          </div>

          <div className="space-y-2">
            <Label htmlFor="passoutYear">Pass-out Year</Label>
            <select
              id="passoutYear"
              name="passoutYear"
              value={formData.passoutYear}
              onChange={handleChange}
              className={`w-full rounded-md border ${errors.passoutYear ? 'border-red-500' : 'border-gray-300'} 
                         bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 
                         focus:outline-none focus:ring-1 focus:ring-primary-500`}
            >
              <option value="">Select Year</option>
              {yearOptions.map(year => (
                <option key={year} value={year}>{year}</option>
              ))}
            </select>
            {errors.passoutYear && <p className="text-sm text-red-500">{errors.passoutYear}</p>}
          </div>
        </div>

        {/* Gender Selection */}
        <div className="space-y-2">
          <Label htmlFor="gender">Gender</Label>
          <select
            id="gender"
            name="gender"
            value={formData.gender}
            onChange={handleChange}
            className={`w-full rounded-md border ${errors.gender ? 'border-red-500' : 'border-gray-300'} 
                       bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 
                       focus:outline-none focus:ring-1 focus:ring-primary-500`}
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
          {errors.gender && <p className="text-sm text-red-500">{errors.gender}</p>}
          
          {formData.gender === 'other' && (
            <Input
              name="genderOther"
              value={formData.genderOther}
              onChange={handleChange}
              placeholder="Please specify"
              className="mt-2"
            />
          )}
        </div>

        {/* Social Profiles */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <Label htmlFor="githubProfile">GitHub Profile</Label>
            <Input
              id="githubProfile"
              name="githubProfile"
              value={formData.githubProfile}
              onChange={handleChange}
              placeholder="https://github.com/username"
              type="url"
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="linkedinProfile">LinkedIn Profile</Label>
            <Input
              id="linkedinProfile"
              name="linkedinProfile"
              value={formData.linkedinProfile}
              onChange={handleChange}
              placeholder="https://linkedin.com/in/username"
              type="url"
            />
          </div>
        </div>

        {/* Date of Birth */}
        <div className="space-y-2">
          <Label htmlFor="dateOfBirth">Date of Birth</Label>
          <Input
            id="dateOfBirth"
            name="dateOfBirth"
            type="date"
            value={formData.dateOfBirth}
            onChange={handleChange}
            className="w-full"
          />
        </div>

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