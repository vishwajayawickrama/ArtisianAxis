import { useMutation, useQueryClient } from '@tanstack/react-query';
import AdminServices from '@/services/AdminServices';

const adminService = new AdminServices();

export const useDeleteProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (id : string) => adminService.deleteProduct(id),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        }    
    })
}