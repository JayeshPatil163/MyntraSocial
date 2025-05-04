
import React, { ReactNode } from 'react';
import { Product } from '@/lib/types';
import ProductCard from './ProductCard';

export interface ExtendedProductCardProps {
  product: Product;
  actionButton?: ReactNode;
}

const ExtendedProductCard = ({ product, actionButton }: ExtendedProductCardProps) => {
  return (
    <div className="relative">
      <ProductCard product={product} />
      {actionButton && (
        <div className="mt-2">
          {actionButton}
        </div>
      )}
    </div>
  );
};

export default ExtendedProductCard;
