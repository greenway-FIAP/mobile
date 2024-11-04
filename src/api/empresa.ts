import axios from "axios";


const REALTIME_URL = "https://greenway-61911-default-rtdb.firebaseio.com";

const EMPRESA_TABLE = "empresa";

interface NewEmpresa {
  descricao: string;
  N_funcionarios: number;
  date: string;
  userId: string;
}

interface Empresa{
  id: string;
  descricao: string;
  N_funcionarios: number;
  date: string;
  userId: string;
}

export async function addEmpresa(empresa: NewEmpresa) {
  try {
    console.log(empresa);
    const url = `${REALTIME_URL}/${EMPRESA_TABLE}.json`;
    await axios.post(url, empresa);
  } catch (error: unknown) {
    console.error(error);
    throw error;
  }
}

export async function getEmpresas() {
  const url = `${REALTIME_URL}/${EMPRESA_TABLE}.json`;

  return axios.get(url);
}

export async function getEmpresa(id: string) {
  const url = `${REALTIME_URL}/${EMPRESA_TABLE}/${id}.json`;
  return axios.get(url);
}

export async function updateEmpresa(empresa: Empresa) {
  const { id, ...data } = empresa;

  const url = `${REALTIME_URL}/${EMPRESA_TABLE}/${id}.json`;

  return axios.put(url, data);
}

export async function removeEmpresaFromApi(id: string) {
  try {
    const url = `${REALTIME_URL}/${EMPRESA_TABLE}/${id}.json`;
    await axios.delete(url);
  } catch (error: unknown) {
    console.error(error);
  }
}
