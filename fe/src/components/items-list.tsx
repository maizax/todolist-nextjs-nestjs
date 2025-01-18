import { format } from 'date-fns';
import { CiEdit } from 'react-icons/ci';
import { MdDeleteForever } from 'react-icons/md';
import { Item } from '../models';

export default function ItemsList({ items }: { items: Item[] }) {
  const onEditClick = (id: number) => {
    console.log(id);
  };

  return (
    <div className="relative">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
          <tr>
            <th scope="col" className="px-6 py-3">
              Item name
            </th>
            <th scope="col" className="px-6 py-3">
              Is priority?
            </th>
            <th scope="col" className="px-6 py-3">
              Date created
            </th>
            <th scope="col" className="px-6 py-3">
              Actions
            </th>
          </tr>
        </thead>
        <tbody>
          {items.length ? (
            items.map(item => (
              <tr key={item.id} className="bg-white border-b">
                <th className="px-6 py-4">{item.name}</th>
                <td className="px-6 py-4">{item.priority ? 'Yes' : 'No'}</td>
                <td className="px-6 py-4">
                  {format(item.createdAt, 'LLLL d, yyyy')}
                </td>
                <td className="px-6 py-4 flex ">
                  <CiEdit
                    size={30}
                    className="cursor-pointer"
                    onClick={() => onEditClick(item.id)}
                  />
                  <MdDeleteForever size={30} className="cursor-pointer" />
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <th>No results</th>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
