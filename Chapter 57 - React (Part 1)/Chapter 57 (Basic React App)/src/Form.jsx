function handleFormSubmit(event) {
  event.preventDefault();
  alert("Form Submitted Successfully !");
}

export default function Form() {
  return (
    <form onSubmit={handleFormSubmit}>
      <button>Submit</button>
    </form>
  );
}
