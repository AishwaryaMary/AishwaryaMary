import React from "react";
import renderer from "react-test-renderer";
import { Text, ActivityIndicator, FlatList } from "react-native";
import ProductList from "../views/ProductList";
import ProductItem from "../../../atoms/ProductItem/views/ProductItem";

jest.mock("../../../atoms/ProductItem/views/ProductItem", () => "ProductItem");

describe("ProductList", () => {
  const mockProducts = [
    { id: 1, title: "Product 1", price: 100, images: [] },
    { id: 2, title: "Product 2", price: 200, images: [] },
  ];

  it("renders loading state", () => {
    const tree = renderer.create(
      <ProductList loading={true} filteredProducts={[]} />
    ).root;

    expect(tree.findByType(ActivityIndicator)).toBeTruthy();
  });

  it("renders error message", () => {
    const tree = renderer.create(
      <ProductList error="Error loading products" />
    ).root;

    const errorText = tree.findByType(Text).props.children;
    expect(errorText).toBe("Error loading products");
  });

  it("renders empty state message", () => {
    const tree = renderer.create(<ProductList filteredProducts={[]} />).root;

    const noResultsText = tree.findByType(Text).props.children;
    expect(noResultsText).toBe(
      "Sorry, we couldn't find what you are looking for."
    );
  });

  it("renders list of products", () => {
    const tree = renderer.create(
      <ProductList filteredProducts={mockProducts} />
    ).root;

    const flatList = tree.findByType(FlatList);
    expect(flatList.props.data.length).toBe(2);
  });

  it("renders correct number of ProductItem components", () => {
    const tree = renderer.create(
      <ProductList filteredProducts={mockProducts} />
    ).root;

    const productItems = tree.findAllByType(ProductItem);
    expect(productItems.length).toBe(2);
  });
});
