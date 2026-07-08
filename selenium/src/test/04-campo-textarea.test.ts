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

describe("04 - Textarea de comentarios", () => {
  let controlador: WebDriver;

  beforeAll(async () => {
    controlador = await new Builder().forBrowser("chrome").build();
    await controlador.manage().window().maximize();
    await controlador.get(URL);
    await esperar(TIEMPOS.PAGINA_CARGA);
  }, TIMEOUTS.CONFIGURACION);

  it("acepta texto multilínea, lo almacena y se puede reescribir", async () => {
    const campo = await controlador.findElement(By.name("comments"));
    await controlador.executeScript(
      "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
      campo
    );
    await esperar(TIEMPOS.SCROLL);
    await campo.click();
    await capturar(controlador, "04-textarea-enfocado");

    await campo.sendKeys("Primera línea\nSegunda línea\nTercera línea");
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "04-textarea-multilinea");

    const valor = await campo.getAttribute("value");
    expect(valor).toContain("Primera línea");
    expect(valor).toContain("Segunda línea");
    expect(valor).toContain("Tercera línea");

    await campo.clear();
    await campo.sendKeys("Texto reescrito");
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "04-textarea-reescrito");

    const valorFinal = await campo.getAttribute("value");
    expect(valorFinal).toBe("Texto reescrito");
  }, TIMEOUTS.TEST_LARGO);

  afterAll(async () => {
    await esperar(TIEMPOS.ESPERA_FINAL);
    await controlador.quit();
  });
});
