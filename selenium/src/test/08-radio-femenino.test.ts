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

describe("08 - Radio button femenino", () => {
  let controlador: WebDriver;

  beforeAll(async () => {
    controlador = await new Builder().forBrowser("chrome").build();
    await controlador.manage().window().maximize();
    await controlador.get(URL);
    await esperar(TIEMPOS.PAGINA_CARGA);
  }, TIMEOUTS.CONFIGURACION);

  it("al seleccionarse desactiva el radio masculino automáticamente", async () => {
    const radioMasc = await controlador.findElement(By.css("input[name='radioval'][value='rd1']"));
    const radioFem = await controlador.findElement(By.css("input[name='radioval'][value='rd2']"));
    await controlador.executeScript(
      "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
      radioFem
    );
    await esperar(TIEMPOS.SCROLL);

    await radioMasc.click();
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "08-radio-masculino-activo");
    expect(await radioMasc.isSelected()).toBe(true);
    expect(await radioFem.isSelected()).toBe(false);

    await radioFem.click();
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "08-radio-femenino-seleccionado");
    expect(await radioFem.isSelected()).toBe(true);
    expect(await radioMasc.isSelected()).toBe(false);

    await esperar(TIEMPOS.RESULTADO);
    await capturar(controlador, "08-radio-exclusion-verificada");
  }, TIMEOUTS.TEST_LARGO);

  afterAll(async () => {
    await esperar(TIEMPOS.ESPERA_FINAL);
    await controlador.quit();
  });
});
