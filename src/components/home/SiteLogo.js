import Link from "next/link";

const SiteLogo = () => {
  return (
    <>
      <Link
        href="/"
        className="text-2xl font-semibold transition-all duration-300 ease-in-out hover:opacity-75"
      >
        <h5>e-dash</h5>
      </Link>
    </>
  );
};

export default SiteLogo;
