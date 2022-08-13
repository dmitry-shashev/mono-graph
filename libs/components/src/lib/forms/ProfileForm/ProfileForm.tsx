import React, { FC } from 'react'
import { FormProps } from '../../interfaces/form-props'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import styles from './ProfileForm.module.scss'
import { User } from '@mono-graph/core'
import { notAllowedSymbolsValidator } from '../form-validators'
import { FIELD_REQUIRED_MESSAGE } from '../form-error-messages'

export const ProfileForm: FC<FormProps<User>> = ({
  loading,
  defaultValues = {},
  onSubmit,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<User>({
    defaultValues,
  })

  return (
    <form className={styles.wrap} onSubmit={handleSubmit(onSubmit)}>
      <TextField
        inputProps={{
          'aria-label': 'First Name',
        }}
        autoFocus
        label="First Name"
        variant="outlined"
        disabled={loading}
        error={!!errors.firstName}
        helperText={errors.firstName?.message}
        {...register('firstName', {
          required: FIELD_REQUIRED_MESSAGE,
          validate: notAllowedSymbolsValidator,
        })}
      />
      <TextField
        inputProps={{
          'aria-label': 'Last Name',
        }}
        label="Last Name"
        variant="outlined"
        disabled={loading}
        error={!!errors.lastName}
        helperText={errors.lastName?.message}
        {...register('lastName', {
          required: FIELD_REQUIRED_MESSAGE,
          validate: notAllowedSymbolsValidator,
        })}
      />
      <Button
        disabled={loading}
        variant="contained"
        color="primary"
        type="submit"
        size="large"
        aria-label="Submit the form"
      >
        Submit
      </Button>
    </form>
  )
}
