import { render, screen } from "@testing-library/react"
import NotFound from "../NotFound";

test("Renders Not found card correctly", () => {
  const text = "Test Text";
  render(<NotFound text={text} />);
  const textEle = screen.getByText(text);
  expect(textEle).toBeInTheDocument();
})