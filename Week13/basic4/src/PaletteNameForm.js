import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'

class PaletteNameForm extends Component {
	constructor(props) {
		super(props);
		this.state = {
			stage : ''
		}
		this.handleClickOpen = this.handleClickOpen.bind(this);
		this.handleClose     = this.handleClose.bind(this);
		this.showEmojiPicker = this.showEmojiPicker.bind(this);
		this.savePalette     = this.savePalette.bind(this);
	}
	handleClickOpen(){
		this.setState({
			stage : 'form'
		})
	};

	handleClose(){
		this.setState({
			stage : ''
		})
	};
	showEmojiPicker() {
		this.setState({
			stage: 'emoji'
		})
	}
	savePalette(emoji) {
		this.props.savePalette(emoji.native);
	}
	render() {
		const { stage } = this.state;
		const { paletteName,handleChange , classes } = this.props;
		return (
			<div>
				<Button
					variant="contained"
					color="primary"
					onClick={this.handleClickOpen}
					className={classes.save}
				>
					SAVE
				</Button>
				<Dialog open={stage === 'emoji'}>
					<DialogTitle id="form-dialog-title">Choose a Palette Emoji</DialogTitle>
					<Picker theme="light" set='google' onSelect={this.savePalette} title="Pick a Palette Emoji"/>
				</Dialog>
				<Dialog open={stage === 'form'} onClose={this.handleClose} aria-labelledby="form-dialog-title">
					<DialogTitle id="form-dialog-title">Choose a Palette Name</DialogTitle>
					<ValidatorForm
						onSubmit={this.showEmojiPicker}
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
