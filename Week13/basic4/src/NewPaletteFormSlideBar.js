import React, { Component } from "react";
import Drawer from "@material-ui/core/Drawer";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ChevronLeftIcon from "@material-ui/icons/ChevronLeft";
import Button from "@material-ui/core/Button";
import { ChromePicker } from "react-color";
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class NewPaletteFormSlideBar extends Component {
    render() {
        const
            {
                classes,
                open,
                handleDrawerClose,
                handleClearPalette,
                handleRandomColor,
                color,
                handleColorChange,
                handleAddColor,
                colorName,
                handleChange,
                noOfColors
            } = this.props;
        return (
            <Drawer
                className={classes.drawer}
                variant='persistent'
                anchor='left'
                open={open}
                classes={{
                    paper: classes.drawerPaper
                }}
            >
            <div className={classes.drawerHeader}>
                <IconButton onClick={handleDrawerClose}>
                <ChevronLeftIcon />
                </IconButton>
            </div>
                <div className={classes.navContainer}>
                    
                    <Typography variant="h4" >Create Your Palette</Typography>
                    <div className={classes.SlideBtns}>
                        <Button
                        variant="contained"
                        color="secondary"
                        onClick = {handleClearPalette}
                            className="btn"
                        >
                        Clear Palette
                        </Button>
                        <Button
                            className="btn"
                            variant="contained"
                            color="primary"
                            onClick = {handleRandomColor}
                        >
                        Random Color
                        </Button>
                    </div>
                    <ChromePicker
                        color = {color}
                        onChangeComplete={newColor => handleColorChange(newColor)}
                        className={classes.picker}
                    />
                    <ValidatorForm
                        onSubmit={handleAddColor}
                        ref="form"
                    >
                        <TextValidator
                            onChange={handleChange}
                            name="colorName"
                            variant="filled"
                            value={colorName}
                            label="Color Name"
                            validators={['required' , 'isColorNameUnique','isColorUnique','isPaletteFull']}
                            errorMessages={[
                                'This field is required!',
                                'Color name must be unique!',
                                'Color already used!',
                                'Palette is full!',
                            ]}
                            style={{
                                width: '250px'
                            }}
                        />
                        <br/>
                        <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            style={{ background: noOfColors === 20 ? "#0005" : color ,
                                width: '250px',
                                padding : '1rem 0'
                            }}
                            disabled={noOfColors===20}
                        >
                            {noOfColors===20 ? 'Palette Full' : 'Add Color'}
                        </Button>
                    </ValidatorForm>
                </div>
            </Drawer>
        );
    }
}

export default NewPaletteFormSlideBar;
