import React, { Component } from 'react';
import { FormLabel, TextField, Button, Grid, Typography} from '@material-ui/core';
import AddRelationshipDialogDialog from "./AddRelationshipDialog";

export default class Relationship extends Component {
    handleSubmit=(e)=>{
        alert('수정완료')
    }
    render() {
        const { insertRelation, datas } = this.props;

        return (
            <div>
                <Grid container item xs={12} spacing={2}>
                        <Grid item xs={6}>
                            <Typography variant="h5" component="h2" color="primary">
                                용어관계
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <AddRelationshipDialogDialog />
                        </Grid>
                    <Grid container item xs={2} style={{textAlign:'center'}}>
                        {
                            datas.relations.map((data) => {
                                console.log('relations data', data);
                                return (
                                    <Grid item xs={12}>
                                        <Typography variant="h6" component="h6" style={{padding:8}}>{Object.keys(data)[0]}</Typography>
                                    </Grid>
                                )
                            })
                        }
                    </Grid>
                    <Grid container item xs={10} style={{flexDirection:'column'}}>
                            {
                                datas.relations.map((data) => {
                                    console.log('relations data', data);
                                    return (
                                        <Grid container item spacing={2} style={{padding:8}}>
                                        <Grid item xs={12} lg={3}>
                                            <TextField id="out-lined-basic"
                                                       name={data[Object.keys(data)[0]] }
                                                       value={data[Object.keys(data)[0]]}
                                                       onChange={insertRelation}
                                                       variant="outlined"
                                                       fullWidth
                                            />
                                        </Grid>
                                            <Grid item xs={12} lg={3}>
                                        <TextField id="out-lined-basic"
                                                   name={data[Object.keys(data)[0]] }
                                                   value={data[Object.keys(data)[0]]}
                                                   onChange={insertRelation}
                                                   variant="outlined"
                                                   fullWidth
                                        />
                                    </Grid>
                                            <Grid item xs={12} lg={3}>
                                        <TextField id="out-lined-basic"
                                                   name={data[Object.keys(data)[0]] }
                                                   value={data[Object.keys(data)[0]]}
                                                   onChange={insertRelation}
                                                   variant="outlined"
                                                   fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12} lg={3}>
                                        <TextField id="out-lined-basic"
                                                   name={data[Object.keys(data)[0]] }
                                                   value={data[Object.keys(data)[0]]}
                                                   onChange={insertRelation}
                                                   variant="outlined"
                                                   fullWidth
                                        />
                                    </Grid>
                                </Grid>
                                    )
                                })
                            }
                    </Grid>
                </Grid>
                <Button style={{float:'right', width:80, height:40, margin:10}}
                        variant="contained"
                        color="primary"
                        onClick={this.handleSubmit}
                >
                    <h3>수정</h3>
                </Button>
            </div>
        );
    }
}