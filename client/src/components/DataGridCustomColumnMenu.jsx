import {
  GridColumnMenuContainer,
  GridFilterMenuItem,
  HideGridColMenuItem,
} from "@mui/x-data-grid";

const CustomColumnMenu = (props) => {
  const { hideMenu, currentColumn, open } = props;
  return (
    <GridColumnMenuContainer
      hideMenu={hideMenu}
      currentColumn={currentColumn}
      open={open}
    >
      <GridFilterMenuItem onClick={hideMenu} column={currentColumn} />
      <HideGridColMenuItem />
    </GridColumnMenuContainer>
  );
};

export default CustomColumnMenu;
