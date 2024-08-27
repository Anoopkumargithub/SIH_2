import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const UserProfile = () => {
    const [profileData, setProfileData] = useState({
        _id: '',
        gender: '',
        phone_no: '',
        current_city: '',
        role: '',
        area_of_interest: '',
        currently_looking: '',
        skills: []
    });

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const navigate = useNavigate();

    // Fetch the user's profile when the component mounts
    useEffect(() => {
        const fetchProfile = async () => {
            try {
                const token = localStorage.getItem('accessToken');
                if (!token) {
                    navigate('/login');
                    return;
                }

                const response = await axios.get('http://localhost:8000/api/users/profile/${profileData._id}', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });

                setProfileData(response.data);
                setLoading(false);
            } catch (err) {
                console.error('Error fetching profile data:', err);
                setError('Failed to load profile data.');
                setLoading(false);
            }
        };

        fetchProfile();
    }, [navigate]);

    // Handle input changes
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfileData((prevData) => ({
            ...prevData,
            [name]: value
        }));
    };

    // Handle skills change (multiple select)
    const handleSkillsChange = (e) => {
        const { options } = e.target;
        const selectedSkills = [];
        for (let i = 0; i < options.length; i++) {
            if (options[i].selected) {
                selectedSkills.push(options[i].value);
            }
        }
        setProfileData((prevData) => ({
            ...prevData,
            skills: selectedSkills
        }));
    };

    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const token = localStorage.getItem('accessToken');
            if (!token) {
                navigate('/login');
                return;
            }

            const response = await axios.put(`http://localhost:8000/api/users/profile/${profileData._id}`, profileData, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                alert('Profile updated successfully!');
            }
        } catch (err) {
            console.error('Error updating profile:', err);
            setError('Failed to update profile. Please try again.');
        }
    };

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Gender:</label>
                <select name="gender" value={profileData.gender} onChange={handleChange} disabled>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="others">Others</option>
                </select>
            </div>
            <div>
                <label>Phone Number:</label>
                <input
                    type="text"
                    name="phone_no"
                    value={profileData.phone_no}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Current City:</label>
                <input
                    type="text"
                    name="current_city"
                    value={profileData.current_city}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Role:</label>
                <select name="role" value={profileData.role} onChange={handleChange} required>
                    <option value="">Select Role</option>
                    <option value="Frontend Engineer">Frontend Engineer</option>
                    <option value="Backend Engineer">Backend Engineer</option>
                    <option value="Full Stack Engineer">Full Stack Engineer</option>
                    <option value="Data Scientist">Data Scientist</option>
                    <option value="DevOps Engineer">DevOps Engineer</option>
                    <option value="AI Engineer">AI Engineer</option>
                </select>
            </div>
            <div>
                <label>Area of Interest:</label>
                <select name="area_of_interest" value={profileData.area_of_interest} onChange={handleChange} required>
                    <option value="">Select Area of Interest</option>
                    <option value="AI">AI</option>
                    <option value="Cloud">Cloud</option>
                    <option value="Data Analytics">Data Analytics</option>
                    <option value="Machine Learning">Machine Learning</option>
                    <option value="Web Development">Web Development</option>
                    <option value="Mobile Development">Mobile Development</option>
                </select>
            </div>
            <div>
                <label>Currently Looking For:</label>
                <select name="currently_looking" value={profileData.currently_looking} onChange={handleChange} required>
                    <option value="">Select Option</option>
                    <option value="Job">Job</option>
                    <option value="Internship">Internship</option>
                </select>
            </div>
            <div>
                <label>Skills:</label>
                <select name="skills" value={profileData.skills} onChange={handleSkillsChange} multiple required>
                    <option value="JavaScript">React.js</option>
                    <option value="Node.js">Node.js</option>
                    <option value="React">MongoDB</option>
                    <option value="Angular">HTML</option>
                    <option value="Vue.js">CSS</option>
                    <option value="Python">Python</option>
                    <option value="Java">Machine Learning</option>
                    <option value="Cloud">Cloud</option>
                    <option value="C++">JavaScript</option>
                    {/* <option value="TypeScript">TypeScript</option> */}
                </select>
            </div>
            <button type="submit">Update Profile</button>
        </form>
    );
};

export default UserProfile;
