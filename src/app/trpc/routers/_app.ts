import { z } from 'zod';
import { baseProcedure, createTRPCRouter } from '../init';
import { listProducts } from '@/app/lib/products';

 
export const appRouter = createTRPCRouter({
  products: baseProcedure
    .query(async () => {
      return listProducts();
    }),
});
 
// export type definition of API
export type AppRouter = typeof appRouter;