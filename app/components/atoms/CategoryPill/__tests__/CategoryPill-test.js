import React from "react";
import renderer from "react-test-renderer";
import CategoryPill from "../views/CategoryPill";

describe("CategoryPill", () => {
  const mockOnPress = jest.fn();

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly when not selected", () => {
    const tree = renderer
      .create(
        <CategoryPill
          category="Test Category"
          isSelected={false}
          onPress={mockOnPress}
          theme="light"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly when selected", () => {
    const tree = renderer
      .create(
        <CategoryPill
          category="Test Category"
          isSelected={true}
          onPress={mockOnPress}
          theme="light"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
