const Task3 = () => {
  return (
    <div className="flex flex-col items-center px-6 py-8 mx-auto md:h-screen">
      <p className="mb-6 text-xl font-semibold text-white text-center">
        Interactive Landing Page: Design an engaging landing page that
        captivates visitors and directs them to explore the website's offerings,
        add header footer and also add contact info with nav-bar at the header.
      </p>
      <div className="flex gap-2 max-sm:flex-col text-center">
        <a
          href="https://muhammad-usman061.vercel.app/"
          target="_blank"
          className="px-5 py-2 text-white rounded bg-gray-700 hover:bg-gray-800 cursor-pointer"
        >
          Click here to visit this task
        </a>
        <a
          href="https://muhammad-usman061.vercel.app/"
          target="_blank"
          className="px-5 py-2 text-white rounded bg-gray-700 hover:bg-gray-800 cursor-pointer"
        >
          Github Repo
        </a>
      </div>
    </div>
  );
};

export default Task3;
