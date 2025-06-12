/// <reference types="vite/client" />
interface ImportMetaEnv {
  readonly VITE_APP_NAME: string;
  readonly VITE_DEFAULT_WELCOME_MESSAGE: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
