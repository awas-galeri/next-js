export default function Test() {
  return (
    <section className="flex justify-center">
      <div
        tabIndex={0}
        className="collapse border border-base-300 bg-base-200 w-8/12"
      >
        <div className="collapse-title text-xl font-medium">
          <h3 className="text-center">Test</h3>
        </div>
        <div className="collapse-content"></div>
      </div>
    </section>
  );
}
