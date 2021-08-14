import "./SortIcon.scss";
import cx from "classnames";
import { ReactComponent as DropSvg } from "./images/delta_sort.svg";

export default function SortIcon({ isSortedDesc, isSorted }) {
  return (
    <span className="SortIcon">
      <DropSvg className={cx({ active: isSorted && isSortedDesc === false })} />
      <DropSvg className={cx({ active: isSorted && isSortedDesc === true })} />
    </span>
  );
}
