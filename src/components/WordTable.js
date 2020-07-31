import React, { Component } from 'react';
import {TableHead, TableCell, TableBody, TableRow, Table, Checkbox, Typography} from '@material-ui/core';
import withStyles from "@material-ui/core/styles/withStyles";
import RadioGroup from "@material-ui/core/RadioGroup";

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
    },
}))(TableCell);

export default class WordTable extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checkedValues: []
        }
    }

   
    // handleCheck(x) {
    //     this.setState(state => ({
    //         checkedValues: state.checkedValues.inclueds(x)
    //         ? state.checkedValues.filter(c => c !== x)
    //         : [...state.checkedValues, x]
    //     }));
    // }


    render () {
        console.log('checked', this.state.checked);
        const classes = StyledTableCell;
        const { data, check } = this.props;

        return (
            <div>
                <Table align='center' variant="contained" >
                    <TableHead style={{backgroundColor:'black'}}>
                        <TableRow style={{borderRadius:20}}>
                            <TableCell style={{color:'white', textAlign:'center'}}>No.</TableCell>
                            <TableCell style={{color:'white', textAlign:'center'}}>용어명</TableCell>
                            <TableCell style={{color:'white', textAlign:'center'}}>범주</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {
                            data.map(( o, index)=>{
                                return (
                                <TableRow key={o.name + "_"+ index}>
                                    <TableCell style={{textAlign:'center'}}>
                                        <Checkbox value={o.name}
                                                  name={o.name}
                                                  onClick={check}
                                                  color='primary'
                                                  />{index + 1}
                                    </TableCell>
                                    <TableCell style={{textAlign:'center'}}>{o.name}</TableCell>
                                    <TableCell style={{textAlign:'center'}}>{o.category}</TableCell>
                                </TableRow>);
                            })

                        }
                    </TableBody>
                </Table>
            </div>
        );
    }
}
