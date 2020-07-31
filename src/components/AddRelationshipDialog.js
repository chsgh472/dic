import React, { Component } from 'react';
import { FormLabel, TextField, Button, Grid, Typography} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBoxIcon from '@material-ui/icons/AddBox';

class AddRelationshipDialogDialog extends Component {
    constructor(props) {
        super(props);
        this.state={
            open:false,
        }
    }
    handleOpen=(e)=>{
        this.setState({
            open:true,
        })
    }
    handleClose=(e)=>{
        this.setState({
            open:false,
        })
    }
    render() {
        return (
            <div>
                <form>
                    <Button style={{borderRadius:20, float:'right'}}
                        variant="contained"
                        color="primary"
                        startIcon={<AddBoxIcon />}
                        onClick={this.handleOpen}
                    >
                        용어관계항목 추가
                    </Button>
                            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">용어관계항목 추가</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        용어관계항목을 입력하세요
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="language"
                                        label="용어관계항목"
                                        type="text"
                                        fullWidth
                                    />
                                </DialogContent>
                                <DialogActions>
                                    <Button onClick={this.handleClose} color="primary">
                                        취소
                                    </Button>
                                    <Button onClick={this.handleClose} color="primary">
                                        추가
                                    </Button>
                                </DialogActions>
                            </Dialog>
                </form>
            </div>
        );
    }
}
export default AddRelationshipDialogDialog;