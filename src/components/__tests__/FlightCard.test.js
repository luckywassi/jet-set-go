import { render, screen } from '../../utils/tests-utils';
import FlightCard from "../flights/FlightCard";
import { testFlight } from "../../lib/test-data";

test('renders flight card correctly', () => {
  render(<FlightCard flight={testFlight} />);
  const ele = screen.getByText(/JetSpice/i);
  expect(ele).toBeInTheDocument();
});