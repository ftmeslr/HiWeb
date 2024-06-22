import { ReactNode } from "react";

export type IMainInputProps = {
  hasFilter?: boolean | undefined;
  onFilterClick?: () => void | undefined;
  filterIcon?: ReactNode | undefined;
};
