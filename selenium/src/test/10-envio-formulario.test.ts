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

describe("10 - Envío del formulario", () => {
  let controlador: WebDriver;

  beforeAll(async () => {
    controlador = await new Builder().forBrowser("chrome").build();
    await controlador.manage().window().maximize();
    await controlador.get(URL);
    await esperar(TIEMPOS.PAGINA_CARGA);
  }, TIMEOUTS.CONFIGURACION);

  it("al enviar el formulario cambia de URL y muestra los datos ingresados", async () => {
    const campoUsuario = await controlador.findElement(By.name("username"));
    await campoUsuario.clear();
    for (const letra of "testEnvioFinal") {
      await campoUsuario.sendKeys(letra);
      await esperar(TIEMPOS.TECLA);
    }
    await esperar(TIEMPOS.ACCION_PAUSA);
    await capturar(controlador, "10-formulario-relleno");

    const boton = await controlador.findElement(By.css("input[name='submitbutton'][value='submit']"));
    await controlador.executeScript(
      "arguments[0].scrollIntoView({ behavior: 'smooth', block: 'center' });",
      boton
    );
    await esperar(TIEMPOS.SCROLL);
    await capturar(controlador, "10-boton-visible");

    await boton.click();
    await esperar(TIEMPOS.RESULTADO);
    await capturar(controlador, "10-formulario-enviado");

    const urlFinal = await controlador.getCurrentUrl();
    expect(urlFinal).not.toBe(URL);

    const fuente = await controlador.getPageSource();
    expect(fuente).toContain("testEnvioFinal");

    await esperar(TIEMPOS.LECTURA_LARGA);
    await capturar(controlador, "10-resultados-verificados");
  }, TIMEOUTS.TEST_LARGO);

  afterAll(async () => {
    await esperar(TIEMPOS.ESPERA_FINAL);
    await controlador.quit();
  });
});
