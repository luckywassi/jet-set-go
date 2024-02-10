import { render, screen } from '../../../utils/tests-utils';
import Flights from "../index";

global.scrollTo = jest.fn();

describe("flight-page", () => {
  test('renders flight page correctly', () => {
    render(<Flights />);
    const ele = screen.getByRole('button', {
      name: /select airline/i
    })
    expect(ele).toBeInTheDocument();
  });

  test('scrolls to top on load', () => {
    render(<Flights />);
    expect(global.scrollTo).toHaveBeenCalled();
  });

  test('renders a list of flights', async () => {
    render(<Flights />);
    const flightCards = await screen.findAllByTestId("flight-card");
    console.log(flightCards)
    expect(flightCards).toBeInTheDocument();
  });

})