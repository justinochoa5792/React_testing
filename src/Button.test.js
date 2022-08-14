import {
  fireEvent,
  getAllByTestId,
  render,
  screen,
} from "@testing-library/react";
import { act } from "react-dom/test-utils";
import Button from "./components/Button";

describe("Button Component", () => {
  it("rendered button", () => {
    render(<Button />);
    const button = screen.getByTestId("button");
    expect(button).toBeTruthy();
  });
  it("render one btn before btn click", () => {
    render(<Button />);
    const buttonList = screen.getAllByTestId("button");
    expect(buttonList).toHaveLength(1);
  });

  it("render two btns after btn click", async () => {
    await act(async () => {
      render(<Button />);
      const buttonList = screen.getAllByTestId("button");
      await fireEvent.click(buttonList[0]);
      expect(screen.getAllByTestId("button")).toHaveLength(2);
    });
  });
});
