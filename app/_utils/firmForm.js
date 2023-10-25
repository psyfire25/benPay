"use client"
import React, { useState } from 'react';
// import { addFirmToServer } from './api'; // Import your function for adding a firm to the server
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label'; // Import your UI components

const FirmForm = () => {
  const [firmName, setFirmName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleFormSubmit = async (event) => {
    event.preventDefault();
    setIsLoading(true);

    try {
      // Call your API function to add a firm to the server
      await addFirmToServer(firmName);
      // Handle success, e.g., show a success message or redirect the user
    } catch (error) {
      // Handle error, e.g., show an error message to the user
      console.error('Error adding firm:', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleFormSubmit}>
      <h1>Add Firms</h1>
      <div>
        <Label htmlFor="firm">Add Firm:</Label>
        <Input
          id="firm"
          name="firm"
          value={firmName}
          onChange={(e) => setFirmName(e.target.value)}
        />
        <Button type="submit" disabled={isLoading}>
          {isLoading ? 'Adding...' : 'Add'}
        </Button>
      </div>
    </form>
  );
};

export default FirmForm;
