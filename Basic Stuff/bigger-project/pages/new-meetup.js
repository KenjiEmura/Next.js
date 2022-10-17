import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const onAddMeetupForm = (enteredData) => {
    console.log("Entred data: ", enteredData);
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupForm} />;
};

export default NewMeetup;
