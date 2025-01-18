import { Item } from '../models';

const BASE_URL = 'http://localhost:3001';

export const getItems = async (): Promise<Item[]> => {
  try {
    const data: Response = await fetch(`${BASE_URL}/items`);
    return await data.json();
  } catch (error) {
    console.warn(error);
    throw error;
  }
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

export const editItem = async ({ id, name, priority }: Item): Promise<Item> => {
  try {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
      method: 'PUT',
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

export const deleteItem = async (id: number): Promise<Item> => {
  try {
    const response = await fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
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
