# form-fusion

A simple, declarative form library for React with Zod validation and react-hook-form integration.

## Installation

To install the `form-fusion` package, run one of the following commands depending on your package manager:

**npm:**

```bash
npm install form-fusion
```

**yarn:**

```bash
yarn add form-fusion
```

**pnpm:**

```bash
pnpm add form-fusion
```

## Usage

To use `form-fusion`, first import the necessary components:

```javascript
import { FormFactory, useFormFactory } from 'form-fusion';
import { z } from 'zod';
```

### Example

Create a form schema using Zod:

```javascript
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});
```

Define your form fields and components:

```javascript
const fields = [
  {
    name: 'name',
    component: TextField,
    label: 'Name',
  },
  {
    name: 'email',
    component: EmailField,
    label: 'Email',
  },
];
```

Create a form using the `FormFactory` component:

```javascript
function MyForm() {
  const handleFormSubmit = (data) => {
    console.log('Form submitted:', data);
  };

  return (
    <FormFactory
      defaultValues={{ name: '', email: '' }}
      schema={formSchema}
      onSubmit={handleFormSubmit}
      fields={fields}
    >
      <button type="submit">Submit</button>
    </FormFactory>
  );
}
```

For more advanced usage, see the [API documentation](#api-documentation).

## API Documentation

### useFormFactory

The `useFormFactory` hook is the core of the library. It takes care of managing form state, validation, and submission. It returns an object containing the form methods and state that can be used with your custom form components.

### FormFactory

The `FormFactory` component is a declarative way to create forms. It uses the `useFormFactory` hook internally and renders form fields based on the provided `fields` prop.

### FieldProps

`FieldProps` is a TypeScript interface for defining the properties of your custom form field components. It includes properties like `name`, `label`, `required`, `placeholder`, and `error`.

### FormFactoryField

`FormFactoryField` is a TypeScript type for defining the shape of the objects in the `fields` array passed to the `FormFactory` component. It includes properties like `name`, `component`, `label`, and `placeholder`.

## Contributing

Contributions to this library are welcome! If you encounter any issues or would like to suggest improvements, please [open an issue](https://github.com/knat/form-fusion/issues) or submit a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
