export const saveLocalStorage = <T>(data: T, key: string): boolean => {
	try {
		const jsonData = JSON.stringify(data);
		localStorage.setItem(key, jsonData);
		return true;
	} catch (error) {
		return false;
	}
};

export const getLocalStorage = <T>(key: string): T | null => {
	try {
		const jsonData = localStorage.getItem(key);
		if (!jsonData) return null;
		return JSON.parse(jsonData) as T;
	} catch (error) {
		return null;
	}
};
