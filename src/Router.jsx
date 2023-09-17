import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import NotFound from "./Pages/NotFound/NotFound";
import Register from "./Pages/Register/Register";
import Book from "./Pages/Booking/Book";
import BookingList from "./Pages/Booking/BookingList/BookingList";
import Review from "./Pages/Booking/Review";
import Booking from "./Pages/Booking/Booking";
import Service from "./Pages/Service/Service";
import OrderList from "./Pages/Service/OrderList/OrderList";
import AddService from './Pages/Service/AddService';
import MakeAdmin from './Pages/Service/OrderList/MakeAdmin';

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "login",
                element: <Login />
            },
            {
                path: "register",
                element: <Register />
            },
            {
                path: "*",
                element: <NotFound />
            },
            //?========== Booking============= /
            {
                path: "booking",
                element: <Booking />,
                children: [
                    {
                        path: "book",
                        element: <Book />
                    },
                    {
                        path: "bookingList",
                        element: <BookingList />
                    },
                    {
                        path: "review",
                        element: <Review />
                    },
                ]

            },

            // ?================ Admin===============//
            {
                path: "admin",
                element: <Service />,
                children: [
                    {
                        path: "orderList",
                        element: <OrderList />
                    },
                    {
                        path: "addService",
                        element: <AddService />
                    },
                    {
                        path: "MakeAdmin",
                        element: <MakeAdmin />
                    },
                ]
            },
        ]
    },
]);