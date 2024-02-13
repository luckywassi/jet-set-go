import { render, screen, within } from '../../utils/tests-utils';
import Flights from "../flights";
import userEvent from '@testing-library/user-event';

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
    const flightCards = await screen.findAllByTestId("flight-card", {}, { timeout: 2000 });

    const fromInput = screen.getByRole('textbox', {
      name: /from/i
    });
    const toInput = screen.getByRole('textbox', {
      name: /to/i
    });
    const airlineSection = screen.getByRole('button', {
      name: /select airline/i
    });
    const dateInput = screen.getByPlaceholderText("DD-MM-YYYY");

    expect(fromInput).toBeInTheDocument();
    expect(toInput).toBeInTheDocument();
    expect(airlineSection).toBeInTheDocument();
    expect(dateInput).toBeInTheDocument();
    expect(flightCards).toHaveLength(50);

    await userEvent.click(airlineSection);

    const spiceJetOption = await screen.findByRole('button', {
      name: /jetspice/i
    });

    expect(spiceJetOption).toBeInTheDocument();

    await userEvent.click(spiceJetOption);

    const flightResults = await screen.findByTestId("flight-results");
    const airIndiaFlights = within(flightResults).queryAllByText(/air india/i);
    expect(airIndiaFlights).toHaveLength(0);

  });

})
