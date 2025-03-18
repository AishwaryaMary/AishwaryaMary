import React from "react";
import renderer from "react-test-renderer";
import CategoryList from "../CategoryList";
import CategoryPill from "../../../atoms/CategoryPill/views/CategoryPill";

describe("CategoryList", () => {
  const mockSetSelectedCategory = jest.fn();

  const categories = ["Clothing", "Shoes", "Accessories"];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const tree = renderer
      .create(
        <CategoryList
          categories={categories}
          selectedCategory="Clothing"
          setSelectedCategory={mockSetSelectedCategory}
          theme="light"
        />
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it("renders the correct number of categories", () => {
    const instance = renderer.create(
      <CategoryList
        categories={categories}
        selectedCategory="Clothing"
        setSelectedCategory={mockSetSelectedCategory}
        theme="light"
      />
    ).root;

    const items = instance.findAllByType(CategoryPill);
    expect(items.length).toBe(categories.length);
  });

  it("calls setSelectedCategory on pill press", () => {
    const instance = renderer.create(
      <CategoryList
        categories={categories}
        selectedCategory="Clothing"
        setSelectedCategory={mockSetSelectedCategory}
        theme="light"
      />
    ).root;

    const pill = instance.findAllByType(CategoryPill)[0];
    pill.props.onPress();

    expect(mockSetSelectedCategory).toHaveBeenCalledWith(null);
  });

  it("selects category if different from the current one", () => {
    const instance = renderer.create(
      <CategoryList
        categories={categories}
        selectedCategory="Shoes"
        setSelectedCategory={mockSetSelectedCategory}
        theme="light"
      />
    ).root;

    const pill = instance.findAllByType(CategoryPill)[0];
    pill.props.onPress();

    expect(mockSetSelectedCategory).toHaveBeenCalledWith("Clothing");
  });
});
