const Navbar = () => {
  return (
    <>
 
    <div className="navbar bg-base-100   fixed  z-10 shadow-lg">
        <div className="flex-1 ">
          <a className="btn btn-ghost gap-0 text-2xl">
            {" "}
            <span className="text-primary">Byte</span>
            <span className="text-secondary">Blaze</span>{" "}
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1 font-bold">
            <li>
              <a>Home</a>
            </li>
            <li>
              <a className="text-primary">Blogs</a>
            </li>
            <li>
              <a>Bookmarks</a>
            </li>
          </ul>
          <label className="grid cursor-pointer place-items-center">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content col-span-2 col-start-1 row-start-1"
            />
            <svg
              className="stroke-base-100 fill-base-100 col-start-1 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="stroke-base-100 fill-base-100 col-start-2 row-start-1"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </div>
      </div>

    </>
  );
};

export default Navbar;
