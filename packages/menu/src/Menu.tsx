/**
 * TODO: rework
 * Copyright © 2018 Galaxy Software Services https://github.com/GSS-FED/vital-ui-kit-react
 * MIT license
 */

import * as React from 'react';
import cn from 'classnames';
import styled from 'styled-components';

import { MenuItem } from './MenuItem';

const Root = styled.div`
  display: inline-block;
  height: 100%;
`;

type Props = {
  border?: boolean;
  children: React.ReactElement<any>[];
  style?: React.CSSProperties;
  /** default: `vital__menu` */
  className?: string;
};

export class Menu extends React.Component<Props> {
  static defaultProps = {
    border: true,
    style: undefined,
    className: '',
  };

  static Item = MenuItem;

  render() {
    const {
      children,
      border,
      className,
      style,
      ...props
    } = this.props;
    return (
      <Root
        className={cn('vital__menu', className)}
        style={style}
        {...props}
      >
        {React.Children.map(children, child =>
          // @ts-ignore
          React.cloneElement(child, {
            border,
            ...props,
          }),
        )}
      </Root>
    );
  }
}
