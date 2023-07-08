import { Institution } from "@/interfaces/Institution";
import { BASE_URL } from "./base.service";
import axios from "axios";

export default { 
    getInstitutions: async ({ name, country }: any): Promise<Institution[]> => {

        const institutions: Institution[] = (await axios(BASE_URL+`/search?name=${name}&country=${country}`)).data

        return institutions;
    },
}