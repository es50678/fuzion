import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.h1<Pick<Props, 'backgroundColor' | 'onClick'>>`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
  background-color: ${(props) => props.backgroundColor ? props.backgroundColor : 'black' }
`;

export default function Quote({ label, backgroundColor, onClick }: Props) {
  return (
    <Title
      onClick={onClick || undefined}
      backgroundColor={backgroundColor}
    >
      {label}
    </Title>
  )
}

Quote.propTypes = {
  backgroundColor: PropTypes.string,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Quote.defaultProps = {
  backgroundColor: undefined,
  onClick: undefined,
};

export type Props = PropTypes.InferProps<typeof Quote.propTypes>;
