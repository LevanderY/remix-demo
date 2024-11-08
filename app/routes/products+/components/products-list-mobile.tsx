import {useTranslation} from 'react-i18next';

import {Grid, Card, CardContent, Typography, Box} from '@mui/material';

interface Product {
  productId: string;
  title: {
    en: string;
    ar: string;
  };
  sku?: string | null;
  quantity?: number | null;
  price: number;
  priceSale?: number | null;
  image?: string | null;
  isActive?: boolean;
  createdAt: string;
  updatedAt?: string;
}

interface ProductsListMobileProps {
  data: Product[];
}

export const ProductsListMobile: React.FC<ProductsListMobileProps> = ({
  data,
}: ProductsListMobileProps) => {
  const {t} = useTranslation('products');

  return (
    <Grid container spacing={2}>
      {data?.map(product => (
        <Grid item xs={12} key={product.productId}>
          <Card>
            <CardContent>
              <Typography variant="h6">{product.title.en || product.title.ar}</Typography>
              {product.image && (
                <img
                  src={product.image}
                  alt={product.title.en || product.title.ar}
                  style={{width: '100%', height: 'auto', marginBottom: '10px'}}
                />
              )}
              <Box>
                <Typography variant="body2" color="textSecondary">
                  {t('sku')}: {product.sku || '---'}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {t('quantity')}: {product.quantity !== null ? product.quantity : '---'}
                </Typography>
                <Typography
                  variant="body2"
                  color={product.isActive ? 'success.main' : 'error.main'}
                >
                  {t('status')}: {product.isActive ? t('active') : t('inactive')}
                </Typography>
              </Box>
              <Box display="flex" justifyContent="space-between" mt={2}>
                <Typography variant="body1">
                  {t('price')}: ${product.price}
                </Typography>
                {product.priceSale && (
                  <Typography variant="body1" color="secondary">
                    {t('priceSale')}: ${product.priceSale}
                  </Typography>
                )}
              </Box>
              <Typography variant="caption">
                {t('created')}: {new Date(product.createdAt).toLocaleString()}
              </Typography>
              {product.updatedAt && (
                <Typography variant="caption">
                  {t('updated')}: {new Date(product.updatedAt).toLocaleString()}
                </Typography>
              )}
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};
