import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const Wrapper = styled.li`
  * {
    display: block;
    margin: 0;
  } 
  a {
    color: #04c;
    text-decoration: none;
    font-size: 14px;
  }
  a:hover {
    text-decoration: underline;
  }
  flex: 1 1 195px;
`

const Rank = styled.strong`
  top: 13px;
  right: 155px;
  text-align: right;
`

const Image = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 2px;
  box-shadow: 0 0 4px 0px rgba(0, 0, 0, 0.4);
  margin: 2px;
`

const Name = styled.h3`
  a { 
    color: #4c4c4c;
  }
`
const Artist = styled.h4`
  a { 
    color: #999;
    font-weight: 200;
  }
`

let rank = 1;

const Album = (props) => (
  <Wrapper>
    <strong>{rank++}.</strong>
    <a href={props.album.link.attributes.href}>
      <Image src={props.album.image[2].label}/>
    </a>
    <Name>
      <a href={props.album.link.attributes.href}>{props.album.name.label}</a>
    </Name>
    <Artist>
      <a href="">{props.album.artist.label}</a>
    </Artist>
    <a href={props.album.link.attributes.href}>Buy Now on iTunes ></a>
  </Wrapper>
);


Album.propTypes = {
  album: PropTypes.object
};

export default Album;
