// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** 获取产品列表 GET /api/products */
export async function product(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.productParams,
  options?: { [key: string]: any },
) {
  return request<API.ProductList>('/api/products', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** 更新产品 PUT /api/products */
export async function updateProduct(options?: { [key: string]: any }) {
  return request<API.ProductListItem>('/api/products', {
    method: 'PUT',
    ...(options || {}),
  });
}

/** 新增产品 POST /api/products */
export async function addProduct(options?: { [key: string]: any }) {
  return request<API.ProductListItem>('/api/products', {
    method: 'POST',
    ...(options || {}),
  });
}

/** 删除产品 DELETE /api/products */
export async function removeProduct(options?: { [key: string]: any }) {
  return request<Record<string, any>>('/api/products', {
    method: 'DELETE',
    ...(options || {}),
  });
}
