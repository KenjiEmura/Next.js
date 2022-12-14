async function handler(req, res) {
  if (req.method === "POST") {
    const data = req.body;

    const { title, image, address, description } = data;

    const httpRequestConfig = {
      method: "POST",
      body: data,
      header: {
        "Content-Type": "application/json",
      },
    };

    const response = await fetch(
      "https://react-dummy-project.firebasedatabase.app/meetups.json",
      httpRequestConfig
    );

    res.status(201).json({ message: "Meetup saved!" });
  }
}

export default handler;
