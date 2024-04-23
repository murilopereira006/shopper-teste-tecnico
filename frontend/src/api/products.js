import axios from 'axios';

const apiUrl = 'http://localhost:5000/products';

export async function createProduct(data) {
    try {
        const response = await axios.post(`${apiUrl}/`, data);
        return response.data;
    } catch (error) {
        console.error('Erro ao criar item:', error);
        throw error;
    }
}

export async function getProducts() {
    try {
        const response = await axios.get(`${apiUrl}/`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter itens:', error);
        throw error;
    }
}

export async function getProductById(id) {
    try {
        const response = await axios.get(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter item por ID:', error);
        throw error;
    }
}

export async function getProductByCode(code) {
    try {
        const response = await axios.get(`${apiUrl}/products/code/${code}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao obter item por ID:', error);
        throw error;
    }
}

export async function updateProductById(id, data) {
    try {
        const response = await axios.put(`${apiUrl}/${id}`, data);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar item:', error);
        throw error;
    }
}

export async function updateProductByCode(code, data) {
    try {
        const response = await axios.put(`${apiUrl}/code/${code}`, data);
        return response.data;
    } catch (error) {
        console.error('Erro ao atualizar item:', error);
        throw error;
    }
}

export async function deleteProduct(id) {
    try {
        const response = await axios.delete(`${apiUrl}/${id}`);
        return response.data;
    } catch (error) {
        console.error('Erro ao excluir item:', error);
        throw error;
    }
}
