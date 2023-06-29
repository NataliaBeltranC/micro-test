import { render } from "@testing-library/react";
import Root from "./root.component";

jest.mock("")
describe("Root component", () => {

  beforeEach(() => {
    jest.resetAllMocks();
  })
  
  it("Should detect node HTML", () => {
    document.body.innerHTML = '<div id="detail"></div>';
    const scrollIntoViewMock = jest.fn();
    HTMLElement.prototype.scrollIntoView = scrollIntoViewMock;
    render(<Root name="Testapp" />);
    expect(scrollIntoViewMock).toBeCalledWith({ behavior: 'smooth' });
  });
 
});
