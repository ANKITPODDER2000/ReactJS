import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';

class PaletteNameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			open : false
		}
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose     = this.handleClose.bind(this);
	}
	handleClickOpen(){
		this.setState({
			open : true
		})
	};

	handleClose(){
		this.setState({
			open : false
		})
	};
	render() {
		const { open } = this.state;
		const { classes,savePalette,paletteName,handleChange } = this.props;
		return (
			<div>
				<Button variant="outlined" color="primary" onClick={this.handleClickOpen}>
					Open form dialog
				</Button>
				<Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Subscribe</DialogTitle>
					<DialogContent>
						<ValidatorForm
                            className={classes.form}
                            onSubmit={savePalette}
                            ref="form"
                        >
                            <TextValidator
                                value={paletteName}
                                style={{ margin: "0 15px 0 20px" }}
                                placeholder="Palette Name"
                                name="paletteName"
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={[
                                    'This field is required!',
                                    'Palette name already exist!'
                                ]}
                                onChange={handleChange}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                type="submit"
                                style={{maxHeight:'36px'}}
                            >
                                SAVE PALETTE
                            </Button>
                        </ValidatorForm>
					</DialogContent>
					<DialogActions>
					<Button onClick={this.handleClose} color="primary">
						Cancel
					</Button>
					<Button onClick={this.handleClose} color="primary">
						Subscribe
					</Button>
					</DialogActions>
				</Dialog>
			</div>
		);
	}
}

export default PaletteNameForm;
