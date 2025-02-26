function Header() {
  return (
    <div className="flex items-center justify-between p-4 bg-blue-500">
      <div className="flex items-center">
        <h2 className="text-3xl font-bold text-white">
          <a href="/">My Astro Page with dotCMS</a>
        </h2>
      </div>
    </div>
  );
}

export default Header;
