import { SignUpProps } from "@/types";

function InputField({
  label,
  required,
  placeholder,
  bgColor = "", // Provide a default empty string
  error,
  register,
  labelNewClasses = "", // Provide a default empty string
  type = "text", // Default to "text" if type is not provided
  autocomplete = "off", // Default to "off" if autocomplete is not provided
}: SignUpProps) {
  return (
    <div>
      <label className={`text-[12px] md:text-[16px] ${labelNewClasses}`}>
        {label}
        <span className="text-red-600">{required?.value && "*"}</span>
      </label>
      <input
        type={type}
        autoComplete={autocomplete}
        {...register}
        placeholder={placeholder}
        className={`w-full outline-none text-[12px] py-[10px] sm:py-[12px] px-[15px] md:text-[14px] rounded-md border border-gray-700 my-[8px] ${bgColor}`}
      />
      {error && <p className="text-red-600 text-[12px]">{error}</p>}
    </div>
  );
}

export default InputField;
