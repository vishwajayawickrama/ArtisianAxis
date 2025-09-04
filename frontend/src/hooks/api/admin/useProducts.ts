import { useQuery } from '@tanstack/react-query';
import AdminServices from '@/services/AdminServices';

const adminService = new AdminServices();

const useProducts = () => {
  return useQuery({
    queryKey: ['products'],
    queryFn: () => adminService.getProducts(),
  });
};

export default useProducts;