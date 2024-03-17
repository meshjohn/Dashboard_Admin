import React from 'react';
import { GridComponent, ColumnDirective, ColumnsDirective, Selection, Inject, Edit, Toolbar, Sort, Filter, Page } from '@syncfusion/ej2-react-grids';
import { customersGrid, customersData } from '../data/dummy';
import { Header } from '../component';

const Customers = () => {
  return (
    <div className='m-2 md:m-10 p-2 md:p-10 bg-white rounded-se-3xl'>
      <Header category='Page' title='Customers'></Header>
      <GridComponent
      dataSource={customersData}
      allowPaging
      allowSorting
      toolbar={['Delete']}
      editSettings={{ allowDeleting: true, allowEditing: true }}
      width='auto'>
        <ColumnsDirective>
        {customersGrid.map((item, index) => (
          <ColumnDirective key={index} {...item}></ColumnDirective>
        ))}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar , Selection, Edit, Sort, Filter]}></Inject>
      </GridComponent>
    </div>
  )
}

export default Customers;