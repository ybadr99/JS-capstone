import counter from "../modules/counter";

test("meals counter", () => {
  const mealsArr = [
    {
      id: "1",
      name: "chicken",
    },
    {
      id: "2",
      name: "meat",
    },
    {
      id: "3",
      name: "rice",
    },
  ];
  expect(counter(mealsArr)).toBe(3);
});
