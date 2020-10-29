import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
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
				<Button variant="contained" color="primary" onClick={this.handleClickOpen}>
					SAVE
				</Button>
				<Dialog open={open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
					<ValidatorForm
						onSubmit={savePalette}
						ref="form"
					>
						<DialogContent>
							<DialogContentText>
								Plese Enter a name for your new beautiful Palette. Make sure it's unique!
							</DialogContentText>
                            <TextValidator
                                value={paletteName}
								label="Palette Name"
								fullWidth
								margin="normal"
                                name="paletteName"
                                validators={['required', 'isPaletteNameUnique']}
                                errorMessages={[
                                    'This field is required!',
                                    'Palette name already exist!'
                                ]}
                                onChange={handleChange}
                            />
						</DialogContent>
						<DialogActions>
						<Button onClick={this.handleClose} color="primary">
							Cancel
						</Button>
						<Button
							variant="contained"
							color="primary"
							type="submit"
							style={{maxHeight:'36px'}}
						>
							SAVE PALETTE
						</Button>
						</DialogActions>
					</ValidatorForm>
				</Dialog>
			</div>
		);
	}
}

export default PaletteNameForm;
