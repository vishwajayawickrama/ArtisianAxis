import { useQuery } from '@tanstack/react-query';
import AdminServices from '@/services/AdminServices';

const adminService = new AdminServices();

const useCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: () => adminService.getCollections(),
  });
};

export default useCollections;
