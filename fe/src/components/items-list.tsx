import { Item } from '../models';

export default function ItemsList({ items }: { items: Item[] }) {
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
