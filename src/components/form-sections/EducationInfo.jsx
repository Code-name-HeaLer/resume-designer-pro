import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { useState, useEffect } from "react";

const coursesBySpecialization = {
  undergraduate: [
    "B.Tech",
    "B.E.",
    "B.Sc",
    "BCA",
    "B.Com",
    "BBA",
  ],
  postgraduate: [
    "M.Tech",
    "M.E.",
    "M.Sc",
    "MCA",
    "M.Com",
    "MBA",
  ],
};

const branchesBySpecialization = {
  "B.Tech": [
    "Computer Science",
    "Information Technology",
    "Electronics",
    "Mechanical",
    "Civil",
    "Electrical",
  ],
  "M.Tech": [
    "Computer Science",
    "Information Technology",
    "Electronics",
    "Mechanical",
    "Civil",
    "Electrical",
  ],
  // Add more branches for other courses
};

const EducationInfo = ({ formData, handleChange, errors }) => {
  const [availableCourses, setAvailableCourses] = useState([]);
  const [availableBranches, setAvailableBranches] = useState([]);

  useEffect(() => {
    if (formData.specialization) {
      setAvailableCourses(coursesBySpecialization[formData.specialization] || []);
    }
  }, [formData.specialization]);

  useEffect(() => {
    if (formData.course) {
      setAvailableBranches(branchesBySpecialization[formData.course] || []);
    }
  }, [formData.course]);

  const currentYear = new Date().getFullYear();
  const yearOptions = Array.from({ length: 6 }, (_, i) => currentYear + i);

  return (
    <div className="space-y-6">
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
          <Label htmlFor="course">Course</Label>
          <select
            id="course"
            name="course"
            value={formData.course}
            onChange={handleChange}
            className={`w-full rounded-md border ${errors.course ? 'border-red-500' : 'border-gray-300'} 
                       bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 
                       focus:outline-none focus:ring-1 focus:ring-primary-500`}
            disabled={!formData.specialization}
          >
            <option value="">Select Course</option>
            {availableCourses.map((course) => (
              <option key={course} value={course}>
                {course}
              </option>
            ))}
          </select>
          {errors.course && <p className="text-sm text-red-500">{errors.course}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="branch">Branch</Label>
          <select
            id="branch"
            name="branch"
            value={formData.branch}
            onChange={handleChange}
            className={`w-full rounded-md border ${errors.branch ? 'border-red-500' : 'border-gray-300'} 
                       bg-white px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-primary-500 
                       focus:outline-none focus:ring-1 focus:ring-primary-500`}
            disabled={!formData.course}
          >
            <option value="">Select Branch</option>
            {availableBranches.map((branch) => (
              <option key={branch} value={branch}>
                {branch}
              </option>
            ))}
          </select>
          {errors.branch && <p className="text-sm text-red-500">{errors.branch}</p>}
        </div>

        <div className="space-y-2">
          <Label htmlFor="cgpa">CGPA</Label>
          <Input
            id="cgpa"
            name="cgpa"
            type="number"
            min="0"
            max="10"
            step="0.01"
            value={formData.cgpa}
            onChange={handleChange}
            className="w-full"
            placeholder="Enter your CGPA (out of 10)"
          />
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
    </div>
  );
};

export default EducationInfo;