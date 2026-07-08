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

describe("07 - Radio button masculino", () => {
  let controlador: WebDriver;

  beforeAll(async () => {
    controlador = await new Builder().forBrowser("chrome").build();
    await controlador.manage().window().maximize();
    await controlador.get(URL);
    await esperar(TIEMPOS.PAGINA_CARGA);
  }, TIMEOUTS.CONFIGURACION);

  it("puede seleccionarse y queda marcado como activo", async () => {
    const radioMasc = await controlador.findElement(By.css("input[name='radioval'][value='rd1']"));
    await controlador.executeScript(
      "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
      radioMasc
    );
    await esperar(TIEMPOS.SCROLL);
    await capturar(controlador, "07-radio-masculino-antes");

    await radioMasc.click();
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "07-radio-masculino-seleccionado");

    expect(await radioMasc.isSelected()).toBe(true);

    await esperar(TIEMPOS.RESULTADO);
    await capturar(controlador, "07-radio-masculino-verificado");
  }, TIMEOUTS.TEST_LARGO);

  afterAll(async () => {
    await esperar(TIEMPOS.ESPERA_FINAL);
    await controlador.quit();
  });
});
