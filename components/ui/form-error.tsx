interface FormErrorProps {
    errors?: string | string[]
  }
  
  export function FormError({ errors }: FormErrorProps) {
    if (!errors) return null
  
    return <p className="text-destructive text-sm">{Array.isArray(errors) ? errors[0] : errors}</p>
  }
  