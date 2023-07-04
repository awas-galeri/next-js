export default function Test() {
  return (
    <section className="flex justify-center">
      <div className="mockup-phone border-error">
        <div className="camera"></div>
        <div className="display">
          <div className="artboard artboard-demo phone-1">Test</div>
        </div>
      </div>
      <div className="mockup-phone bg-error border-error">
        {/* <div className="camera"></div> */}
        {/* <div className="display"> */}
        <div className="artboard artboard-demo phone-1 bg-error">
          Background Test
        </div>
        {/* </div> */}
      </div>
    </section>
  );
}
