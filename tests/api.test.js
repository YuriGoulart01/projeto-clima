import { getWeatherByCity } from "../assets/js/api.js";

async function testValidCity() {
  const result = await getWeatherByCity("São Paulo");
  console.assert(result.temperature !== undefined, "Temperatura não retornada");
  console.log("✅ Teste cidade válida passou");
}

async function testInvalidCity() {
  try {
    await getWeatherByCity("CidadeInexistente123");
    console.error("❌ Teste falhou: cidade inválida não gerou erro");
  } catch {
    console.log("✅ Teste cidade inválida passou");
  }
}

testValidCity();
testInvalidCity();
