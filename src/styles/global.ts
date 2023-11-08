/* stylelint-disable */
import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  *,
  *:before,
  *:after {
    box-sizing: inherit;
    font-family: 'Satoshi', sans-serif;
  }

  html, 
  body {
    height:100%; 
    padding:0; 
    margin:0; 
    width:100%;
  }
  body::-webkit-scrollbar {
  width: 0.3em;
  /* display: none; */
}
 
body::-webkit-scrollbar-track {
  box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
}
 
body::-webkit-scrollbar-thumb {
  background-color: #C11E22;
}

  
  html {
    box-sizing: border-box;
    font-size: 16px;
  }

  body {
    display:flex; 
    flex-direction:column;
    overflow-x: hidden;
    /* background: ${({ theme }) => theme.colors.nero}; */
    color: ${({ theme }) => theme.colors.nero};
    
  }

  /* since next js adds a wrapper div inside body tag, give it 
  a 100% height so the children can have 100% height if needed. */
  #__next {
    height: 100%;
  }

  body,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  ol,
  ul,  
  fieldset,
  label {
    margin: 0;
    padding: 0;
    font-weight: normal;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    font-weight: bold;
  }
  
  ol,
  ul {
    list-style: none;
  }
  
  img {
    max-width: 100%;
    height: auto;
  }
  
  a {
    color: inherit;
    text-decoration: none;
  }

  .row{
    --bs-gutter-x: 0.5rem;
    --bs-gutter-y: 0.5;
    display: flex;
    flex-wrap: wrap;
    margin-top: calc(-1 * var(--bs-gutter-y));
    margin-right: calc(-0.5 * var(--bs-gutter-x));
    margin-left: calc(-0.5 * var(--bs-gutter-x));
}
.row > * {
    flex-shrink: 0;
    width: 100%;
    max-width: 100%;
    padding-right: calc(var(--bs-gutter-x) * 0.5);
    padding-left: calc(var(--bs-gutter-x) * 0.5);
    margin-top: var(--bs-gutter-y);
}

.col{
    flex: 1 0 0%;
}

.col-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
}

.col-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
}
.col-3 {
    flex: 0 0 auto;
    width: 25%;
}
.col-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
}

.col-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
}
.col-6 {
    flex: 0 0 auto;
    width: 50%;
}
.col-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
}
.col-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
}
.col-9 {
    flex: 0 0 auto;
    width: 75%;
}

.col-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
}
.col-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
}

.col-12 {
    flex: 0 0 auto;
    width: 100%;
}

@media (min-width: 576px) {
  .col-sm {
    flex: 1 0 0%;
  }

  .row-cols-sm-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-sm-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-sm-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-sm-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-sm-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-sm-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-sm-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-sm-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-sm-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-sm-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-sm-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-sm-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-sm-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-sm-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-sm-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-sm-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-sm-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-sm-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-sm-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-sm-12 {
    flex: 0 0 auto;
    width: 100%;
  }


}
@media (min-width: 768px) {
  .col-md {
    flex: 1 0 0%;
  }

  .row-cols-md-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-md-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-md-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-md-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-md-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-md-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-md-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-md-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-md-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-md-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-md-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-md-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-md-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-md-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-md-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-md-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-md-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-md-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-md-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-md-12 {
    flex: 0 0 auto;
    width: 100%;
  }

}

