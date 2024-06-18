
function FormInput({ name, type, label, placeholder,min,max,step }) {
  return (
    <div className="form-control ">
      <label className=" w-full ">
        <div className="label">
          <span className="label-text capitalize text-blue-400">{label}</span>
        </div>
        <input
        required
        min={min}
        max={max}
        step={step}
          name={name}
          type={type}
          placeholder={placeholder}
          className={`input input-bordered w-[350px] max-w-lg  `}
        />
      </label>
    </div>
  );
}

export default FormInput