import { Builder, By, Select, WebDriver } from "selenium-webdriver";
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

describe("09 - Dropdown (select)", () => {
  let controlador: WebDriver;

  beforeAll(async () => {
    controlador = await new Builder().forBrowser("chrome").build();
    await controlador.manage().window().maximize();
    await controlador.get(URL);
    await esperar(TIEMPOS.PAGINA_CARGA);
  }, TIMEOUTS.CONFIGURACION);

  it("permite cambiar la opción seleccionada y refleja el nuevo valor", async () => {
    const elemento = await controlador.findElement(By.name("dropdown"));
    await controlador.executeScript(
      "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
      elemento
    );
    await esperar(TIEMPOS.SCROLL);
    await capturar(controlador, "09-dropdown-estado-inicial");

    const select = new Select(elemento);
    const opciones = await select.getOptions();
    expect(opciones.length).toBeGreaterThan(1);

    await select.selectByIndex(1);
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "09-dropdown-opcion-1");
    const opcion1 = await (await select.getFirstSelectedOption()).getText();
    expect(opcion1.length).toBeGreaterThan(0);

    await select.selectByIndex(2);
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "09-dropdown-opcion-2");
    const opcion2 = await (await select.getFirstSelectedOption()).getText();
    expect(opcion2).not.toBe(opcion1);

    await esperar(TIEMPOS.RESULTADO);
    await capturar(controlador, "09-dropdown-verificado");
  }, TIMEOUTS.TEST_LARGO);

  afterAll(async () => {
    await esperar(TIEMPOS.ESPERA_FINAL);
    await controlador.quit();
  });
});
