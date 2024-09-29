import axios from "axios";

// Базовый URL вашего API
const BASE_URL = process.env.REACT_APP_API_KEY || "https://api.example.com";

const ApiService = {
  // GET: Получение данных (например, список или один объект по id)
  async get(resource, params = {}) {
    try {
      const response = await axios.get(`${BASE_URL}/${resource}`, {
        params,
      });
      return response.data;
    } catch (error) {
      console.error(`ApiService GET error: ${error}`);
      throw error;
    }
  },

  // POST: Создание данных
  async post(resource, data) {
    try {
      const response = await axios.post(`${BASE_URL}/${resource}`, data);
      return response.data;
    } catch (error) {
      console.error(`ApiService POST error: ${error}`);
      throw error;
    }
  },

  // PUT: Обновление данных
  async put(resource, id, data) {
    try {
      const response = await axios.put(`${BASE_URL}/${resource}/${id}`, data);
      return response.data;
    } catch (error) {
      console.error(`ApiService PUT error: ${error}`);
      throw error;
    }
  },

  // DELETE: Удаление данных
  async delete(resource, id) {
    try {
      const response = await axios.delete(`${BASE_URL}/${resource}/${id}`);
      return response.data;
    } catch (error) {
      console.error(`ApiService DELETE error: ${error}`);
      throw error;
    }
  },

  // Специальный метод для работы с FinData
  async FinData() {
    try {
      const response = await axios.get(`${BASE_URL}/findata`);
      return response.data;
    } catch (error) {
      console.error(`ApiService FinData error: ${error}`);
      throw error;
    }
  },
};

export default ApiService;
