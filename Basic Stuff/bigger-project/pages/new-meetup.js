import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const onAddMeetupForm = async (enteredData) => {
    console.log("Entred data: ", enteredData);
    const response = await fetch("/api/new-meetup", {
      method: "POST",
      body: JSON.stringify(enteredData),
      header: {
        "Content-Type": "application/json",
      },
    });
    const data = await response.json();

    console.log("data: ", data);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupForm} />;
};

export default NewMeetup;
