import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import React from "react";
import HomePage from "../components/homePage/HomePage";
import BreakfastComponent from "../components/breakfasts/BreakfastComponent";
import LunchComponent from "../components/lunch/LunchComponent";
import DinnerComponent from "../components/dinner/DinnerComponent";
import DrinkComponent from "../components/drink/DrinkComponent";
import BreakfastDetails from "../components/breakfastByID/Breakfast-Details";
import LunchByID from "../components/lunchByID/LunchByID";
import DinnerByID from "../components/dinnerByID/DinnerByID";
import DessertComponent from "../components/dessert/DessertComponent";
import DessertByID from "../components/dessertByID/DessertByID";
import DrinkById from "../components/drinkByID/DrinkByID";

export const routes = createBrowserRouter([
    {
        path: "",
        element: <MainLayout />,
        children: [
            {path: "/home", element: <HomePage /> },
            {path: "/breakfast", element: <BreakfastComponent /> },
            {path: "/breakfast/:id", element: <BreakfastDetails /> },
            {path: "/dessert", element: <DessertComponent /> },
            {path: "/dessert/:id", element: <DessertByID/>},
            {path: "/lunch", element: <LunchComponent /> },
            {path: "/lunch/:id", element: <LunchByID/>},
            {path: "/dinner", element: <DinnerComponent /> },
            {path: "/dinner/:id", element: <DinnerByID/>},
            { path: "/drinks", element: <DrinkComponent /> },
            {path: "/drink/:id", element: <DrinkById/>}
        ]
    }
]);
