import { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight, FiFileText, FiBarChart, FiUser } from 'react-icons/fi';

const Sidebar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(true);
    const navigate = useNavigate();
    const location = useLocation();

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    const routes = [
        {
            route: '/invoices',
            subRoutes: ['/invoices', '/add-invoice'],
            name: 'Invoices',
            icon: <FiFileText size={24} />,
        },
        {
            route: '/reports',
            subRoutes: ['/reports'],
            name: 'Reports',
            icon: <FiBarChart size={24} />,
        },
        {
            route: '/profile',
            subRoutes: ['/profile'],
            name: 'Profile',
            icon: <FiUser size={24} />,
        },
    ];

    return (
        <div
            className={`bg-[#38AE29] text-white w-${isSidebarOpen ? '64' : '12'} flex flex-col p-4 transition-all ease-in-out duration-300`}
        >
            <button className="mb-4" onClick={toggleSidebar}>
                {isSidebarOpen ? <FiChevronLeft /> : <FiChevronRight />}
            </button>
            <h1 className="text-2xl font-semibold mb-4">
                {isSidebarOpen &&
                    <>
                        <span className="ml-2">Admin Dashboard</span>
                    </>
                }
            </h1>
            <ul>
                {routes.map((elt, index) => (
                    <li
                        className={`cursor-pointer flex items-center ${
                            elt.subRoutes.includes(location.pathname) ? 'font-bold' : ''
                        } mb-2`}
                        onClick={() => navigate(elt.route)}
                        key={index}
                    >
                        {elt.icon} {isSidebarOpen && <span className="ml-2">{elt.name}</span>}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Sidebar;
