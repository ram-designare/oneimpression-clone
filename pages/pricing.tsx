import Link from "next/link";

export const Pricing = () => {
  return (
    <div className="relative h-full">
      <Link href="/">
        <img alt="white-logo"
          className="absolute left-2 lg:left-10 top-4 lg:top-10 w-24 lg:w-52"
          src="/images/oi-white-logo.svg"
        ></img>
      </Link>
      <img src="/images/pricing_plan.svg"></img>
    </div>
  );
};

export default Pricing;
