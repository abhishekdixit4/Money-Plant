'use client'
import { useState } from 'react';
import axios from 'axios';

const TakeLoanPage = () => {
    const [formData, setFormData] = useState({
        name: '',
        aadharNo: '',
        phoneNo: '',
        panNumber: '',
        email: '',
        cibilScore: 0,
        reason: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('Form data before submission:', formData); // Log form data for debugging
    
        if (Object.values(formData).some(field => field === '')) {
          console.error('Form data is incomplete.');
          return; // Prevent submission if any field is empty
        }
    
        try {
          const response = await fetch('http://localhost:8080/api/users', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData),
          });
    
          if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
          }
    
          const data = await response.json();
          console.log('User created:', data);
        } catch (error) {
          console.error('Error creating user:', error);
          // Consider displaying a user-friendly error message here
        }
      };

    return (
        <form onSubmit={handleSubmit} className='flex flex-col'>
            <h2>Take Loan</h2>
            <input name="name" placeholder="Name" onChange={handleChange} required />
            <input name="aadharNo" placeholder="Aadhar No" onChange={handleChange} required />
            <input name="phoneNo" placeholder="Phone No" onChange={handleChange} required />
            <input name="panNumber" placeholder="PAN Number" onChange={handleChange} required />
            <input name="email" placeholder="Email" type="email" onChange={handleChange} required />
            <input type="number" name="cibilScore" placeholder="CIBIL Score" onChange={handleChange} required />
            <textarea name="reason" placeholder="Reason" onChange={handleChange} required></textarea>
            <button type="submit">Submit</button>
        </form>
    );
};

export default TakeLoanPage;
