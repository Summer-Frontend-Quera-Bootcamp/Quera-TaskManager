import { useState, ChangeEvent } from "react";

type Option = {
  label: string;
  value: string;
};

type IDropdown = {
  options: Option[];
};

const Dropdown: React.FC<IDropdown> = ({ options }) => {
  const [selectedValue, setSelectedValue] = useState<string>("");

  return (
    <select
      value={selectedValue}
      onChange={(event: ChangeEvent<HTMLSelectElement>) => {
        setSelectedValue(event.target.value);
      }}
      className="border rounded text-right appearance-none px-xs py-[3px]"
    >
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default Dropdown;
