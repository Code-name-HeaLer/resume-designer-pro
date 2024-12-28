import { Input } from "../ui/input";
import { Label } from "../ui/label";

const SocialProfiles = ({ formData, handleChange }) => {
  return (
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
  );
};

export default SocialProfiles;