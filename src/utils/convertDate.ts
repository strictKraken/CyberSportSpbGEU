const convertDate = (source_date: string) => {
  const date = new Date(source_date);
  const options = {
    month: "long",
    year: "numeric",
  };
  const result_date = date.toLocaleDateString("ru", options);

  return result_date.slice(0, -3);
};

export default convertDate;
