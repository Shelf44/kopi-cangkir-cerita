document.addEventListener("alpine:init", () => {
  Alpine.data("products", () => ({
    items: [
      {
        id: 1,
        name: "House Blend — Signature Roast",
        img: "1.img",
        price: 30000,
      },
      {
        id: 2,
        name: "Morning Bliss — Light Roast",
        img: "1.img",
        price: 30000,
      },
    ],
  }));
});
