'use client';

import { useState } from 'react';
import Button from '../shared/components/button';
import RadioGroup from '../shared/components/radio-group';

export default function AddItem() {
  const [error, setError] = useState(true);

  const handleSubmit = async event => {
    event.preventDefault();
    const name: string = event.target.item.value;
    const priority: boolean = event.target.radio.value === 'yes' ? true : false;

    try {
      const result = await fetch('http://localhost:3001/items', {
        method: 'POST',
        body: JSON.stringify({ name, priority }),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(result);
      if (result.ok) {
        console.log('Yeai!');
      } else {
        console.log('Oops! Something is wrong.');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  const handleChange = event => {
    const textValue: string = event.target.value;
    if (!textValue.trim()) {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Enter your future plan
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            To do:
          </label>
          <input
            name="item"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Something..."
            onChange={handleChange}
          />
        </div>
        <div>
          <p className=" mb-2 text-sm font-medium text-gray-600">
            Is this priority task?
          </p>
          <RadioGroup />
        </div>
        <Button error={error} text="Add" />
      </form>
    </div>
  );
}
