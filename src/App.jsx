import React, { useEffect, useState } from "react";
import { Loader } from "./components/common/Loader";
import { Routes } from "./routes/Routes";

const App = () => {
	const [loader, setLoader] = useState(true);

	useEffect(() => {
		setTimeout(() => {
			setLoader(false);
		}, 2000);
	}, []);
	return <>{loader === false ? <Routes /> : <Loader />}</>;
};

export default App;
