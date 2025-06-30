import { X } from "@phosphor-icons/react";

const SearchInput = ({ search, setSearch, onClose, placeholder, formik, type }) => (
  <div className="  rounded-t-2xl py-6">
    <div className="flex items-center border-b border-gray-300">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder={placeholder}
        className="w-full text-gray-700 placeholder-gray-400 text-sm px-0 py-2 focus:outline-none"
      />
      <button onClick={() => setSearch("")} className= " cursor-pointer text-gray-700 hover:text-black text-sm px-2">
        <X size={18} />
      </button>
    </div>
  </div>
);

export default SearchInput;
