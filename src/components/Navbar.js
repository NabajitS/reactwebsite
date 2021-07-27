import { AppBar, Toolbar, Typography } from "@material-ui/core";
import React from "react";

const Navbar = () => {
    return (
        <AppBar position="static">
            <Toolbar>
                <Typography variant="h6">T-20 Buzz</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Navbar;