import toast from "react-hot-toast";
import { useState } from "react"; // Added useState for the loading effect

const IssueForm = ({ setIssues, selectedLocation = {}, setSelectedLocation }) => {
  // Task 3: Local state to handle the "Saving..." button effect
  const [isSubmitting, setIsSubmitting] = useState(false);

  return (
    // Fixed the z-index syntax error here (removed the backticks)
    <div className="absolute top-10 right-10 z-1000 w-80 bg-white p-6 shadow-2xl rounded-2xl border border-gray-200">
      <form
        className="flex flex-col gap-3"
        onSubmit={async (e) => {
          e.preventDefault();

          if (selectedLocation?.lat === undefined) {
            toast.error("Please select a location first");
            return;
          }

          const data = new FormData(e.target);
          const type = data.get("issueType");
          const desc = data.get("description");

          if (!type || !desc) {
            toast.error("All fields are required!");
            return;
          }

          // Start the "Loading" state
          setIsSubmitting(true);

          // Simulate a tiny delay so the user actually SEES the "Saving..." button
          // In the future, this is where the actual Backend API call happens!
          await new Promise((resolve) => setTimeout(resolve, 800));

          const newIssue = {
            id: Date.now(),
            type: type,
            description: desc,
            lat: selectedLocation.lat,
            lng: selectedLocation.lng,
          };

          setIssues((prevIssues) => [...prevIssues, newIssue]);
          toast.success("Reported successfully!");

          // Reset
          e.target.reset();
          setSelectedLocation({});
          setIsSubmitting(false); // End the "Loading" state
        }}
      >
        <input
          name="issueType"
          className="text-xl font-semibold text-black p-2 border-2 border-gray-600 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          type="text"
          placeholder="Issue Type"
        />

        <textarea
          name="description"
          className="text-xl font-semibold text-black p-2 border-2 border-gray-600 rounded-xl w-full h-32 mt-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
          placeholder="Description"
        />

        <button
          disabled={isSubmitting} // Disable button while saving
          className={`${
            isSubmitting ? "bg-gray-300" : "bg-blue-600 hover:bg-blue-700"
          } font-bold text-xl text-white px-4 py-2 rounded-xl transition-all active:scale-95 w-full`}
          type="submit"
        >
          {isSubmitting ? "Saving..." : "Save Report"}
        </button>
      </form>
    </div>
  );
};

export default IssueForm;