import React from "react";
import { CiTrash } from "react-icons/ci";
import { Link } from "react-router-dom";
import db from "../../../database.json";
import { FaRegEdit } from "react-icons/fa";
import HeaderContent from "../../../layout/admin/HeaderContent";

const Category = () => {
  const { category } = db;
  return (
    <>
      <HeaderContent title="Quản lý danh mục" />
      <div className="row">
        <div className="col-md-3">...</div>
        <div className="col-md-9">
          <table className="table table-bordered table-hover">
            <thead>
              <tr className="text-capitalize">
                <th className="text-center">#</th>
                <th className="text-center">id</th>
                <th>Ảnh</th>
                <th>Tên danh mục</th>
                <th>slug</th>
                <th>action</th>
              </tr>
            </thead>
            <tbody>
              {category &&
                category.length > 0 &&
                category.map((item) => (
                  <tr key={item.id}>
                    <td className="text-center">
                      <input type="checkbox" />
                    </td>
                    <td className="text-center">{item.id}</td>
                    <td>
                      <img src={item.image} alt={item.image} />
                    </td>
                    <td>{item.name}</td>
                    <td>{item.slug}</td>
                    <td style={{ width: "15%" }}>
                      <div className="d-flex align-items-center justify-content-center gap-2">
                        <Link
                          to={`/admin/category/edit/${item.id}`}
                          className="btn btn-info text-white"
                        >
                          <FaRegEdit />
                        </Link>
                        <button className="btn btn-danger text-white">
                          <CiTrash />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Category;
