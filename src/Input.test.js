import { fireEvent, render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import InputField from "./InputField";

describe("Input Component", () => {
  it("rendered input", () => {
    render(<InputField showDiv={false} />);
    const input = screen.getByTestId("searchBar");
    expect(input).toBeTruthy();
  });
  it("rendered div", () => {
    render(<InputField showDiv={true} />);
    const div = screen.getByTestId("divWeWantToShow");
    expect(div).toBeTruthy();
  });

  it("do not render div", () => {
    render(<InputField showDiv={true} />);
    const div = screen.queryByTestId("divWeWantToShow");
    expect(div).toBeFalsy();
  });

  it("changed on input causes change on header", async () => {
    await act(async () => {
      render(<InputField showDiv={true} />);
      const input = screen.getByTestId("searchBar");
      const header = screen.getByTestId("displaySearch");
      const inputWord = "Justin";
      await fireEvent.change(input, { target: { value: inputWord } });
      expect(header.innerHTML).toBe(inputWord);
    });
  });
});
