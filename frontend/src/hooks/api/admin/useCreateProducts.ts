import { useMutation, useQueryClient } from '@tanstack/react-query';
import AdminServices from '@/services/AdminServices';

const adminService = new AdminServices();

export const useCreateProduct = () => {
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: (product : any) => adminService.postProduct(product),
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['products'] });
        }    
    })
}