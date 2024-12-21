'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { contactFormMocks } from '@mocks';
import { FormControl, FormHelperText, Grid, TextField } from '@mui/material';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';

import { useState } from 'react';
import { ContactSchemaType, contactSchema } from 'schemas';
import * as S from './styles';

type ContactFormProps = {};

const ContactForm = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<ContactSchemaType>({
    mode: 'onBlur',
    reValidateMode: 'onBlur',
    resolver: zodResolver(contactSchema),
    defaultValues: { firstName: '', lastName: '', email: '', phone: '', address: '', zipCode: '', message: '' }
  });

  const onSubmit: SubmitHandler<ContactSchemaType> = async (data) => {
    try {
      setIsLoading(true);
      await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    } catch (error) {
      console.error(error);
    } finally {
      reset();
      setIsLoading(false);
    }
  };

  return (
    <S.ContactFormWrap onSubmit={handleSubmit(onSubmit)} noValidate>
      <Grid container spacing={3}>
        {contactFormMocks.map((item, index) => (
          <Grid item {...item.col} key={index}>
            <Controller
              name={item.textField.name}
              control={control}
              defaultValue=''
              render={({ field: { value, onChange, onBlur, ref }, fieldState: { error } }) => (
                <FormControl fullWidth>
                  <TextField {...item.textField} inputRef={ref} value={value} onChange={onChange} onBlur={onBlur} error={Boolean(error)} />
                  <FormHelperText sx={{ color: 'error.main' }}>{error?.message ?? ''}</FormHelperText>
                </FormControl>
              )}
            />
          </Grid>
        ))}
        <Grid item xs={12}>
          <S.ContactFormSubmit type='submit' fullWidth variant='maruhachi' disabled={isLoading}>
            送信
          </S.ContactFormSubmit>
        </Grid>
      </Grid>
    </S.ContactFormWrap>
  );
};

export default ContactForm;
