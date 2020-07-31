import React, { Component } from 'react';
import { FormLabel, TextField, Button, Grid, Typography} from '@material-ui/core';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import AddBoxIcon from '@material-ui/icons/AddBox';

class AddLanguageDialog extends Component {
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
                        대상언어추가
                    </Button>
                            <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                                <DialogTitle id="form-dialog-title">대상언어 추가</DialogTitle>
                                <DialogContent>
                                    <DialogContentText>
                                        언어명을 입력하세요
                                    </DialogContentText>
                                    <TextField
                                        autoFocus
                                        margin="dense"
                                        id="language"
                                        label="새로운 언어명"
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
export default AddLanguageDialog;