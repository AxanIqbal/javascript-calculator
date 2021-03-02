import React from 'react';
import {Button, Grid, withStyles} from "@material-ui/core";

const styles = (theme) => ({
    buttonW: {
        "width": "95%",
        "margin-bottom": "0.1rem",
        "height": "95%"
    },
});

class ButtonC extends React.Component {
    render() {
        const { classes } = this.props;
        return (
            <Grid item xs={this.props.size}>
                <Button id={this.props.id} variant={"contained"} color={"primary"}
                        className={classes.buttonW} style={this.props.styles} onClick={this.props.click}>
                    {this.props.name}
                </Button>
            </Grid>
        );
    }
}

export default withStyles(styles)(ButtonC);