import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  margin-top: 60px;
  padding-bottom: 15px;
  border-bottom: solid 1px #d6d6d6;
`

const Link = styled.a`
  color: #333;
  a:hover {
    color: #999;
  }
  a:active, a:link, a:visited {
    text-decoration: none;
  }
  text-align: justify;

`

const Subnav = () => (
  <Wrapper>
    <Link>Featured</Link>
    <Link>Songs</Link>
    <Link>Albums</Link>
    <Link>Free Apps</Link>
    <Link>Paid Apps</Link>
    <Link>Top Grossing Apps</Link>
    <Link>Books</Link>
    <Link>Movies</Link>
    <Link>TV Shows</Link>
    <Link>Music Videos</Link>
  </Wrapper>
)

export default Subnav;