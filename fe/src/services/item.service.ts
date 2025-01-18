import { Item } from '../models';

const BASE_URL = 'http://localhost:3001';

export const getItems = async (): Promise<Item[]> => {
  const data: Response = await fetch(`${BASE_URL}/items`);
  return await data.json();
};

export const addItem = async (
  name: string,
  priority: boolean,
): Promise<Item> => {
  try {
    const response = await fetch(`${BASE_URL}/items`, {
      method: 'POST',
      body: JSON.stringify({ name, priority }),
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.json();
  } catch (error) {
    console.warn(error);
    throw error;
  }
};
