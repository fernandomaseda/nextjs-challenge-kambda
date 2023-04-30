import { createGlobalStyle } from 'styled-components';
import reset from './reset';
import responsive from './responsive';
import 'react-loading-skeleton/dist/skeleton.css'

const GlobalStyle = createGlobalStyle`
  /* Resetting Styles */
	${reset}

  /* General */
	html{
		font-size: 16px;
	}
  body{
		font-family: 'Overpass', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
		font-size: 1em;
    overflow: overlay;
    overflow-x: hidden;
    &.no-scroll, &.no-mobile-scroll{
      overflow: hidden;
    }
	}
  .flex-1{
    flex: 1;
  }
	input::-webkit-outer-spin-button,
	input::-webkit-inner-spin-button {
		-webkit-appearance: none;
	}

  ::-webkit-scrollbar {
    -webkit-appearance: none;
    background: transparent;
    width: 20px;
    height: 0;
  }
  ::-webkit-scrollbar-thumb {
    height: 16px;
    border: 5px solid transparent;
    background-clip: padding-box;
    -webkit-border-radius: 20px;
    background-color: #d0d0d0;
    -webkit-box-shadow: inset 0 0 0 0px rgba(255, 255, 255, 0.5);
  }
  ::-webkit-scrollbar-button {
    width: 0;
    height: 0;
    display: none;
  }
  ::-webkit-scrollbar-corner {
    background-color: transparent;
  }

  div.thin-scrollbar::-webkit-scrollbar {
    -webkit-appearance: none;
    background: transparent;
    width: 8px;
    height: 0;
  }
  div.thin-scrollbar::-webkit-scrollbar-thumb {
    height: 16px;
    border: 2px solid transparent;
    background-clip: padding-box;
    -webkit-border-radius: 8px;
    background-color: #d0d0d0;
    -webkit-box-shadow: inset 0 0 0 0px rgba(255, 255, 255, 0.5);
  }

  /* Responsive Styles */
  ${responsive}
`;

export default GlobalStyle;
