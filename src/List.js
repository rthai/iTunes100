import React from 'react';
import PropTypes from 'prop-types';
import Album from './Album';
import styled from 'styled-components';

const Ul = styled.ul`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100vw;
  list-style: none;
`

const List = (props) => (
  <Ul>
    {props.albums.map((album, i) => <Album album={album} key={i}/>)}
  </Ul>
);

List.propTypes = {
  albums: PropTypes.array
};

export default List;