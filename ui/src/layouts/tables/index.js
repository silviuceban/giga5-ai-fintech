// @mui material components
import Card from "@mui/material/Card";
import axios from "axios";
// Vision UI Dashboard React components
import VuiBox from "components/VuiBox";
import VuiTypography from "components/VuiTypography";
import { useState, useEffect } from "react";
// Vision UI Dashboard React example components
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import Footer from "examples/Footer";
import Table from "examples/Tables/Table";

// Data
import authorsTableData from "layouts/tables/data/authorsTableData";
import projectsTableData from "layouts/tables/data/projectsTableData";

function Tables() {
  const { columns } = authorsTableData;
  const { columns: prCols, rows: prRows } = projectsTableData;

  const [rows, setRows] = useState([]);

  const data = [
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
    {
      operation: "Cumparatura",
      product_type: "Misc. Food Stores – Convenience Stores and Specialty Markets",
      amount_lcy: "- 1450",
      date: "2023-12-25 09:38:16",
    },
  ];

  const dataArray = async () => {
    try {
      const response = await axios.get("http://localhost:5000/transactionsData");
      const fetchedData = response.data.data || data;
      return fetchedData;
    } catch (error) {
      console.error("Error fetching data:", error);
      // Используем статичный массив в случае ошибки
      return data;
    }
  };

  const defaultRows = data.map((item) => {
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

  const rowsData = rows.map((item) => {
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

  useEffect(() => {
    const fetchData = async () => {
      const result = await dataArray();
      console.log(result, "dsd");
      setRows(result);
    };
    fetchData();
  }, []);

  console.log(rows, "rows");

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <VuiBox py={3}>
        <VuiBox mb={3}>
          <Card>
            <VuiBox display="flex" justifyContent="space-between" alignItems="center" mb="22px">
              <VuiTypography variant="lg" color="white">
                Transactions
              </VuiTypography>
            </VuiBox>
            <VuiBox
              sx={{
                "& th": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                      `${borderWidth[1]} solid ${grey[700]}`,
                  },
                },
              }}
            >
              <Table columns={columns} rows={rowsData.length === 0 ? defaultRows : rowsData} />
            </VuiBox>
          </Card>
        </VuiBox>
        {/* <Card>
          <VuiBox display="flex" justifyContent="space-between" alignItems="center">
            <VuiTypography variant="lg" color="white">
              Projects table
            </VuiTypography>
          </VuiBox>
          <VuiBox
            sx={{
              "& th": {
                borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                  `${borderWidth[1]} solid ${grey[700]}`,
              },
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth }, palette: { grey } }) =>
                    `${borderWidth[1]} solid ${grey[700]}`,
                },
              },
            }}
          >
            <Table columns={prCols} rows={prRows} />
          </VuiBox>
        </Card> */}
      </VuiBox>
      <Footer />
    </DashboardLayout>
  );
}

export default Tables;
