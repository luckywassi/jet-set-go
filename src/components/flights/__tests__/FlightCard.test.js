import { render, screen } from '@testing-library/react';
import FlightCard from "../FlightCard";
import { testFlight } from "../../../lib/test-data";

test('renders flight card correctly', () => {
  render(<FlightCard flight={testFlight} />);
  const ele = screen.getByText(/JetSpice/i);
  expect(ele).toBeInTheDocument();
});