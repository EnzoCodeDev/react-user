import axios from "axios";

export const planAccionComunalService = {
    getLineStrategies: () => {
        return new Promise((resolve, reject) => {
            axios.get(`planAccionComunal/getLineStrategies`)
                .then((res) => resolve(res))
                .catch((err) => reject(err));
        });
    },
};
