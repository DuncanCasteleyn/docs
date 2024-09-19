import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line
import React from 'react';
import { useSignal } from '@vaadin/hilla-react-signals';
import { useSignals } from '@preact/signals-react/runtime'; // hidden-source-line
import { TimePicker } from '@vaadin/react-components/TimePicker.js';
import type { TimePickerElement } from '@vaadin/react-components/TimePicker.js';

function Example() {
  useSignals(); // hidden-source-line
  const errorMessage = useSignal('');
  const currentValue = useSignal('08:30');

  return (
    // tag::snippet[]
    <TimePicker
      label="Appointment time"
      helper-text="Open 8:00-16:00"
      value={currentValue.value}
      required
      min="08:00"
      max="16:00"
      step={60 * 30}
      errorMessage={errorMessage.value}
      onValueChanged={(event) => {
        currentValue.value = event.detail.value;
      }}
      onValidated={(event) => {
        const field = event.target as TimePickerElement;
        const inputElement = field.inputElement as HTMLInputElement;
        if (!field.value && inputElement.value) {
          errorMessage.value = 'Invalid time format';
        } else if (!field.value) {
          errorMessage.value = 'Field is required';
        } else if (field.value < field.min) {
          errorMessage.value = 'Too early, choose another time';
        } else if (field.value > field.max) {
          errorMessage.value = 'Too late, choose another time';
        } else {
          errorMessage.value = '';
        }
      }}
    />
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
