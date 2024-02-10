import { render } from "@testing-library/react";
import StoreProvider from "../contexts/store/store";

const AllTheProviders = ({ children }) => {
  return (
    <StoreProvider>
      {children}
    </StoreProvider>
  )
}

const customRender = (ui, options = {}) => {
  delete options.wrapper;
  return render(ui, {
    wrapper: AllTheProviders,
    ...options
  })
}

export * from "@testing-library/react";
export { customRender as render }
