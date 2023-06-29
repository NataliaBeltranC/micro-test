import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText, container } = render(<Root name="Testapp" />);
    expect(getByText(/Rick and Morty/i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
