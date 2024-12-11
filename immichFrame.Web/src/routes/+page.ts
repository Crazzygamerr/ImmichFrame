import * as api from '$lib/immichFrameApi';
import { configStore } from '$lib/stores/config.store.js'

export const load = async () => {

  const configRequest = await api.getConfig({ clientIdentifier: "" });

  const config = configRequest.data;

  configStore.ps(config);
};
