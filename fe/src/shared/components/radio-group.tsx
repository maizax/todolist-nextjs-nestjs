export default function RadioGroup() {
  return (
    <div className="flex items-center gap-5">
      <div className="flex items-center">
        <input
          id="radio-1"
          type="radio"
          name="radio"
          value="yes"
          className="w-4 h-4 "
        />
        <label className="ms-2 text-sm">Yes</label>
      </div>
      <div className="flex items-center">
        <input
          id="radio-2"
          type="radio"
          name="radio"
          value="no"
          className="w-4 h-4"
        />
        <label className="ms-2 text-sm">No</label>
      </div>
    </div>
  );
}
