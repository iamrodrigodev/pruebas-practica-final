import { Builder, WebDriver } from "selenium-webdriver";
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

describe("01 - Carga de página", () => {
  let controlador: WebDriver;

  beforeAll(async () => {
    controlador = await new Builder().forBrowser("chrome").build();
    await controlador.manage().window().maximize();
    await controlador.get(URL);
    await esperar(TIEMPOS.PAGINA_CARGA);
  }, TIMEOUTS.CONFIGURACION);

  it("la página carga con el título correcto y la URL esperada", async () => {
    await capturar(controlador, "01-pagina-cargada");
    await esperar(TIEMPOS.LECTURA_CORTA);

    const titulo = await controlador.getTitle();
    expect(titulo).toBe("HTML Form Test Page | Test Pages");

    const urlActual = await controlador.getCurrentUrl();
    expect(urlActual).toContain("form");

    await esperar(TIEMPOS.RESULTADO);
    await capturar(controlador, "01-titulo-verificado");
  }, TIMEOUTS.TEST);

  afterAll(async () => {
    await esperar(TIEMPOS.ESPERA_FINAL);
    await controlador.quit();
  });
});
