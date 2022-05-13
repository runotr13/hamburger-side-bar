import designSvg from "../../assets/design.svg";
import styled from 'styled-components'

const FooterDiv = styled.div`
    width:99.7vw;
    min-width: 500px;
    background-color: White;
    font-size: 2rem;
    color: #9d4d8c;
    border: 0.5px solid #9d4d8c;
    border-radius: 5px;
    height: 55px;
    display: flex;
    justify-content: center;
`
const Code = styled.code`
    color: grey;
    font-weight: bold;
    font-style: italic;
    padding-right: 1.5rem;
`
const Footer = () => {
  return (
    <FooterDiv>
      <a
        href="https://github.com/runotr13"
        target="_blank"
        rel="noopener noreferrer"
        
        style={{ textDecoration: "none" }}
      >
        <Code >{"<Onur/> "}</Code>
      </a>
      <img
        src={designSvg}
        alt="design"
        style={{ width: "40px", margin: "0  25px 0 10px" }}
      />
      <span
        >Copyright {new Date().getFullYear()}
      </span>
      </FooterDiv>
  );
};

export default Footer;