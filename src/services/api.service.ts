import {IDish} from "../models/IDish";
import {IDishByID} from "../models/IDishByID";

export const getDataFromDB = {
    breakfast: {
        getBreakfast: async (): Promise<IDish[]> => {
            const response = await fetch(`https://api.spoonacular.com/recipes/complexSearch?query=breakfast&number=500&apiKey=8ff8c946b881419d97b01876077465f6`);
            const data = await response.json();
            return data.results || [];
        },
        getBreakfastByID: async (id: number): Promise<IDishByID> => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=8ff8c946b881419d97b01876077465f6`);
            const data = await response.json();
            return data;
        }
    },
    lunch: {
        getLunches: async () : Promise<IDish[]> => {
            const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?query=lunch&number=500&apiKey=8ff8c946b881419d97b01876077465f6");
            const data = await response.json();
            return data.results || [];
        },
        getLunchesByID: async (id: number): Promise<IDishByID> => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=8ff8c946b881419d97b01876077465f6`);
            const data = await response.json();
            return data;
        }
    },
    dinners: {
        getDinners: async (): Promise<IDish[]> => {
            const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?query=dinner&apiKey=8ff8c946b881419d97b01876077465f6");
            const data = await response.json();
            return data.results || [];
        },
        getDinnersByID: async (id: number): Promise<IDishByID> => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=8ff8c946b881419d97b01876077465f6`);
            const data = await response.json();
            return data;
        }
    },
    desserts: {
        getDessert: async (): Promise<IDish[]> => {
            const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?query=dessert&apiKey=8ff8c946b881419d97b01876077465f6");
            const data = await response.json();
            return data.results || [];
        },
        getDessertByID: async (id: number): Promise<IDishByID> => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=8ff8c946b881419d97b01876077465f6`);
            const data = await response.json();
            return data;
        }
    },
    drinks: {
        getDrinks: async (): Promise<IDish[]> => {
            const response = await fetch("https://api.spoonacular.com/recipes/complexSearch?query=drink&apiKey=8ff8c946b881419d97b01876077465f6");
            const data = await response.json();
            return data.results || [];
        },
        getDrinkByID: async (id: number): Promise<IDishByID> => {
            const response = await fetch(`https://api.spoonacular.com/recipes/${id}/information?apiKey=8ff8c946b881419d97b01876077465f6`);
            const data = response.json();
            return data;
        }
    }

}

