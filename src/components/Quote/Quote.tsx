import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuoteContent = styled.p`
  text-align: center;
  color: palevioletred;
`;

const Author = styled.h3<Pick<Props, 'backgroundColor'>>`
  text-align: center;
  margin-top: 5px;
  color: palevioletred;
`;

const Wrapper = styled.section`
  padding: 25px;
  background: papayawhip;
`;

export default function Quote({ author, quoteContent, backgroundColor, onClick, className }: Props) {
  return (
    <Wrapper className={className || ""}>
      <QuoteContent>
        "{quoteContent}"
      </QuoteContent>
      <Author
        onClick={onClick || undefined}
        backgroundColor={backgroundColor}
      >
        - {author}
      </Author>
    </Wrapper>
  );
}

Quote.propTypes = {
  author: PropTypes.string.isRequired,
  backgroundColor: PropTypes.string,
  onClick: PropTypes.func,
  quoteContent: PropTypes.string,
  className: PropTypes.string,
};

Quote.defaultProps = {
  backgroundColor: undefined,
  onClick: undefined,
};

export type Props = PropTypes.InferProps<typeof Quote.propTypes>;
