export type TStoreState = {
	user: Record<string, any>;
	token: string | null;
	setToken: (token: string | null) => void;
	removeToken: () => void;
};

export type TCartState = {
	cartCount: number;
	cart: Record<string, any>[];
	addToCart: (payload: any) => void;
	quantityCount: (id: string, type: "increament" | "decreament") => void;
	removeFromCart: (id: string | string[], isMultiple?: boolean) => void;
	emptyCart: () => void;
};
