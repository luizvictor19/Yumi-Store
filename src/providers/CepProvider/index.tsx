import {useContext,createContext,useState,useEffect,ReactNode} from "react";
import axios from "axios"

interface ILocation{
    cep: string;
    logradouro: string;
    uf: string;
    localidade: string;
    bairro: string;
}

interface ILocationProps {
    children: ReactNode;
}

interface LocationData {
    ceps: ILocation[];
    cepNumber: any;
    setCepNumber: any;
    handleSearch: (local: ILocation) => void;
}

const LocalizaCepContext = createContext<LocationData>({} as LocationData)

export const LocalizaCepProvider = ({ children }: ILocationProps) => {
   
    const [ceps, setCeps] = useState<ILocation[]>([]);
    const [cepNumber, setCepNumber] = useState<ILocation[]>([]);

    const handleSearch = async () => {
        await axios
        .get(`https://viacep.com.br/ws/${cepNumber}/json/`)
        .then((res) => {
            setCeps([res.data]);
        })
        .catch((err)=> console.log(err));
        }

    useEffect(() => {
    setCeps(cepNumber);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    

    return (
        <LocalizaCepContext.Provider value={{ceps, setCepNumber, cepNumber, handleSearch}}>
            {children}
        </LocalizaCepContext.Provider>
    )
}

export const useLocalizaCep = () => useContext(LocalizaCepContext)