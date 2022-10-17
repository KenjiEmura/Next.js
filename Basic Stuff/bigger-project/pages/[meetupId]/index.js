import { useRouter } from "next/router";

import MeetupDetail from "../../components/meetups/MeetupDetail";

const dummy_image_url =
  "https://wiki.uzed.com.br/assets/images/1200px-Wikipedia-logo-v2.svg_.png";

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

export async function getStaticPaths() {
  return {
    fallback: false,
    paths: [
      {
        params: {
          meetupId: "m1",
        },
      },
      {
        params: {
          meetupId: "m2",
        },
      },
    ],
  };
}

export async function getStaticProps(context) {
  // Fetch data for a single meetup or do stuff
  const meetupId = context.params.meetupId;
  return {
    props: {
      meetupData: {
        id: meetupId,
        image: dummy_image_url,
        title: "A First Meetup",
        address: "Some Street 6, Some City",
        decription: "The meetup description",
      },
    },
  };
}

export default MeetupDetails;
