import { AddItem } from '../components/add-item';
import { getItems } from '../services/item.service';

export default async function Page() {
  const items = await getItems();
  return (
    <>
      <AddItem items={items} />
    </>
  );
}
