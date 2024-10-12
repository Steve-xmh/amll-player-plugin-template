import { ExtensionContext } from "./context";
import { SettingPage } from "./settings";

extensionContext.registerComponent("settings", SettingPage);
extensionContext.registerComponent("context", ExtensionContext);

extensionContext.addEventListener("extension-load", () => {
    console.log("extension loaded");
});

extensionContext.addEventListener("extension-unload", () => {
    console.log("extension unloaded");
});
