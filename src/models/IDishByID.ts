export interface IDishByID {
	vegetarian: boolean;
	vegan: boolean;
	glutenFree: boolean;
	dairyFree: boolean;
	veryHealthy: boolean;
	cheap: boolean;
	veryPopular: boolean;
	sustainable: boolean;
	lowFodmap: boolean;
	weightWatcherSmartPoints: number;
	gaps: string;
	aggregateLikes: number;
	healthScore: number;
	creditsText: string;
	license: string;
	sourceName: string;
	pricePerServing: number;
	extendedIngredients: IBreakfastByIDExtendedIngredients[];
	id: number;
	title: string;
	readyInMinutes: number;
	servings: number;
	sourceUrl: string;
	image: string;
	imageType: string;
	summary: string;
	cuisines: any[];
	dishTypes: string[];
	diets: string[];
	occasions: any[];
	instructions: string;
	analyzedInstructions: IBreakfastByIDAnalyzedInstructions[];
	spoonacularScore: number;
	spoonacularSourceUrl: string;
}
export interface IBreakfastByIDExtendedIngredientsMeasuresUs {
	amount: number;
	unitShort: string;
	unitLong: string;
}
export interface IBreakfastByIDExtendedIngredientsMeasuresMetric {
	amount: number;
	unitShort: string;
	unitLong: string;
}
export interface IBreakfastByIDExtendedIngredientsMeasures {
	us: IBreakfastByIDExtendedIngredientsMeasuresUs;
	metric: IBreakfastByIDExtendedIngredientsMeasuresMetric;
}
export interface IBreakfastByIDExtendedIngredients {
	id: number;
	aisle: string;
	image: string;
	consistency: string;
	name: string;
	nameClean: string;
	original: string;
	originalName: string;
	amount: number;
	unit: string;
	meta: any[];
	measures: IBreakfastByIDExtendedIngredientsMeasures;
}
export interface IBreakfastByIDAnalyzedInstructionsStepsIngredients {
	id: number;
	name: string;
	localizedName: string;
	image: string;
}
export interface IBreakfastByIDAnalyzedInstructionsStepsEquipmentTemperature {
	number: number;
	unit: string;
}
export interface IBreakfastByIDAnalyzedInstructionsStepsEquipment {
	id: number;
	name: string;
	localizedName: string;
	image: string;
	temperature: IBreakfastByIDAnalyzedInstructionsStepsEquipmentTemperature;
}
export interface IBreakfastByIDAnalyzedInstructionsSteps {
	number: number;
	step: string;
	ingredients: IBreakfastByIDAnalyzedInstructionsStepsIngredients[];
	equipment: IBreakfastByIDAnalyzedInstructionsStepsEquipment[];
}
export interface IBreakfastByIDAnalyzedInstructions {
	name: string;
	steps: IBreakfastByIDAnalyzedInstructionsSteps[];
}