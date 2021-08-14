import "./ProductTable.scss";
import Table from "../Table";
import { useMemo } from "react";

function ProductTable() {
  const data = [
    {
      Clients: "KS Finance",
      entraceDiff: 12,
      curDiff: 65,
      margin: 34234,
      avaliable: 12,
      position: 535435,
    },
    {
      Clients: "KS Finance",
      entraceDiff: 12,
      curDiff: 65,
      margin: 34234,
      avaliable: 12,
      position: 535435,
    },
    {
      Clients: "KS Finance",
      entraceDiff: 12,
      curDiff: 65,
      margin: 34234,
      avaliable: 12,
      position: 535435,
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "Clients",
        accessor: "Clients",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          maxWidth: 166,
          minWidth: 166,
        },
        cellStyle: {
          maxWidth: 166,
          minWidth: 166,
        },
      },
      {
        Header: "Entrace Diff %",
        accessor: "entraceDiff",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          maxWidth: 80,
        },
        cellStyle: {
          maxWidth: 80,
        },
      },
      {
        Header: "Cur. Diff",
        accessor: "curDiff",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          maxWidth: 80,
        },
        cellStyle: {
          maxWidth: 80,
        },
      },
      {
        Header: "Margin",
        accessor: "margin",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          maxWidth: 80,
        },
        cellStyle: {
          maxWidth: 80,
        },
      },
      {
        Header: "Avaliable",
        accessor: "avaliable",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          maxWidth: 80,
        },
        cellStyle: {
          maxWidth: 80,
          color: "rgba(255, 255, 255, 0.4)",
        },
      },
      {
        Header: "Position",
        accessor: "position",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          maxWidth: 80,
          justifyContent: "flex-end",
        },
        cellStyle: {
          maxWidth: 80,
          display: "flex",
          justifyContent: "flex-end",
        },
      },
    ],
    []
  );

  return (
    <div className="ProductTable">
      <Table variant="nested" columns={columns} data={data} />
    </div>
  );
}

export default ProductTable;
