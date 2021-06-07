import ReactSelect, { components } from "react-select";
import { ReactComponent as DeltaIcon } from "./images/delta.svg";

const defaultStyles = {
  valueContainer: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  placeholder: (provided) => ({
    ...provided,
    fontWeight: "normal",
    fontSize: 12,
    lineHeight: 16,
    color: "rgba(255, 255, 255, 0.4)",
  }),
  input: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  control: (provided) => ({
    ...provided,
    background: "#353535",
    boxShadow: "none",
    border: "none",
  }),
  option: (provided) => ({
    ...provided,
    backgroundColor: "#353535",
    padding: 12,
    color: "rgba(255, 255, 255, 0.4)",
    ":active": {
      backgroundColor: "#393939",
    },
    ":hover": {
      backgroundColor: "#393939",
    },
  }),
  menu: (provided) => ({
    ...provided,
    marginTop: 2,
    marginBottom: 2,
    borderRadius: 2,
    backgroundColor: "#353535",
    boxShadow: "none",
    border: "none",
  }),
  singleValue: (provided) => ({
    ...provided,
    color: "#fff",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    backgroundColor: "transparent",
  }),
  dropdownIndicator: (provided) => ({
    ...provided,
    color: "rgba(255, 255, 255, 0.5)",
    padding: "8px 10px",
    ":hover": {
      color: "#fff",
    },
    ":active": {
      color: "#fff",
    },
  }),
};

const styles = {
  separated: {
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      marginTop: 0,
      marginBottom: 0,
    }),
    control: (provided) => ({
      ...provided,
      background: "#333333",
      boxShadow: "none",
      border: "none",
      minHeight: 27,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "rgba(255, 255, 255, 0.5)",
      padding: "8px 5px",
      ":hover": {
        color: "#fff",
      },
      ":active": {
        color: "#fff",
      },
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: "#353535",
      padding: 5,
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: 9,
      ":active": {
        backgroundColor: "#393939",
      },
      ":hover": {
        backgroundColor: "#393939",
        // borderLeft: "2px solid #41B7F6"
      },
    }),
  },

  separatedBlue: {
    singleValue: (provided) => ({
      ...provided,
      color: "#41B7F6",
      fontSize: 12,
      fontWeight: "bold",
      textDecoration: "underline",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      backgroundColor: "rgba(255, 255, 255, 0.1)",
      marginTop: 0,
      marginBottom: 0,
    }),
    control: (provided) => ({
      ...provided,
      background: "#333333",
      boxShadow: "none",
      border: "none",
      minHeight: 27,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "rgba(255, 255, 255, 0.5)",
      padding: "8px 5px",
      ":hover": {
        color: "#fff",
      },
      ":active": {
        color: "#fff",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "2px 5px",
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: "#353535",
      padding: 6,
      color: "rgba(255, 255, 255, 0.5)",
      fontSize: 12,
      ":active": {
        backgroundColor: "#393939",
      },
      ":hover": {
        backgroundColor: "#393939",
      },
    }),
  },

  secondary: {
    singleValue: (provided) => ({
      ...provided,
      color: "#ffff",
      fontSize: 9,
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
      marginTop: 0,
      marginBottom: 0,
    }),
    control: (provided) => ({
      ...provided,
      background: "#333333",
      borderRadius: "2px",
      boxShadow: "none",
      border: "none",
      minHeight: 27,
    }),
    dropdownIndicator: (provided) => ({
      ...provided,
      color: "rgba(255, 255, 255, 0.5)",
      padding: "8px",
      ":hover": {
        color: "#fff",
      },
      ":active": {
        color: "#fff",
      },
    }),
    valueContainer: (provided) => ({
      ...provided,
      padding: "2px 10px",
    }),
    option: (provided) => ({
      ...provided,
      backgroundColor: "#353535",
      padding: "6px 10px",
      color: "#fff",
      fontSize: 9,
      ":active": {
        backgroundColor: "#393939",
      },
      ":hover": {
        backgroundColor: "#393939",
      },
    }),
  },
};

export default function Select({ variant, ...props }) {
  let additionalStyles = {};

  if (variant) {
    additionalStyles = styles[variant];
  }

  return (
    <ReactSelect
      className="ReactSelect"
      classNamePrefix="ReactSelect"
      styles={{ ...defaultStyles, ...additionalStyles }}
      components={{
        DropdownIndicator: ({ children, ...rest }) => (
          <components.DropdownIndicator {...rest}>
            <DeltaIcon />
          </components.DropdownIndicator>
        ),
      }}
      // defaultMenuIsOpen
      {...props}
    />
  );
}
