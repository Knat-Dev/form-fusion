import { zodResolver } from '@hookform/resolvers/zod';
import { useCallback, useEffect, type BaseSyntheticEvent } from 'react';
import {
  useForm,
  type FieldValues,
  type Path,
  type PathValue,
  type SubmitHandler,
} from 'react-hook-form';
import type { ZodSchema } from 'zod';
import { useDeepMemo } from './useDeepMemo';

interface ReactiveFormOptions<T extends FieldValues> {
  defaultValues?: T;
  schema: ZodSchema<T>;
  onSubmit: SubmitHandler<T>;
  resetValuesOnSubmit?: boolean;
}

export function useFormFactory<T extends FieldValues>({
  onSubmit,
  schema,
  defaultValues,
  resetValuesOnSubmit = false,
}: ReactiveFormOptions<T>) {
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    getValues,
    formState,
  } = useForm<T>({
    resolver: zodResolver(schema),
  });
  const memoizedDefaultValues = useDeepMemo(defaultValues);

  const setDefaultValues = useCallback(() => {
    if (memoizedDefaultValues)
      Object.entries(memoizedDefaultValues).forEach(([key, value]) => {
        setValue(key as Path<T>, value as PathValue<T, Path<T>>);
      });
  }, [memoizedDefaultValues, setValue]);

  const resetDefaults = () => {
    if (resetValuesOnSubmit && memoizedDefaultValues) {
      setDefaultValues();
    }
  };

  useEffect(() => {
    setDefaultValues();
    if (!memoizedDefaultValues) {
      reset();
    }
  }, [reset, memoizedDefaultValues, setDefaultValues]);

  const handleFormSubmit = async (
    e?: BaseSyntheticEvent<object> | undefined,
  ) => {
    await handleSubmit(onSubmit)(e);
    resetDefaults();
  };

  return {
    register,
    watch,
    reset,
    setValue,
    formState,
    getValues,
    handleFormSubmit,
  };
}
