# @knat_dev/form-fusion

A simple, declarative form library for React with Zod validation and react-hook-form integration.

## Installation

To install the `@knat_dev/form-fusion` package, run one of the following commands depending on your package manager:

**npm:**

```bash
npm install @knat_dev/form-fusion
```

**yarn:**

```bash
yarn add @knat_dev/form-fusion
```

**pnpm:**

```bash
pnpm add @knat_dev/form-fusion
```

## Usage

To use `@knat_dev/form-fusion`, first import the necessary components:

```tsx
import { FormFactory, useFormFactory } from '@knat_dev/form-fusion';
import { z } from 'zod';
```

### Example

Create a form schema using Zod:

```tsx
const formSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email address'),
});
```

Define your form fields and components:

```tsx
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

```tsx
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

Contributions to this library are welcome! If you encounter any issues or would like to suggest improvements, please [open an issue](https://github.com/Knat-Dev/form-fusion/issues) or submit a pull request.

## Disclaimer

Please note that while we strive to make @knat_dev/form-fusion as versatile as possible, it may not work for every form. If you encounter any issues or have any suggestions, we welcome your feedback and contributions to the library.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more information.
