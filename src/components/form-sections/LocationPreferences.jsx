import { useState, useEffect } from 'react';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Label } from "../ui/label";

const LocationPreferences = ({ formData, handleChange }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    fetchCountries();
  }, []);

  const fetchCountries = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://restcountries.com/v3.1/all');
      const data = await response.json();
      const sortedCountries = data
        .map(country => ({
          name: country.name.common,
          code: country.cca2
        }))
        .sort((a, b) => a.name.localeCompare(b.name));
      setCountries(sortedCountries);
    } catch (error) {
      console.error('Error fetching countries:', error);
    } finally {
      setLoading(false);
    }
  };

  // For demonstration, using some sample states and cities
  const sampleStates = {
    US: ['California', 'New York', 'Texas'],
    IN: ['Maharashtra', 'Karnataka', 'Delhi'],
    GB: ['England', 'Scotland', 'Wales']
  };

  const sampleCities = {
    California: ['San Francisco', 'Los Angeles', 'San Diego'],
    Maharashtra: ['Mumbai', 'Pune', 'Nagpur'],
    England: ['London', 'Manchester', 'Birmingham']
  };

  const handleCountryChange = (value) => {
    handleChange({ target: { name: 'preferredCountry', value } });
    setStates(sampleStates[value] || []);
    handleChange({ target: { name: 'preferredState', value: '' } });
    setCities([]);
  };

  const handleStateChange = (value) => {
    handleChange({ target: { name: 'preferredState', value } });
    setCities(sampleCities[value] || []);
    handleChange({ target: { name: 'preferredCity', value: '' } });
  };

  return (
    <div className="space-y-6">
      <h3 className="text-lg font-semibold text-gray-700 mb-4">Location Preferences</h3>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="space-y-2">
          <Label htmlFor="preferredCountry">Preferred Country</Label>
          <Select
            value={formData.preferredCountry}
            onValueChange={handleCountryChange}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a country" />
            </SelectTrigger>
            <SelectContent>
              {countries.map((country) => (
                <SelectItem key={country.code} value={country.code}>
                  {country.name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredState">Preferred State</Label>
          <Select
            value={formData.preferredState}
            onValueChange={(value) => handleStateChange(value)}
            disabled={!formData.preferredCountry}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a state" />
            </SelectTrigger>
            <SelectContent>
              {states.map((state) => (
                <SelectItem key={state} value={state}>
                  {state}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        <div className="space-y-2">
          <Label htmlFor="preferredCity">Preferred City</Label>
          <Select
            value={formData.preferredCity}
            onValueChange={(value) => handleChange({ target: { name: 'preferredCity', value } })}
            disabled={!formData.preferredState}
          >
            <SelectTrigger className="w-full">
              <SelectValue placeholder="Select a city" />
            </SelectTrigger>
            <SelectContent>
              {cities.map((city) => (
                <SelectItem key={city} value={city}>
                  {city}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
};

export default LocationPreferences;