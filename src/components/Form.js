import React from "react";

function Form({
  firstName,
  lastName,
  handleFirstNameChange,
  handleLastNameChange,
}) {
  // const [firstName, setFirstName] = useState("John");
  // const [lastName, setLastName] = useState("Henry");

  // function handleFirstNameChange(e) {
  //   setFirstName(e.target.value);
  // }
  // function handleLastNameChange(e) {
  //   setLastName(e.target.value);
  // }

  // experimenting with checked
  // const [newsletter, setNewsletter] = useState(false);

  // function handleNewsletterChange(e) {
  //   setNewsletter(e.target.checked);
  // }

  return (
    <form>
      <input type="text" value={firstName} onChange={handleFirstNameChange} />
      <input type="text" value={lastName} onChange={handleLastNameChange} />
      <button type="submit">Submit</button>
    </form>

    // experimenting with checked
    // <form>
    //   <label htmlFor="newsletter">Subscribe to our Newsletter?</label>
    //   <input
    //     type="checkbox"
    //     id="newsletter"
    //     checked={newsletter}
    //     onChange={handleNewsletterChange}
    //   />
    //   <button type="submit">Submit</button>
    // </form>
  );
}

export default Form;
