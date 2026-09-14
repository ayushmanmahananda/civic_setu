
const IssueForm = ({ setIssues, selectedLocation = {}, setSelectedLocation }) => {
  return (
    <div className="w-1/2">
      <form
        className="flex flex-col gap-3"
        onSubmit={(e) => {
          e.preventDefault();

          if (selectedLocation?.lat === undefined) {
            alert("Please select a location on the map first");
            return;
          }

          const data = new FormData(e.target);

          const formData = {
            type: data.get("issueType"),
            description: data.get("description"),
          };

          const newIssue = {
            id: Date.now(),
            type: formData.type,
            description: formData.description,
            lat: selectedLocation.lat,
            lng: selectedLocation.lng,
          };

          setIssues((prevIssues) => [...prevIssues, newIssue]);

          e.target.reset();
          setSelectedLocation({});
        }}
      >
        <input
          name="issueType"
          className="text-xl font-semibold text-black content-start p-2 border-2 border-gray-600 rounded-xl"
          type="text"
          placeholder="Issue Type"
        />

        <textarea
          name="description"
          className="text-xl font-semibold text-black content-start p-2 border-2 border-gray-600 rounded-xl
                w-full h-32 mt-4 "
          placeholder="Description"
        />

        <button
          className="bg-gray-400 font-bold text-2xl
                 text-white px-2 py-2 rounded-xl active:scale-95 w-fit"
          type="submit"
        >
          Save
        </button>
      </form>
    </div>
  );
};

export default IssueForm;
