import data from "./../Assets/Wine-Data.json";
import { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import {
    getFlavanoids,
    getGamma,
    getHeader,
    getMean,
    getMedian,
    getMode,
} from "../Utils/calculation";

export default function Home() {
    const [headerArray, setHeaderArray] = useState([]);

    const [flavanoidMeanArray, setFlavanoidMeanArray] = useState([]);
    const [flavanoidMedianArray, setFlavanoidMedianArray] = useState([]);
    const [flavanoidModeArray, setFlavanoidModeArray] = useState([]);

    const [gammaMeanArray, setGammaMeanArray] = useState([]);
    const [gammaMedianArray, setGammaMedianArray] = useState([]);
    const [gammaModeArray, setGammaModeArray] = useState([]);

    useEffect(() => {
        let tempFlavanoidsData = getFlavanoids(data);
        setFlavanoidMeanArray(getMean(tempFlavanoidsData));
        setFlavanoidMedianArray(getMedian(tempFlavanoidsData));
        setFlavanoidModeArray(getMode(tempFlavanoidsData));

        let tempGammaData = getGamma(data);
        setGammaMeanArray(getMean(tempGammaData));
        setGammaMedianArray(getMedian(tempGammaData));
        setGammaModeArray(getMode(tempGammaData));

        setHeaderArray(getHeader(tempFlavanoidsData));
    }, []);
    return (
        <div className="table-container">
            <h1>Data Analysis Task</h1>
            <CustomTable
                title="Flavanoids"
                headerArray={headerArray}
                meanArray={flavanoidMeanArray}
                medianArray={flavanoidMedianArray}
                modeArray={flavanoidModeArray}
            />
            <CustomTable
                title="Gamma"
                headerArray={headerArray}
                meanArray={gammaMeanArray}
                medianArray={gammaMedianArray}
                modeArray={gammaModeArray}
            />
        </div>
    );
}
