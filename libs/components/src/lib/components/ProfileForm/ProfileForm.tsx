import React, { FC } from 'react'
import { UserModel } from '@mono-graph/core'
import { FormProps } from '../../interfaces/form-props'
import { useForm } from 'react-hook-form'
import { Button, TextField } from '@mui/material'
import styles from './ProfileForm.module.scss'

const FIELD_REQUIRED_MESSAGE = 'The field is required'

function notAllowedSymbolsValidator(value: string) {
  if (/[,=´`'#&%§"!°_:;\\+?.*^$(){}|[\]/]+/.test(value)) {
    return 'Next symbols are not allowed - ,=´`\'#&%§"!°_:;\\+?.*^$(){}|[]/'
  }
  return true
}

export const ProfileForm: FC<FormProps<UserModel>> = ({
  loading,
  defaultValues = {},
  onSubmit,
}) => {
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<UserModel>({
    defaultValues,
  })

  return (
    <form className={styles['wrap']} onSubmit={handleSubmit(onSubmit)}>
      <TextField
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
      >
        Submit
      </Button>
    </form>
  )
}
