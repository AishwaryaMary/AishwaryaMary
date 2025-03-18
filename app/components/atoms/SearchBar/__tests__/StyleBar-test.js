import React from "react";
import renderer from "react-test-renderer";
import { TextInput } from "react-native";
import SearchBar from "../views/SearchBar";

describe("SearchBar", () => {
  const mockSetSearchTerm = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <SearchBar
          searchTerm="Sample"
          setSearchTerm={mockSetSearchTerm}
          theme="light"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("updates search term on text change", () => {
    const instance = renderer.create(
      <SearchBar
        searchTerm=""
        setSearchTerm={mockSetSearchTerm}
        theme="light"
      />
    ).root;

    const input = instance.findByType(TextInput);
    input.props.onChangeText("New Search");

    expect(mockSetSearchTerm).toHaveBeenCalledWith("New Search");
  });
});
