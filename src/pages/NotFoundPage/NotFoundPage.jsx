import { Link } from "react-router-dom";
import Section from "../../components/Section/Section";

function NotFoundPage() {
  return (
    <Section>
      <Link to="/">Please, back to Home Page</Link>
    </Section>
  );
}

export default NotFoundPage;
