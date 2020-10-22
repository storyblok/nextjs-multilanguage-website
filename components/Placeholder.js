const Placeholder = ({componentName}) => (
  <div className="py-4 border border-red-200 bg-red-100">
    <p className="text-red-700 italic text-center">The component <strong>{componentName}</strong> has not been created yet.</p>
  </div>
);

export default Placeholder;
