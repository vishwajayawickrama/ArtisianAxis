import { useMutation, useQueryClient } from '@tanstack/react-query';
import AdminServices from '@/services/AdminServices';

const adminService = new AdminServices();

export const useDeleteCollection = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id : string) => adminService.deleteCollection(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['collections'] });
        }    
    })
}