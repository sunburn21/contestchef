import React, { Component, createRef } from 'react';
import ReactMarkdown from 'react-markdown/with-html';
import MathJax from 'react-mathjax';
import RemarkMathPlugin from 'remark-math';
import './index.css';
const tex = `f(x) = \\int_{-\\infty}^\\infty\\hat f(\\xi)\\,e^{2 \\pi i \\xi x}\\,d\\xi`


function MarkdownRender(props) {
    const newProps = {
        ...props,
        plugins: [
          RemarkMathPlugin,
        ],
        renderers: {
          ...props.renderers,
          math: (props) => 
            <MathJax.Node formula={props.value} />,
          inlineMath: (props) =>
            <MathJax.Node inline formula={props.value} />
        }
      };
      console.log(props.value);
      return (
        <MathJax.Provider className='for_fontsize'  style={{fontSize:'15px'}} input="latex">
            <ReactMarkdown className='for_fontsize'  style={{fontSize:'15px'}}  escapeHtml={false} {...newProps} />
        </MathJax.Provider>
      );
}

export default MarkdownRender
