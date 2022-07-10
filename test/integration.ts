/**
 * Tests TypeScript integration
 * Run `make ts-integration-test`
 */

import Viz from "@aduh95/viz.js";
import vizRenderStringAsync from "@aduh95/viz.js/async";
import vizRenderStringSync from "@aduh95/viz.js/sync";
import getWorker from "@aduh95/viz.js/worker";

// @ts-expect-error
getWorker("");
// @ts-expect-error
getWorker(1);

getWorker();
getWorker({});

// @ts-expect-error
Viz({ workerURL: "string" });

new Viz({ workerURL: "string" });
new Viz({ workerURL: new URL("string") });

// @ts-expect-error
new Viz({ worker: "string" });
// @ts-expect-error
new Viz({ worker: new URL("string") });

const viz = new Viz({ worker: new Worker("string") });

// @ts-expect-error
viz.renderString();

viz.renderString("string");

// @ts-expect-error
viz.renderString("string", "options");

viz.renderString("string", {});

// @ts-expect-error
viz.renderString("string", { format: "unknown" });
// @ts-expect-error
viz.renderString("string", { unknown: "unknown" });

viz.renderString("string", { engine: "dot" });
viz.renderString("string", { format: "dot" });
viz.renderString("string", { nop: 9 });
viz.renderString("string", { yInvert: true });

// @ts-expect-error
viz.renderString("string", { yInvert: 9 });

// @ts-expect-error
viz.renderJSONObject();
// @ts-expect-error
viz.renderJSONObject({});

viz.renderJSONObject("string");
viz.renderJSONObject("string", {});

viz.terminateWorker();

// @ts-expect-error
viz.terminateWorker("argument");

// @ts-expect-error
vizRenderStringAsync();

vizRenderStringAsync("string");
vizRenderStringAsync("string").then(() => {});
// @ts-expect-error
vizRenderStringAsync("string").replace("string", "");
vizRenderStringAsync("string", {});
vizRenderStringAsync("string", { format: "dot" });
// @ts-expect-error
vizRenderStringAsync("string", { format: "unknown" });
// @ts-expect-error
vizRenderStringAsync("string", { unknown: "unknown" });

// @ts-expect-error
vizRenderStringSync();

vizRenderStringSync("string");
// @ts-expect-error
vizRenderStringSync("string").then(() => {});
vizRenderStringSync("string").replace("string", "");
vizRenderStringSync("string", {});
vizRenderStringSync("string", { format: "dot" });
// @ts-expect-error
vizRenderStringSync("string", { format: "unknown" });
// @ts-expect-error
vizRenderStringSync("string", { unknown: "unknown" });
