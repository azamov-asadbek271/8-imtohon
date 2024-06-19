export const generateAmountOptions = (number) => {
  return Array.from({ length: number }, (_, index) => {
    let amount = index + 1;
    return (
      <option key={amount} value={amount}>
        {amount}
      </option>
    );
  });
};
