import http from "../http-common";
class StudentDataService {
  getAll() {
    return http.get("/students");
  }
  get(id) {
    return http.get(`/students/${id}`);
  }
  create(data) {
    return http.post("/students", data);
  }
  update(id, data) {
    return http.put(`/students/${id}`, data);
  }
  delete(id) {
    return http.delete(`/students/${id}`);
  }
  deleteAll() {
    return http.delete(`/students`);
  }
  findByName(title) {
    return http.get(`/students?name=${title}`);
  }
}
export default new StudentDataService();