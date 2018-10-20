import React, { Component } from 'react';
import styled from 'styled-components';
import Title from './Title';

export default class App extends Component {
  render() {
    return (
      <Container>
        {this.props.data.map((item, index) => {
          return (
            <Card key={index}>
              <Title title={item.name} />
            </Card>
          )
        })}
      </Container>
    );
  }
}

const Loading = styled.div`
  color: #fff;
`;

const Container = styled.div`
  padding-top: 30px;
  height: calc(100vh - 30px);
  text-align: center;
  background: linear-gradient(20deg,rgb(131, 25, 126),#ff7d2b);
`;

const Card = styled.a`
	max-width: 350px;
	width: 100%;
	display: inline-block;
	border-radius: 3px;
	color: #000;
	margin: 0 10px 15px;
  box-shadow: 7px 7px 50px -10px rgba(0, 0, 0, .5);
  background-color: bisque;
`;
