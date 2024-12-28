import { Input } from "../ui/input";
import { Label } from "../ui/label";

const PersonalInfo = ({ formData, handleChange, errors }) => {
  return (
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
    </div>
  );
};

export default PersonalInfo;