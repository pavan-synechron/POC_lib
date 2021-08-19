import React,{FunctionComponent,ReactNode} from 'react';
import PropTypes from 'prop-types';
import './Button.module.scss';

/**
 * Primary UI component for user interaction
 */

interface Props{
    primary: boolean
    backgroundColor:string
    size:|'small' |'medium'|'large'
    label?:string

}
 const Button:FunctionComponent<Props> = ({ primary, backgroundColor, size, label, ...props }) => {
  const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';
  return (
    <button
      type="button"
      className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
      style={{backgroundColor}}
      {...props}
    >
      {label}
    </button>
  );
};



Button.defaultProps = {
  backgroundColor: undefined,
  primary: false,
  size: 'medium',
  
};

export default Button