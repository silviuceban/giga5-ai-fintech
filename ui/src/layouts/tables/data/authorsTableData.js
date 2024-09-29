/* eslint-disable react/prop-types */
import VuiTypography from "components/VuiTypography";
import axios from "axios";

const data = [
  {
    operation: "Cumparatura",
    product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
    amount_lcy: "- 1450",
    date: "2023-12-25 09:38:16",
  },
];

const dataArray = async () => {
  let array = [];
  try {
    const response = await axios.get("http://localhost:5000/transactionsData");

    const fetchedData = response.data.data || data;

    array = fetchedData;
  } catch (error) {
    array = data;
    console.error("Error fetching data:", error);
  }

  return array && array.length > 0
    ? array.map((item) => {
        return {
          Operation: (
            <VuiTypography variant="button" color="white" fontWeight="medium">
              {item.operation}
            </VuiTypography>
          ),
          Product: (
            <VuiTypography variant="button" color="white" fontWeight="medium">
              {item.product_type}
            </VuiTypography>
          ),
          Curency: (
            <VuiTypography variant="button" color="white" fontWeight="medium">
              {item.amount_lcy} MDL
            </VuiTypography>
          ),
          Date: (
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {item.date}
            </VuiTypography>
          ),
        };
      })
    : data.map((item) => {
        return {
          Operation: (
            <VuiTypography variant="button" color="white" fontWeight="medium">
              {item.operation}
            </VuiTypography>
          ),
          Product: (
            <VuiTypography variant="button" color="white" fontWeight="medium">
              {item.product_type}
            </VuiTypography>
          ),
          Curency: (
            <VuiTypography variant="button" color="white" fontWeight="medium">
              {item.amount_lcy} MDL
            </VuiTypography>
          ),
          Date: (
            <VuiTypography variant="caption" color="white" fontWeight="medium">
              {item.date}
            </VuiTypography>
          ),
        };
      });
};

const resultRows = dataArray();
console.log(resultRows, "asdsads");

export default {
  columns: [
    { name: "Operation", align: "left" },
    { name: "Product", align: "left" },
    { name: "Curency", align: "center" },
    { name: "Date", align: "center" },
  ],

  // rows: [...dataArray],
  // rows: data,
};
