import React, { Component } from 'react';
import { FormLabel, TextField, Button, Grid, Typography} from '@material-ui/core';
import AddBoxIcon from '@material-ui/icons/AddBox';

export default class Relationship extends Component {

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
                            <Button style={{borderRadius:20, float:'right'}}
                                variant="contained"
                                color="primary"
                                size="large"
                                startIcon={<AddBoxIcon />}
                            >
                                용어관계 항목 추가
                            </Button>
                        </Grid>
                    <Grid container item xs={2} style={{textAlign:'center'}}>
                        {
                            datas.relations.map((data) => {
                                console.log('relations data', data);
                                return (
                                    <Grid item xs={12}>
                                        <Typography variant="h5" component="h5" style={{margin:5}}>{Object.keys(data)[0]}</Typography>
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
                                        <Grid container item xs={12}>
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
            </div>
        );
    }
}