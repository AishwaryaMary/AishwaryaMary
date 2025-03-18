import React from "react";
import renderer from "react-test-renderer";
import { useDispatch, useSelector } from "react-redux";
import HomeScreen from "../views/HomeScreen";

jest.mock("expo-router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

jest.mock("@react-native-google-signin/google-signin", () => ({
  GoogleSignin: {
    signOut: jest.fn(),
  },
}));

jest.mock("react-redux", () => ({
  useDispatch: jest.fn(),
  useSelector: jest.fn(),
  shallowEqual: jest.fn(),
}));

jest.mock("@react-native-async-storage/async-storage", () => ({
  setItem: jest.fn(),
  getItem: jest.fn(),
  removeItem: jest.fn(),
}));

jest.mock("../../../components/molecules/Header/views/Header", () => "Header");
jest.mock(
  "../../../components/molecules/CategoryList/CategoryList",
  () => "CategoryList"
);
jest.mock(
  "../../../components/molecules/ProductList/views/ProductList",
  () => "ProductList"
);
jest.mock(
  "../../../components/atoms/SearchBar/views/SearchBar",
  () => "SearchBar"
);

afterEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("HomeScreen", () => {
  const mockDispatch = jest.fn();

  beforeEach(() => {
    useDispatch.mockReturnValue(mockDispatch);
    useSelector.mockImplementation((selector) =>
      selector({
        products: [
          { id: 1, title: "Test Product", category: { name: "Category 1" } },
        ],
        loading: false,
        error: null,
        categories: ["Category 1", "Category 2"],
        user: { name: "John Doe" },
        theme: "light",
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<HomeScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("calls Google sign-out on logout", async () => {
    const instance = renderer.create(<HomeScreen />).root;
    const header = instance.findByType("Header");

    await header.props.handleLogout();

    expect(mockDispatch).toHaveBeenCalledWith({ type: "CLEAR_USER" });
  });

  it("toggles theme correctly", () => {
    const instance = renderer.create(<HomeScreen />).root;
    const header = instance.findByType("Header");

    header.props.handleToggleTheme();

    expect(mockDispatch).toHaveBeenCalledWith({
      type: "SET_THEME",
      payload: "dark",
    });
  });
});
