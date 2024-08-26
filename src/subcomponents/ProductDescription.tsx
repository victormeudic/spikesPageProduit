export default function ProductDescription() {
  return (
    <div>
      <h1 className="text-5xl font-bold">Meryl Lounge Chair</h1>
      <div className="flex gap-[151px] mt-7 mb-12">
        <p className="text-2xl font-semibold">$149.99</p>
        <div className="flex text-base font-normal items-center">
          <img src="/assets/stars.svg" className="h-[14px] mr-3" alt="" />
          <p>4.6</p>
          <p className="mx-1">/</p>
          <p>5.0</p>
          <p className="text-cool-grey ml-1">(556)</p>
        </div>
      </div>
      <p className="text-base text-space-cadet font-normal w-[440px]">
        The gently curved lines accentuated by sewn details are kind to your
        body and pleasant to look at. Also, there’s a tilt and height-adjusting
        mechanism that’s built to outlast years of ups and downs.
      </p>
    </div>
  );
}
