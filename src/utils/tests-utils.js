import { render } from "@testing-library/react";
import StoreProvider from "../contexts/store/store";
import { BrowserRouter } from "react-router-dom";

const AllTheProviders = ({ children }) => {
  return (
    <BrowserRouter>
      <StoreProvider>
        {children}
      </StoreProvider>
    </BrowserRouter>
  )
}

const customRender = (ui, options = {}) => {
  return render(ui, {
    ...options,
    wrapper: AllTheProviders
  })
}

export * from "@testing-library/react";
export { customRender as render }
