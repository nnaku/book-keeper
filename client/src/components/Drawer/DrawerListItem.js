import React from "react";
import { NavLink } from "react-router-dom";
import {
  ListItem,
  ListItemText,
  ListItemIcon,
  makeStyles,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  active: {
    color: theme.palette.secondary.main,
  },
}));

const DrawerListItem = ({
  children,
  secondaryText,
  icon: IconComponent,
  ...rest
}) => {
  const classes = useStyles();
  return (
    <ListItem
      divider
      button
      component={rest.to ? NavLink : undefined}
      activeClassName={classes.active}
      {...rest}
    >
      <ListItemIcon color="inherit">
        <IconComponent />
      </ListItemIcon>
      <ListItemText primary={children} secondary={secondaryText} />
    </ListItem>
  );
};

export default DrawerListItem;
