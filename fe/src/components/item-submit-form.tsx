'use client';

import { ChangeEvent, FormEvent, useState } from 'react';
import { Item } from '../models';
import { addItem } from '../services/item.service';
import { RadioGroup } from './shared/radio-group';
import { Button } from './shared/button';

export const ItemSubmitForm = ({
  items,
  setItems,
}: {
  items: Item[];
  setItems: (items: Item[]) => void;
}) => {
  const [disabled, setDisabled] = useState<boolean>(true);

  const onSubmitClick = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get('name') as string;
    const priority = formData.get('radio') === 'yes';
    const result = await addItem(name, priority);
    setItems([...items, result]);
    (event.target as HTMLFormElement).reset();
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    return event.target.value ? setDisabled(false) : setDisabled(true);
  };

  return (
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
            name="name"
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
        <Button disabled={disabled} text="Add" />
      </form>
    </div>
  );
};
