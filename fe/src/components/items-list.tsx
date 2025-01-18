import { Item } from '../models';

export default async function ItemsList() {
  const data: Response = await fetch('http://localhost:3001/items');
  const items: Item[] = await data.json();

  return (
    <ul>
      {items.map(item => (
        <li key={item.id}>
          {item.name} + {item.priority ? 'helo' : 'no'}
        </li>
      ))}
    </ul>
  );
}
