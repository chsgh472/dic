import React, { Component } from 'react';
import {Grid, Radio, RadioGroup, FormControlLabel, Typography} from '@material-ui/core';

  class SearchLang extends Component {
    
    render() {
        
        const {selectedLangValue, filterdLanguage, } = this.props;


        console.log('selectedLangValue : ', selectedLangValue)

        return (
            <div>
                <Typography variant="h5" component="h2" color="primary">
                    검색대상 언어
                </Typography>
                        <Grid container spacing={2} justify='space-around' style={{margin:10}}>
                            <RadioGroup row
                                        aria-label="language"
                                        name="language1" 
                                        value={selectedLangValue}
                                        onChange={filterdLanguage}>
                                <FormControlLabel 
                                                  value="korean"
                                                  control={<Radio color="primary"/>}
                                                  label="한국어" />
                                <FormControlLabel 
                                                  value="english"
                                                  control={<Radio color="primary"/>}
                                                  label="영어" />
                                <FormControlLabel 
                                                  value="china"
                                                  control={<Radio color="primary"/>}
                                                  label="중국어" />
                                <FormControlLabel 
                                                  value="japanese"
                                                  control={<Radio color="primary"/>}
                                                  label="일본어" />
                            </RadioGroup>
                        </Grid>
            </div>
        );
    }
} 

  export default SearchLang;
