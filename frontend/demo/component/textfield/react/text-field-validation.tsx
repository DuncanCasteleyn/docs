import { reactExample } from 'Frontend/demo/react-example'; // hidden-source-line
import { TextField, type TextFieldElement } from '@vaadin/react-components/TextField.js';

function Example() {
  return (
    // tag::snippet[]
    <TextField
      required
      minlength={5}
      maxlength={18}
      pattern="^[+]?[\(]?[0-9]{3}[\)]?[\-]?[0-9]{3}[\-]?[0-9]{4,6}$"
      allowedCharPattern="[0-9()+-]"
      label="Phone number"
      helperText="Format: +(123)456-7890"
      onValidated={(event) => {
        const field = event.target as TextFieldElement;
        const value = field.value;
        if (!value) {
          field.errorMessage = 'Field is required';
        } else if (value.length < field.minlength!) {
          field.errorMessage = `Minimum length is ${field.minlength} characters`;
        } else if (value.length > field.maxlength!) {
          field.errorMessage = `Maximum length is ${field.maxlength} characters`;
        } else if (!new RegExp(field.pattern).test(value)) {
          field.errorMessage = 'Invalid phone number format';
        } else {
          field.errorMessage = '';
        }
      }}
    />
    // end::snippet[]
  );
}

export default reactExample(Example); // hidden-source-line
