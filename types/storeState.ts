export type TStoreState = {
	storeInfo: Record<string, any>;
	// user: Record<string, any>;
	// updateStoreInfo: (payload: any) => void;
	// updateUser: (payload: any) => void;
	// getStoreInfo: (storeLinkId: string) => void;
};

export type TCartState = {
	cartCount: number;
	cart: Record<string, any>[];
	addToCart: (payload: any) => void;
	quantityCount: (id: string, type: "increament" | "decreament") => void;
	// removeFromCart: (
	//   variantId: string | string[],
	//   isMultiple?: boolean,
	//   isToast?: boolean
	// ) => void;
	// emptyCart: () => void;
};
