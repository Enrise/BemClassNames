import bemClassNames from ".";

describe("bemClassNames()", () => {
  describe("Initialize the classname", () => {
    const cn = bemClassNames("block");

    it("The return type is a function", () => {
      expect(typeof cn).toBe("function");
    });

    it("Returns the block name when calling with no arguments", () => {
      const className = cn();
      expect(className).toBe("block");
    });
  });

  describe("Prefix classes", () => {
    const cn = bemClassNames("block");

    it("Prefixes a single class name", () => {
      const className = cn("test");
      expect(className).toBe("block-test");
    });

    it("Prefixes multiple classnames", () => {
      const className = cn("one", "two", "three");
      expect(className).toBe("block-one block-two block-three");
    });

    it("Can use specific classnames functions", () => {
      const className = cn({ one: true, two: false }, "three");
      expect(className).toBe("block-one block-three");
    });
  });
});
