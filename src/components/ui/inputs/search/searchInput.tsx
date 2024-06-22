import { FC } from "react";

import {
  Box,
  InputAdornment,
  TextFieldProps,
  Theme,
  useMediaQuery,
} from "@mui/material";

import FilterIcon from "../../icons/filter";
import SearchIcon from "../../icons/searchIcon";
import { ParentStack, StyledSearchInput } from "./searchInput.styles";
import { IMainInputProps } from "./searchInput.types";

const SearchInput: FC<TextFieldProps & IMainInputProps> = ({
  hasFilter = false,
  onFilterClick,
  filterIcon,
  ...props
}) => {
  const isSmallScreen = useMediaQuery((theme: Theme) =>
    theme.breakpoints.down("md")
  );

  return (
    <ParentStack direction="row" alignItems="stretch" spacing="12px">
      <Box sx={{ flexGrow: 1 }}>
        <StyledSearchInput
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon className="start-icon" color="inherit" />
              </InputAdornment>
            ),
            endAdornment:
              hasFilter && !isSmallScreen ? (
                <InputAdornment position="end">
                  <Box className="end-icon" onClick={onFilterClick}>
                    {filterIcon ?? <FilterIcon color="inherit" />}
                  </Box>
                </InputAdornment>
              ) : undefined,
          }}
          {...props}
        />
      </Box>
      {hasFilter && isSmallScreen ? (
        <Box onClick={onFilterClick} className="outside-svg">
          {filterIcon ?? <FilterIcon color="inherit" />}
        </Box>
      ) : (
        <></>
      )}
    </ParentStack>
  );
};

export default SearchInput;
