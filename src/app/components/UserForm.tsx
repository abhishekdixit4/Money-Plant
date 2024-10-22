'use client'
import { useState } from 'react';
import axios from 'axios';

interface UserFormData {
    name: string;
    aadharNo: string;
    phoneNo: string;
    panNumber: string;
    type: string;
    cibilScore: number;
    emailId: string;
    reason: string;
}

const UserForm: React.FC = () => {
    const [formData, setFormData] = useState<UserFormData>({
        name: '',
        aadharNo: '',
        phoneNo: '',
        panNumber: '',
        type: '',
        cibilScore: 0,
        emailId: '',
        reason: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/api/users', formData);
            console.log('User created:', response.data);
        } catch (error) {
            console.error('Error creating user:', error);
        }
    };

    return (
        <form className='flex flex-col' onSubmit={handleSubmit}>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="aadharNo" placeholder="Aadhar No" onChange={handleChange} required />
            <input name="phoneNo" placeholder="Phone No" onChange={handleChange} required />
            <input name="panNumber" placeholder="PAN Number" onChange={handleChange} required />
            <select name="type" onChange={handleChange} required>
                <option value="">Select Type</option>
                <option value="real estate">Real Estate</option>
                <option value="stocks">Stocks</option>
                <option value="crypto">Crypto</option>
                <option value="forex">Forex</option>
            </select>
            <input type="number" name="cibilScore" placeholder="CIBIL Score" onChange={handleChange} required />
            <input name="emailId" placeholder="Email ID" onChange={handleChange} required />
            <textarea name="reason" placeholder="Reason" onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default UserForm;
