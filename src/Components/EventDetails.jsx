import { useParams } from "react-router-dom";
import { HashLink } from "react-router-hash-link"; 
import Button from "react-bootstrap/Button";
import "./EventDetails.css";


const events = [
  {
    title: "Coffee Art Showcase",
    date: "Sep 18, 2025",
    description: "Experience the creativity of baristas through coffee art. Watch talented artists transform every cup into a masterpiece, blending skill, precision, and passion. This event is perfect for coffee lovers who want to discover the artistic side of their favorite drink while enjoying a warm and welcoming atmosphere.",
    imgs: [
      "https://images.pexels.com/photos/25310868/pexels-photo-25310868.jpeg",
      "https://images.pexels.com/photos/30226609/pexels-photo-30226609.jpeg"
    ]
  },
  {
    title: "Special Cafe Gathering",
    date: "Sep 26, 2025",
    description:
   "Join us for a special gathering where coffee, music, and community come together. Discover our signature brews, taste limited-edition desserts, and enjoy live acoustic performances in a cozy atmosphere. This night is not just about coffee, but about building connections, sharing stories, and creating memories with friends and family. Whether you’re a coffee enthusiast or simply looking for a relaxing evening, this event promises an unforgettable experience full of warmth, flavor, and inspiration.",
    imgs: ["https://images.pexels.com/photos/18343643/pexels-photo-18343643.jpeg"]
  },
  {
    title: "Brew Masterclass",
    date: "Oct 3, 2025",
    description: "Learn advanced brewing methods with our master baristas in an exclusive, hands-on workshop designed for true coffee lovers. Discover the science behind perfect extraction, explore different brewing tools from pour-over to siphon, and master the techniques that elevate flavor and aroma. Our experts will guide you step by step, sharing professional tips usually reserved for barista competitions. Whether you’re a beginner curious about specialty coffee or a passionate enthusiast looking to refine your skills, this masterclass offers a unique chance to taste, practice, and experience coffee like never before. By the end of the session, you’ll not only enjoy your cup—you’ll understand it.",
    imgs: ["https://images.pexels.com/photos/3020919/pexels-photo-3020919.jpeg"]
  }
];

function EventDetails() {
  const { id } = useParams();
  const event = events[id];

  if (!event) {
    return <p style={{ padding: "20px" }}>Event not found!</p>;
  }

  return (
    <div className="event-details">
      <h2>{event.title}</h2>
      <p>
        <strong>Date:</strong> {event.date}
      </p>

      <div className="event-images">
        {event.imgs.map((img, index) => (
          <img key={index} src={img} alt={event.title} />
        ))}
      </div>

      <p className="event-text">{event.description}</p>

    <Button as={HashLink} smooth to="/#events" replace variant="secondary" className="back-btn">
  Back to Events
</Button>


    </div>
  );
}

export default EventDetails;
