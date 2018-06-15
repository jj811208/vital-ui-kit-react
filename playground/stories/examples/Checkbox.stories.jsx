/* eslint-disable no-unused-vars */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/prop-types */

import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';
import { withInfo } from '@storybook/addon-info';
import {
  withKnobs,
  text,
  boolean,
  number,
  select,
} from '@storybook/addon-knobs/react';
import { withNotes } from '@storybook/addon-notes';

import { Checkbox, CheckboxGroup } from '../../../packages/web/src';

export class CheckBoxExample extends React.Component {
  state = {
    checked: false,
  };

  handleChange = e => {
    this.setState(prevState => ({
      checked: !prevState.checked,
    }));
  };

  render() {
    const { label, round, disabled } = this.props;
    return (
      <Checkbox
        round={round}
        disabled={disabled}
        checked={this.state.checked}
        label={label}
        onChange={this.handleChange}
      />
    );
  }
}

storiesOf('Components | Checkbox', module)
  .addDecorator(withKnobs)
  .add(
    'Basic',
    withInfo()(
      withNotes('This is checkbox')(() => (
        <CheckBoxExample
          round={boolean('round', false)}
          disabled={boolean('disable', false)}
          label={text('Label', 'Label')}
        />
      )),
    ),
  )
  .add(
    'Custom Icon',
    withInfo()(
      withNotes('This is checkbox')(() => (
        <Checkbox
          defaultChecked
          label="Custom Icon"
          icon="star"
        />
      )),
    ),
  )
  .add(
    'CheckboxGroup',
    withInfo(`info`)(
      withNotes('This is checkboxgroup')(() => (
        <CheckboxGroup>
          <CheckBoxExample
            round={boolean('round', false)}
            disabled={boolean('disable', false)}
            label={text('Label', 'Label')}
          />
          <CheckBoxExample
            round={boolean('round', false)}
            disabled={boolean('disable', false)}
            label={text('Label', 'Label')}
          />
          <CheckBoxExample
            round={boolean('Round', false)}
            disabled={boolean('disable', false)}
            label={text('Label', 'Label')}
          />
        </CheckboxGroup>
      )),
    ),
  );
