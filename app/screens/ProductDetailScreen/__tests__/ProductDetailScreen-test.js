import React from "react";
import renderer from "react-test-renderer";
import { useSelector } from "react-redux";
import { useLocalSearchParams } from "expo-router";
import ProductDetailScreen from "../views/ProductDetailScreen";

jest.mock("expo-router", () => ({
  useLocalSearchParams: jest.fn(),
}));

jest.mock("react-redux", () => ({
  useSelector: jest.fn(),
}));

jest.mock(
  "../../../components/atoms/BackButton/views/BackButton",
  () => "BackButton"
);
jest.mock(
  "../../../components/atoms/ImageCarousel/views/ImageCarousel",
  () => "ImageCarousel"
);
jest.mock(
  "../../../components/molecules/ProductDetails/views/ProductDetails",
  () => "ProductDetails"
);
jest.mock(
  "../../../components/molecules/RelatedProductsList/views/RelatedProducts",
  () => "RelatedProducts"
);

afterEach(() => {
  jest.clearAllMocks();
  jest.clearAllTimers();
});

afterAll(() => {
  jest.restoreAllMocks();
});

describe("ProductDetailScreen", () => {
  beforeEach(() => {
    useLocalSearchParams.mockReturnValue({
      id: "1",
      title: "Test Product",
      price: "100",
      description: "Test Description",
      category: "Category 1",
      images: JSON.stringify(["https://test-image.com/image1.jpg"]),
    });

    useSelector.mockImplementation((selector) =>
      selector({
        products: [
          { id: 1, title: "Test Product", category: { name: "Category 1" } },
          { id: 2, title: "Related Product", category: { name: "Category 1" } },
        ],
        theme: "light",
      })
    );
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly", () => {
    const tree = renderer.create(<ProductDetailScreen />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("displays related products when available", () => {
    const instance = renderer.create(<ProductDetailScreen />).root;

    const relatedProducts = instance.findByType("RelatedProducts");
    expect(relatedProducts.props.relatedProducts).toHaveLength(1);
    expect(relatedProducts.props.relatedProducts[0].title).toBe(
      "Related Product"
    );
  });

  it("does not display related products when none available", () => {
    useSelector.mockImplementation((selector) =>
      selector({
        products: [
          { id: 1, title: "Test Product", category: { name: "Category 1" } },
        ],
        theme: "light",
      })
    );

    const instance = renderer.create(<ProductDetailScreen />).root;
    expect(() => instance.findByType("RelatedProducts")).toThrow();
  });
});
