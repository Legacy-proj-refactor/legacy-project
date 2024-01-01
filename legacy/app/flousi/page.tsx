"use client"


import React, { useState, ChangeEvent, FormEvent } from 'react';
import axios, { AxiosError } from 'axios';
import Link from 'next/link';

// Define the Payment component
const Payment: React.FC = () => {
  // Initialize state for the form
  const [form, setForm] = useState<Record<string, string>>({});

  // Handle form input changes
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  // Handle form submission
  const onSubmit = async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log('clicked');

    try {
      // Make a POST request to the payment endpoint
      const response = await axios.post('http://localhost:8000/pay', form);

      console.log('eee');
      // Extract the result from the response data
      const { result } = response.data;
      window.location.href = result.link;
      {console.log(result.link)}
    } catch (err) {
      // Handle errors
      if (axios.isAxiosError(err)) {
        const axiosError = err as AxiosError;
        console.error('AxiosError:', axiosError.code, axiosError.message);
      } else {
        console.error('Error:', err);
      }
    }
  };


  console.log(form);
 
  // Render the component
  return (
    <div>
      <div className="p-4">
        <h2>Amount</h2>
        <form className="m-4">
          {/* Input field for the amount */}
          <input
            type="text"
            name="amount"
            className="form-control"
            onChange={handleChange}
          />
          {/* Submit button */}
          <Link href="/succes">
          <button
            className="btn btn-primary mt-4"
            // onClick={onSubmit}
            type="submit"
          >
            Submit and continue
          </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

// Export the Payment component
export default Payment;
