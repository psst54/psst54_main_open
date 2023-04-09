import React from "react";
import styled from "styled-components";
import { Color, Font } from "~themes";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { dark } from "react-syntax-highlighter/dist/esm/styles/prism";

import { DefaultText } from "../styles";

const Container = styled.div`
  display: flex;
  flex-direction: column;

  padding-top: 40px;
  padding-bottom: 40px;
`;

const H1 = styled(DefaultText)`
  font-size: ${Font.size.h1}px;
  line-height: ${Font.size.h1 + 20}px;
  word-break: keep-all;
`;
const P = styled(DefaultText)`
  line-height: ${Font.size.standard + 10}px;
  word-break: keep-all;
`;
const Li = styled(DefaultText)`
  line-height: ${Font.size.standard + 10}px;
  word-break: keep-all;
  padding-left: 2rem;
`;
const Ol = styled(DefaultText)`
  line-height: ${Font.size.standard + 10}px;
  word-break: keep-all;
`;
const Ul = styled(DefaultText)`
  line-height: ${Font.size.standard + 10}px;
  word-break: keep-all;
`;
const Img = styled.img`
  width: 80%;
`;
const A = styled.a`
  font-weight: 400;
  color: ${Color.dark.text.standard};
  font-size: ${Font.size.standard}px;
  text-decoration: none;
  word-break: keep-all;

  border-radius: 8px;
  padding: 0 8px;
  background: #595ee688;
`;
const Code = styled.code`
  font-weight: 400;
  color: ${Color.dark.text.standard};
  font-size: ${Font.size.standard}px;

  border: 2px solid #595ee688;
  border-radius: 12px;
  padding: 1px 10px;
`;

const LinkRenderer = (props) => {
  return (
    <A href={props.href} target="_blank">
      {props.children}
    </A>
  );
};

const MarkDownViewer = ({ file }) => {
  const [content, setContent] = React.useState("");

  React.useEffect(() => {
    fetch(file)
      .then((res) => res.text())
      .then((text) => setContent(text));
  }, []);

  return (
    <Container>
      <ReactMarkdown
        children={content}
        remarkPlugins={[remarkGfm]}
        renderers={{ link: LinkRenderer }}
        components={{
          h1({ node, children, ...props }) {
            return <H1 {...props}>{children}</H1>;
          },
          p({ node, children, ...props }) {
            return <P {...props}>{children}</P>;
          },
          li({ node, children, ...props }) {
            return <Li {...props}>{children}</Li>;
          },
          ol({ node, children, ...props }) {
            return <Ol {...props}>{children}</Ol>;
          },
          ul({ node, children, ...props }) {
            return <Ul {...props}>{children}</Ul>;
          },
          img({ node, children, ...props }) {
            return (
              <a href={props.src} target="_blank">
                <Img src={props.src} {...props}>
                  {children}
                </Img>
              </a>
            );
          },
          a({ node, children, ...props }) {
            return (
              <A {...props} target="_blank">
                {children}
              </A>
            );
          },
          code({ node, inline, className, children, ...props }) {
            const match = /language-(\w+)/.exec(className || "");
            return !inline && match ? (
              <SyntaxHighlighter
                children={String(children).replace(/\n$/, "")}
                style={dark}
                language={match[1]}
                PreTag="div"
                {...props}
              />
            ) : (
              <Code className={className} {...props}>
                {children}
              </Code>
            );
          },
        }}
      ></ReactMarkdown>
    </Container>
  );
};

export default MarkDownViewer;
