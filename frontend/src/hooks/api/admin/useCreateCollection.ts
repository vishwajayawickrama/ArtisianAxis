import { useMutation, useQueryClient } from '@tanstack/react-query';
import AdminServices from '@/services/AdminServices';
import { type collection } from '@/components/admin/collections/Collections';

const adminService = new AdminServices();

export const useCreateCollection = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (collection : collection) => adminService.postCollection(collection),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['collections'] });
        }    
    })
}