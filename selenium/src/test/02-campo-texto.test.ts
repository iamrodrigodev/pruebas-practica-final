import { Builder, By, WebDriver } from "selenium-webdriver";
import { beforeAll, afterAll, describe, it, expect } from "vitest";
import * as fs from "fs";
import * as path from "path";
import { TIEMPOS, TIMEOUTS } from "@/constantes/tiempos";

const URL = "https://testpages.eviltester.com/styled/basic-html-form-test.html";

const esperar = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

const carpeta = path.resolve("screenshots");
if (!fs.existsSync(carpeta)) fs.mkdirSync(carpeta, { recursive: true });

async function capturar(controlador: WebDriver, nombre: string): Promise<void> {
  const imagen = await controlador.takeScreenshot();
  fs.writeFileSync(path.join(carpeta, `${nombre}.png`), imagen, "base64");
}

describe("02 - Campo de texto (username)", () => {
  let controlador: WebDriver;

  beforeAll(async () => {
    controlador = await new Builder().forBrowser("chrome").build();
    await controlador.manage().window().maximize();
    await controlador.get(URL);
    await esperar(TIEMPOS.PAGINA_CARGA);
  }, TIMEOUTS.CONFIGURACION);

  it("acepta texto carácter a carácter y se puede limpiar", async () => {
    const campo = await controlador.findElement(By.name("username"));
    await campo.click();
    await esperar(TIEMPOS.LECTURA_CORTA);
    await capturar(controlador, "02-username-enfocado");

    for (const letra of "usuarioPrueba") {
      await campo.sendKeys(letra);
      await esperar(TIEMPOS.TECLA);
    }
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "02-username-ingresado");

    const valorIngresado = await campo.getAttribute("value");
    expect(valorIngresado).toBe("usuarioPrueba");

    await campo.clear();
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "02-username-limpiado");

    const valorLimpiado = await campo.getAttribute("value");
    expect(valorLimpiado).toBe("");
  }, TIMEOUTS.TEST_LARGO);

  afterAll(async () => {
    await esperar(TIEMPOS.ESPERA_FINAL);
    await controlador.quit();
  });
});
