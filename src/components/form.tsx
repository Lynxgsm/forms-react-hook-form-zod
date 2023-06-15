import { SubmitHandler } from "react-hook-form";
import { z } from "zod";
import Input from "./input";
import useZodForm from "../hooks/useZodForm";
const FieldValuesSchema = z.object({
  email: z
    .string()
    .nonempty({ message: "Email is required" })
    .email({ message: "Email is invalid" }),
  password: z
    .string()
    .min(8, { message: "Password length must be greater than or equal to 8" })
    .max(50),
});

type FieldValues = z.infer<typeof FieldValuesSchema>;

const AppForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useZodForm({
    schema: FieldValuesSchema,
  });

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-4">
      <Input
        label="Email"
        register={register("email")}
        error={errors.email?.message}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        register={register("password")}
        error={errors.password?.message}
      />
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-md"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
};

export default AppForm;
