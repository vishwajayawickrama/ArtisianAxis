import { useMutation, useQueryClient } from '@tanstack/react-query';
import AdminServices from '@/services/AdminServices';

const adminService = new AdminServices();

export const useCreateCollection = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (collection : any) => adminService.postCollection(collection),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['collections'] });
        }    
    })
}