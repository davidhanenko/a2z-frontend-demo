import { useForm } from 'react-hook-form';
import axios from 'axios';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Oval from 'react-loader-spinner';

import {
  EmailFormStyles,
  EmailSendBtn,
} from './EmailFormStyles';


export default function EmailForm({ emailTo }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: {
      errors,
      isSubmitting,
      dirtyFields,
      isDirty,
    },
  } = useForm({
    defaultValues: {
      name: '',
      email: '',
      subject: '',
      emailMessage: '',
    },
  });

  const onSubmitForm = async values => {
    let config = {
      method: 'post',
      url: `${process.env.NEXT_PUBLIC_API_URL}/emails`,
      headers: {
        'Content-Type': 'application/json',
      },
      data: {
        to: emailTo,
        from: values.email,
        subject: values.subject
          ? `${values.subject} - from A2Z`
          : 'Email from A2Z website',
        text: `<h3>My name is ${values.name}</h3> <h3>My email - <em>${values.email}</em></h3>
        <p>${values.emailMessage}</p>`,
      },
    };

    try {
      const resp = await axios(config);

      if (resp.status == 200 && !resp.data.error) {
        toast.success('Message sent successfully!');
        reset();
      } else {
        toast.error(
          'An unexpected error occurred, please try again'
        );
      }
    } catch (err) {
      toast.error(
        'An unexpected error occurred, please try again'
      );
    }
  };

  
  return (
    <EmailFormStyles
      isDirty={isDirty}
      onSubmit={handleSubmit(onSubmitForm)}
    >
      <div className='form'>
        <h2>Contact Us</h2>

        <fieldset className='input-field'>
          <label
            className={
              dirtyFields.name ? 'label-dirty' : ''
            }
            htmlFor='name'
          >
            Name
          </label>
          <input
            id='name'
            className={
              dirtyFields.name ? 'input-dirty' : ''
            }
            type='text'
            {...register('name', {
              required: 'Name is required',
              minLength: {
                value: 2,
                message: 'Looks too short',
              },
            })}
          />
          {
            <div className='input-error'>
              {errors?.name?.message}
            </div>
          }
        </fieldset>

        <fieldset className='input-field'>
          <label
            className={
              dirtyFields.email ? 'label-dirty' : ''
            }
            htmlFor='email'
          >
            Email
          </label>
          <input
            id='email'
            className={
              dirtyFields.email ? 'input-dirty' : ''
            }
            type='email'
            {...register('email', {
              required: 'Email is required',
            })}
          />
          {
            <span className='input-error'>
              {errors?.email?.message}
            </span>
          }
        </fieldset>

        <fieldset className='input-field'>
          <label
            className={
              dirtyFields.subject ? 'label-dirty' : ''
            }
            htmlFor='subject'
          >
            Subject
          </label>
          <input
            id='subject'
            className={
              dirtyFields.subject ? 'input-dirty' : ''
            }
            type='string'
            {...register('subject', {
              required: false,
            })}
          />
          {
            <span className='input-error'>
              {errors?.subject?.message}
            </span>
          }
        </fieldset>

        <fieldset className='input-field'>
          <label
            className={
              dirtyFields.emailMessage ? 'label-dirty' : ''
            }
            htmlFor='message'
          >
            Message
          </label>
          <textarea
            id='message'
            className={
              dirtyFields.emailMessage ? 'input-dirty' : ''
            }
            rows={6}
            {...register('emailMessage', {
              required: 'Message is required',
              minLength: {
                value: 10,
                message: 'Tell us more',
              },
            })}
          />
          {
            <span className='input-error'>
              {errors?.emailMessage?.message}
            </span>
          }
        </fieldset>

        <EmailSendBtn type='submit' disabled={isSubmitting}>
          {isSubmitting ? (
            <Oval
              type='Oval'
              color='#b5dff0'
              height={25}
              width={25}
            />
          ) : (
            <span>send</span>
          )}
        </EmailSendBtn>
      </div>
    </EmailFormStyles>
  );
}
