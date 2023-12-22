import {useState} from 'react';

const MultiSelect = ({options, selectedOptions, onChange}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleToggle = () => {
        setIsOpen(!isOpen);
    };

    const handleOptionToggle = (option) => {
        const isSelected = selectedOptions.includes(option);

        if (isSelected) {
            onChange(selectedOptions.filter((selected) => selected !== option));
        } else {
            onChange([...selectedOptions, option]);
        }
    };

    return (
        <div className="relative inline-block text-left">
            <div>
                <span className="rounded-md shadow-sm">
                  <button
                      type="button"
                      className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:border-blue-300 focus:ring focus:ring-blue-200"
                      id="options-menu"
                      aria-haspopup="true"
                      aria-expanded="true"
                      onClick={handleToggle}
                  >
                    {selectedOptions.length === 0
                        ? 'Select options'
                        : selectedOptions.join(', ')}
                  </button>
                </span>
            </div>

            {isOpen && (
                <div
                    className="origin-top-right absolute right-0 mt-2 left-20 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 h-[170px] overflow-auto">
                    <div
                        className="py-1"
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby="options-menu"
                    >
                        {options.map((option) => (
                            <div
                                key={option}
                                className="flex items-center justify-between px-4 py-2 text-sm text-gray-700 cursor-pointer hover:bg-gray-100"
                                role="menuitem"
                                onClick={() => handleOptionToggle(option)}
                            >
                                <span>{option}</span>
                                <span>
                                    {selectedOptions.includes(option) ? '✔' : ''}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default MultiSelect;
