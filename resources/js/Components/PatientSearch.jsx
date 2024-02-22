import { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const PatientSearch = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);

    const handleSearch = async () => {
        const response = await Inertia.get('/patient-search', {
            params: { search: searchTerm }
        });
    }

    // ... logic fr debouncing/delay if desired

    return (
        <div>
            <TextField
                label="Search Patient"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />
            <Autocomplete
                options={searchResults}
                getOptionLabel={(patient => `
                    ${patient.hpercode} (${patient.patlast}, ${patient.patfirst})
                `)}
                renderInput={(params) => <TextField {...params} label="Search Result" />}
            />
        </div>
    );
};

export default PatientSearch;
