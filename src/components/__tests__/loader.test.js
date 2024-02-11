import { render, screen } from "@testing-library/react";
import Loader from "../loader/Loader";

test("renders loader", () => {
  render(<Loader />);
  const loadingText = screen.getByText('Loading...');
  expect(loadingText).toBeInTheDocument();
});