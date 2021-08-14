import "./ProductTable.scss";
import Table from "../Table";
import { useMemo } from "react";

function ProductTable() {
  const data = [
    {
      Brand: "Bitmain",
      Model: "AntMiner S9",
      Hashrate: "13 TH/s",
      Stock: "Moscow City",
      Plaque: "1 340 ч",
      DateOfManufacture: "12.05.2019",
      Rating: 12345,
      SalePrice: "$ 456,00",
    },
    {
      Brand: "Bitmain",
      Model: "AntMiner S9",
      Hashrate: "13 TH/s",
      Stock: "Moscow City",
      Plaque: "1 340 ч",
      DateOfManufacture: "12.05.2019",
      Rating: 12345,
      SalePrice: "$ 456,00",
    },
    {
      Brand: "Bitmain",
      Model: "AntMiner S9",
      Hashrate: "13 TH/s",
      Stock: "Moscow City",
      Plaque: "1 340 ч",
      DateOfManufacture: "12.05.2019",
      Rating: 12345,
      SalePrice: "$ 456,00",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Марка",
        accessor: "Brand",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {},
        cellStyle: {
          textDecoration: "underline",
        },
      },
      {
        Header: "Модель",
        accessor: "Model",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {},
        cellStyle: {
          textDecoration: "underline",
        },
      },
      {
        Header: "Хешрейт",
        accessor: "Hashrate",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {},
        cellStyle: {},
      },
      {
        Header: "Склад",
        accessor: "Stock",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {},
        cellStyle: {
          textDecoration: "underline",
          color: "rgba(255, 255, 255, 0.6)",
        },
      },
      {
        Header: "Налет",
        accessor: "Plaque",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {},
        cellStyle: {},
      },
      {
        Header: "Дата производства",
        accessor: "DateOfManufacture",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {},
        cellStyle: {
          color: "rgba(255, 255, 255, 0.6)",
        },
      },
      {
        Header: "Рейтинг",
        accessor: "Rating",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {},
        cellStyle: {},
      },
      {
        Header: "Цена продажи",
        accessor: "SalePrice",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {},
        cellStyle: {
          color: "#14B0BA",
        },
      },
    ],
    []
  );

  return (
    <div className="ProductTable">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default ProductTable;
