async function handleSubmit(e, setState) {
  e.preventDefault();
  const response = await fetch("./api/get-business-by-name", {
    method: "POST",
    body: JSON.stringify({
      name: e.target.name.value,
    }),
  });
  const result = await response.json();

  setState(result.data);
}

export default function CreateBusinessForm({ setState }) {
  return (
    <form onSubmit={(e) => handleSubmit(e, setState)}>
      <label htmlFor="name">Business: </label>
      <input type="text" id="name" name="name" placeholder="Name" required />
      <button type="submit">Create</button>
    </form>
  );
}
