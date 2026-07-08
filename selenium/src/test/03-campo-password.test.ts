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

describe("03 - Campo password", () => {
  let controlador: WebDriver;

  beforeAll(async () => {
    controlador = await new Builder().forBrowser("chrome").build();
    await controlador.manage().window().maximize();
    await controlador.get(URL);
    await esperar(TIEMPOS.PAGINA_CARGA);
  }, TIMEOUTS.CONFIGURACION);

  it("el tipo es password, enmascara el texto y almacena el valor correctamente", async () => {
    const campo = await controlador.findElement(By.name("password"));
    await campo.click();
    await esperar(TIEMPOS.LECTURA_CORTA);
    await capturar(controlador, "03-password-enfocado");

    const tipo = await campo.getAttribute("type");
    expect(tipo).toBe("password");

    for (const letra of "clave1234") {
      await campo.sendKeys(letra);
      await esperar(TIEMPOS.TECLA);
    }
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "03-password-ingresado");

    const valor = await campo.getAttribute("value");
    expect(valor).toBe("clave1234");

    await esperar(TIEMPOS.RESULTADO);
    await capturar(controlador, "03-password-verificado");
  }, TIMEOUTS.TEST_LARGO);

  afterAll(async () => {
    await esperar(TIEMPOS.ESPERA_FINAL);
    await controlador.quit();
  });
});
