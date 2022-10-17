import { useState, useEffect } from "react";

import MeetupList from "../components/meetups/MeetupList";

const dummy_image_url =
  "https://wiki.uzed.com.br/assets/images/1200px-Wikipedia-logo-v2.svg_.png";

const DUMMY_MEETUPS = [
  {
    id: "m1",
    title: "A First Meetup",
    image: dummy_image_url,
    address: "Some address 5, 1234 Some City",
    description: "Amazing event coming soon!",
  },
  {
    id: "m2",
    title: "A Second Meetup",
    image: dummy_image_url,
    address: "Some address 5, 1234 Some City",
    description: "Amazing event coming soon!",
  },
  {
    id: "m3",
    title: "A Third Meetup",
    image: dummy_image_url,
    address: "Some address 5, 1234 Some City",
    description: "Amazing event coming soon!",
  },
];

const HomePage = () => {
  const [laodedMeetups, setLoadedMeetups] = useState([]);
  useEffect(() => {
    // Send request to fetch the data
    setLoadedMeetups(DUMMY_MEETUPS);
  }, []);

  return <MeetupList meetups={laodedMeetups} />;
};

export default HomePage;
