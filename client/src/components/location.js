import React,{useState} from 'react';
import PlacesAutocomplete, {
    geocodeByAdress,
    geoLatLng
} from "react-places-autocomplete";

export default function Location() {
    const [address, setAddress] = useState("");
    const [coordinates, setCoordinates] = useState({
      lat: null,
      lon: null
    });
    const handleSelect = async value => {
      const results = geocodeByAdress(value);
      console.log(results);
    };
    return (
        <div>
            <PlacesAutocomplete 
                value={address} 
                onChange={setAddress}
                onSelect={handleSelect}>
                {({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (
          <div>
            <input
              {...getInputProps({
                placeholder: 'Search Places ...',
                className: 'location-search-input',
              })}
            />
            <div className="autocomplete-dropdown-container">
              {loading && <div>Loading...</div>}
              {suggestions.map(suggestion => {
                const className = suggestion.active
                  ? 'suggestion-item--active'
                  : 'suggestion-item';
                // inline style for demonstration purpose
                const style = suggestion.active
                  ? { backgroundColor: '#fafafa', cursor: 'pointer' }
                  : { backgroundColor: '#ffffff', cursor: 'pointer' };
                return (
                  <div
                    {...getSuggestionItemProps(suggestion, {
                      className,
                      style,
                    })}
                  >
                    <span>{suggestion.description}</span>
                  </div>
                );
              })}
            </div>
          </div>
        )}
            </PlacesAutocomplete>
        </div>
    )
}