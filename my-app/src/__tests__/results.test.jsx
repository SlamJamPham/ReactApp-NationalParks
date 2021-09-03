import axios from "axios";
import { render, screen, waitFor } from "@testing-library/react";
import Results from "../components/Results";
import mockData from "../services/mockData";
import { BrowserRouter } from "react-router-dom";

jest.mock("axios");

const fakeParks = mockData.get().data;

describe("Search Component with Carousel View", () => {
  test("it renders information", async () => {
    axios.get.mockResolvedValue({ data: { data: fakeParks } });
    render(
      <BrowserRouter>
        <Results match={{ params: { state: "CA" } }} />
      </BrowserRouter>
    );

    await waitFor(() =>
      expect(screen.getByText("Alcatraz Island")).toBeInTheDocument()
    );
    await waitFor(() =>
      expect(screen.getByText("Cabrillo National Monument")).toBeInTheDocument()
    );
    await waitFor(() => expect(screen.getByText("1 of 3")).toBeInTheDocument());
  });
});
