import React from 'react';
import styled from "styled-components";
import {Link} from "react-router-dom";

function ContentBox({imageUrl, text, ctaUrl}) {
    return (
        <ContentBoxContainer>
            <Link to={ctaUrl}>
                <div className="img-container">
                    <div className="image-overlay"></div>
                    <img src={imageUrl} alt={text}/>
                </div>
                <div className="text-container">
                    <h2>{text}</h2>
                </div>
            </Link>
        </ContentBoxContainer>
    );
}

const ContentBoxContainer = styled.article`
  position: relative;
  padding: 2rem 0rem;
  width: 92%;
  height: 50vh;
  margin: 0 auto;
  cursor: pointer;


  .img-container {
    position: relative;
    overflow: hidden;
    width: 100%;
    height: 100%;

    .image-overlay {
      position: absolute;
      top: 0;
      left: 0;
      background-color: var(--ColorBlack);
      opacity: 0.35;
      width: 100%;
      height: 100%;
      z-index: 900;
    }

    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--TransitionSlow);
    }
  }

  .text-container {
    color: var(--ColorWhite);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1000;

    h2 {
      font-family: var(--FontThick);
      text-transform: uppercase;
      text-align: center;
      font-size: 2rem;
      font-weight: 400;
      letter-spacing: 1.5px;
    }
  }

  &:hover {
    .img-container {
      img {
        transform: scale(1.05);
      }
    }
  }


`

export default ContentBox;