import { render } from "@testing-library/react";
import Root from "./root.component";

describe("Root component", () => {
  it("should be in the document", () => {
    const { getByText, container } = render(<Root name="Testapp" />);
    expect(getByText(/es /i)).toBeInTheDocument();
    expect(container).toMatchSnapshot();
  });
});
