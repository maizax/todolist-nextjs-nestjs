'use client';

import { useState } from 'react';
import { Item } from '../models';
import { ItemsList } from './items-list';
import { ItemSubmitForm } from './item-submit-form';

export const AddItem = ({ items }: { items: Item[] }) => {
  const [clientItems, setClientItems] = useState<Item[]>(items);

  return (
    <div className="flex flex-col gap-y-4">
      <ItemSubmitForm items={clientItems} setItems={setClientItems} />
      <ItemsList items={clientItems} setItems={setClientItems} />
    </div>
  );
};
