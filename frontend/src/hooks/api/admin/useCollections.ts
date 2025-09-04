import { useQuery } from '@tanstack/react-query';
import AdminServices from '@/services/AdminServices';
import CollectionService from '@/services/CollectionService';

const adminService = new AdminServices();
const collectionService = new CollectionService();


const useCollections = () => {
  return useQuery({
    queryKey: ['collections'],
    queryFn: () => adminService.getCollections(),
  });
};

const useCollection = (id: string | undefined) => {
  return useQuery({
    queryKey: ['collection', id],
    queryFn: () => adminService.getCollection(id!),
    enabled: !!id, // Only run the query if id is provided
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 3, // Retry failed requests 3 times
  });
};

const useCollectionProducts = (id: string | undefined) => {
  return useQuery({
    queryKey: ['collectionProducts', id],
    queryFn: () => collectionService.getCollectionProducts(id!),
    enabled: !!id, // Only run the query if id is provided
    staleTime: 5 * 60 * 1000, // Cache for 5 minutes
    retry: 3, // Retry failed requests 3 times
  });
}

export { useCollection, useCollections, useCollectionProducts };
