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

const HomePage = (props) => {
  return <MeetupList meetups={props.meetups} />;
};

export async function getStaticProps() {
  // fetch data from API
  return {
    props: {
      meetups: DUMMY_MEETUPS,
    },
  };
}

export default HomePage;
