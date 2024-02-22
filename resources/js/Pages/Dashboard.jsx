import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { Head } from '@inertiajs/react';
import PatientSearch from '@/Components/PatientSearch';
import PatientSearchResults from '@/Components/PatientSearchResults';
import React, {useState, useEffect } from 'react';

export default function Dashboard({ auth }) {

    const [patients, setPatients] = useState([]);

    useInsertionEffect(() => {
        const fetchData = async () => {
            const response = await Inertia.get('/patient-search');
            setPatients(response.data.patients);
        }
        fetchData(); // Call the function to trigger the fetch
    },[]); // Empty dependency array: Fetch only on component mount

    return (
        <AuthenticatedLayout
            user={auth}
            header={<h2 className="font-semibold text-xl text-gray-800 leading-tight">Dashboard</h2>}
        >
            <Head title="Dashboard" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                        <PatientSearch  />
                        <PatientSearchResults patients={patients}/>
                    </div>
                </div>
            </div>


        </AuthenticatedLayout>
    );
}
