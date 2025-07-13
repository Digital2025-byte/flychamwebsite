import { CaretLeft } from '@phosphor-icons/react';

const StepBtns = ({ setActiveStep, handleSubmit }) => {
    const isBackDisabled = true;
    const isNextDisabled = false;

    return (
        <div className="flex justify-between items-center w-full my-8">
            {/* Back to flights */}
            <button
                onClick={() => setActiveStep(0)}
                className={`flex items-center gap-1 px-4 py-2 border border-[var(--primary-1)] font-semibold rounded-md transition 
         text-[var(--primary-1)] hover:bg-[var(--primary-1)] hover:text-white cursor-pointer
        `}
            >
                <CaretLeft size={16} weight="light" />
                Back to flights
            </button>

            {/* Select seats & extras */}
            <button
                className={`px-4 py-2 rounded-md font-medium transition 
     bg-primary-1 text-[#FFF] cursor-pointer hover:bg-white hover:text-primary-1 `}
                onClick={handleSubmit}
            >
                Next
            </button>
        </div>
    );
};

export default StepBtns;
