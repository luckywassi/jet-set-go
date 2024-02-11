import { screen, render } from "../../utils/tests-utils";
import Header from "../site-layout/Header";
import Footer from "../site-layout/Footer";
import SiteLayout from "../site-layout";

describe("Site Layout", () => {
  test("Renders Header Correctly", () => {
    render(<Header />);
    const logo = screen.getByRole('link', {
      name: /jetsetgo/i
    });
    expect(logo).toBeInTheDocument();
  });

  test("Renders Footer Correctly", () => {
    render(<Footer />);
    const ele = screen.getByText(/copyright © company \. all rights reserved/i)
    expect(ele).toBeInTheDocument();
  });

  test("Renders both Header Footer Correctly", () => {
    render(<SiteLayout />);
    const logo = screen.getByRole('link', {
      name: /jetsetgo/i
    });
    const ele = screen.getByText(/copyright © company \. all rights reserved/i)
    expect(logo).toBeInTheDocument();
    expect(ele).toBeInTheDocument();
  })
})