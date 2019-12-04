import React from 'react';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';

const Breadcrumb = (props) => {
  return (
    <div>
      <Breadcrumb>
        <BreadcrumbItem><a href={this.props.linkRef}>Home</a></BreadcrumbItem>
        <BreadcrumbItem><a href={this.props.linkRef}>Library</a></BreadcrumbItem>
        <BreadcrumbItem active>Data</BreadcrumbItem>
      </Breadcrumb>
    </div>
  );
};

export default Breadcrumb;