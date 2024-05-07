import { useState } from "react";

interface Props {
  currentTask: (task: string) => void;
}

const NavBar = ({ currentTask }: Props) => {
  const tasks = ["Task 1", "Task 2", "Task 3", "Task 4"];
  const [task1, setTask] = useState("Task 1");
  const myData = [
    {
      name: "Linkedin",
      url: "https://www.linkedin.com/in/muhammad-usman-794205247/",
    },
    {
      name: "Github",
      url: "https://github.com/Muhammad-Usman-61",
    },
  ];
  return (
    <header>
      <nav className="border-gray-200 px-4 lg:px-6 py-2.5 bg-gray-800">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl">
          <a
            href="https://muhammad-usman061.vercel.app/"
            className="flex items-center"
          >
            <img
              src="src\assets\logo.png"
              className="mr-3 h-12"
              alt="Flowbite Logo"
            />
            <span className="self-center text-xl font-semibold whitespace-nowrap text-white">
              YoungDev Inters
            </span>
          </a>
          <div className="flex items-center gap-4 lg:order-2 ">
            {myData.map((data) => (
              <a
                href={data.url}
                key={data.name}
                target="_blank"
                className="px-5 py-2 text-white rounded bg-gray-900 hover:bg-gray-700 lg:block hidden"
              >
                {data.name}
              </a>
            ))}

            <button
              data-collapse-toggle="mobile-menu-2"
              type="button"
              className="inline-flex items-center p-2 ml-1 text-sm rounded-lg lg:hidden focus:outline-none focus:ring-2 text-gray-400 hover:bg-gray-700 focus:ring-gray-600"
              aria-controls="mobile-menu-2"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <svg
                className="hidden w-6 h-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden justify-between items-center w-full lg:flex lg:w-auto lg:order-1"
            id="mobile-menu-2"
          >
            <ul className="flex font-medium gap-4">
              {tasks.map((task) => (
                <li key={task}>
                  <div
                    className={
                      task1 === task
                        ? "px-5 py-2 text-white rounded bg-gray-700 hover:bg-gray-700 cursor-pointer"
                        : "px-5 py-2 text-white rounded bg-gray-900 hover:bg-gray-700 cursor-pointer"
                    }
                    aria-current="page"
                    onClick={() => {
                      currentTask(task);
                      setTask(task);
                    }}
                  >
                    {task}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavBar;
