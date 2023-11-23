import { useQuery } from '@tanstack/react-query';
import React from 'react';

const useMessage = () => {


    const { data: allMessage = [], isLoading: allMessageLoading, refetch } = useQuery({
        queryKey: ["message"],
        // enabled: loading,

        queryFn: async () => {
            const res = await fetch('http://localhost:5000/message');
            // console.log(res);
            return res.json();
        },
    });
    return [allMessage, allMessageLoading, refetch];
};

export default useMessage;