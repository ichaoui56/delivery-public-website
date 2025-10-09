"use client"

import * as React from "react"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { cn } from "@/lib/utils"

interface FormFieldAppProps<TValues extends Record<string, unknown>, TName extends keyof TValues>
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement>,
    "name" | "id" | "defaultValue" | "aria-invalid" | "aria-errormessage" | "onChange"
  > {
//   defaultValues: TValues
  errors?: Partial<Record<keyof TValues, string | string[]>> | null
  name: TName
  label: string
  pending?: boolean
  type?: "text" | "email" | "textarea" | "number" | "password" | "tel"
  required?: boolean
  defaultValue?: string
  onChange?: (value: string) => void
}

export function FormFieldApp<TValues extends Record<string, unknown>, TName extends keyof TValues>({
//   defaultValues,
  errors,
  name,
  label,
  pending,
  type = "text",
  required = false,
  placeholder,
  className,
  defaultValue,
  onChange,
  ...props
}: FormFieldAppProps<TValues, TName>) {
  const id = React.useId()
  const errorId = `${id}-error-${name as string}`
  const hasError = !!errors?.[name]
//   const defaultFieldValue = defaultValue ?? (defaultValues?.[name] !== undefined ? String(defaultValues[name]) : "")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    if (onChange) {
      onChange(e.target.value)
    }
  }

  return (
    <div className={cn("group/field grid gap-2", className)} data-invalid={hasError}>
      <Label htmlFor={id} className="group-data-[invalid=true]/field:text-destructive text-gray-700">
        {label} {required && <span aria-hidden="true">*</span>}
      </Label>
      {type === "textarea" ? (
        <Textarea
          id={id}
          name={name as string}
          placeholder={placeholder}
          className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
          disabled={pending}
          aria-invalid={hasError}
          aria-errormessage={hasError ? errorId : undefined}
        //   defaultValue={defaultFieldValue}
          onChange={handleChange}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <Input
          id={id}
          name={name as string}
          type={type}
          placeholder={placeholder}
          className="group-data-[invalid=true]/field:border-destructive focus-visible:group-data-[invalid=true]/field:ring-destructive"
          disabled={pending}
          aria-invalid={hasError}
          aria-errormessage={hasError ? errorId : undefined}
        //   defaultValue={defaultFieldValue}
          onChange={handleChange}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
      {hasError && errors?.[name] && (
        <p id={errorId} className="text-destructive text-sm">
          {Array.isArray(errors[name]) ? errors[name][0] : errors[name]}
        </p>
      )}
    </div>
  )
}
