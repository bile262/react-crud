import http from "../http-common";

class StudentService {
    getAll() {
        return http.get("/student");
    }
    getById(id){
        return http.get(`/student/${id}`);
    }
    createStudent(data){
        return http.post(`/student`, data);
    }
    deleteStudent(id){
        return http.delete(`/student/${id}`);
    }
    updateStudent(data){
        return http.put(`/student/${data.id}`,data)
    }
};
export default new StudentService();
