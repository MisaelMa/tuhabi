import { render, screen } from "@testing-library/react";

import ErrorBoundary from "./ErrorBoundary";

describe("ErrorBoundary", () => {
  interface ITestComponent {
    crash?: boolean;
  }

  function MyTestComponent({ crash }: ITestComponent): JSX.Element {
    if (crash) {
      throw new Error("I crashed!");
    }
    return <div data-testid="test-component" />;
  }

  function fallBackComponent(): JSX.Element {
    return <h1>Something went wrong.</h1>;
  }

  afterEach(() => {
    jest.restoreAllMocks();
    jest.clearAllMocks();
  });

  it("should render the children correctly", () => {
    render(
      <ErrorBoundary fallback={fallBackComponent()}>
        <MyTestComponent />
      </ErrorBoundary>
    );

    expect(screen.getByTestId("test-component")).toBeDefined();
  });

  it("should render the empty is there is not fallback", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => jest.fn());
    const { container } = render(
      <ErrorBoundary>
        <MyTestComponent crash />
      </ErrorBoundary>
    );

    expect(container).toBeEmptyDOMElement();
    expect(screen.queryByText("Something went wrong.")).not.toBeInTheDocument();
    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("should detect the error correctly and render fallback component", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => jest.fn());
    render(
      <ErrorBoundary fallback={fallBackComponent()}>
        <MyTestComponent crash />
      </ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("should call logging with component name constructor", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => jest.fn());
    render(
      <ErrorBoundary fallback={fallBackComponent()}>
        <MyTestComponent crash />
      </ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("should call logging with available childs", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => jest.fn());
    const child = [
      <MyTestComponent crash key="0" />,
      null,
      <MyTestComponent crash key="0" />,
    ];

    render(
      <ErrorBoundary fallback={fallBackComponent()}>{child}</ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });

  it("should format to fallback if not have available childrens", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => jest.fn());
    const error = new Error("I crashed!");
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const errorComponent = new ErrorBoundary({} as any);
    errorComponent.componentDidCatch(error);

    expect(consoleSpy).toHaveBeenCalledWith(error, "[ErrorBoundary] Unknown");
  });

  it("should call logging with fallback if component not have name", () => {
    const consoleSpy = jest
      .spyOn(console, "error")
      .mockImplementation(() => jest.fn());
    const child = <MyTestComponent crash />;
    Object.defineProperty(child.type, "name", {
      value: null,
      writable: false,
    });

    render(
      <ErrorBoundary fallback={fallBackComponent()}>{child}</ErrorBoundary>
    );

    expect(consoleSpy).toHaveBeenCalled();
    consoleSpy.mockRestore();
  });
});
