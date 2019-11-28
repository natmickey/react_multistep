import React, { Component } from 'react'
import styled from 'styled-components';
import PropTypes from 'prop-types';


const Track = styled.div`
    width: 100%;
    height: 20px;
    background-color: lightgreen;
    border-radius: 10px;
    box-shadow: inset 0 0 5px #000;
`;

const Thumb = styled.div`
    width: ${props => props.percentage}%;
    height: 100%;
    background-color: #6bccf9;
    border-radius: 8px;
`;

export default class ProgressBar extends Component {
    render() {
        return (
                <Track>
                    <Thumb 
                        percentage={this.props.percentage} 
                    />
                </Track>
        );
    }
}

ProgressBar.propTypes = {
    percentage: PropTypes.number,
};

