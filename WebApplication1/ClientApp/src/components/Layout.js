import React, { Component } from 'react';
import { AppBar, Typography, Toolbar, Box, Paper } from '@material-ui/core';

export class Layout extends Component {
    displayName = Layout.name

    render() {
        return (            
            <Box>
                <AppBar position="relative">
                    <Toolbar>
                        <Typography variant="h6">
                            Mark's FizzBuzz Example
                        </Typography>
                    </Toolbar>               
                </AppBar>
                <Paper>
                    {this.props.children}
                </Paper>
            </Box>
        );
    }
}
