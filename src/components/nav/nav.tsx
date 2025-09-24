import { BookOutlined, HomeOutlined } from "@ant-design/icons";
import { Link } from "@tanstack/react-router";

const routes = [
  {
    to: "/app/dashboard",
    label: "Dashboard",
    icon: "home",
  },
];

const iconMap = {
  home: <HomeOutlined />,
};

export function Nav() {
  return (
    <nav className="bg-white border-r border-gray-200 px-4 py-4 backdrop-blur-md w-[300px]">
      {routes.map(({ to, label, icon }) => {
        const Icon = iconMap[icon];

        return (
          <Link
            to={to}
            activeProps={{
              className: "bg-amber-500 shadow-black/10 text-white pointer-none",
            }}
            className={
              "transition-all mb-3 shadow-sm font-medium flex items-center pointer-events-none h-10 p-4 w-full rounded hover:bg-white/35"
            }
          >
            {Icon} <span className="ml-4">{label}</span>
          </Link>
        );
      })}
    </nav>
  );
}
