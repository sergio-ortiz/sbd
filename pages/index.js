async function handleSubmit(e) {
  e.preventDefault();
  const response = await fetch("./api/get-business-by-name", {
    method: "POST",
    body: JSON.stringify({
      name: e.target.name.value,
    }),
  });
  const result = await response.json();

  alert(result.data);
}

export default function Home() {
  return (
    <div>
      <h1>Check name availability</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Business Name:</label>
        <input type="text" id="name" name="name" />
        <button type="submit">Check</button>
      </form>
      <p>availability?</p>
    </div>
  );
}
