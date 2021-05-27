import { fetchUtils } from "react-admin";
import {} from "query-stringify";

const apiUrl = "jsonplaceholder.typicode.com";
const httpClient = fetchUtils.fetchJson;

const dataProvider = {
  getList: (resource, { pagination, sort, filter }) => {
    const { page, perPage } = pagination;
    const { field, order } = sort;
    const query = {
      sort: JSON.stringify([field, order]),
      range: JSON.stringify([(page - 1) * perPage, page * perPage - 1]),
      filter: JSON.stringify(filter),
    };
    const url = `${apiUrl}/${resource}?${stringify}`;
  },
  getOne: (resource, params) => {},
  getMany: (resource, params) => {},
  getManyReference: (resource, params) => {},
  update: (resource, params) => {},
  updateMany: (resource, params) => {},
  create: (resource, params) => {},
  delete: (resource, params) => {},
  deleteMany: (resource, params) => {},
};
