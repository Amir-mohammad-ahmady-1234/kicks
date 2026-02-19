import { Loader2, MoveLeft, MoveRight } from "lucide-react";
import { Button } from "../../shadcn/ui/button";

function BtnSubmitForm({ step, setStep, isSubmit, handleSubmit }) {
  function nextStep() {
    setStep((prev) => Math.min(3, prev + 1));
  }

  function prevStep() {
    setStep((prev) => Math.max(1, prev - 1));
  }
  return (
    <div className="flex justify-between items-center pt-4 border-t">
      <Button
        type="button"
        variant="outline"
        onClick={prevStep}
        disabled={step === 1 || isSubmit}
      >
        <MoveLeft className="h-4 w-4 ml-2" />
        Previous
      </Button>

      {step < 3 ? (
        <Button
          type="button"
          variant="default"
          onClick={nextStep}
          disabled={isSubmit}
        >
          Next
          <MoveRight className="h-4 w-4 mr-2" />
        </Button>
      ) : (
        <Button
          type="submit"
          variant="default"
          onClick={handleSubmit}
          disabled={isSubmit}
        >
          {isSubmit ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin ml-2" />
              Creating...
            </>
          ) : (
            <>
              Create
              <MoveRight className="h-4 w-4 mr-2" />
            </>
          )}
        </Button>
      )}
    </div>
  );
}

export default BtnSubmitForm;
