const HIWEB_BSEE_URL = process.env.NEXT_PUBLIC_TASK_API_BASE_URL as string;

import { Api, createAxiosInstance } from "./services/services";

export const hiwebApi = new Api(createAxiosInstance(HIWEB_BSEE_URL));
