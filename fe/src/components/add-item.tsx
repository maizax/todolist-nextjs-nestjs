'use client';

import { useEffect, useState } from 'react';
import { Item } from '../models';
import { addItem, getItems } from '../services/item.service';
import Button from '../shared/components/button';
import RadioGroup from '../shared/components/radio-group';
import ItemsList from './items-list';

export default function AddItem() {
  const [data, setData] = useState<Item[]>([]);
  const [error, setError] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await getItems();
        setData(result);
      } catch (error) {
        throw error;
      }
    };
    fetchData();
  }, []);

  const onSubmitClick = async event => {
    event.preventDefault();
    const name: string = event.target.item.value;
    const priority: boolean = event.target.radio.value === 'yes' ? true : false;
    const result = await addItem(name, priority);
    setData([...data, result]);
    event.target.reset();
  };

  const onChangeInput = event => {
    const textValue: string = event.target.value;
    if (!textValue.trim()) {
      setError(true);
      return;
    }

    setError(false);
  };

  return (
    <div className="flex flex-col gap-y-4">
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Enter your future plan
        </h2>
        <form className="space-y-4" onSubmit={onSubmitClick}>
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-600">
              To do:
            </label>
            <input
              name="item"
              type="text"
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Something..."
              onChange={onChangeInput}
              maxLength={20}
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
      <ItemsList items={data} />
    </div>
  );
}
