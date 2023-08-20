import { useEffect, useState } from "react";
import { useCartState, useStoreState } from "./storage";
import { TCartState, TStoreState } from "@/types/storeState";

type TOmitFunctionKeys<T> = Omit<
	T,
	{ [K in keyof T]: T[K] extends (...args: any) => void ? K : never }[keyof T]
>;

export const useHydratedStoreState = <
	T extends keyof TOmitFunctionKeys<TStoreState>,
>(
	key: T
): TOmitFunctionKeys<TStoreState>[T] => {
	const [store, setStore] = useState<any>();
	const storeState = useStoreState((state) => state[key]);

	useEffect(() => {
		setStore(storeState);
	}, [storeState]);
	return store;
};
export const useHydratedCartState = <
	T extends keyof TOmitFunctionKeys<TCartState>,
>(
	key: T
): TOmitFunctionKeys<TCartState>[T] => {
	const [cart, setCart] = useState<any>();
	const cartState = useCartState((state) => state[key]);

	useEffect(() => {
		setCart(cartState);
	}, [cartState]);
	return cart;
};
