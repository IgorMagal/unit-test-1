import { render, screen } from "@testing-library/react";
import Greetings from "./Greetings";
import userEvent from "@testing-library/user-event";

describe("Greetings component tests.", () => {
  test("must display a Greetings text", () => {
    //Arrange
    render(<Greetings />);

    // Act

    // Assert
    const greetTxt = screen.getByText("Greetings!", { exact: true });
    expect(greetTxt).toBeInTheDocument();
  });

  test("while changed is false, displays 'good to see you'.", () => {
    //Arrange
    render(<Greetings />);

    // Act

    // Assert
    const msgTxt = screen.getByText("good to see you", { exact: false });
    expect(msgTxt).toBeInTheDocument();
  });

  test("while changed is false, don't display 'creepy to see you'.", () => {
    //Arrange
    render(<Greetings />);

    // Act

    // Assert
    const msgTxt = screen.queryByText("creepy to see you", { exact: false });
    expect(msgTxt).toBeNull();
  });

  test("while changed is true, displays 'creepy to see you'.", () => {
    //Arrange
    render(<Greetings />);

    // Act
    const btn = screen.getByRole("button");
    userEvent.click(btn);
    // Assert
    const msgTxt = screen.getByText("creepy to see you", { exact: false });
    expect(msgTxt).toBeInTheDocument();
  });

  test("while changed is true, don't display 'good to see you'.", () => {
    //Arrange
    render(<Greetings />);

    // Act
    const btn = screen.getByRole("button");
    userEvent.click(btn);
    // Assert
    const msgTxt = screen.queryByText("good to see you", { exact: false });
    expect(msgTxt).toBeNull();
  });
});
