import { useRouter } from "next/router";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const dummy_image_url = "https://google.png";
const firebaseUrl =
  "https://react-dummy-project.firebasedatabase.app/meetups.json";

const MeetupDetails = (props) => {
  return (
    <MeetupDetail
      image={props.meetupData.image}
      title={props.meetupData.title}
      address={props.meetupData.address}
      decription={props.meetupData.decription}
    />
  );
};

// Generate te static pages
export async function getStaticPaths() {
  const response = await fetch(firebaseUrl, { method: "GET" });
  const data = await response.json();
  let idList = [];
  for (const key in data) {
    idList.push({ params: { meetupId: key.toString() } });
  }

  return {
    fallback: false,
    paths: idList,
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup or do stuff
  const meetupId = context.params.meetupId;

  const meetupData = await customFetchData(meetupId);

  return {
    props: {
      meetupData,
    },
  };
}

// ↓↓↓ ADD 'export' if you want to use the ServerSideProps
async function getServerSideProps(context) {
  // const req = context.req;
  // const res = context.res;
  // fetch data from API or do stuff
  const meetupId = context.params.meetupId;

  const meetupData = await customFetchData(meetupId);

  return {
    props: {
      meetupData,
    },
  };
}

async function customFetchData(meetupId) {
  const response = await fetch(firebaseUrl, { method: "GET" });
  const data = await response.json();

  let meetupData = {
    id: meetupId,
    image: dummy_image_url,
    title: "A First Meetup",
    address: "Some Street 6, Some City",
    decription: "The meetup description",
  };

  for (const key in data) {
    if (key === meetupId) {
      meetupData = data[key];
    }
  }
  return meetupData;
}

export default MeetupDetails;
