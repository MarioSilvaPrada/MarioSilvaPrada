import styled from 'styled-components';
import { RED, BOX_SHADOW2 } from '../../styles/styles';

export const StyledPortfolio = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 90rem;
  margin: 3rem auto;

  .my-work {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(25rem, 1fr));
    grid-template-rows: 25rem;
    gap: 2rem;
    place-items: center;
  }

  .portfolio-description {
    line-height: 1.5rem;
  }

  .project {
    width: 25rem;
    height: 25rem;
    border: 1px solid #d0d0d0;
    border-radius: 2rem;
    ${BOX_SHADOW2};
  }

  .project a {
    text-decoration: none;
    color: black;
  }

  .project img {
    width: 100%;
    height: 60%;
    border-radius: 2rem 2rem 0 0;
  }

  .project h2 {
    font-size: 1.3rem;
  }

  .project h2:hover {
    text-decoration: underline;
  }

  .project i {
    margin-left: 5px;
  }

  .project .github {
    color: #999999;
    transition: 0.5s;
    font-size: 1.2rem;
  }

  .project .github:hover {
    color: ${RED};
  }
`;

export const Buttons = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Button = styled.button`
  border: none;
  background: ${RED};
  padding: 1rem;
  font-size: 1.4rem;
  margin: 2rem 4rem;
  min-width: 7rem;
  cursor: pointer;
  border-radius: .5rem;
  color: white;
  ${(props) => (props.isWeb ? 'opacity:1' : 'opacity:.5')};
  transition: .5s;

  &:hover {
    ${(props) => !props.isWeb && 'transform: scale(1.1);'};
  }
`;

export const appImg = styled.img`width: 30rem;`;

export const Wrapper = styled.div`padding: 3 rem;`;


export const Paragraph = styled.p`
  font-size: 1.1rem;
  width: 30rem;
  margin: 1.3rem auto 0;
  line-height: 2rem;
  text-align: start;
`

export const SmallText = styled.p`
  font-size: .8rem;
  font-weight: bold;
  text-align: center;
`