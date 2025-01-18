import { User } from '../models';

export default async function UsersList() {
  const data: Response = await fetch('http://localhost:3001/items');
  const posts: User[] = await data.json();

  return (
    <ul>
      {posts.map(post => (
        <li key={post.email}>{post.name}</li>
      ))}
    </ul>
  );
}
