import { render, screen } from "@testing-library/react";
import ReportCard from "../components/ReportCard";
import { act, fireEvent, cleanup, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

afterEach(cleanup);

describe("Report Form Component", () => {
  test("it renders information", async () => {
    render(<ReportCard isOpen={true}></ReportCard>);

    expect(screen.getByText("Email Address")).toBeInTheDocument();
    expect(screen.getByText("Park Name")).toBeInTheDocument();
    expect(screen.getByText("Field")).toBeInTheDocument();
    expect(screen.getAllByText(/Description/i)).toHaveLength(2);
  });

  test("Invalid Email", async () => {
    render(<ReportCard isOpen={true}></ReportCard>);

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/email address/i), {
        target: { value: "ph" },
      });
    });

    await waitFor(() =>
      expect(
        screen.getByText("Email must be longer than 3 characters")
      ).toBeInTheDocument()
    );
  });

  test("Valid Email", async () => {
    render(<ReportCard isOpen={true}></ReportCard>);

    await act(async () => {
      fireEvent.change(screen.getByLabelText(/email address/i), {
        target: { value: "phil@gmail.com" },
      });
    });

    await waitFor(() =>
      expect(
        screen.queryByText("Email must be longer than 3 characters")
      ).not.toBeInTheDocument()
    );
  });

  test("Submit Form", async () => {
    const handleSubmit = jest.fn();
    const jsdomAlert = window.alert; // remember the jsdom alert
    window.alert = jest.fn();

    render(<ReportCard isOpen={true} onSubmit={handleSubmit}></ReportCard>);

    userEvent.type(screen.getByLabelText(/email address/i), "phil@phil.com");
    userEvent.type(screen.getByLabelText(/park name/i), "Yellowstone");
    userEvent.type(screen.getByLabelText(/description/i), "Wrong info lol");

    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    fireEvent.change(screen.queryByTestId("selector"), {
      target: { value: "Weather" },
    });

    //Submit the form
    userEvent.click(screen.getByRole("button", { name: /submit/i }));

    await waitFor(async () => {
      expect(handleSubmit).toHaveBeenCalledWith({
        email: "phil@phil.com",
        field: "Weather",
        parkName: "Yellowstone",
        desc: "Wrong info lol",
      });
    });
    window.alert = jsdomAlert;
  });
});
