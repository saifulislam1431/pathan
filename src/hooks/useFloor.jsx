import {useQuery} from "@tanstack/react-query";


const useFloor = () => {
    const{data: allFloors = [] , isLoading: loading , refetch} = useQuery({
        queryKey:["allFloors"],
        queryFn: async()=>{
            const res = await fetch("https://pathan-server.vercel.app/allFloors");
            return res.json()
        }
    })

    return [allFloors , loading ,refetch]
};

export default useFloor;