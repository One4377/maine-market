import "./Transaction.scss";
import Table from "../../Table";
import { useMemo } from "react";

function Transaction() {
  const data = [
    {
      Model:
        "bbb4b3cd-449a-43f2-a93a-975b6fbe73c6bbb4b3cd-449a-43f2-a93a-975b6fbe73",
      Status: "Завершено",
      Amount: "+143 678,43 ₽",
      Date: "Wed Jun 09 2021 04:17:42 GMT+0200",
    },
    {
      Model:
        "bbb4b3cd-449a-43f2-a93a-975b6fbe73c6bbb4b3cd-449a-43f2-a93a-975b6fbe73",
      Status: "Завершено",
      Amount: "+143 678,43 ₽",
      Date: "Wed Jun 09 2021 04:17:42 GMT+0200",
    },
    {
      Model:
        "bbb4b3cd-449a-43f2-a93a-975b6fbe73c6bbb4b3cd-449a-43f2-a93a-975b6fbe73",
      Status: "Завершено",
      Amount: "+143 678,43 ₽",
      Date: "Wed Jun 09 2021 04:17:42 GMT+0200",
    },
  ];

  const columns = useMemo(
    () => [
      {
        Header: "ДЕТАЛИ",
        accessor: "Model",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          justifyContent: "flex-start",
          width: "450px",
        },
        cellStyle: {
          justifyContent: "flex-start",
          width: "450px",
          color: "rgba(255, 255, 255, 0.6)",
        },
      },
      {
        Header: "СТАТУС",
        accessor: "Status",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          width: "70px",
        },
        cellStyle: {
          width: "70px",
          color: "#14B0BA",
        },
      },
      {
        Header: "СУММА",
        accessor: "Amount",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          width: "140px",
        },
        cellStyle: {
          width: "140px",
          color: "#14B0BA",
        },
      },
      {
        Header: "ДАТА",
        accessor: "Date",
        disableGroupBy: true,
        disableSortBy: true,
        headerStyle: {
          justifyContent: "flex-start",
          width: "250px",
        },
        cellStyle: {
          justifyContent: "flex-start",
          width: "250px",
          color: "rgba(255, 255, 255, 0.6)",
        },
      },
    ],
    []
  );
  return (
    <div className="Transaction">
      <Table columns={columns} data={data} />
    </div>
  );
}

export default Transaction;
