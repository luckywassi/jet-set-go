import { render, screen } from "../../utils/tests-utils";
import AboutSection from "../home/AboutSection";
import FeaturedDestinations from "../home/FeaturedDestinations";
import GallarySection from "../home/GallarySection";
import NewsletterSection from "../home/NewsletterSection";
import HeroSection from "../home/HeroSection";

describe("Home Components", () => {

  test("renders HeroSection", () => {
    render(<HeroSection />)
    const findFlightsLink = screen.getByRole('link', {
      name: /find flights/i
    })
    expect(findFlightsLink).toBeInTheDocument();
  });

  test("renders AboutSection", () => {
    render(<AboutSection />);
    const headingElement = screen.getByRole('heading', {
      name: /about us/i
    });
    expect(headingElement).toBeInTheDocument();
  });

  test("renders FeaturedDestinations", () => {
    render(<FeaturedDestinations />);
    const headingElement = screen.getByRole('heading', {
      name: /featured destinations/i
    })
    expect(headingElement).toBeInTheDocument();
  });

  test("renders gallary section", () => {
    render(<GallarySection />);
    const images = screen.getAllByRole('img');
    expect(images).toHaveLength(8);
  });

  test("renders newsletter section", () => {
    render(<NewsletterSection />);
    const emailInputBox = screen.getByRole('textbox');
    expect(emailInputBox).toHaveAttribute("type", "email");
  });
})