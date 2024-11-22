import React, { useState } from 'react';
import axios from 'axios';
import AuthenticatedLayout from '@/Layouts/AuthenticatedLayout';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const UserManagement = () => {
    const [file, setFile] = useState(null);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');
    const [searchTerm, setSearchTerm] = useState(''); // State for the search term
    const [showForm, setShowForm] = useState(false); // State to control form visibility

    const handleFileChange = (event) => {
        setFile(event.target.files[0]);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('file', file);
        formData.append('name', name);
        formData.append('description', description);

        try {
            const response = await axios.post('/uploadModule', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            // Show success toast in the lower-right corner
            toast.success(response.data.message, {
                position: "bottom-right",
                autoClose: 3000, // Auto-close after 3 seconds
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });

            // Reset form
            setFile(null);
            setName('');
            setDescription('');
            setShowForm(false); // Hide the form after submission
        } catch (error) {
            // Show error toast in the lower-right corner
            toast.error(error.response?.data?.message || 'An error occurred', {
                position: "bottom-right",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
            });
        }
    };

    const handleAddModuleClick = () => {
        setShowForm(!showForm);
    };

    const handleSearch = () => {
        // Perform the search functionality (can be customized based on requirements)
        toast.info(`Searching for "${searchTerm}"`, {
            position: "bottom-right",
            autoClose: 3000,
        });
    };

    return (
        <AuthenticatedLayout>
            <div style={{ padding: '20px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '20px' }}>
                    <h1>Modules</h1>
                    <div style={{ display: 'flex', gap: '10px' }}>
                        <input
                            type="text"
                            placeholder="Search modules..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            style={{
                                padding: '8px',
                                border: '1px solid #ccc',
                                borderRadius: '4px',
                                marginRight: '10px',
                            }}
                        />
                        <button
                            onClick={handleSearch}
                            style={{
                                padding: '8px 12px',
                                backgroundColor: '#6c757d',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            Search
                        </button>
                        <button
                            onClick={handleAddModuleClick}
                            style={{
                                padding: '8px 12px',
                                backgroundColor: showForm ? '#dc3545' : '#007bff',
                                color: 'white',
                                border: 'none',
                                borderRadius: '4px',
                                cursor: 'pointer',
                            }}
                        >
                            {showForm ? 'Cancel' : 'Add Module'}
                        </button>
                    </div>
                </div>

                {showForm && (
                    <div style={{
                        backgroundColor: 'rgba(255, 255, 255, 0.8)', 
                        padding: '20px',
                        borderRadius: '8px',
                        boxShadow: '0 2px 10px rgba(0, 0, 0, 0.5)',
                        maxWidth: '600px',
                        margin: '150px auto', 
                        textAlign: 'center'
                    }}>
                        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <input
                                type="text"
                                placeholder="Module Name"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                                style={{
                                    padding: '8px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                }}
                            />
                            <input
                                type="text"
                                placeholder="Module Description"
                                value={description}
                                onChange={(e) => setDescription(e.target.value)}
                                required
                                style={{
                                    padding: '8px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                }}
                            />
                            <input
                                type="file"
                                onChange={handleFileChange}
                                required
                                style={{
                                    padding: '8px',
                                    border: '1px solid #ccc',
                                    borderRadius: '4px',
                                }}
                            />
                            <button
                                type="submit"
                                style={{
                                    padding: '8px 16px', // Increased padding for better size
                                    backgroundColor: '#28a745',
                                    color: 'white',
                                    border: 'none',
                                    borderRadius: '4px',
                                    cursor: 'pointer',
                                    width: '150px', // Fixed width for uniformity
                                    alignSelf: 'center' // Center align the button
                                }}
                            >
                                Upload
                            </button>
                        </form>
                    </div>
                )}
            </div>
            <ToastContainer />
        </AuthenticatedLayout>
    );
};

export default UserManagement;
