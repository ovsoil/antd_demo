import { product } from '@/services/ant-design-pro/product';
import { Button, Input, Space, Table } from 'antd';
import { ColumnProps } from 'antd/es/table';
import React, { useEffect, useState } from 'react';

const ProductList: React.FC = () => {
  const [data, setData] = useState<API.ProductListItem[]>([]);
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState<string>('');
  const [sorter, setSorter] = useState<any>({});
  const [pagination, setPagination] = useState<{
    current: number;
    pageSize: number;
    total: number;
  }>({ current: 1, pageSize: 10, total: 0 });

  const fetchProducts = async () => {
    setLoading(true);
    const result = await product({ ...pagination, filter: searchText, sorter: sorter });
    setData(result.data);
    setPagination({ ...pagination, total: result.total });
    setLoading(false);
  };

  useEffect(() => {
    fetchProducts();
  }, [pagination.current, pagination.pageSize, sorter]);

  const handleSearch = () => {
    setPagination({ ...pagination, current: 1 });
  };

  const handleTableChange = (pagination: any, filters: any, sorter: any) => {
    setPagination(pagination);
    const sr = { [sorter.field]: sorter.order };
    setSorter(sr);
    // 可以在这里实现排序、过滤逻辑
    // fetchProducts();
  };

  const columns: ColumnProps<API.ProductListItem>[] = [
    {
      title: 'Key',
      dataIndex: 'key',
      sorter: true,
    },
    {
      title: 'Name',
      dataIndex: 'name',
      sorter: true,
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: true,
    },
    {
      title: 'Status',
      dataIndex: 'status',
    },
  ];

  return (
    <>
      <Space style={{ marginBottom: 16 }}>
        <Input
          placeholder="Search products"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button onClick={handleSearch}>Search</Button>
      </Space>
      <Table
        columns={columns}
        dataSource={data}
        pagination={pagination}
        loading={loading}
        onChange={handleTableChange}
      />
    </>
  );
};

export default ProductList;
