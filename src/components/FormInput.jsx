
function FormInput({ name, type, label, placeholder }) {
  return (
    <div className="form-control ">
      <label className=" w-full ">
        <div className="label">
          <span className="label-text capitalize text-white">{label}</span>
        </div>
        <input
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