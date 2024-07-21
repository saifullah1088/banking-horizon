import {
  FormControl,
  FormField,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Control, FieldPath, FieldName } from "react-hook-form";
import { z } from "zod";
import { authFormSchema } from "@/lib/utils";

type AuthFormSchemaType = z.infer<typeof authFormSchema>;

interface InputFormType {
  control: Control<AuthFormSchemaType>;
  label: "Email" | "Password";
  name: FieldPath<AuthFormSchemaType>;
  placeholder: string;
}

const FormInput = ({ control, label, name, placeholder }: InputFormType) => {
  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <div className="form-item">
          <FormLabel className="form-label">{label}</FormLabel>
          <div className="flex w-full flex-col">
            <FormControl>
              <Input
                placeholder={placeholder}
                className="input-class"
                type={name === "password" ? "password" : "text"}
                {...field}
              />
            </FormControl>
            <FormMessage className="form-message mt-2" />
          </div>
        </div>
      )}
    />
  );
};

export default FormInput;
