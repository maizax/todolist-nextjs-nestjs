'use client';

export default function Login() {
  //   const data: Response = await fetch('http://localhost:3001/users');
  //   const posts: User[] = await data.json();

  const handleSubmit = async event => {
    event.preventDefault();
    // const todoValue = event.target.todo.value;
    const todoValue = { name: 'yo12', email: event.target.todo.value };
    try {
      const result = await fetch('http://localhost:3001/users', {
        method: 'POST',
        body: JSON.stringify(todoValue),
        headers: {
          'Content-Type': 'application/json',
        },
      });
      console.log(result);
      if (result.ok) {
        console.log('Yeai!');
      } else {
        console.log('Oops! Something is wrong.');
      }
    } catch (error) {
      console.log('error', error);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h2 className="text-2xl font-semibold text-center mb-6">
        Enter your plan
      </h2>
      <form className="space-y-4" onSubmit={handleSubmit}>
        <div>
          <label className="block mb-2 text-sm font-medium text-gray-600">
            To do:
          </label>
          <input
            name="todo"
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
            placeholder="Something..."
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 text-white bg-indigo-500 rounded-md hover:bg-indigo-600 disabled:bg-black disabled:cursor-not-allowed"
          disabled={false}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
