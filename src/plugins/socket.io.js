import { io } from "socket.io-client";
import { useRatesStore } from "../stores/rates";
import { useAssetNamesStore } from "../stores/assetNames";

export const socketIoPlugin = {
  install: (app, options) => {
    if (!options.url) {
      throw new Error("Please set VITE_WS_URL");
    }
    const ratesStore = useRatesStore();
    const assetNamesStore = useAssetNamesStore();
    const socket = io(options.url);

    socket.on("rates_updated", function (data) {
      console.log("rates_updated: ", data);
      ratesStore.setRates(data);
    });

    socket.on("updateAssetsList", function (assetNames) {
      console.log("updateAssetsList: ", assetNames);
      assetNamesStore.setAssetNames(assetNames);
    });

    app.provide("socket.io", socket);
  },
};