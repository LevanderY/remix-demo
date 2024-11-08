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
}: ProductsListMobileProps) => (
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
                SKU: {product.sku || '---'}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Quantity: {product.quantity !== null ? product.quantity : '---'}
              </Typography>
              <Typography variant="body2" color={product.isActive ? 'success.main' : 'error.main'}>
                Status: {product.isActive ? 'Active' : 'Inactive'}
              </Typography>
            </Box>
            <Box display="flex" justifyContent="space-between" mt={2}>
              <Typography variant="body1">${product.price}</Typography>
              {product.priceSale && (
                <Typography variant="body1" color="secondary">
                  ${product.priceSale}
                </Typography>
              )}
            </Box>
            <Typography variant="caption">
              Created: {new Date(product.createdAt).toLocaleString()}
            </Typography>
            {product.updatedAt && (
              <Typography variant="caption">
                Updated: {new Date(product.updatedAt).toLocaleString()}
              </Typography>
            )}
          </CardContent>
        </Card>
      </Grid>
    ))}
  </Grid>
);
