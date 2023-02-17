import { render, screen } from "@testing-library/react";
import Async from "./Async";

describe("Async component test:", () => {
  test("On succesful request, renders posts.", async () => {
    window.fetch = jest.fn().mockResolvedValueOnce({
      json: () => [
        { id: "id1", title: "title1" },
        { id: "id2", title: "title2" },
        { id: "id3", title: "title3" },
      ],
    });
    render(<Async />);

    const listItems = await screen.findAllByRole("listitem");
    expect(listItems.length).toBeGreaterThan(2);
  });
});
