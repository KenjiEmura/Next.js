import { useRouter } from "next/router";

import NewMeetupForm from "../components/meetups/NewMeetupForm";

const NewMeetup = () => {
  const router = useRouter();
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

    router.push("/");
  };
  return <NewMeetupForm onAddMeetup={onAddMeetupForm} />;
};

export default NewMeetup;
