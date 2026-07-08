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

describe("05 - Checkbox 1", () => {
  let controlador: WebDriver;

  beforeAll(async () => {
    controlador = await new Builder().forBrowser("chrome").build();
    await controlador.manage().window().maximize();
    await controlador.get(URL);
    await esperar(TIEMPOS.PAGINA_CARGA);
  }, TIMEOUTS.CONFIGURACION);

  it("puede marcarse y desmarcarse alternando su estado", async () => {
    const cb = await controlador.findElement(By.css("input[name='checkboxes[]'][value='cb1']"));
    await controlador.executeScript(
      "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
      cb
    );
    await esperar(TIEMPOS.SCROLL);

    const estadoInicial = await cb.isSelected();
    await capturar(controlador, "05-checkbox1-estado-inicial");

    await cb.click();
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "05-checkbox1-primer-click");
    expect(await cb.isSelected()).toBe(!estadoInicial);

    await cb.click();
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "05-checkbox1-segundo-click");
    expect(await cb.isSelected()).toBe(estadoInicial);
  }, TIMEOUTS.TEST_LARGO);

  afterAll(async () => {
    await esperar(TIEMPOS.ESPERA_FINAL);
    await controlador.quit();
  });
});
