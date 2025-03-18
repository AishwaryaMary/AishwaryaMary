import React from "react";
import renderer from "react-test-renderer";
import ImageCarousel from "../views/ImageCarousel";

describe("ImageCarousel", () => {
  const mockImages = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
  ];

  afterEach(() => {
    jest.clearAllMocks();
  });

  it("renders correctly with images", () => {
    const tree = renderer
      .create(<ImageCarousel images={mockImages} theme="light" />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
