import { apiClient } from 'app/services/client';
import ApiConfig from 'app/config/api-config';

export default function productList() {
  return apiClient.get(ApiConfig.PRODUCTS);
}
