import { useEffect, useState } from "react";
import { Cat } from "../../models/Cat";
import { normalizeCatsResponse } from "../../utils/normalizeCatsResponse";

const useCats = () => {
    const [catsData, setCatsData] = useState<Cat[]>();

    const getCatsData = () => {
        fetch("./cats.json")
            .then((response) => {
                return response.json();
            })
            .then((data) => {
                const normalizedData = normalizeCatsResponse(data);
                setCatsData(normalizedData);
            })
            .catch((error) => {
                console.error(error)
            })
    };

    useEffect(() => {
        getCatsData();
    }, [])

    return { catsData }
};

export default useCats;
