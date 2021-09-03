import { render, screen } from "@testing-library/react";
import ResultCard from "../components/ResultCard";
import mockData from "../services/mockData";

jest.mock("axios");

const fakeParks = mockData.get().data;

describe("Single Search Card Component", () => {
  test("it renders information", async () => {
    //  axios.get.mockResolvedValue(fakeParks);
    render(<ResultCard parkInfo={fakeParks[0]} />);

    expect(screen.getByText("Alcatraz Island")).toBeInTheDocument();
  });
});