@media (min-width: 992px) {
  .col-lg {
    flex: 1 0 0%;
  }

  .row-cols-lg-auto > * {
    flex: 0 0 auto;
    width: auto;
  }

  .row-cols-lg-1 > * {
    flex: 0 0 auto;
    width: 100%;
  }

  .row-cols-lg-2 > * {
    flex: 0 0 auto;
    width: 50%;
  }

  .row-cols-lg-3 > * {
    flex: 0 0 auto;
    width: 33.3333333333%;
  }

  .row-cols-lg-4 > * {
    flex: 0 0 auto;
    width: 25%;
  }

  .row-cols-lg-5 > * {
    flex: 0 0 auto;
    width: 20%;
  }

  .row-cols-lg-6 > * {
    flex: 0 0 auto;
    width: 16.6666666667%;
  }

  .col-lg-auto {
    flex: 0 0 auto;
    width: auto;
  }

  .col-lg-1 {
    flex: 0 0 auto;
    width: 8.33333333%;
  }

  .col-lg-2 {
    flex: 0 0 auto;
    width: 16.66666667%;
  }

  .col-lg-3 {
    flex: 0 0 auto;
    width: 25%;
  }

  .col-lg-4 {
    flex: 0 0 auto;
    width: 33.33333333%;
  }

  .col-lg-5 {
    flex: 0 0 auto;
    width: 41.66666667%;
  }

  .col-lg-6 {
    flex: 0 0 auto;
    width: 50%;
  }

  .col-lg-7 {
    flex: 0 0 auto;
    width: 58.33333333%;
  }

  .col-lg-8 {
    flex: 0 0 auto;
    width: 66.66666667%;
  }

  .col-lg-9 {
    flex: 0 0 auto;
    width: 75%;
  }

  .col-lg-10 {
    flex: 0 0 auto;
    width: 83.33333333%;
  }

  .col-lg-11 {
    flex: 0 0 auto;
    width: 91.66666667%;
  }

  .col-lg-12 {
    flex: 0 0 auto;
    width: 100%;
  }
}


  .react-datepicker__day--keyboard-selected,
	.react-datepicker__day--selected {
		background-color: ${({ theme }) => theme.colors.lighterRed};
		color: ${({ theme }) => theme.colors.white} !important;
		
	}
	
	.react-datepicker__day-name {
		color: ${({ theme }) => theme.colors.godgray};
	}
	.react-datepicker__header {
		background-color: ${({ theme }) => theme.colors.white} !important;
		border-bottom: 0 !important;
	}
	.react-datepicker__day--disabled {
		text-decoration-line: line-through;
		color: ${({ theme }) => theme.colors.geyser} !important;
	}
	.react-datepicker__day {
		
		text-align: center;
		color: ${({ theme }) => theme.colors.darkGray};
	}

  .react-tel-input input {
    width:100%!important;
  }

  .react-toast-notifications__container{
    z-index:99999!important;
  }

#confirm_modal{
  overflow-y:auto;
  background:white;
 #modal-body{
  padding: 1rem 0;
 }
}


.smooth{
   animation: 0.5s smooth;
}
@keyframes smooth{
  from {
      opacity: 0;
      
  }
  to{
      opacity: 1;
    
  }
}

@keyframes zoom{
  0%{
    transform: scale(0.99);
  }
  50%{
    transform: scale(1.05);
  }
  100%{
    transform: scale(1)
  }
}

#nprogress .bar {
  background:${({ theme }) => theme.colors.primary500}!important;
}
#nprogress .peg {
  box-shadow: 0 0 10px ${({ theme }) => theme.colors.primary500}, 0 0 5px ${({ theme }) =>
    theme.colors.primary500};
}
#nprogress .spinner-icon {
  border-top-color: ${({ theme }) => theme.colors.primary500};
  border-left-color:${({ theme }) => theme.colors.primary500};
}

@keyframes moveUpAnime {
0% {
    transform: translateY(10px);
  }
 
  100% {
    transform: translateY(0); /* End at the original position */
  }
}

.moveup {
  animation: moveUpAnime 1s ease-in-out ;
}

.transition-all {
    transition-property: all;
    transition-timing-function: cubic-bezier(.4,0,.2,1);
    transition-duration: .5s;
}

.SelectTrigger {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border-radius: 4px;
  padding: 0 15px;
  font-size: 13px;
  line-height: 1;
  height: 35px;
  gap: 5px;
  background-color: white;
  color: var(--violet-11);
  /* box-shadow: 0 2px 10px var(--black-a7); */
}
.SelectTrigger:hover {
  /* background-color: var(--mauve-3); */
}
.SelectTrigger:focus {
  box-shadow: 0 0 0 2px black;
}
.SelectTrigger[data-placeholder] {
  color: var(--violet-9);
}

.SelectIcon {
  color: Var(--violet-11);
}

.SelectContent {
  overflow: hidden;
  background-color: white;
  border-radius: 6px;
  box-shadow: 0px 10px 38px -10px rgba(22, 23, 24, 0.35), 0px 10px 20px -15px rgba(22, 23, 24, 0.2);
}

.SelectViewport {
  padding: 5px;
}

.SelectItem {
  font-size: 13px;
  line-height: 1;
  color: var(--violet-11);
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 25px;
  padding: 0 35px 0 25px;
  position: relative;
  user-select: none;
}
.SelectItem[data-disabled] {
  /* color: var(--mauve-8); */
  pointer-events: none;
}
.SelectItem[data-highlighted] {
  outline: none;
  background-color: var(--violet-9);
  color: var(--violet-1);
}

.SelectLabel {
  padding: 0 25px;
  font-size: 12px;
  line-height: 25px;
  color: var(--mauve-11);
}

.SelectSeparator {
  height: 1px;
  /* background-color: var(--violet-6); */
  margin: 5px;
}

.SelectItemIndicator {
  position: absolute;
  left: 0;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
}

.SelectScrollButton {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: white;
  color: var(--violet-11);
  cursor: default;
}
 
`;
